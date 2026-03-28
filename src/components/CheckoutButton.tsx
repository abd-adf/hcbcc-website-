"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

interface CheckoutButtonProps {
  priceId: string;
  label: string;
  highlight?: boolean;
}

export default function CheckoutButton({ priceId, label, highlight = false }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? `Erreur ${res.status}`);
        return;
      }

      if (!data.url) {
        setError("Aucune URL retournée par Stripe.");
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      setError("Impossible de contacter l'API. Vérifiez la console.");
      console.error("[CheckoutButton]", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleCheckout}
        disabled={loading || !priceId || priceId === "price_REPLACE_ME"}
        className={`w-full py-3.5 font-semibold uppercase tracking-[0.25em] text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed ${
          highlight
            ? "bg-[#111111] text-white hover:bg-[#000000] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "border border-[#2f3a47] text-[#2f3a47] hover:bg-[#2f3a47] hover:text-white"
        }`}
        style={highlight ? {
          backgroundImage: "none",
        } : undefined}
      >
        {loading ? (
          <><Loader2 size={14} className="animate-spin" /> Redirecting...</>
        ) : (
          <>{label} <ArrowRight size={14} /></>
        )}
      </button>

      {error && (
        <p className="text-sm text-red-500 text-center px-2">{error}</p>
      )}
    </div>
  );
}
