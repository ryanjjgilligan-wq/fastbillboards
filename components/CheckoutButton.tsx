"use client";
import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/checkout", { method: "POST" });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Could not create checkout session.");
      }
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-yellow-accent hover:bg-yellow-light text-navy font-bold text-lg py-5 rounded-xl transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-yellow-accent/20"
      >
        {loading ? "Redirecting to checkout..." : "Pay $1,000 — Get Started Now"}
      </button>
      {error && (
        <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
      )}
    </div>
  );
}
