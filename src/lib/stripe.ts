import Stripe from "stripe";

// Stripe instance - will be null during build if env vars aren't set
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-01-28.clover",
      typescript: true,
    })
  : null;

export function getStripe(): Stripe {
  if (!stripe) {
    throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
  }
  return stripe;
}
