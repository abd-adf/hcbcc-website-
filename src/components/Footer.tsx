import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";

function StravaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#222] text-white">
      <div className="absolute right-0 bottom-0 top-[-100%] w-1/2 flex items-center justify-end pointer-events-none overflow-hidden">
        <Image
          src="/images/logo_footer.png"
          alt=""
          width={800}
          height={800}
          className="h-full w-auto object-contain opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <p className="font-heading text-2xl tracking-[0.08em] text-white italic leading-none mb-1">HORS CATÉGORIE</p>
            <p className="text-sm text-white/30 uppercase tracking-[0.4em] mb-6">Brussels Cycling Club</p>
            <div className="flex items-start gap-3 text-white/40 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0 text-white/40" />
              <address className="not-italic leading-relaxed">
                Chaussée de la Hulpe 53<br />
                1180 Uccle, Brussels
              </address>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/25 mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/licence", label: "Your Licence" },
                { href: "/ride-etiquette", label: "Ride Etiquette" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors uppercase tracking-[0.2em]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/25 mb-5">Follow Us</p>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/horscategoriebrussels/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors uppercase tracking-[0.2em]"
              >
                <Instagram size={14} /> Instagram
              </a>
              <a
                href="https://www.strava.com/clubs/horscategoriebrussels"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors uppercase tracking-[0.2em]"
              >
                <StravaIcon size={14} /> Strava Club
              </a>
            </div>
          </div>
        </div>

        <p className="pt-8 text-center text-sm text-white/20 tracking-[0.35em] uppercase">
          © {new Date().getFullYear()} Hors Catégorie Brussels Cycling Club
        </p>
      </div>
    </footer>
  );
}
