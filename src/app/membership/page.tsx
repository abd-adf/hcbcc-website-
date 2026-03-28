import { Check } from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";

const plans = [
  {
    id: "monthly",
    name: "Monthly Membership",
    price: 5,
    period: "month",
    priceId: "price_1TDkIeGXu3buwWTAp7yAlEWH",
    description: "Join HC and pay monthly",
    highlight: false,
    features: [
      "HCBCC membership 2026",
      "Access to all club rides",
      "Strava club access",
      "HC whatsapp community channels",
      "10% discount on the merchandising",
    ],
  },
  {
    id: "yearly",
    name: "Yearly Membership",
    price: 50,
    period: "year",
    priceId: "price_1TDohFGXu3buwWTAqR96U4PC",
    description: "Join HC and pay annually",
    highlight: true,
    features: [
      "HCBCC membership 2026",
      "Access to all club rides",
      "Strava club access",
      "HC whatsapp community channels",
      "15% discount on the merchandising",
    ],
  },
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">

      {/* Header */}
      <div className="bg-[#2f3a47] pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-white/40 text-sm uppercase tracking-[0.5em] mb-4">2026 Season</p>
          <h1 className="font-heading text-7xl sm:text-9xl text-white mb-5 leading-[0.88]">JOIN THE HC PELOTON</h1>
          <p className="text-white/50 text-base max-w-lg leading-relaxed">
            Every membership gives you access to the club. Choose what works for you.
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 -mt-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8e8e5]">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className="relative flex flex-col bg-white p-10 overflow-hidden card-animate"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {plan.highlight && (
                <div className="absolute top-6 right-[-30px] w-36 text-center bg-[#111111] text-white text-[9px] font-bold uppercase tracking-[0.2em] py-1.5 rotate-45 shadow-md">
                  Best Deal
                </div>
              )}

              <div className="mb-8">
                <h2 className="font-heading text-4xl text-[#2f3a47] mb-1">{plan.name}</h2>
                <p className="text-[#a0aab4] text-base tracking-wide">{plan.description}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1.5">
                <span className="font-heading text-7xl text-[#2f3a47] leading-none">€{plan.price}</span>
                <span className="text-[#a0aab4] text-sm uppercase tracking-widest">/ {plan.period}</span>
              </div>

              <ul className="flex-1 space-y-3.5 mb-10 border-t border-[#e8e8e5] pt-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={14} className="text-[#111111] mt-0.5 shrink-0" />
                    <span className="text-base text-[#6b7a8d] leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <CheckoutButton
                priceId={plan.priceId}
                label={`Join ${plan.name.split(" ")[0]}`}
                highlight={plan.highlight}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-[#e8e8e5] pt-8 flex flex-col gap-1.5">
          <p className="text-sm text-[#a0aab4] leading-relaxed">
            All memberships include access to club rides and the HC community. Cancel anytime for the monthly plan.
          </p>
          <p className="text-sm text-[#a0aab4]">
            Kits & jerseys are purchased separately from the{" "}
            <a href="/shop" className="text-[#111111] hover:underline">shop</a>.
          </p>
        </div>
      </div>

    </div>
  );
}
