import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ChevronRight } from "lucide-react";
import FeaturedProducts from "@/components/FeaturedProducts";
import EventsSection from "@/components/EventsSection";

const IMG = {
  hero:      "/images/cc6bc3e4-97b7-452e-99d7-8dff2e04bd65.jpeg",
  wavre:      "/images/21009ef8-71c0-4013-9e1a-564c1853219b.jpeg",
  huldenberg: "/images/21009ef8-71c0-4013-9e1a-564c1853219b.jpeg",
  rosieres:   "/images/3a112ba2-0941-44d0-8eb0-52900f01e86b.jpeg",
  coffee:    "/images/f0cbdc69-1547-4a45-94bd-f46ecafe2b37.jpeg",
  clubhouse: "/images/0ac1429c-01e0-4e10-9fbf-914d157ad04b.jpeg",
  gallery: [
    "/images/5feb8e55-8d91-4d76-acac-223322e13c0d.jpeg",
    "/images/850ea70f-d450-4f8b-8b32-4aeb2f4679d0.jpeg",
    "/images/9e89e5da-4a97-4277-9b8b-08edc90a3af9.jpeg",
    "/images/39190aa2-cd2c-4985-add5-dc128995534a.jpeg",
    "/images/bc91f7b2-aa83-403d-9efb-fa930c1999a8.jpeg",
    "/images/136da972-125f-43ef-bf6d-0cd32f7f2e2a.jpeg",
    "/images/d3fde412-0178-447a-8184-b2e4d80f736f.jpeg",
  ],
};

const tuesdayRides = [
  {
    id: "wavre",
    time: "6:30 PM",
    name: "Tour de Wavre",
    subtitle: "HIT Training",
    distance: "50 km",
    pace: "32–37 km/h",
    description: "Punchy rides, fast peloton. A proper 50 km HIT session through Wavre. Drop your excuses at the door.",
    image: IMG.wavre,
  },
  {
    id: "huldenberg",
    time: "6:30 PM",
    name: "Tour d'Huldenberg",
    subtitle: "HIT Training",
    distance: "50 km",
    pace: "29–32 km/h",
    description: "Punchy climbs and fast transitions through Huldenberg. Hard effort, great scenery, no room for passengers.",
    image: IMG.huldenberg,
  },
  {
    id: "chill",
    time: "6:30 PM",
    name: "Tour du Chill",
    subtitle: "Social Ride",
    tag: "Beginner Friendly",
    distance: "50 km",
    pace: "26–28 km/h",
    description: "No-drop, social pace. Mainly Zone 2 and Zone 3. Everyone welcome. Just show up and have fun with the peloton.",
    image: "/images/22965e34-ba8e-432d-bc98-80b9e7574447.jpeg",
  },
  {
    id: "rosieres",
    time: "6:30 PM",
    name: "Tour de Rosières",
    subtitle: "Women's Ride",
    distance: "~45 km",
    pace: "Punchy",
    description: "Bi-weekly women-focused ride. Punchy climbs, fast transitions, strong community. Open to all levels who love to push.",
    image: IMG.rosieres,
  },
];

const sundayRides = [
  {
    id: "coffee",
    time: "9:00 AM",
    name: "Sunday Coffee Ride",
    subtitle: "Social Ride",
    distance: "80–100 km",
    pace: "Zone 2–3",
    description: "No-drop, social pace. Mainly Zone 2 and Zone 3 with some pushes on the bergs. We regroup uphill.",
    image: IMG.coffee,
  },
];


export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[calc(100vh-4rem)] flex items-end overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 93%, 0 100%)", marginBottom: "-4rem" }}
      >
        <Image
          src={IMG.hero}
          alt="HCBCC group ride through Brussels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        {/* Grain texture for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: 0.04,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28">
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 bg-white">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-black text-sm uppercase tracking-[0.45em] font-bold">Brussels Cycling Club</span>
          </div>
          <h1 className="font-heading text-[clamp(5rem,18vw,14rem)] leading-[0.85] text-white mb-6 overflow-hidden">
            <span className="block overflow-hidden"><span className="word-reveal" style={{ animationDelay: "0ms" }}>HORS</span></span>
            <span className="block overflow-hidden"><span className="word-reveal" style={{ animationDelay: "80ms" }}>CATÉGORIE</span></span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <p className="text-white/85 text-base sm:text-lg max-w-sm leading-relaxed">
              A premium cycling club built on speed, community, and the relentless
              pursuit of excellence — on and off the bike.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#111111] font-semibold uppercase tracking-[0.2em] text-sm hover:bg-white/90 transition-colors"
              >
                Become a Member <ArrowRight size={13} />
              </Link>
              <a
                href="#collection"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white/80 font-semibold uppercase tracking-[0.2em] text-sm hover:border-white/70 hover:text-white transition-colors"
              >
                Explore the Kit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RIDES ────────────────────────────────────────────── */}
      <section className="pt-48 pb-32 bg-[#f7f7f5]">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section header */}
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#e8e8e5] pb-10">
            <div>
              <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-3">Weekly Schedule</p>
              <h2 className="font-heading text-5xl sm:text-7xl text-[#2f3a47]">JOIN US FOR A RIDE</h2>
              <p className="text-[#6b7a8d] mt-3 text-base max-w-sm leading-relaxed">
                Two days, multiple rides. HC is built for confirmed and experienced riders — beginners are welcome on the Tour du Chill only. Curious? Come for a test ride, but check the Strava descriptions first to make sure the pace matches yours.
              </p>
            </div>
            <a
              href="https://www.strava.com/clubs/horscategoriebrussels"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#6b7a8d] hover:text-[#111111] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
              </svg>
              Follow on Strava
            </a>
          </div>

          {/* TUESDAY */}
          <div className="mb-12">
            <div className="flex items-baseline justify-between mb-6 pb-5 border-b border-[#e8e8e5]">
              <div className="flex items-baseline gap-5">
                <h3 className="font-heading text-5xl sm:text-6xl text-[#2f3a47]">TUESDAY</h3>
                <span className="font-heading text-2xl sm:text-3xl text-[#a0aab4]" style={{ textShadow: "none" }}>6:30 PM</span>
              </div>
              <span className="text-sm uppercase tracking-[0.3em] text-[#a0aab4] font-bold">Every week · Spring to Fall</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {tuesdayRides.map((ride) => (
                <div key={ride.id} className="group relative overflow-hidden h-[480px] cursor-pointer">
                  <Image
                    src={ride.image}
                    alt={ride.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent group-hover:from-black/98 transition-all duration-500" />
                  <div className="absolute top-5 left-5">
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-3 py-1.5 text-base uppercase tracking-[0.2em] text-white font-bold bg-black">
                        {ride.subtitle}
                      </span>
                      {"tag" in ride && ride.tag && (
                        <span className="inline-block px-3 py-1.5 text-base uppercase tracking-[0.2em] text-black font-bold bg-white">
                          {ride.tag}
                        </span>
                      )}
                    </div>
                    <h4 className="font-heading text-3xl text-white leading-tight mt-2">{ride.name}</h4>
                  </div>

                  {/* Static bottom: stats always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    {/* Description: hidden, slides up on hover */}
                    <p className="text-white/90 text-sm leading-relaxed mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {ride.description}
                    </p>
                    {/* Data strip: always visible, shifts up with description */}
                    <div className="flex items-center gap-6 pt-4 border-t border-white/20">
                      {[
                        { label: "Distance", value: ride.distance },
                        { label: "Pace",     value: ride.pace },
                      ].map((stat, si) => (
                        <div key={stat.label} className="flex items-center gap-6">
                          {si > 0 && <div className="w-px h-5 bg-white/20" />}
                          <div>
                            <p className="text-[10px] text-white/60 uppercase tracking-[0.3em] mb-1">{stat.label}</p>
                            <p className="text-sm text-white font-semibold font-mono">{stat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUNDAY */}
          <div>
            <div className="flex items-baseline justify-between mb-6 pb-5 border-b border-[#e8e8e5]">
              <div className="flex items-baseline gap-5">
                <h3 className="font-heading text-5xl sm:text-6xl text-[#2f3a47]">SUNDAY</h3>
                <span className="font-heading text-2xl sm:text-3xl text-[#a0aab4]" style={{ textShadow: "none" }}>9:00 AM</span>
              </div>
              <span className="text-sm uppercase tracking-[0.3em] text-[#a0aab4] font-bold">Every week</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {sundayRides.map((ride) => (
                <div key={ride.id} className="group relative overflow-hidden h-[340px]">
                  <Image
                    src={ride.image}
                    alt={ride.name}
                    fill
                    sizes="100vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white font-semibold mb-2">
                      {ride.subtitle}
                    </span>
                    <h4 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-2">{ride.name}</h4>
                    <p className="text-white/80 text-base leading-relaxed mb-5 max-w-md">
                      {ride.description}
                    </p>
                    <div className="flex items-center gap-5 pt-4 border-t border-white/10">
                      {[
                        { label: "Time",     value: ride.time },
                        { label: "Distance", value: ride.distance },
                        { label: "Pace",     value: ride.pace },
                      ].map((stat, si) => (
                        <div key={stat.label} className="flex items-center gap-5">
                          {si > 0 && <div className="w-px h-4 bg-white/10" />}
                          <div>
                            <p className="text-[8px] text-white/60 uppercase tracking-[0.3em] mb-0.5">{stat.label}</p>
                            <p className="text-xs text-white/90 font-medium">{stat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CLUBHOUSE ────────────────────────────────────────── */}
      <section className="py-32 bg-white border-t border-[#e8e8e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">

            {/* Photo — no radius, full bleed */}
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden">
              <Image
                src={IMG.clubhouse}
                alt="Brussels Cyclists Meeting Point"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Text — adjacent panel, no gap */}
            <div className="bg-[#f7f7f5] border border-[#e8e8e5] border-l-0 p-10 sm:p-14 flex flex-col justify-between gap-10">

              <div>
                <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-4">Our base</p>
                <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-[#2f3a47] leading-[0.9] mb-6">
                  THE<br />CLUBHOUSE
                </h2>
                <p className="text-[#6b7a8d] text-base leading-relaxed max-w-sm">
                  All rides depart and return here. Come early, grab a coffee,
                  chat with the crew. More than a meeting point,
                  it&apos;s where the club lives.
                </p>
                <p className="text-[#6b7a8d] text-base leading-relaxed max-w-sm mt-4">
                  French, English, Dutch, Portuguese, Turkish, Italian, Greek — HC is as international as Brussels itself. Wherever you&apos;re from, you&apos;ll find your people here.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-4 pb-8 border-b border-[#e8e8e5]">
                  <div className="w-8 h-8 bg-[#ebebeb] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} className="text-[#111111]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#a0aab4] uppercase tracking-[0.35em] mb-1">Location</p>
                    <address className="not-italic">
                      <span className="block text-sm font-semibold text-[#2f3a47]">Chaussée de la Hulpe 53</span>
                      <span className="block text-sm text-[#6b7a8d]">1180 Uccle, Brussels</span>
                    </address>
                  </div>
                </div>

                <div className="mt-8 border border-[#e8e8e5] h-[200px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.911479807676!2d4.392627876267712!3d50.795749062442084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c54b22635da1%3A0xf3f5d9ce1fa5dd4c!2sHors%20Cat%C3%A9gorie%20Brussels%20Cycling%20Club!5e0!3m2!1sfr!2sbe!4v1774273069657!5m2!1sfr!2sbe"
                    style={{ border: 0, display: "block", width: "100%", height: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HCBCC Clubhouse location"
                  />
                </div>

                <Link
                  href="/membership"
                  className="mt-8 self-start inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#111111] text-white font-semibold uppercase tracking-[0.2em] text-sm hover:bg-[#000000] transition-colors"
                >
                  Join the Club <ArrowRight size={13} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="w-full bg-[#f7f7f5]">
        {/* Row 1 — large mosaic: 1 wide + 2 stacked */}
        <div className="grid grid-cols-[3fr_2fr] h-[56vw] max-h-[680px] gap-[2px]">
          <div className="relative overflow-hidden group/g">
            <Image src={IMG.gallery[0]} alt="HCBCC community" fill sizes="60vw" className="object-cover transition-transform duration-500 ease-out group-hover/g:scale-[1.03] group-hover/g:-rotate-1" />
          </div>
          <div className="grid grid-rows-2 gap-[2px]">
            <div className="relative overflow-hidden group/g">
              <Image src={IMG.gallery[1]} alt="HCBCC community" fill sizes="40vw" className="object-cover transition-transform duration-500 ease-out group-hover/g:scale-[1.03] group-hover/g:rotate-1" />
            </div>
            <div className="relative overflow-hidden group/g">
              <Image src={IMG.gallery[2]} alt="HCBCC community" fill sizes="40vw" className="object-cover transition-transform duration-500 ease-out group-hover/g:scale-[1.03] group-hover/g:-rotate-1" />
            </div>
          </div>
        </div>

        {/* Row 2 — 4 equal strips */}
        <div className="grid grid-cols-4 h-[30vw] max-h-[380px] gap-[2px] mt-[2px]">
          {IMG.gallery.slice(3).map((src, i) => (
            <div key={src} className="relative overflow-hidden group/g">
              <Image
                src={src}
                alt={`HCBCC community ${i + 4}`}
                fill
                sizes="25vw"
                className={`object-cover transition-transform duration-500 ease-out group-hover/g:scale-[1.03] ${i % 2 === 0 ? "group-hover/g:-rotate-1" : "group-hover/g:rotate-1"}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── EVENTS ───────────────────────────────────────────── */}
      <EventsSection />

      {/* ── FEATURED PRODUCTS ────────────────────────────────── */}
      <section id="collection" className="py-32 bg-white border-t border-[#e8e8e5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16 flex items-end justify-between border-b border-[#e8e8e5] pb-10">
            <div>
              <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-3">Corsé Extra by Gobik</p>
              <h2 className="font-heading text-5xl sm:text-7xl text-[#2f3a47]">2026 COLLECTION</h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#6b7a8d] hover:text-[#111111] transition-colors"
            >
              View All <ChevronRight size={12} />
            </Link>
          </div>

          <FeaturedProducts />
        </div>
      </section>

      {/* ── FCWB LICENCE ─────────────────────────────────────── */}
      <section className="py-24 bg-[#f7f7f5] border-t border-[#e8e8e5]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-16">

            <a
              href="https://www.fcwb.be/page3.asp?ClubID=563&LG=FR&PageGroupeID=12"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/fcwb.png"
                alt="FCWB – Fédération Cycliste Wallonie-Bruxelles"
                className="w-24 h-24 object-contain"
              />
            </a>

            <div className="flex-1 border-t border-[#e8e8e5] pt-8 sm:border-t-0 sm:pt-0 sm:border-l sm:border-[#e8e8e5] sm:pl-16">
              <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-4">Important</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-[#2f3a47] mb-4">
                Do you have a cycling licence?
              </h2>
              <p className="text-[#6b7a8d] text-base leading-relaxed mb-7 max-w-lg">
                Hors Catégorie Brussels Cycling Club requires all members to possess a valid licence
                in addition to their club membership in order to participate in our rides. You can
                obtain a <span className="text-[#2f3a47] font-medium">FCWB Velopass licence</span> directly
                from the FCWB website — the card will be issued digitally to you. No more physical cards!
              </p>
              <a
                href="https://www.fcwb.be/page3.asp?ClubID=563&LG=FR&PageGroupeID=12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2f3a47] text-white text-sm font-semibold uppercase tracking-[0.3em] hover:bg-[#1e2830] transition-colors"
              >
                Get your FCWB licence <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CTA ───────────────────────────────────── */}
      <section className="py-36 bg-[#222]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="text-white/40 text-sm uppercase tracking-[0.5em] mb-4">2026 Season</p>
              <h2 className="font-heading text-7xl sm:text-9xl text-white leading-[0.88]">READY<br />TO RIDE?</h2>
            </div>
            <div className="flex flex-col gap-5 shrink-0 max-w-xs">
              <p className="text-white/50 text-base leading-relaxed">
                Membership gives you access to all club rides and the HC community.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#111111] font-semibold uppercase tracking-[0.2em] text-sm hover:bg-white/90 transition-colors"
                >
                  View Memberships <ArrowRight size={13} />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-white/15 text-white/50 font-semibold uppercase tracking-[0.2em] text-sm hover:border-white/40 hover:text-white/80 transition-colors"
                >
                  Shop the Kit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

