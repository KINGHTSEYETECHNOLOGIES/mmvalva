import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Truck, PackageSearch } from "lucide-react";
import Link from "next/link";

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
    image: "/images/home/Diesel Engine Valves.png",
    imageClass: "scale-110",
  },
  {
    title: "Automotive Engine Valves",
    app: "Passenger & light commercial vehicles",
    desc: "High-volume, production-ready solutions optimized for fuel efficiency, low-noise sealing, and high-RPM thermal stability required by modern passenger cabins.",
    features: ["Nitrided finish options", "Induction hardened stems", "Precision concentricity"],
    image: "/images/home/Automotive Engine Valves v2.jpg",
  },
  {
    title: "Inlet Valves",
    app: "Intake airflow and combustion efficiency",
    desc: "Specialized aerodynamic head profiles that manage air-to-fuel ratios effectively, reducing carbon build-up and lowering manifold temps.",
    features: ["High flow coefficient profiles", "Anti-wear treatments", "Lightweight alloy options"],
    image: "/images/Products/Inlet Valves.jpg",
  },
  {
    title: "Exhaust Valves",
    app: "High heat exhaust durability",
    desc: "Engineered from advanced alloys to survive punishing exhaust gases and severe exhaust port velocity, eliminating risks of premature valve burn.",
    features: ["Austenitic steel base", "Sodium-filled variants", "Corrosion resistant coatings"],
    image: "/images/Products/Exhaust Valves.jpg",
  },
  {
    title: "Custom Valve Solutions",
    app: "Application-specific performance needs",
    desc: "Bespoke short-run and prototype valve development built exactly to OEM blueprints or aftermarket performance upgrade specs.",
    features: ["Custom prototyping", "Specialty alloy sourcing", "Performance modification"],
    image: "/images/home/Custom Solutions v2.webp",
  },
];

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-slate-900 pt-24 pb-16 border-b-4 border-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
            <PackageSearch className="w-4 h-4" />
            <span>Our Product Range</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Precision Components Tailored by Application
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Our engineering portfolio spans the full spectrum of internal combustion demands, offering robust material combinations and advanced coatings to solve specific thermal, dimensional, and environmental challenges.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {products.map((product, index) => (
              <article key={product.title} className="flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden transition-all hover:border-slate-400">
                <div className="h-64 bg-white border-b border-slate-200 flex flex-col items-center justify-center overflow-hidden relative p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-contain transition-transform duration-300 ${product.imageClass ?? ""}`}
                  />
                </div>
                
                <div className="flex flex-col flex-1 p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">{product.app}</p>
                  <h2 className="text-2xl font-black uppercase text-slate-900 leading-tight mb-4">{product.title}</h2>
                  <p className="text-base text-slate-600 leading-relaxed mb-8 flex-1">{product.desc}</p>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4">Technical Specifications</p>
                    <ul className="space-y-3">
                      {product.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                          <span className="h-2 w-2 bg-red-700"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 flex">
                    <Link href="/contact" className="w-full inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider px-6 py-4 rounded transition-colors">
                      Request Spec Sheet
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
            
            {/* OEM Callout Box */}
            <article className="flex flex-col justify-center bg-red-700 border border-red-800 rounded-lg p-8 lg:p-12 text-white">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center bg-white text-red-700 rounded">
                <Truck className="h-8 w-8" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black uppercase leading-tight mb-6">
                Enterprise Bulk & Export Orders
              </h2>
              <p className="text-lg leading-relaxed text-red-100 mb-10 max-w-md">
                We manage structured manufacturing planning and logistics for recurring international delivery programs and OEM assembly lines.
              </p>
              <div>
                <Link href="/contact" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-100 text-red-700 font-bold uppercase tracking-wider px-8 py-4 rounded transition-colors group">
                  Consult Commercial Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>
    </main>
  );
}
