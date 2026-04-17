import type { Metadata } from "next";
import { Award, Briefcase, Globe, PenTool, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "About | M.M. Valves",
  description:
    "Learn about M.M. Valves, our journey since 2014, and our precision-driven manufacturing strength.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-slate-900 pt-24 pb-16 border-b-4 border-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Factory className="w-4 h-4" />
            <span>Our Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
            A Precision Engineering Legacy
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            For over a decade, we have grown through consistent process discipline, technical quality, and long-term customer trust in manufacturing robust engine valves.
          </p>
        </div>
      </section>

      {/* CORE INFO */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            <article className="bg-slate-50 p-8 lg:p-12 border border-slate-200 rounded-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded bg-slate-200 text-slate-700">
                <Briefcase className="h-7 w-7" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-black uppercase text-slate-900 mb-6 tracking-wide">Who We Are</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Founded on the principles of mechanical excellence, M.M. Valves is a tier-grade manufacturing partner specializing in diesel, commercial, and automotive engine valves. From heavy-duty agriculture machinery to passenger vehicles, our metallurgical expertise spans the full scope of internal combustion platforms.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We operate not just as a fabricator, but as a strategic engineering partner. Our facilities integrate advanced CAD modeling, custom forging processes, and highly calibrated CNC machining centers to ensure dimensional accuracy down to the tightest tolerances required by modern engine platforms.
              </p>
            </article>

            <article className="bg-slate-50 p-8 lg:p-12 border border-slate-200 rounded-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded bg-red-100 text-red-700">
                <Globe className="h-7 w-7" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-black uppercase text-slate-900 mb-6 tracking-wide">Vision & Mission</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-2 border-b-2 border-red-700 inline-block pb-1">Vision</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    To be recognized globally as the most dependable and technically proficient engine valve manufacturer, setting new benchmarks in hot-cycle durability and frictionless supply chain integration.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-2 border-b-2 border-red-700 inline-block pb-1">Mission</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    To deliver highly durable, thermally stable, and dimensionally flawless valves. We bypass superficial marketing to focus entirely on structured engineering, repeatable precision, and building rigorous commercial flows for international export orders.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 lg:py-28 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-red-700 mb-4">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight">The Architecture of Our Success</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Legacy", desc: "Established in 2014 with continuous technical growth", icon: Award },
              { title: "Engineering", desc: "In-house technical team and CAD design studio", icon: PenTool },
              { title: "Infrastructure", desc: "Automated forging and CNC grinding centers", icon: Briefcase },
              { title: "Global Reach", desc: "Export-ready operations with global logistics", icon: Globe },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col bg-white border border-slate-200 p-8 rounded-lg transition-colors hover:border-slate-800">
                  <Icon className="h-8 w-8 text-slate-800 mb-6" />
                  <h3 className="font-bold text-slate-900 uppercase text-lg tracking-wide mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-1">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
