"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/licence", label: "Your Licence" },
  { href: "/ride-etiquette", label: "Ride Etiquette" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_1px_0_#e3e3e0]"
          : "bg-white/90 backdrop-blur-sm border-b border-[#e3e3e0]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo_hc.png"
            alt="Hors Catégorie Brussels Cycling Club"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-base font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                  active ? "text-[#111111]" : "text-[#2f3a47] hover:text-[#111111]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/membership"
            className="ml-3 px-5 py-2 bg-[#111111] text-white text-base font-semibold uppercase tracking-[0.15em] hover:bg-[#000000] transition-colors duration-200"
          >
            Become a Member
          </Link>
          <button
            onClick={() => setCartOpen(true)}
            className="relative ml-3 p-2 text-[#6b7a8d] hover:text-[#111111] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#111111] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-[#6b7a8d] hover:text-[#111111] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#111111] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button
            className="p-1 text-[#6b7a8d] hover:text-[#111111] transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-[#e3e3e0] px-4 py-5 flex flex-col gap-1">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`py-2.5 text-base uppercase tracking-[0.15em] transition-colors border-b border-[#f0f0ee] last:border-0 ${
                  active ? "text-[#111111]" : "text-[#6b7a8d] hover:text-[#2f3a47]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/membership"
            className="mt-3 py-3 bg-[#111111] text-white text-base font-semibold uppercase tracking-[0.15em] rounded text-center hover:bg-[#000000] transition-colors"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </header>
  );
}
