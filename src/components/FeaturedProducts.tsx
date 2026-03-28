import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SUMUP_SHOP_URL = "https://horscategoriebrussels.cc/page/jerseys";

const featured = [
  {
    id: "jersey-shadow-pink",
    title: "HC Jersey: Pink Fluor",
    price: 89,
    tag: "New",
    image: "/images/Pink_Fluor_front.png",
  },
  {
    id: "jersey-chemical-forest",
    title: "HC Jersey: Chemical Forest",
    price: 89,
    tag: "New",
    image: "/images/Chemical_Forest_front.png",
  },
  {
    id: "jersey-light-thistle",
    title: "HC Jersey: Light Thistle",
    price: 89,
    tag: "New",
    image: "/images/Light_Thistle_Front.png",
  },
];

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e8e8e5]">
      {featured.map((p) => (
        <div key={p.id} className="group bg-white overflow-hidden">
          <div className="aspect-[4/3] bg-[#f7f7f5] relative overflow-hidden">
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-contain group-hover:scale-[1.03] transition-transform duration-600"
            />
            <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#2f3a47] text-white text-sm font-semibold uppercase tracking-[0.2em]">
              {p.tag}
            </span>
          </div>
          <div className="p-6 border-t border-[#e8e8e5]">
            <p className="text-base font-medium text-[#2f3a47] group-hover:text-[#111111] transition-colors mb-0.5">
              {p.title}
            </p>
            <p className="font-heading text-2xl text-[#2f3a47] italic mb-4">€{p.price}</p>
            <a
              href={SUMUP_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f7f7f5] text-sm uppercase tracking-[0.2em] text-[#6b7a8d] hover:bg-[#111111] hover:text-white font-semibold transition-all duration-200"
            >
              <ArrowRight size={13} />
              Shop now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
