import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

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
  title: "Hors Catégorie Brussels Cycling Club",
  description:
    "A premium cycling club based in Brussels. Community rides, quality kits, and FCWB membership.",
  keywords: ["cycling", "Brussels", "HCBCC", "vélo", "Bruxelles", "club cycliste"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f7f7f5] text-[#2f3a47]">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
