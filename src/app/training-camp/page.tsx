import type { Metadata } from "next";
import { ArrowRight, MapPin, Plane, Calendar, Euro } from "lucide-react";

export const metadata: Metadata = {
  title: "HC Training Camp 2027, Algarve | Hors Catégorie Brussels",
  description:
    "HC Training Camp 2027 — 13 to 20 March in Monte Gordo, Algarve. 7 days of sun, roads, and cycling with the club. Trek Émonda rental, Prime Energize Hotel, fly Brussels Airlines to Faro.",
  alternates: { canonical: "https://horscategoriebrussels.cc/training-camp" },
};


const campJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Hors Catégorie Brussels Training Camp 2027 — Algarve",
  startDate: "2027-03-13",
  endDate: "2027-03-20",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Prime Energize Hotel Monte Gordo",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monte Gordo",
      addressRegion: "Algarve",
      addressCountry: "PT",
    },
  },
  organizer: {
    "@type": "SportsClub",
    name: "Hors Catégorie Brussels",
    url: "https://horscategoriebrussels.cc",
  },
  image: "https://horscategoriebrussels.cc/images/camp_seixas_algarve.jpg",
  offers: {
    "@type": "Offer",
    price: "800",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://horscategoriebrussels.cc/training-camp",
  },
};

const stats = [
  { label: "Dates", value: "13 – 20 March", sub: "2027" },
  { label: "Duration", value: "7 Days", sub: "Saturday to Saturday" },
  { label: "Location", value: "Monte Gordo", sub: "Algarve, Portugal" },
  { label: "Price", value: "€800", sub: "Per person" },
];

const logistics = [
  {
    icon: Plane,
    title: "Flight",
    lines: ["Brussels Airlines", "Brussels → Faro (FAO)"],
    notIncluded: true,
  },
  {
    icon: MapPin,
    title: "Hotel",
    lines: ["Prime Energize Hotel", "Monte Gordo, Algarve"],
    notIncluded: false,
  },
  {
    icon: Calendar,
    title: "Dates",
    lines: ["13 March → 20 March", "Depart & return Saturday"],
    notIncluded: false,
  },
  {
    icon: Euro,
    title: "All-in price",
    lines: ["€800 per rider", "Hotel + bike + airport shuttle"],
    notIncluded: false,
  },
];

export default function TrainingCampPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[calc(100vh-4rem)] flex items-end overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 93%, 0 100%)", marginBottom: "-4rem" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/camp_seixas_algarve.jpg"
          alt="Cyclists racing through the Algarve landscape"
          fetchPriority="high"
          decoding="async"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: 0.04,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-28 sm:pb-36">
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 bg-white">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-black text-sm uppercase tracking-[0.45em] font-bold">Training Camp · 2027</span>
          </div>

          <h1 className="font-heading text-[clamp(3rem,10vw,9rem)] leading-[0.88] text-white/85 mb-6">
            <span className="block">HC TRAINING</span>
            <span className="block">CAMP 2027,</span>
            <span className="block text-white/55">ALGARVE</span>
          </h1>
          <p className="text-white/65 text-lg sm:text-xl font-heading italic mb-8 tracking-wide">
            Let&apos;s explore another land of cycling
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <p className="text-white/75 text-base sm:text-lg max-w-sm leading-relaxed">
              Seven days of serious training on Portuguese roads. Built for experienced riders targeting a sportive or a big challenge in 2027.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#111111] font-semibold uppercase tracking-[0.2em] text-sm hover:bg-white/90 transition-colors"
              >
                Register Now <ArrowRight size={13} />
              </a>
              <a
                href="#programme"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white/80 font-semibold uppercase tracking-[0.2em] text-sm hover:border-white/70 hover:text-white transition-colors"
              >
                See Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section id="programme" className="pt-48 pb-20 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e8e8e5]">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-8 py-10">
                <p className="text-xs uppercase tracking-[0.45em] text-[#a0aab4] font-semibold mb-2">{s.label}</p>
                <p className="font-heading text-4xl sm:text-5xl text-[#2f3a47] leading-none">{s.value}</p>
                <p className="text-sm text-[#6b7a8d] mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ──────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-[#e8e8e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-4">What to expect</p>
              <h2 className="font-heading text-5xl sm:text-6xl text-[#2f3a47] leading-[0.9] mb-6">
                THIS IS NOT ONLY<br />A HOLIDAY TRIP
              </h2>
              <p className="text-[#6b7a8d] text-base leading-relaxed mb-4 max-w-md">
                The HC Training Camp is designed for experienced riders who want to build a serious base for the 2027 season — sportives, gran fondos, or any ambitious cycling challenge on your calendar.
              </p>
              <p className="text-[#6b7a8d] text-base leading-relaxed max-w-md">
                Over 7 days, expect long days in the saddle, real efforts, and structured riding. The Algarve delivers the perfect terrain — and hopefully the sun does the rest.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#e8e8e5]">
              <div className="bg-[#f7f7f5] p-8">
                <p className="font-heading text-6xl text-[#111111] leading-none mb-2">~1000</p>
                <p className="text-xs uppercase tracking-[0.4em] text-[#a0aab4] font-semibold">km over 7 days</p>
              </div>
              <div className="bg-[#f7f7f5] p-8">
                <p className="font-heading text-6xl text-[#111111] leading-none mb-2">12k+</p>
                <p className="text-xs uppercase tracking-[0.4em] text-[#a0aab4] font-semibold">metres of climbing</p>
              </div>
<div className="bg-[#111111] p-8 col-span-2">
                <p className="text-white/50 text-xs uppercase tracking-[0.4em] mb-2">A word on preparation</p>
                <p className="text-white text-sm leading-relaxed">A solid winter base is essential. With low mileage in the legs, keeping up with the group and repeating long efforts day after day will be very difficult. Come prepared — regular, consistent training beforehand is what makes the camp enjoyable and worthwhile.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2026 EDITION ─────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-[#e8e8e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="mb-12 flex items-end justify-between border-b border-[#e8e8e5] pb-10">
            <div>
              <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-3">Previous edition</p>
              <h2 className="font-heading text-5xl sm:text-7xl text-[#2f3a47]">2026 EDITION</h2>
            </div>
            <p className="hidden sm:block text-[#a0aab4] text-sm uppercase tracking-[0.3em] font-semibold">Roads · Café stops · Good company</p>
          </div>

          {/* Mosaic grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-[3px]" style={{ height: "clamp(400px, 60vw, 720px)" }}>

            {/* Large left — group shot beach */}
            <div className="relative row-span-2 overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/TC_IMG_2732.jpg"
                alt="HC training camp 2026 group shot"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Top middle — road solo rider */}
            <div className="relative overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/TC_IMG_2671.jpg"
                alt="HC rider on Algarve road"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Top right — café stop coffee */}
            <div className="relative overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/TC_IMG_2690.jpg"
                alt="Café stop coffee and food"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Bottom middle — bar stop riders */}
            <div className="relative overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/TC_IMG_2688.jpg"
                alt="HC riders at a café bar stop"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Bottom right — lunch terrace */}
            <div className="relative overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/TC_IMG_2780.jpg"
                alt="Team lunch on terrace"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

          </div>

          {/* Airport photo — full width caption strip */}
          <div className="relative mt-[3px] overflow-hidden group" style={{ height: "clamp(180px, 22vw, 300px)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/TC_IMG_2647.jpg"
              alt="HC team at the airport departing for training camp"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
              className="transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-12">
              <div>
                <p className="font-heading text-3xl sm:text-5xl text-white leading-none">SAME ENERGY.</p>
                <p className="font-heading text-3xl sm:text-5xl text-white/50 leading-none">NEW DESTINATION.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── INSPIRATION — THE ALGARVE ─────────────────────────── */}
      <section className="py-24 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">

            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[540px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/camp_algarve_landscape.jpg"
                alt="Algarve landscape cycling roads"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Text */}
            <div className="bg-white border border-[#e8e8e5] border-l-0 p-10 sm:p-14 flex flex-col justify-center gap-8">
              <div>
                <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-4">The destination</p>
                <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-[#2f3a47] leading-[0.9] mb-6">
                  ALGARVE,<br />PORTUGAL
                </h2>
                <p className="text-[#6b7a8d] text-base leading-relaxed max-w-sm mb-4">
                  Flat coastal roads, rolling hills, Atlantic headwinds — the Algarve is one of Europe&apos;s finest winter cycling destinations. Mid-March means empty roads, mild temperatures and long rides.
                </p>
                <p className="text-[#6b7a8d] text-base leading-relaxed max-w-sm">
                  These are the same roads where professionals race the <span className="text-[#2f3a47] font-medium">Volta ao Algarve</span>, one of the season&apos;s first major stage races. Now it&apos;s our turn.
                </p>
              </div>

              {/* Volta ao Algarve image teaser */}
              <div className="relative aspect-[16/7] overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/camp_landscape_2.jpg"
                  alt="Volta ao Algarve professional race"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.4em] font-semibold text-white/80">
                  Volta ao Algarve · Same Roads
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOTEL ────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-[#e8e8e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="mb-16 border-b border-[#e8e8e5] pb-10">
            <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-3">Accommodation</p>
            <h2 className="font-heading text-5xl sm:text-7xl text-[#2f3a47]">THE HOTEL</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: hotel info */}
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl text-[#2f3a47] mb-2">Prime Energize Hotel</h3>
              <p className="text-[#a0aab4] text-sm uppercase tracking-[0.4em] mb-6">Monte Gordo, Algarve</p>
              <p className="text-[#6b7a8d] text-base leading-relaxed mb-6 max-w-md">
                A sports-oriented hotel designed for cyclists and endurance athletes. Excellent breakfast, secure bike storage, recovery pool, and a terrace to debrief after the day&apos;s ride.
              </p>
              <p className="text-[#6b7a8d] text-base leading-relaxed max-w-md">
                Located in Monte Gordo, a small beach town on the eastern Algarve coast — quiet, flat for morning spins, and close to the best inland routes.
              </p>
            </div>

            {/* Right: photo grid */}
            <div className="grid grid-cols-2 gap-[3px]">
              <div className="relative aspect-[4/3] overflow-hidden col-span-2 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/camp_hotel_terasse.webp"
                  alt="Prime Energize Hotel terasse"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/camp_twin_room_prime_energize.jpg"
                  alt="Twin room at Prime Energize Hotel"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-white/70 font-semibold">Twin Room</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/camp_hotel_swimming_pool.webp"
                  alt="Prime Energize Hotel swimming pool"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-white/70 font-semibold">Recovery Pool</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BIKE ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f7f5] border-t border-[#e8e8e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">

            {/* Text */}
            <div className="bg-white border border-[#e8e8e5] p-10 sm:p-14 flex flex-col justify-center gap-6 order-2 md:order-1">
              <div>
                <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-4">Rental Bike</p>
                <h2 className="font-heading text-5xl sm:text-6xl text-[#2f3a47] leading-[0.9] mb-6">
                  TREK<br />ÉMONDA SL
                </h2>
                <p className="text-[#6b7a8d] text-base leading-relaxed max-w-sm mb-4">
                  No need to travel with your own bike. The camp includes a Trek Émonda SL rental — a lightweight, responsive road bike that handles everything the Algarve roads can throw at you.
                </p>
                <p className="text-[#6b7a8d] text-base leading-relaxed max-w-sm">
                  Fitting will be arranged on arrival. Bring your own pedals and shoes.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <span className="px-3 py-1.5 bg-[#ebebeb] text-[#2f3a47] text-xs uppercase tracking-[0.3em] font-semibold">Included in price</span>
                <span className="px-3 py-1.5 bg-[#ebebeb] text-[#2f3a47] text-xs uppercase tracking-[0.3em] font-semibold">Road bike</span>
              </div>
            </div>

            {/* Bike image */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px] overflow-hidden order-1 md:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/camp_bike_emonda_sl.jpg"
                alt="Trek Émonda SL rental bike for training camp"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── LOGISTICS ────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-[#e8e8e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="mb-16 border-b border-[#e8e8e5] pb-10">
            <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-3">Getting There</p>
            <h2 className="font-heading text-5xl sm:text-7xl text-[#2f3a47]">LOGISTICS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e8e5]">
            {logistics.map(({ icon: Icon, title, lines, notIncluded }) => (
              <div key={title} className="bg-white p-8">
                <div className="w-10 h-10 bg-[#ebebeb] flex items-center justify-center mb-6">
                  <Icon size={16} className="text-[#111111]" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-xs uppercase tracking-[0.45em] text-[#a0aab4] font-semibold">{title}</p>
                  {notIncluded && (
                    <span className="px-1.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold bg-red-500 text-white leading-none">Not included</span>
                  )}
                </div>
                {lines.map((line, i) => (
                  <p key={i} className={`leading-snug ${i === 0 ? "text-base font-semibold text-[#2f3a47]" : "text-sm text-[#6b7a8d] mt-1"}`}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── REGISTER CTA ─────────────────────────────────────── */}
      <section id="register" className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#222]">

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="flex flex-col items-center text-center gap-8">

            <div>
              <p className="text-white/40 text-sm uppercase tracking-[0.5em] mb-5">13 – 20 March 2027 · Monte Gordo, Algarve</p>
              <h2 className="font-heading text-7xl sm:text-9xl text-white leading-[0.88] mb-4">
                JOIN<br />THE CAMP
              </h2>
              <p className="font-heading text-4xl sm:text-5xl text-white/40 italic">€800 per person</p>
            </div>

            {/* Payment schedule */}
            <div className="w-full max-w-lg">
              <div className="border border-white/15 p-6 mb-3">
                <p className="text-white font-semibold text-base mb-1">Pay in 3 instalments — no stress.</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  We split the cost so it doesn&apos;t hit your wallet all at once. Secure your spot today for €200, and pay the rest over time.
                </p>
              </div>
              <div className="flex gap-px">
                <div className="flex-1 bg-white/5 px-4 py-4 text-center border border-white/15 border-r-0">
                  <p className="text-white font-heading text-3xl">€200</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-1">Now</p>
                </div>
                <div className="flex-1 bg-white/5 px-4 py-4 text-center border border-white/15 border-r-0">
                  <p className="text-white font-heading text-3xl">€300</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-1">September</p>
                </div>
                <div className="flex-1 bg-white/5 px-4 py-4 text-center border border-white/15">
                  <p className="text-white font-heading text-3xl">€300</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-1">January</p>
                </div>
              </div>
            </div>

            {/* Includes chips */}
            <div className="flex flex-wrap justify-center gap-2">
              {["Hotel included", "Bike rental included", "Airport shuttle included", "Flight not included"].map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 text-xs uppercase tracking-[0.25em] font-semibold ${item === "Flight not included" ? "bg-red-500/20 text-red-300 border border-red-500/30" : "bg-white/10 text-white/60 border border-white/10"}`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <a
              href="https://buy.stripe.com/00wfZi8Qs6mn1Wb9Lf0Ba00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#111111] font-semibold uppercase tracking-[0.25em] text-sm hover:bg-white/90 transition-colors"
            >
              Register — €200 deposit <ArrowRight size={15} />
            </a>

            <p className="text-white/25 text-xs leading-relaxed max-w-sm">
              €200 deposit today secures your spot. Balance split in two: €300 in September, €300 in January. Secure payment via Stripe.
            </p>

          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(campJsonLd) }}
      />
    </>
  );
}
