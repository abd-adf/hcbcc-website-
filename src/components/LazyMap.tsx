"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.911479807676!2d4.392627876267712!3d50.795749062442084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c54b22635da1%3A0xf3f5d9ce1fa5dd4c!2sHors%20Cat%C3%A9gorie%20Brussels%20Cycling%20Club!5e0!3m2!1sfr!2sbe!4v1774273069657!5m2!1sfr!2sbe";

export default function LazyMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-8 border border-[#e8e8e5] h-[200px] relative overflow-hidden">
      {loaded ? (
        <iframe
          src={MAP_SRC}
          style={{ border: 0, display: "block", width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HCBCC Clubhouse location"
        />
      ) : (
        <button
          onClick={() => setLoaded(true)}
          className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[#f0f0ee] hover:bg-[#e8e8e5] transition-colors cursor-pointer group"
          aria-label="Load map"
        >
          <MapPin size={24} className="text-[#6b7a8d] group-hover:text-[#2f3a47] transition-colors" />
          <span className="text-xs uppercase tracking-[0.35em] text-[#6b7a8d] group-hover:text-[#2f3a47] transition-colors">
            Chaussée de la Hulpe 53 — Click to load map
          </span>
        </button>
      )}
    </div>
  );
}
