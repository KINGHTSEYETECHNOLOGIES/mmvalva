import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Award, Briefcase, Globe, PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: "About | M.M. Valves",
  description:
    "Learn about M.M. Valves, our journey since 2014, and our precision-driven manufacturing strength.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Our Journey"
      title="A precision engineering legacy"
      intro="For over a decade, we have grown through consistent process discipline, technical quality, and long-term customer trust in manufacturing robust engine valves."
      mode="hero"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <article className="prose prose-slate max-w-none">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-accent">
              <Briefcase className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black uppercase text-steel-strong mb-4 tracking-wide">Who We Are</h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              Founded on the principles of mechanical excellence, M.M. Valves is a tier-grade manufacturing partner specializing in diesel, commercial, and automotive engine valves. From heavy-duty agriculture machinery to passenger vehicles, our metallurgical expertise spans the full scope of internal combustion platforms.
            </p>
            <p className="text-base text-muted leading-relaxed">
              We operate not just as a fabricator, but as a strategic engineering partner. Our facilities integrate advanced CAD modeling, custom forging processes, and highly calibrated CNC machining centers to ensure dimensional accuracy down to the tightest tolerances required by modern engine platforms.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.2}>
          <article className="prose prose-slate max-w-none">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-accent-two">
              <Globe className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black uppercase text-steel-strong mb-4 tracking-wide">Vision & Mission</h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              <strong>Vision:</strong> To be recognized globally as the most dependable and technically proficient engine valve manufacturer, setting new benchmarks in hot-cycle durability and frictionless supply chain integration.
            </p>
            <p className="text-base text-muted leading-relaxed">
              <strong>Mission:</strong> To deliver highly durable, thermally stable, and dimensionally flawless valves. We bypass superficial marketing to focus entirely on structured engineering, repeatable precision, and building rigorous commercial flows for international export orders.
            </p>
          </article>
        </Reveal>
      </div>

      <div className="mt-16 pt-12 border-t border-line">
        <Reveal delay={0.3}>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Capabilities</p>
            <h2 className="text-3xl font-black uppercase text-steel-strong">The Architecture of Our Success</h2>
          </div>
        </Reveal>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Legacy", desc: "Established in 2014 with continuous technical growth", icon: Award },
            { title: "Engineering", desc: "In-house technical team and CAD design studio", icon: PenTool },
            { title: "Infrastructure", desc: "Automated forging and CNC grinding centers", icon: Briefcase },
            { title: "Global Reach", desc: "Export-ready operations with global logistics", icon: Globe },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.1 * i + 0.4}>
                <div className="flex h-full flex-col rounded-2xl border border-line/60 bg-gradient-to-b from-[#f8fbff] to-white p-6 shadow-sm transition-all hover:border-line hover:shadow-md">
                  <Icon className="h-6 w-6 text-accent mb-4" />
                  <h3 className="font-bold text-steel-strong uppercase text-sm tracking-wide mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{item.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </PageShell>
  );
}
