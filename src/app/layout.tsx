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
    "Brussels cycling club for fast rides, fake races, real parties and a strong international community. Rides every Tuesday and Sunday from Drohme Park.",
  metadataBase: new URL("https://horscategoriebrussels.cc"),
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "https://horscategoriebrussels.cc",
    siteName: "Hors Catégorie Brussels",
    title: "Hors Catégorie Brussels | Cycling Club",
    description:
      "Brussels cycling club for fast rides, fake races, real parties and a strong international community. Rides every Tuesday and Sunday from Drohme Park.",
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
      "Brussels cycling club for fast rides, fake races, real parties and a strong international community. Rides every Tuesday and Sunday from Drohme Park.",
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
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
