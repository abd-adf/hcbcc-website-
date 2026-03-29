import { Check, ArrowRight } from "lucide-react";

export default function LicencePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">

      {/* Header */}
      <div className="bg-[#2f3a47] pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-white/40 text-sm uppercase tracking-[0.5em] mb-4">FCWB · Velopass</p>
          <h1 className="font-heading text-7xl sm:text-9xl text-white mb-5 leading-[0.88]">YOUR LICENCE</h1>
          <p className="text-white/50 text-base max-w-lg leading-relaxed">
            Everything you need to know about the mandatory cycling licence for HCBCC members.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 -mt-8 pb-32">

        {/* Q1 */}
        <div className="bg-white p-10 mb-px">
          <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-4">Why is it needed?</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#2f3a47] mb-6">
            What&apos;s this license stuff<br />and why is it needed?
          </h2>
          <p className="text-base text-[#6b7a8d] leading-relaxed max-w-2xl mb-4">
            The License with FCWB (Fédération Cycliste Wallonie Bruxelles) — also called{" "}
            <span className="text-[#2f3a47] font-medium">VELOPASS</span> — is necessary when you join a cycling club.
          </p>
          <p className="text-base text-[#6b7a8d] leading-relaxed max-w-2xl">
            Hors Catégorie Brussels Cycling Club mandates that every member holds a valid license alongside their
            club membership to join our rides. This is because the license protects and insures you in case of
            accidents. The good news is that it will even be valid when you ride your bike outside of our club!
          </p>
        </div>

        {/* Q2 */}
        <div className="bg-white p-10">
          <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-4">Benefits</p>
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="font-heading text-4xl sm:text-5xl text-[#2f3a47]">
              What do I get with this license?
            </h2>
            <span className="font-heading text-3xl text-[#a0aab4]" style={{ textShadow: "none" }}>€30 / year</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8e8e5] mb-8">

            {/* Insurance */}
            <div className="bg-white py-8 pr-8">
              <p className="text-sm uppercase tracking-[0.5em] text-[#111111] mb-5">
                24/7 Insurance Coverage
              </p>
              <ul className="space-y-3.5">
                {[
                  "Personal injury insurance in case of an accident.",
                  "Liability insurance for personal or material damage caused to others during participation in a cycling event or while using the bicycle in private life.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-[#111111] mt-0.5 shrink-0" />
                    <span className="text-base text-[#6b7a8d] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roadside */}
            <div className="bg-white py-8 pl-8">
              <p className="text-sm uppercase tracking-[0.5em] text-[#111111] mb-5">
                Roadside Assistance
              </p>
              <ul className="space-y-3.5">
                {[
                  "Available 24/7 with specially trained personnel.",
                  "Coverage throughout Belgium and up to 50 km beyond its borders.",
                  "All bicycle types covered — including electric bikes.",
                  "Breakdowns, flat tires, accidents, and vandalism.",
                  "Choice of repair location in case of towing.",
                  "\"Return home\" service.",
                  "Maximum 3 interventions per year per person.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-[#111111] mt-0.5 shrink-0" />
                    <span className="text-base text-[#6b7a8d] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-[#e8e8e5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-base text-[#6b7a8d]">
              Roadside contact:{" "}
              <span className="text-[#2f3a47] font-medium">Touring Business Solutions (TBS) — 02/286.34.61</span>
            </p>
            <a
              href="https://www.fcwb.be/page3.asp?ClubID=563&LG=FR&PageGroupeID=12"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#2f3a47] text-white text-sm font-semibold uppercase tracking-[0.3em] hover:bg-[#1e2830] transition-colors"
            >
              Get your FCWB licence <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
