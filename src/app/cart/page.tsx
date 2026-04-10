"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

export default function CartPage() {
  const { getCartItems, updateQuantity, removeFromCart, getCartTotal, items } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cartItems = getCartItems();
  const total = getCartTotal();

  const handleCheckout = async () => {
    if (!stripePromise) {
      setError("Payment system is not configured. Please try again later.");
      return;
    }

    setIsCheckingOut(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      // Redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setIsCheckingOut(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen pt-24">
        <section className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-neutral-800 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h1 className="font-playfair text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-neutral-400 mb-8">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ghostwriterpress"
                className="px-8 py-3 bg-amber-500 text-neutral-950 font-semibold rounded-full hover:bg-amber-400 transition-colors"
              >
                Shop Books
              </Link>
              <Link
                href="/hookwormrecords"
                className="px-8 py-3 border border-neutral-600 text-neutral-100 font-semibold rounded-full hover:border-amber-500 hover:text-amber-500 transition-colors"
              >
                Shop Records
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24">
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-neutral-400">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          {/* Cart Items */}
          <div className="space-y-6 mb-12">
            {cartItems.map(({ productId, quantity, product }) => (
              <div
                key={productId}
                className="flex gap-6 p-6 bg-neutral-900 rounded-lg border border-neutral-800"
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-neutral-800 shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">{product.title}</h3>
                  {product.subtitle && (
                    <p className="text-neutral-400 text-sm truncate">{product.subtitle}</p>
                  )}
                  <p className="text-amber-500 font-semibold mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(productId)}
                    className="text-neutral-500 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(productId, quantity - 1)}
                      className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(productId, quantity + 1)}
                      disabled={quantity >= product.inventory}
                      className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg">Subtotal</span>
              <span className="text-2xl font-bold text-amber-500">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="text-neutral-500 text-sm mb-6">
              Shipping calculated at checkout
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-4 bg-amber-500 text-neutral-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
            </button>

            <div className="mt-6 text-center">
              <Link
                href="/ghostwriterpress"
                className="text-neutral-400 hover:text-amber-500 transition-colors text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
