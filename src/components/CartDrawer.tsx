"use client";

import { useCart } from "@/context/CartContext";
import { X, Trash2, Loader2, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function CartDrawer() {
  const { items, remove, clear, total, count, open, setOpen } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ priceId: i.priceId, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? `Erreur ${res.status}`); return; }
      if (!data.url) { setError("Aucune URL retournée par Stripe."); return; }
      clear();
      window.location.href = data.url;
    } catch {
      setError("Impossible de contacter l'API.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e3e3e0]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-[#111111]" />
            <span className="font-heading text-xl text-[#2f3a47] italic tracking-wide">
              YOUR CART
            </span>
            {count > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-[#111111] text-white text-sm font-semibold rounded-full">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1 text-[#6b7a8d] hover:text-[#2f3a47] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-[#a0aab4]">
              <ShoppingBag size={32} strokeWidth={1.5} />
              <p className="text-base uppercase tracking-widest">Your cart is empty</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.priceId}
                  className="flex items-center gap-4 py-4 border-b border-[#f0f0ee] last:border-0"
                >
                  {/* Image or placeholder */}
                  <div className="w-16 h-16 rounded-lg bg-[#f7f7f5] border border-[#e3e3e0] overflow-hidden shrink-0 flex items-center justify-center">
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    ) : (
                      <span className="font-heading text-xl text-[#c8dfe0] italic">HC</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-[#2f3a47] leading-snug truncate">{item.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {item.size && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#2f3a47] border border-[#e8e8e5] px-1.5 py-0.5">{item.size}</span>
                      )}
                      <p className="text-sm text-[#a0aab4]">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-base text-[#111111] font-semibold mt-0.5">€{item.price * item.quantity}</p>
                  </div>

                  <button
                    onClick={() => remove(item.priceId, item.size)}
                    className="p-1.5 text-[#a0aab4] hover:text-red-400 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#e3e3e0] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6b7a8d] uppercase tracking-widest">Total</span>
              <span className="font-heading text-2xl text-[#2f3a47] italic">€{total}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full py-3.5 bg-[#111111] text-white text-base font-semibold uppercase tracking-[0.15em] rounded-lg hover:bg-[#000000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <><Loader2 size={14} className="animate-spin" /> Redirecting...</>
              ) : (
                "Checkout"
              )}
            </button>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <button
              onClick={clear}
              className="text-sm text-[#a0aab4] hover:text-red-400 transition-colors uppercase tracking-widest text-center"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
