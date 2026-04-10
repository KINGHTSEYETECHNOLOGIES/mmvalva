import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { ArrowRight, Settings2, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | M.M. Valves",
  description:
    "Explore diesel, automotive, inlet, exhaust, and custom engine valve solutions from M.M. Valves.",
};

const products = [
  {
    title: "Diesel Engine Valves",
    app: "Heavy-duty commercial & industrial diesel applications",
    desc: "Built to withstand the enormous thermal loads and extended service cycles demanded by mass-moving transport, agricultural machinery, and heavy industrial machinery.",
    features: ["Bimetallic friction welding", "Stellite armored seats", "Chrome-plated stems"],
  },
  {
    title: "Automotive Engine Valves",
    app: "Passenger & light commercial vehicles",
    desc: "High-volume, production-ready solutions optimized for fuel efficiency, low-noise sealing, and high-RPM thermal stability required by modern passenger cabins.",
    features: ["Nitrided finish options", "Induction hardened stems", "Precision concentricity"],
  },
  {
    title: "Inlet Valves",
    app: "Intake airflow and combustion efficiency",
    desc: "Specialized aerodynamic head profiles that manage air-to-fuel ratios effectively, reducing carbon build-up and lowering manifold temps.",
    features: ["High flow coefficient profiles", "Anti-wear treatments", "Lightweight alloy options"],
  },
  {
    title: "Exhaust Valves",
    app: "High heat exhaust durability",
    desc: "Engineered from advanced alloys to survive punishing exhaust gases and severe exhaust port velocity, eliminating risks of premature valve burn.",
    features: ["Austenitic steel base", "Sodium-filled variants", "Corrosion resistant coatings"],
  },
  {
    title: "Custom Valve Solutions",
    app: "Application-specific performance needs",
    desc: "Bespoke short-run and prototype valve development built exactly to OEM blueprints or aftermarket performance upgrade specs.",
    features: ["Custom prototyping", "Specialty alloy sourcing", "Performance modification"],
  },
];

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Our Product Range"
      title="Precision components tailored by application"
      intro="Our engineering portfolio spans the full spectrum of internal combustion demands, offering robust material combinations and advanced coatings to solve specific thermal, dimensional, and environmental challenges."
      mode="exploded"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {products.map((product, idx) => (
          <Reveal key={product.title} delay={0.1 * idx}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white to-[#fbfdfe] shadow-sm transition-all hover:shadow-lg hover:border-accent/40">
              <div className="relative flex h-52 items-center justify-center border-b border-line bg-[#f8fbff] overflow-hidden">
                {/* Visual placeholder background lattice */}
                <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none opacity-50"></div>
                <div className="relative rounded-2xl border border-dashed border-[#bfd0e2] bg-white px-6 py-4 shadow-sm">
                  <div className="flex flex-col items-center gap-2">
                    <Settings2 className="h-6 w-6 text-accent" />
                    <p className="text-xs uppercase tracking-[0.14em] font-bold text-steel">Placeholder Visual / CAD</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-2">{product.app}</p>
                  <h2 className="text-2xl font-black uppercase text-steel-strong leading-tight mb-4">{product.title}</h2>
                  <p className="text-sm leading-relaxed text-muted mb-6">{product.desc}</p>
                  
                  <div className="space-y-3 pt-6 border-t border-line/60">
                    <p className="text-[0.65rem] font-bold uppercase tracking-widest text-steel-strong/50">Technical specifications</p>
                    <ul className="space-y-2">
                      {product.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-steel">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-4">
                  <button className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-steel transition-colors group-hover:bg-accent group-hover:text-white">
                    Request Spec Sheet
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        
        {/* OEM Callout Box */}
        <Reveal delay={0.6}>
          <article className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-steel-strong to-[#080d14] p-8 text-white shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-accent">
              <Truck className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black uppercase leading-tight mb-4 text-balance">Enterprise Bulk & Export Orders</h2>
            <p className="text-sm leading-relaxed text-white/70 mb-8 max-w-sm">
              We manage structured manufacturing planning and logistics for recurring international delivery programs and OEM assembly lines.
            </p>
            <div>
              <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-steel-strong">
                Consult commercial team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </PageShell>
  );
}
