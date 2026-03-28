"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductLightbox from "@/components/ProductLightbox";

const featured = [
  {
    id: "jersey-shadow-pink",
    title: "HC Jersey: Pink Fluor",
    price: 89,
    tag: "New",
    pricesBySize: null as null, // price IDs per size not yet configured
    priceId: "price_1TDor7GXu3buwWTAEv17ZTHm",
    images: ["/images/Pink_Fluor_front.png"],
  },
  {
    id: "jersey-chemical-forest",
    title: "HC Jersey: Chemical Forest",
    price: 89,
    tag: "New",
    pricesBySize: null as null, // price IDs per size not yet configured
    priceId: "price_1TDokDGXu3buwWTAB8BW3yAC",
    images: [
      "/images/Chemical_Forest_front.png",
      "/images/Chemical_Forest_side.png",
      "/images/Chemical_Forest_side2.png",
      "/images/Chemical_Forest_back.png",
    ],
  },
  {
    id: "jersey-light-thistle",
    title: "HC Jersey: Light Thistle",
    price: 89,
    tag: "New",
    pricesBySize: {
      XS: "price_1TFvhRGXu3buwWTApzulJ9T3",
      S:  "price_1TFvf7GXu3buwWTA34mkal29",
      M:  "price_1TE7waGXu3buwWTASl9UO2R6",
      L:  "price_1TFvfSGXu3buwWTALn2kKiig",
      XL: "price_1TFviAGXu3buwWTACnSFv96Z",
    },
    priceId: "price_1TE7waGXu3buwWTASl9UO2R6",
    images: ["/images/Light_Thistle_Front.png"],
  },
];

const SIZES = ["XS", "S", "M", "L", "XL"];

export default function FeaturedProducts() {
  const { add } = useCart();
  const [lightbox, setLightbox] = useState<{ images: string[]; title: string } | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e8e8e5]">
        {featured.map((p) => {
          const size = selectedSizes[p.id];
          const priceId = (p.pricesBySize && size)
            ? p.pricesBySize[size as keyof typeof p.pricesBySize] ?? p.priceId
            : p.priceId;
          return (
            <div key={p.id} className="group bg-white overflow-hidden">
              <div
                className="aspect-[4/3] bg-[#f7f7f5] relative overflow-hidden cursor-zoom-in"
                onClick={() => setLightbox({ images: p.images, title: p.title })}
              >
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain group-hover:scale-[1.03] transition-transform duration-600"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#2f3a47] text-white text-sm font-semibold uppercase tracking-[0.2em]">
                  {p.tag}
                </span>
                {p.images.length > 1 && (
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/40 text-white text-sm tracking-widest">
                    1 / {p.images.length}
                  </span>
                )}
              </div>
              <div className="p-6 border-t border-[#e8e8e5]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-base font-medium text-[#2f3a47] group-hover:text-[#111111] transition-colors mb-0.5">
                      {p.title}
                    </p>
                    <p className="font-heading text-2xl text-[#2f3a47] italic">€{p.price}</p>
                  </div>
                </div>
                {/* Size selector */}
                <div className="flex gap-1.5 mb-4">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSizes((prev) => ({ ...prev, [p.id]: s }))}
                      className={`w-9 h-9 text-xs font-semibold uppercase border transition-all duration-150 ${
                        size === s
                          ? "bg-[#111111] text-white border-[#111111]"
                          : "bg-white text-[#6b7a8d] border-[#e8e8e5] hover:border-[#2f3a47] hover:text-[#2f3a47]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    if (!size) return;
                    add({ priceId, title: p.title, price: p.price, image: p.images[0], size });
                  }}
                  disabled={!size}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f7f7f5] text-sm uppercase tracking-[0.2em] text-[#6b7a8d] hover:bg-[#111111] hover:text-white font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ShoppingBag size={13} />
                  {size ? "Add to cart" : "Select a size"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {lightbox && (
        <ProductLightbox
          images={lightbox.images}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
