export const dynamic = "force-dynamic";

export function GET() {
  const base = "https://horscategoriebrussels.cc";
  const now = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: base, changefreq: "weekly", priority: "1.0" },
    { loc: `${base}/membership`, changefreq: "monthly", priority: "0.9" },
    { loc: `${base}/licence`, changefreq: "monthly", priority: "0.7" },
    { loc: `${base}/ride-etiquette`, changefreq: "monthly", priority: "0.6" },
    { loc: `${base}/faq`, changefreq: "monthly", priority: "0.7" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
    },
  });
}
