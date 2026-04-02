import type { NextConfig } from "next";

const shopUrl =
  process.env.NEXT_PUBLIC_SHOP_URL ?? "https://shop.horscategoriebrussels.cc";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/page/jerseys",
        destination: shopUrl,
        permanent: true,
      },
      {
        source: "/page/jerseys/",
        destination: shopUrl,
        permanent: true,
      },
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
