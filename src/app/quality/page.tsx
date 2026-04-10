import type { Metadata } from "next";

import { Ruler, Activity, Shield, Server, Repeat, Cog, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality | M.M. Valves",
  description:
    "M.M. Valves quality systems for dimensional checks, surface control, reliability, and process consistency.",
};

const checks = [
  { name: "Dimensional Inspection", icon: Ruler, desc: "Micrometer clearance checks against precise CAD blueprints." },
  { name: "Surface Finish Analysis", icon: Activity, desc: "Profilometer testing to govern roughness average (Ra)." },
  { name: "Strength Validation", icon: Shield, desc: "Tensile breaking strength and stem deflection resistance." },
  { name: "Process Control (SPC)", icon: Server, desc: "Hourly chart monitoring to preempt deviation." },
  { name: "Batch Consistency", icon: Repeat, desc: "Material tracing through assigned lot codes." },
  { name: "Performance Reliability", icon: Cog, desc: "Heat cycling tests for dynamic endurance guarantees." },
];

export default function QualityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-slate-900 pt-24 pb-16 border-b-4 border-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Quality Standards</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Inspection-First Quality Assurance
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Every batch is validated for dimensional accuracy, metallurgical integrity, and surface quality before dispatch. We don’t guess; we measure.
          </p>
        </div>
      </section>

      {/* CHECKS GRID */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {checks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article key={item.name} className="flex flex-col bg-slate-50 border border-slate-200 p-8 rounded-lg transition-colors hover:border-slate-800">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded bg-slate-200 text-slate-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  
                  <div className="mt-8 pt-4 border-t border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-widest text-red-700">Active Protocol</span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 bg-slate-900 rounded-lg p-8 lg:p-12 text-white shadow-xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Traceability</p>
                <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-6">100% Tracking <br/>& Validation</h2>
                <p className="text-lg leading-relaxed text-slate-300">
                  We maintain an unbroken chain of custody from incoming raw material to final heat treatment, ensuring every batch meets explicit structural integrity requirements before leaving our facility.
                </p>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="bg-slate-800 border border-slate-700 p-6 rounded transition-colors hover:border-slate-500">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Material Logs</span>
                  <p className="mt-3 text-xl font-bold text-white uppercase">Full Melt Documentation</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 p-6 rounded transition-colors hover:border-slate-500">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Defect Avoidance</span>
                  <p className="mt-3 text-xl font-bold text-white uppercase">Zero-Tolerance Sorting</p>
                </div>
                <div className="sm:col-span-2 bg-red-900/30 border border-red-800 p-6 rounded">
                  <p className="text-lg leading-relaxed text-red-100 font-medium text-center">
                    &quot;Internal testing reports, dimensional proofs, and metallurgical logs for every production lot are available directly to engineering clients upon delivery.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
