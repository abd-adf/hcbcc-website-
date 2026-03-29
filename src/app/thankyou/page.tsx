import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Welcome to HC — Hors Catégorie Brussels Cycling Club",
};

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">

        {/* Check icon */}
        <div className="w-16 h-16 bg-[#111111] flex items-center justify-center mx-auto mb-10">
          <Check size={28} className="text-white" strokeWidth={2.5} />
        </div>

        {/* Heading */}
        <p className="text-[#a0aab4] text-sm uppercase tracking-[0.5em] mb-4">Payment confirmed</p>
        <h1 className="font-heading text-6xl sm:text-8xl text-[#2f3a47] leading-[0.88] mb-6" style={{ textShadow: "none" }}>
          WELCOME TO<br />THE HC PELOTON
        </h1>

        {/* Message */}
        <p className="text-[#6b7a8d] text-base leading-relaxed max-w-sm mx-auto mb-10">
          You&apos;re officially part of Hors Catégorie Brussels Cycling Club.
          Check your inbox for a confirmation email. We&apos;ll see you on the road.
        </p>

        {/* WhatsApp CTA */}
        <a
          href="https://chat.whatsapp.com/BB0uTITT0vZ9aYH1AZWi7y"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#25D366] hover:bg-[#1ebe5d] transition-colors p-6 mb-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div className="text-left">
                <p className="text-white font-bold text-base uppercase tracking-[0.15em]">Join the HC Community</p>
                <p className="text-white/75 text-sm mt-0.5">WhatsApp group — rides, news, the crew</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-white/80 group-hover:translate-x-1 transition-transform shrink-0" />
          </div>
        </a>

        <div className="w-12 h-px bg-[#e8e8e5] mx-auto mb-10 mt-10" />

        {/* Next steps */}
        <div className="text-left bg-white border border-[#e8e8e5] p-8 mb-10">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a0aab4] mb-6">Next steps</p>
          <ul className="flex flex-col gap-4">
            {[
              { text: "Follow the club on Strava to get ride notifications" },
              { text: "Check the ride schedule and show up on Tuesday or Sunday" },
              { text: "Read the ride etiquette before your first ride", href: "/ride-etiquette" },
              { text: "Don't forget to get your FCWB Velopass licence if you haven't already" },
            ].map((step) => (
              <li key={step.text} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                {step.href ? (
                  <Link href={step.href} className="text-sm text-[#2f3a47] leading-relaxed underline underline-offset-2 hover:text-[#111111] transition-colors">
                    {step.text}
                  </Link>
                ) : (
                  <span className="text-sm text-[#6b7a8d] leading-relaxed">{step.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#111111] text-white font-semibold uppercase tracking-[0.2em] text-sm hover:bg-[#000000] transition-colors"
          >
            Back to Home <ArrowRight size={13} />
          </Link>
          <a
            href="https://www.strava.com/clubs/horscategoriebrussels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-[#e8e8e5] text-[#6b7a8d] font-semibold uppercase tracking-[0.2em] text-sm hover:border-[#2f3a47] hover:text-[#2f3a47] transition-colors"
          >
            Follow on Strava
          </a>
        </div>

      </div>
    </div>
  );
}
