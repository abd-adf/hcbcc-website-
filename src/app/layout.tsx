import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hors Catégorie Brussels | Cycling Club",
    template: "%s | Hors Catégorie Brussels",
  },
  description:
    "Hors Catégorie Brussels also known as HC is a cycling club based in Bruxelles. We do road and gravel. Join +180 members today, ride fast and have fun with us.",
  metadataBase: new URL("https://horscategoriebrussels.cc"),
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "https://horscategoriebrussels.cc",
    siteName: "Hors Catégorie Brussels",
    title: "Hors Catégorie Brussels | Cycling Club",
    description:
      "Hors Catégorie Brussels also known as HC is a cycling club based in Bruxelles. We do road and gravel. Join +180 members today, ride fast and have fun with us.",
    images: [
      {
        url: "/images/horscategorie-brussels-peloton-coffee-ride.webp",
        width: 1200,
        height: 630,
        alt: "Hors Catégorie Brussels cycling club peloton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hors Catégorie Brussels | Cycling Club",
    description:
      "Hors Catégorie Brussels also known as HC is a cycling club based in Bruxelles. We do road and gravel. Join +180 members today, ride fast and have fun with us.",
    images: ["/images/horscategorie-brussels-peloton-coffee-ride.webp"],
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#f7f7f5] text-[#2f3a47]">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SportsClub",
                name: "Hors Catégorie Brussels",
                alternateName: "HC Brussels",
                url: "https://horscategoriebrussels.cc",
                logo: "https://horscategoriebrussels.cc/images/logo_hc.png",
                description:
                  "Cycling club based in Brussels. Fast rides, fake races, real parties and a strong international community. Rides every Tuesday and Sunday from Drohme Park.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Chaussée de la Hulpe 53",
                  addressLocality: "Uccle",
                  postalCode: "1180",
                  addressCountry: "BE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 50.7957,
                  longitude: 4.3926,
                },
                sport: "Cycling",
                areaServed: {
                  "@type": "City",
                  name: "Brussels",
                  sameAs: "https://www.wikidata.org/wiki/Q239",
                },
                sameAs: [
                  "https://www.instagram.com/horscategoriebrussels",
                  "https://www.strava.com/clubs/horscategoriebrussels",
                ],
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "HC Brussels Weekly Rides",
                itemListElement: [
                  {
                    "@type": "EventSeries",
                    name: "Tuesday Group Rides — HC Brussels",
                    description: "Weekly Tuesday rides from Drohme Park, Uccle. Four options ranging from HIT training (32–37 km/h) to a no-drop social ride (26–28 km/h) and a gravel ride through Forêt de Soignes.",
                    url: "https://horscategoriebrussels.cc/#rides",
                    organizer: {
                      "@type": "SportsClub",
                      name: "Hors Catégorie Brussels",
                      url: "https://horscategoriebrussels.cc",
                    },
                    location: {
                      "@type": "Place",
                      name: "Drohme Park — HC Clubhouse",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "Chaussée de la Hulpe 53",
                        addressLocality: "Uccle",
                        postalCode: "1180",
                        addressCountry: "BE",
                      },
                    },
                    eventSchedule: {
                      "@type": "Schedule",
                      byDay: "https://schema.org/Tuesday",
                      startTime: "18:30",
                      repeatFrequency: "P1W",
                    },
                    eventStatus: "https://schema.org/EventScheduled",
                    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                    isAccessibleForFree: false,
                    sport: "Cycling",
                  },
                  {
                    "@type": "EventSeries",
                    name: "Sunday Coffee Ride — HC Brussels",
                    description: "Weekly Sunday no-drop coffee ride from Drohme Park, Uccle. Zone 2–3 pace, all levels welcome.",
                    url: "https://horscategoriebrussels.cc/#rides",
                    organizer: {
                      "@type": "SportsClub",
                      name: "Hors Catégorie Brussels",
                      url: "https://horscategoriebrussels.cc",
                    },
                    location: {
                      "@type": "Place",
                      name: "Drohme Park — HC Clubhouse",
                      address: {
                        "@type": "PostalAddress",
                        streetAddress: "Chaussée de la Hulpe 53",
                        addressLocality: "Uccle",
                        postalCode: "1180",
                        addressCountry: "BE",
                      },
                    },
                    eventSchedule: {
                      "@type": "Schedule",
                      byDay: "https://schema.org/Sunday",
                      startTime: "09:00",
                      repeatFrequency: "P1W",
                    },
                    eventStatus: "https://schema.org/EventScheduled",
                    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                    isAccessibleForFree: false,
                    sport: "Cycling",
                  },
                ],
              }),
            }}
          />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
