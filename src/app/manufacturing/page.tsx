import type { Metadata } from "next";
import Image from "next/image";
import { Hammer, CircleDashed, Drill, Factory, ShieldCheck, Flame, Droplets, Star } from "lucide-react";
import Link from "next/link";

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
    icon: Star,
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
    <main className="flex flex-col min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-slate-900 pt-24 pb-16 border-b-4 border-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Factory className="w-4 h-4" />
            <span>Workflow & Operations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Factory Process Built for Repeatable Precision
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Our process combines heavy-duty forging machinery, micron-level surface controls, and comprehensive technical expertise to deliver defect-free valve quality at enterprise scale.
          </p>
        </div>
      </section>

      {/* MANUFACTURING STEPS */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-14 h-[460px] rounded-xl overflow-hidden border-4 border-slate-200 shadow-xl relative bg-white p-2">
            <Image
              src="/ALL PRODUCTS .jpg"
              alt="All products showcase"
              fill
              loading="eager"
              priority
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <article key={stage.title} className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors hover:border-slate-400">
                  <div className="md:w-48 bg-slate-100 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-200">
                    <Icon className="h-10 w-10 text-slate-400 mb-4" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Step {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  
                  <div className="flex-1 p-8">
                    <h2 className="text-2xl font-black uppercase text-slate-900 leading-tight mb-3">
                      {stage.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ShieldCheck className="h-12 w-12 text-red-700 mx-auto mb-6" />
          <p className="text-sm font-bold uppercase tracking-widest text-red-700 mb-4">Plant & Floor Machinery</p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">Ready to Review the Plant?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Book a technical consultation to review our full machine list, tooling capabilities, and production capacity schedules.
          </p>
          <Link href="/contact" className="inline-flex justify-center items-center bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-wider px-8 py-4 rounded transition-colors">
            Contact Technical Sales
          </Link>
        </div>
      </section>

    </main>
  );
}
