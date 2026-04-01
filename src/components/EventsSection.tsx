"use client";

import Script from "next/script";
import Image from "next/image";

const events = [
  {
    id: "training-camp-2027",
    title: "Training Camp 2027",
    date: "13 – 20 March 2027",
    price: 800,
    priceId: "price_1TE8MOGXu3buwWTAmQccMeDJ",
    image: "/images/horscategorie-brussels-training-camp-2027.webp",
    tag: "7 days",
  },
  {
    id: "santa-cross-2026",
    title: "Santa Cross",
    date: "28 November 2026",
    price: 15,
    priceId: "price_1TE82HGXu3buwWTA5lIW18Ux",
    image: "/images/horscategorie-brussels-santa-cross-event.webp",
    tag: "1 day",
  },
];

const eventsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "Hors Catégorie Brussels Training Camp 2027",
      startDate: "2027-03-13",
      endDate: "2027-03-20",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Training Camp Location",
        address: { "@type": "PostalAddress", addressCountry: "BE" },
      },
      organizer: {
        "@type": "SportsClub",
        name: "Hors Catégorie Brussels",
        url: "https://horscategoriebrussels.cc",
      },
      image: "https://horscategoriebrussels.cc/images/horscategorie-brussels-training-camp-2027.webp",
      offers: {
        "@type": "Offer",
        price: "800",
        priceCurrency: "EUR",
        availability: "https://schema.org/ComingSoon",
        url: "https://horscategoriebrussels.cc/membership",
      },
    },
    {
      "@type": "Event",
      name: "Hors Catégorie Brussels Santa Cross 2026",
      startDate: "2026-11-28",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Drohme Park",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Chaussée de la Hulpe 53",
          addressLocality: "Uccle",
          postalCode: "1180",
          addressCountry: "BE",
        },
      },
      organizer: {
        "@type": "SportsClub",
        name: "Hors Catégorie Brussels",
        url: "https://horscategoriebrussels.cc",
      },
      image: "https://horscategoriebrussels.cc/images/horscategorie-brussels-santa-cross-event.webp",
      offers: {
        "@type": "Offer",
        price: "15",
        priceCurrency: "EUR",
        availability: "https://schema.org/ComingSoon",
        url: "https://horscategoriebrussels.cc/membership",
      },
    },
  ],
};

export default function EventsSection() {
  return (
    <section className="py-32 bg-[#f7f7f5] border-t border-[#e8e8e5]">
      <Script id="events-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }} />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-16 flex items-end justify-between border-b border-[#e8e8e5] pb-10">
          <div>
            <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-3">Calendar</p>
            <h2 className="font-heading text-5xl sm:text-7xl text-[#2f3a47]">HC EVENTS</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8e8e5]">
          {events.map((event) => (
            <div key={event.id} className="group bg-white overflow-hidden">

              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#2f3a47] text-white text-sm font-semibold uppercase tracking-[0.2em]">
                  {event.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-8 border-t border-[#e8e8e5]">
                <p className="text-[#a0aab4] text-sm uppercase tracking-[0.4em] mb-2">{event.date}</p>
                <h3 className="font-heading text-4xl sm:text-5xl text-[#2f3a47] leading-tight mb-6">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="font-heading text-3xl text-[#2f3a47] italic">€{event.price}</p>
                  <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#a0aab4]">Registration opening soon</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
