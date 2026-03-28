import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "jersey-light-thistle",
    title: "HC Jersey: Light Thistle",
    price: 89,
    priceId: "price_1TE7waGXu3buwWTASl9UO2R6",
    category: "Jersey",
    tag: "New",
    description: "Corsé Extra by Gobik. Lightweight race-fit jersey in Light Thistle colorway.",
  },
  {
    id: "jersey-shadow-pink",
    title: "HC Jersey: Shadow Pink Fluor",
    price: 89,
    priceId: "price_1TDor7GXu3buwWTAEv17ZTHm",
    category: "Jersey",
    tag: "New",
    description: "Corsé Extra by Gobik. High-visibility fluor pink with HC branding.",
  },
  {
    id: "jersey-chemical-forest",
    title: "HC Jersey: Chemical Forest",
    price: 89,
    priceId: "price_1TDokDGXu3buwWTAB8BW3yAC",
    category: "Jersey",
    tag: "Limited",
    description: "Corsé Extra by Gobik. Deep forest green with subtle HC detailing.",
  },
  {
    id: "jersey-night-haze",
    title: "HC Jersey: Night Haze",
    price: 99,
    priceId: "price_REPLACE_ME",
    category: "Jersey",
    tag: "New",
    description: "Corsé Extra by Gobik. Moody dark haze, perfect for early morning rides.",
  },
  {
    id: "bib-shorts",
    title: "HC Bib Shorts",
    price: 139,
    priceId: "price_REPLACE_ME",
    category: "Bibs",
    tag: "Essentials",
    description: "Premium chamois, race-cut bibs with HC logo. For long and fast days.",
  },
  {
    id: "tshirt-organic",
    title: "HC Organic T-Shirt",
    price: 25,
    priceId: "price_REPLACE_ME",
    category: "Casual",
    tag: "Lifestyle",
    description: "100% organic cotton. Minimal HC logo. Wear it off the bike.",
  },
];

const categories = ["All", "Jersey", "Bibs", "Casual"];

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

        <div className="flex items-center gap-6 flex-wrap mb-12 border-b border-[#e8e8e5] pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm uppercase tracking-[0.35em] transition-colors pb-0.5 ${
                cat === "All"
                  ? "text-[#111111] border-b border-[#111111]"
                  : "text-[#a0aab4] hover:text-[#2f3a47]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e5]">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
