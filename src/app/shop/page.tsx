import { ArrowRight } from "lucide-react";
import { SHOP_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Hors Catégorie Brussels Cycling Club",
  robots: { index: false, follow: false },
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">

      <div className="bg-[#2f3a47] pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-white/40 text-sm uppercase tracking-[0.5em] mb-4">Corsé Extra by Gobik</p>
          <h1 className="font-heading text-7xl sm:text-9xl text-white mb-5 leading-[0.88]">THE KIT</h1>
          <p className="text-white/50 text-base max-w-sm leading-relaxed">
            Designed for speed. Built for the streets of Brussels and beyond.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 -mt-6 pb-32">
        <div className="bg-white border border-[#e8e8e5] p-12 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-[#a0aab4] mb-3">Buy online · Pick up at the clubhouse</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#2f3a47] mb-4 leading-[0.9]">
              SHOP THE<br />JERSEYS
            </h2>
            <p className="text-[#6b7a8d] text-base leading-relaxed max-w-sm">
              All HC kit is available on our dedicated store. Choose your model, select your size, and pick it up at the clubhouse.
            </p>
          </div>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 bg-[#111111] text-white font-semibold uppercase tracking-[0.2em] text-sm hover:bg-[#000000] transition-colors"
          >
            Go to the shop <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
