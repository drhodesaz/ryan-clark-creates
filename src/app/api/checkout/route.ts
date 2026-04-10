import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/data/products";

interface CartItem {
  productId: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json() as { items: CartItem[] };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    // Validate items and build line items
    const lineItems: {
      price_data: {
        currency: string;
        product_data: {
          name: string;
          description?: string;
          images?: string[];
        };
        unit_amount: number;
      };
      quantity: number;
    }[] = [];

    for (const item of items) {
      const product = getProduct(item.productId);

      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.productId}` },
          { status: 400 }
        );
      }

      if (product.inventory < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient inventory for ${product.title}` },
          { status: 400 }
        );
      }

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            description: product.subtitle || undefined,
          },
          unit_amount: Math.round(product.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      });
    }

    // Create Stripe checkout session
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://ryanclarkcreates.com/checkout/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://ryanclarkcreates.com/cart",
      metadata: {
        items: JSON.stringify(items),
      },
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 500, currency: "usd" },
            display_name: "Standard Shipping (5-10 business days)",
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 1500, currency: "usd" },
            display_name: "Express Shipping (2-3 business days)",
          },
        },
      ],
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to create checkout session", details: message },
      { status: 500 }
    );
  }
}
