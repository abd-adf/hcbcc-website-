import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://horscategoriebrussels.cc";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/membership`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/licence`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ride-etiquette`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
