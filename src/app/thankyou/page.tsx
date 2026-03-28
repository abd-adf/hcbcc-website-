import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Welcome to HC — Hors Catégorie Brussels Cycling Club",
};

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-6">
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

        <div className="w-12 h-px bg-[#e8e8e5] mx-auto mb-10" />

        {/* Next steps */}
        <div className="text-left bg-white border border-[#e8e8e5] p-8 mb-10">
          <p className="text-sm uppercase tracking-[0.4em] text-[#a0aab4] mb-6">Next steps</p>
          <ul className="flex flex-col gap-4">
            {[
              "Join the HC WhatsApp community — link in your confirmation email",
              "Follow the club on Strava to get ride notifications",
              "Check the ride schedule and show up on Tuesday or Sunday",
              "Don't forget to get your FCWB Velopass licence if you haven't already",
            ].map((step) => (
              <li key={step} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                <span className="text-sm text-[#6b7a8d] leading-relaxed">{step}</span>
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
