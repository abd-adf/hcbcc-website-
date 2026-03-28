const bigFive = [
  {
    number: "01",
    title: "Keep Your Line",
    body: "No cutting corners, no swerving, especially in turns and when riding in close quarters. When overtaking, do it clearly and never pull in sharply in front of someone. Use your voice — say \"Right!\" or \"Left!\" to indicate where you're passing.",
  },
  {
    number: "02",
    title: "Modulate Braking",
    body: "No sudden or unnecessary braking. If you need to slow down, signal it with your hand, and if you need to brake urgently, shout \"Stop!\" to alert riders behind you.",
  },
  {
    number: "03",
    title: "Signal Hazards & Communicate Clearly",
    body: "Call out and point to holes, cracks, debris, cars — anything that could be a danger to the group. Use both voice and hand signals, and make sure those signals are echoed through the group so everyone receives the information. Also, call out turns, stops, or mechanicals early and loudly so the whole bunch stays aware and safe.",
  },
  {
    number: "04",
    title: "Respect Traffic and Road Laws",
    body: "Stop at red lights, stay behind waiting cars, yield when needed, and ride no more than two abreast when it's safe. We share the road — and we represent cycling.",
  },
  {
    number: "05",
    title: "Come Prepared",
    body: "Your bike should be well maintained! Bring tools and spares, and know how to handle the basics. Bring water and food — a lot!!! And get the day's GPX on your computer!!!",
  },
];

const coffeeRules = [
  {
    number: "CR 1",
    title: "Keep a Steady Pace",
    body: "Avoid sudden accelerations or slowing down. A smooth, consistent pace keeps the group safe and together. Especially on narrow roads or after corners, accelerate smoothly!",
  },
  {
    number: "CR 2",
    title: "No Half-Wheeling",
    body: "Stay level with your riding partner. Don't ride half a wheel ahead — it breaks rhythm and adds tension to the group.",
  },
  {
    number: "CR 3",
    title: "Look Out for Others",
    body: "Keep an eye on the peloton behind you. We ride as a group — no one gets left behind unless it's agreed.",
  },
];

export default function RideEtiquettePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f5]">

      {/* Header */}
      <div className="bg-[#2f3a47] pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-white/40 text-sm uppercase tracking-[0.5em] mb-4">How we ride</p>
          <h1 className="font-heading text-7xl sm:text-9xl text-white mb-5 leading-[0.88]">RIDE ETIQUETTE</h1>
          <p className="text-white/50 text-base max-w-lg leading-relaxed">
            Safety and respect matter. Riding with Hors Catégorie also means following our Big 5.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 -mt-8 pb-32">

        {/* The Big 5 */}
        <div className="bg-white border border-[#e8e8e5]">
          {bigFive.map((rule, i) => (
            <div
              key={rule.number}
              className={`flex gap-8 items-start p-8 sm:p-10 ${
                i < bigFive.length - 1 ? "border-b border-[#e8e8e5]" : ""
              }`}
            >
              <span className="font-heading text-6xl sm:text-7xl text-[#f0f0ee] leading-none shrink-0 select-none italic w-20 text-right">
                {rule.number}
              </span>
              <div className="pt-1">
                <h2 className="font-heading text-2xl sm:text-3xl text-[#2f3a47] mb-2">{rule.title}</h2>
                <p className="text-[#6b7a8d] text-lg leading-relaxed">{rule.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Coffee Ride Rules */}
        <div className="mt-20">
          <div className="mb-10 border-b border-[#e8e8e5] pb-8">
            <p className="text-[#111111] text-sm uppercase tracking-[0.5em] mb-3">Sunday rides</p>
            <h2 className="font-heading text-5xl sm:text-6xl text-[#2f3a47]">COFFEE RIDE RULES</h2>
          </div>

          <div className="bg-white border border-[#e8e8e5]">
            {coffeeRules.map((rule, i) => (
              <div
                key={rule.number}
                className={`flex gap-8 items-start p-8 sm:p-10 ${
                  i < coffeeRules.length - 1 ? "border-b border-[#e8e8e5]" : ""
                }`}
              >
                <span className="font-heading text-3xl text-[#111111]/15 leading-none shrink-0 select-none italic w-20 text-right whitespace-nowrap">
                  {rule.number}
                </span>
                <div className="pt-1">
                  <h3 className="font-heading text-2xl sm:text-3xl text-[#2f3a47] mb-2">{rule.title}</h3>
                  <p className="text-[#6b7a8d] text-lg leading-relaxed">{rule.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
