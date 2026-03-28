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
    priceId: "price_1TDor7GXu3buwWTAEv17ZTHm",
    images: ["/images/Pink_Fluor_front.png"],
  },
  {
    id: "jersey-chemical-forest",
    title: "HC Jersey: Chemical Forest",
    price: 89,
    tag: "New",
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
    priceId: "price_1TE7waGXu3buwWTASl9UO2R6",
    images: ["/images/Light_Thistle_Front.png"],
  },
];

export default function FeaturedProducts() {
  const { add } = useCart();
  const [lightbox, setLightbox] = useState<{ images: string[]; title: string } | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e8e8e5]">
        {featured.map((p) => (
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
            <div className="p-6 flex items-center justify-between border-t border-[#e8e8e5]">
              <div>
                <p className="text-base font-medium text-[#2f3a47] group-hover:text-[#111111] transition-colors mb-0.5">
                  {p.title}
                </p>
                <p className="font-heading text-2xl text-[#2f3a47] italic">€{p.price}</p>
              </div>
              <button
                onClick={() => add({ priceId: p.priceId, title: p.title, price: p.price, image: p.images[0] })}
                className="flex items-center gap-2 px-4 py-2.5 bg-[#f7f7f5] text-sm uppercase tracking-[0.2em] text-[#6b7a8d] hover:bg-[#111111] hover:text-white font-semibold transition-all duration-200"
              >
                <ShoppingBag size={13} />
                Add to cart
              </button>
            </div>
          </div>
        ))}
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
