import type { NextConfig } from "next";

const shopUrl =
  process.env.NEXT_PUBLIC_SHOP_URL ?? "https://shop.horscategoriebrussels.cc";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy shop pages → shop subdomain
      { source: "/page/jerseys",        destination: shopUrl,                    permanent: true },
      { source: "/page/jerseys/",       destination: shopUrl,                    permanent: true },
      { source: "/products",            destination: `${shopUrl}/products`,      permanent: true },
      { source: "/products/:path*",     destination: `${shopUrl}/products/:path*`, permanent: true },
      { source: "/product/:slug",       destination: `${shopUrl}/product/:slug`, permanent: true },
      { source: "/category/:slug",      destination: `${shopUrl}/category/:slug`, permanent: true },
      { source: "/index.php/product/:slug", destination: `${shopUrl}/product/:slug`, permanent: true },

      // Legacy institutional pages → new site
      { source: "/page/licence",           destination: "/licence",       permanent: true },
      { source: "/page/hc-ride-etiquette", destination: "/ride-etiquette", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://www.google.com https://maps.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
