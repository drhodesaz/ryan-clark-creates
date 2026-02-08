"use client";

import { useState } from "react";

interface SubscribeFormProps {
  variant?: "default" | "compact";
  showHeading?: boolean;
}

export default function SubscribeForm({
  variant = "default",
  showHeading = true,
}: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 bg-amber-500 text-neutral-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-50 text-sm"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </div>
        {message && (
          <p
            className={`text-sm ${
              status === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      {showHeading && (
        <>
          <h3 className="font-playfair text-2xl font-bold mb-2 text-center">
            Stay Updated
          </h3>
          <p className="text-neutral-400 text-center mb-6">
            Be the first to know about new releases, art drops, and events.
          </p>
        </>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 bg-amber-500 text-neutral-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
        {message && (
          <p
            className={`text-sm text-center ${
              status === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
