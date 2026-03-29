"use client";

import Image from "next/image";

export interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  priceId: string;
  image?: string;
  description?: string;
  tag?: string;
  category?: string;
  externalUrl?: string;
}

export default function ProductCard({
  title,
  price,
  image,
  description,
  tag,
  category,
  externalUrl,
}: ProductCardProps) {
  return (
    <article className="group relative bg-white flex flex-col overflow-hidden hover:bg-[#fafaf9] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#111111] before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:z-10">

      {/* Image */}
      <div className="relative aspect-square bg-[#f7f7f5] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-600"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading text-7xl text-[#e8e8e5] group-hover:text-[#d8d8d5] transition-colors select-none italic">
              HC
            </span>
          </div>
        )}
        {tag && (
          <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#2f3a47] text-white text-sm font-semibold uppercase tracking-[0.2em]">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {category && (
          <p className="text-sm text-[#a0aab4] uppercase tracking-[0.4em]">{category}</p>
        )}
        <h3 className="text-base font-medium text-[#2f3a47] group-hover:text-[#111111] transition-colors leading-snug flex-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[#a0aab4] leading-relaxed">{description}</p>
        )}

        <div className="pt-4 border-t border-[#e8e8e5] flex items-center justify-between">
          <span className="font-heading text-2xl text-[#2f3a47] italic">€{price}</span>
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#111111] text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#000000] transition-colors"
            >
              Order
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
