"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function MttPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={close}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-[#111111] overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-black/50 text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative aspect-square w-full">
          <Image
            src="/images/hc-mixed-time-trial.jpeg"
            alt="HC Mixed Time Trial — 04/10"
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
          />
        </div>

        {/* Text + CTA */}
        <div className="p-6 text-center">
          <h3 className="font-heading text-3xl sm:text-4xl text-white leading-tight mb-5">
            HC MIXED TIME TRIAL
          </h3>
          <a
            href="https://shop.horscategoriebrussels.cc/product/team-registration-mtt-04-10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-7 py-3.5 bg-white text-[#111111] font-semibold uppercase tracking-[0.2em] text-sm hover:bg-white/90 transition-colors"
          >
            Get Your Ticket Now
          </a>
        </div>
      </div>
    </div>
  );
}
