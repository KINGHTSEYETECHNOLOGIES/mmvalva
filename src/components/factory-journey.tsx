"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const stages = [
  "Raw Material",
  "Forging",
  "CNC Machining",
  "Heat Treatment",
  "Grinding & Finishing",
  "Inspection",
  "Packaging",
] as const;

export function FactoryJourney() {
  const pathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    gsap.fromTo(
      pathRef.current,
      { backgroundPositionX: "0%" },
      {
        backgroundPositionX: "200%",
        duration: 7,
        repeat: -1,
        ease: "none",
      },
    );
  }, []);

  return (
    <div className="mt-10 overflow-x-auto pb-4">
      <div className="relative min-w-[940px] rounded-2xl metal-card p-6">
        <div
          ref={pathRef}
          className="absolute left-12 right-12 top-[52px] h-[2px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(66,165,255,0.15) 0%, rgba(66,165,255,0.9) 35%, rgba(66,165,255,0.15) 70%)",
            backgroundSize: "200% 100%",
          }}
        />
        <div className="grid grid-cols-7 gap-3">
          {stages.map((stage, index) => (
            <div key={stage} className="relative space-y-3">
              <div className="h-8 w-8 rounded-full border border-accent/70 bg-[#0d1826]" />
              <p className="text-sm font-semibold uppercase tracking-[0.09em] text-steel">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-sm text-steel-strong">{stage}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
