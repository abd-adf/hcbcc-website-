"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductLightboxProps {
  images: string[];
  title: string;
  initialIndex?: number;
  onClose: () => void;
}

export default function ProductLightbox({ images, title, initialIndex = 0, onClose }: ProductLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 bg-white/80 hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X size={18} className="text-[#2f3a47]" />
        </button>

        {/* Main image */}
        <div className="relative aspect-square bg-[#f7f7f5]">
          <Image
            src={images[current]}
            alt={`${title} — view ${current + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
            unoptimized
            priority
          />

          {/* Prev / Next */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="text-[#2f3a47]" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-[#2f3a47]" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-px bg-[#e8e8e5] border-t border-[#e8e8e5]">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative flex-1 aspect-square bg-[#f7f7f5] transition-opacity ${
                  i === current ? "opacity-100 ring-2 ring-inset ring-[#2f3a47]" : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={src}
                  alt={`${title} thumbnail ${i + 1}`}
                  fill
                  sizes="120px"
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
