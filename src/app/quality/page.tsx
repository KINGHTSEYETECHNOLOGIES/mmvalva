import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Ruler, Activity, Shield, Server, Repeat, Cog } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality | M.M. Valves",
  description:
    "M.M. Valves quality systems for dimensional checks, surface control, reliability, and process consistency.",
};

const checks = [
  { name: "Dimensional inspection", icon: Ruler, desc: "Micrometer clearance checks against CAD blueprints." },
  { name: "Surface finish analysis", icon: Activity, desc: "Profilometer testing to govern roughness average (Ra)." },
  { name: "Strength validation", icon: Shield, desc: "Tensile breaking strength and stem deflection resistance." },
  { name: "Process control (SPC)", icon: Server, desc: "Hourly chart monitoring to preempt deviation." },
  { name: "Batch consistency", icon: Repeat, desc: "Material tracing through assigned lot codes." },
  { name: "Performance reliability", icon: Cog, desc: "Heat cycling tests for dynamic endurance guarantees." },
];

export default function QualityPage() {
  return (
    <PageShell
      eyebrow="Quality Standards"
      title="Inspection-first quality assurance"
      intro="Every batch is validated for dimensional accuracy, metallurgical integrity, and surface quality before dispatch. We don’t guess; we measure."
      mode="scan"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {checks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.name} delay={0.1 * idx}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-line/50 bg-[#fbfdfe] p-6 shadow-sm transition hover:border-line hover:shadow-md">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf3f9] text-accent shadow-sm border border-line">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-steel-strong leading-tight mb-2 uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-line/60">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent">Status: Active Protocol</span>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.6}>
        <div className="mt-16 rounded-2xl bg-steel-strong p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 border-[1px] border-white/10 rounded-2xl m-2 pointer-events-none"></div>
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_2fr] items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Traceability</p>
              <h2 className="text-3xl font-black uppercase leading-tight mb-4">100% Tracking <br/>& Validation</h2>
              <p className="text-sm leading-relaxed text-white/70">
                We maintain an unbroken chain of custody from incoming raw material to final heat treatment, ensuring every batch meets explicit structural integrity requirements before leaving our facility.
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <span className="text-xs uppercase tracking-widest text-[#bfd0e2] font-bold">Material Logs</span>
                <p className="mt-2 text-lg font-bold text-white">Full Melt Documentation</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <span className="text-xs uppercase tracking-widest text-[#bfd0e2] font-bold">Defect Avoidance</span>
                <p className="mt-2 text-lg font-bold text-white">Zero-Tolerance Sorting</p>
              </div>
              <div className="rounded-xl border border-accent/40 bg-accent/10 p-5 backdrop-blur-sm sm:col-span-2 group hover:bg-accent/20 transition-all cursor-crosshair">
                <p className="text-sm leading-relaxed text-white text-center italic transition-transform group-hover:scale-[1.02]">
                  "Internal testing reports, dimensional proofs, and metallurgical logs for every production lot are available directly to engineering clients upon delivery."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </PageShell>
  );
}
