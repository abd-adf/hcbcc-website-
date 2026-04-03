import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Hors Catégorie Brussels Cycling Club",
  description:
    "Frequently asked questions about joining HC Brussels: membership, rides, FCWB licence, equipment, and the clubhouse. Everything you need to know before your first ride.",
  alternates: { canonical: "https://horscategoriebrussels.cc/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I join Hors Catégorie Brussels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can join directly online via our membership page. We offer a monthly (€5/month) and a yearly plan (€50/year). After subscribing, you'll receive a confirmation email with access to your billing portal.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be an experienced cyclist to join HC Brussels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of our rides are designed for confirmed and experienced riders. If you're newer to group riding, the Tour de Chill is your entry point — it's a no-drop social ride at 26–28 km/h. We recommend checking the Strava descriptions before your first ride to make sure the pace matches yours.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try a ride before becoming a member?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — you're welcome to join a test ride. Just make sure you check the Strava club page first to understand the pace and distance of the ride you're joining. Always have the day's GPX loaded on your computer before you leave.",
      },
    },
    {
      "@type": "Question",
      name: "How do I cancel or manage my membership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After subscribing, you'll receive a confirmation email containing a link to your personal Stripe billing portal. From there, you can cancel your membership or update your payment method at any time. If you're on a yearly plan, Stripe will send you a reminder before your renewal date. Cancellations take effect at the end of the current billing period.",
      },
    },
    {
      "@type": "Question",
      name: "When and where do HC Brussels rides depart?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All rides depart from our clubhouse at Chaussée de la Hulpe 53, 1180 Uccle. Tuesday rides start at 6:30 PM, Sunday rides at 9:00 AM.",
      },
    },
    {
      "@type": "Question",
      name: "What rides does HC Brussels offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On Tuesdays: Tour de Wavre and Tour d'Huldenberg (HIT training, 32–37 and 29–32 km/h), Tour de Soignes (gravel), Tour de Chill (social, no-drop, all levels), and Tour de Rosières (open to women, trans and non-binary riders). On Sundays: the Sunday Coffee Ride (Zone 2–3, no-drop) and occasional Espresso Ride (race pace, Zone 3–4+).",
      },
    },
    {
      "@type": "Question",
      name: "What does \"no-drop\" mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No-drop means no one gets left behind. The group regroups regularly so everyone finishes together regardless of their level. Our Tour de Chill and Sunday Coffee Ride are no-drop rides.",
      },
    },
    {
      "@type": "Question",
      name: "What pace should I expect on HC rides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pace varies by ride: from 26–28 km/h on the Tour de Chill up to 32–37 km/h on the Tour de Wavre. The Espresso Ride operates at near-race pace (Zone 3–4+). Check the Strava page for the specific ride you're considering.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a cycling licence to ride with HC Brussels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All HC members must hold a valid FCWB Velopass licence in addition to their club membership. The licence provides personal injury insurance and liability coverage, and is valid beyond club rides — including when you ride solo.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get the FCWB Velopass licence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get it directly on the FCWB website. It costs €30/year and is issued digitally — no physical card needed.",
      },
    },
    {
      "@type": "Question",
      name: "What does the FCWB licence cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The licence includes personal injury insurance in case of accident, liability insurance for damage caused to others, and 24/7 roadside assistance throughout Belgium and up to 50 km beyond its borders — covering breakdowns, flat tires, accidents, and vandalism, with up to 3 interventions per year.",
      },
    },
    {
      "@type": "Question",
      name: "What equipment do I need to ride with HC Brussels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your bike must be in good working condition. Before every ride: check your tires for wear and debris, inflate to the right pressure, make sure your chain is lubed and your brakes are working properly. Bring tools, spares, water, and food. Always load the day's GPX on your computer before you leave.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a road bike to join?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Tuesday and Sunday road rides, yes — a road or gravel bike in good condition is required. The Tour de Soignes is specifically a gravel ride and requires an appropriate gravel or cyclocross bike.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the HC Brussels clubhouse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our clubhouse is located at Chaussée de la Hulpe 53, 1180 Uccle, Brussels — at the edge of Drohme Park.",
      },
    },
    {
      "@type": "Question",
      name: "Can I leave my belongings at the clubhouse during rides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can drop a bag at the clubhouse before the ride. Come a few minutes early, grab a coffee, and meet the crew before departure.",
      },
    },
    {
      "@type": "Question",
      name: "Is HC Brussels an international club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very much so. HC is one of Brussels' most international cycling clubs, with members from across Europe and beyond. French, English, Dutch, Portuguese, Italian, Turkish, Greek, Belgian of course — you'll find your people here.",
      },
    },
  ],
};

const sections = [
  {
    label: "Membership & Joining",
    slug: "membership",
    items: [
      {
        q: "How do I join Hors Catégorie Brussels?",
        a: "You can join directly online via our membership page. We offer a monthly (€5/month) and a yearly plan (€50/year). After subscribing, you'll receive a confirmation email with access to your billing portal.",
      },
      {
        q: "Do I need to be an experienced cyclist to join HC Brussels?",
        a: "Most of our rides are designed for confirmed and experienced riders. If you're newer to group riding, the Tour de Chill is your entry point — it's a no-drop social ride at 26–28 km/h. We recommend checking the Strava descriptions before your first ride to make sure the pace matches yours.",
      },
      {
        q: "Can I try a ride before becoming a member?",
        a: "Yes — you're welcome to join a test ride. Just make sure you check the Strava club page first to understand the pace and distance of the ride you're joining. Always have the day's GPX loaded on your computer before you leave.",
      },
      {
        q: "How do I cancel or manage my membership?",
        a: "After subscribing, you'll receive a confirmation email containing a link to your personal Stripe billing portal. From there, you can cancel your membership or update your payment method at any time. If you're on a yearly plan, Stripe will send you a reminder before your renewal date. Cancellations take effect at the end of the current billing period.",
      },
    ],
  },
  {
    label: "Rides",
    slug: "rides",
    items: [
      {
        q: "When and where do HC Brussels rides depart?",
        a: "All rides depart from our clubhouse at Chaussée de la Hulpe 53, 1180 Uccle. Tuesday rides start at 6:30 PM, Sunday rides at 9:00 AM.",
      },
      {
        q: "What rides does HC Brussels offer?",
        a: "On Tuesdays: Tour de Wavre and Tour d'Huldenberg (HIT training, 32–37 and 29–32 km/h), Tour de Soignes (gravel), Tour de Chill (social, no-drop, all levels), and Tour de Rosières (open to women, trans and non-binary riders). On Sundays: the Sunday Coffee Ride (Zone 2–3, no-drop) and occasional Espresso Ride (race pace, Zone 3–4+).",
      },
      {
        q: "What does \"no-drop\" mean?",
        a: "No-drop means no one gets left behind. The group regroups regularly so everyone finishes together regardless of their level. Our Tour de Chill and Sunday Coffee Ride are no-drop rides.",
      },
      {
        q: "What pace should I expect on HC rides?",
        a: "Pace varies by ride: from 26–28 km/h on the Tour de Chill up to 32–37 km/h on the Tour de Wavre. The Espresso Ride operates at near-race pace (Zone 3–4+). Check the Strava page for the specific ride you're considering.",
      },
    ],
  },
  {
    label: "FCWB Licence",
    slug: "licence",
    items: [
      {
        q: "Do I need a cycling licence to ride with HC Brussels?",
        a: "Yes. All HC members must hold a valid FCWB Velopass licence in addition to their club membership. The licence provides personal injury insurance and liability coverage, and is valid beyond club rides — including when you ride solo.",
      },
      {
        q: "How do I get the FCWB Velopass licence?",
        a: "You can get it directly on the FCWB website. It costs €30/year and is issued digitally — no physical card needed.",
      },
      {
        q: "What does the FCWB licence cover?",
        a: "The licence includes personal injury insurance in case of accident, liability insurance for damage caused to others, and 24/7 roadside assistance throughout Belgium and up to 50 km beyond its borders — covering breakdowns, flat tires, accidents, and vandalism, with up to 3 interventions per year.",
      },
    ],
  },
  {
    label: "Equipment",
    slug: "equipment",
    items: [
      {
        q: "What equipment do I need to ride with HC Brussels?",
        a: "Your bike must be in good working condition. Before every ride: check your tires for wear and debris, inflate to the right pressure, make sure your chain is lubed and your brakes are working properly. Bring tools, spares, water, and food. Always load the day's GPX on your computer before you leave.",
      },
      {
        q: "Do I need a road bike to join?",
        a: "For Tuesday and Sunday road rides, yes — a road or gravel bike in good condition is required. The Tour de Soignes is specifically a gravel ride and requires an appropriate gravel or cyclocross bike.",
      },
    ],
  },
  {
    label: "Clubhouse & Location",
    slug: "clubhouse",
    items: [
      {
        q: "Where is the HC Brussels clubhouse?",
        a: "Our clubhouse is located at Chaussée de la Hulpe 53, 1180 Uccle, Brussels — at the edge of Drohme Park.",
      },
      {
        q: "Can I leave my belongings at the clubhouse during rides?",
        a: "Yes, you can drop a bag at the clubhouse before the ride. Come a few minutes early, grab a coffee, and meet the crew before departure.",
      },
      {
        q: "Is HC Brussels an international club?",
        a: "Very much so. HC is one of Brussels' most international cycling clubs, with members from across Europe and beyond. French, English, Dutch, Portuguese, Italian, Turkish, Greek, Belgian of course — you'll find your people here.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#f7f7f5]">

        {/* Header */}
        <div className="bg-[#2f3a47] pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <p className="text-white/40 text-sm uppercase tracking-[0.5em] mb-4">Everything you need to know</p>
            <h1 className="font-heading text-7xl sm:text-9xl text-white mb-5 leading-[0.88]">FAQ</h1>
            <p className="text-white/50 text-base max-w-lg leading-relaxed">
              Questions about joining, rides, the licence, and the clubhouse — answered.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 -mt-8 pb-32 space-y-8">
          {sections.map((section) => (
            <div key={section.slug} className="bg-white border border-[#e8e8e5]">
              <div className="px-8 sm:px-10 py-6 border-b border-[#e8e8e5]">
                <h2 className="font-heading text-4xl sm:text-5xl text-[#2f3a47]">{section.label.toUpperCase()}</h2>
              </div>
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className={`p-8 sm:p-10 ${i < section.items.length - 1 ? "border-b border-[#e8e8e5]" : ""}`}
                >
                  <h3 className="font-heading text-2xl sm:text-3xl text-[#2f3a47] mb-3 leading-tight">{item.q}</h3>
                  <p className="text-[#6b7a8d] text-base leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
