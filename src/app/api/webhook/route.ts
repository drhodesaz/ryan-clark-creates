import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { promises as fs } from "fs";
import path from "path";
import Stripe from "stripe";

// Disable body parsing for webhooks
export const runtime = "nodejs";

async function updateInventory(items: { productId: string; quantity: number }[]) {
  // Read current products
  const productsPath = path.join(process.cwd(), "src/data/products.ts");
  let content = await fs.readFile(productsPath, "utf-8");

  // Update inventory for each item
  for (const item of items) {
    // Find the product in the file and update inventory
    // This is a simple approach - in production you'd use a database
    const inventoryRegex = new RegExp(
      `(id: "${item.productId}"[\\s\\S]*?inventory: )(\\d+)`,
      "m"
    );

    const match = content.match(inventoryRegex);
    if (match) {
      const currentInventory = parseInt(match[2], 10);
      const newInventory = Math.max(0, currentInventory - item.quantity);
      content = content.replace(inventoryRegex, `$1${newInventory}`);
    }
  }

  // Write updated content back
  await fs.writeFile(productsPath, content, "utf-8");
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      // Get items from metadata
      const itemsJson = session.metadata?.items;
      if (itemsJson) {
        try {
          const items = JSON.parse(itemsJson) as { productId: string; quantity: number }[];
          await updateInventory(items);
          console.log("Inventory updated for session:", session.id);
        } catch (err) {
          console.error("Failed to update inventory:", err);
        }
      }
      break;
    }

    case "payment_intent.succeeded": {
      console.log("Payment succeeded:", event.data.object.id);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
