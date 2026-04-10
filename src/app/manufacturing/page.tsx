import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Hammer, CircleDashed, Flame, Sparkles, Drill, Factory, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing | M.M. Valves",
  description:
    "Understand M.M. Valves controlled manufacturing workflow from raw material to final packing.",
};

const stages = [
  {
    title: "Metallurgy & Stock",
    desc: "Rigorous ultrasonic testing of incoming bar stock. Only zero-defect austenitic and martensitic round bars pass quarantine.",
    icon: Drill,
  },
  {
    title: "Upset Forging",
    desc: "Controlled electrical resistance heating and automated friction-welding create a molecularly perfect bimetallic valve blank.",
    icon: Hammer,
  },
  {
    title: "CNC & Turning",
    desc: "Heavy roughing and profiling on high-rigidity CNC lathes ensure perfect initial head contouring and stem parallelism.",
    icon: CircleDashed,
  },
  {
    title: "Heat Treatment",
    desc: "Induction hardening of the seat and stem tip delivers precise Rockwell hardness (HRC) to endure extreme friction cycles.",
    icon: Flame,
  },
  {
    title: "Centerless Grinding",
    desc: "Micron-level plunge grinding guarantees exceptional surface finish, diametrical precision, and elimination of runout.",
    icon: Sparkles,
  },
  {
    title: "Surface Plating",
    desc: "Liquid nitriding or dense chrome-plating reduces abrasive stem wear and vastly improves scuffing resistance against the valve guide.",
    icon: Droplets,
  },
  {
    title: "Final QC & Packing",
    desc: "VCI paper wrapping and automated blister packing for rust-proof export shipping and immediate shelf-readiness.",
    icon: Factory,
  },
];

export default function ManufacturingPage() {
  return (
    <PageShell
      eyebrow="Workflow & Operations"
      title="Factory process built for repeatable precision"
      intro="Our process combines heavy-duty forging machinery, micron-level surface controls, and comprehensive technical expertise to deliver defect-free valve quality at enterprise scale."
      mode="scan"
    >
      <div className="relative">
        {/* Background connector line for desktop */}
        <div className="absolute left-[39px] top-12 bottom-12 w-0.5 bg-line hidden md:block"></div>

        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <Reveal key={stage.title} delay={0.15 * (i % 3)}>
                <article className="group flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                  
                  {/* Left: Step Number & Icon */}
                  <div className="flex items-center gap-6 shrink-0 relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white border border-line shadow-sm z-10 relative overflow-hidden group-hover:border-accent/40 transition-colors">
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                      <Icon className="h-8 w-8 text-accent-two transition-transform group-hover:scale-110 duration-300" />
                    </div>
                    <div className="hidden md:block">
                      <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-accent mb-1">Phase</p>
                      <p className="text-4xl font-black text-steel-strong/10">{String(i + 1).padStart(2, "0")}</p>
                    </div>
                  </div>
                  
                  {/* Right: Content Card */}
                  <div className="flex-1 rounded-2xl border border-line/60 bg-gradient-to-br from-[#fbfdfe] to-[#f4f8fc] p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md hover:border-line">
                    <div className="flex items-center justify-between mb-4 md:hidden">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Step {String(i + 1).padStart(2, "0")}</p>
                    </div>
                    <h2 className="text-2xl font-black uppercase text-steel-strong leading-tight mb-3">
                      {stage.title}
                    </h2>
                    <p className="text-base text-muted leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                  
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      
      <div className="mt-20 pt-12 border-t border-line text-center">
        <Reveal delay={0.4}>
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Plant & Floor Machinery</p>
          <h2 className="text-3xl font-black text-steel-strong uppercase">Ready to Review the Plant?</h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Book a technical consultation to review our full machine list, tooling capabilities, and production capacity schedules.
          </p>
          <a href="/contact" className="mt-8 inline-flex rounded-xl bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-accent/90 transition-colors">
            Contact Technical Sales
          </a>
        </Reveal>
      </div>
    </PageShell>
  );
}
