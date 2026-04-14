import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, Package, Ship, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Export | M.M. Valves",
  description:
    "AJ1 export portfolio by M.M. Valves featuring engine valves and allied components for global buyers.",
};

const exportProducts = [
  {
    title: "Engine Valves",
    copy: "Engine valves control intake airflow and exhaust gas release. High-quality valves support smoother breathing, stable performance, and long service life.",
  },
  {
    title: "Valve Guides",
    copy: "Valve guides keep valves aligned for smooth up-down movement, lower wear, reduced leakage risk, and consistent operation efficiency.",
  },
  {
    title: "Connecting Rods",
    copy: "Connecting rods transfer piston force to the crankshaft and convert linear motion into rotation for dependable power transmission.",
  },
  {
    title: "Rocker Arms",
    copy: "Rocker arms control valve opening and closing through camshaft motion transfer, helping maintain combustion and timing stability.",
  },
  {
    title: "Cylinder Sleeves",
    copy: "Cylinder sleeves provide a durable low-friction surface for piston movement, helping protect blocks and improve heat dissipation.",
  },
  {
    title: "Air Cool Block",
    copy: "Air-cooled engine blocks use fin-driven airflow to regulate temperature and deliver reliable operation in compact engine platforms.",
  },
];

export default function ExportPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="border-b border-slate-200 bg-slate-900 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded bg-slate-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-200">
                <Ship className="h-4 w-4 text-red-500" />
                AJ1 Export Program
              </p>
              <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                Export Product Range
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                AJ Automotive is the export brand of M.M. Valves, supplying engine valves and allied automotive spare parts to global markets with process-led consistency.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-red-700 px-8 py-3 font-bold uppercase tracking-wider text-white transition-colors hover:bg-red-800"
                >
                  Contact Export Team
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded border-2 border-slate-700 px-8 py-3 font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                >
                  View Core Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-800 p-8 shadow-xl">
              <h2 className="text-xl font-black uppercase tracking-wide text-white">Export Highlights</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-red-500" />
                  Structured inspection and lot traceability before dispatch
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Globe2 className="mt-0.5 h-5 w-5 text-red-500" />
                  Export-oriented documentation and shipment planning
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Truck className="mt-0.5 h-5 w-5 text-red-500" />
                  Stable production support for recurring supply schedules
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-700">Portfolio</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
              Export Catalog Snapshot
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {exportProducts.map((product, idx) => (
              <article
                key={product.title}
                className="grid overflow-hidden rounded-lg border border-slate-200 bg-white lg:grid-cols-[1fr_1.1fr]"
              >
                <div className="flex min-h-[220px] items-center justify-center border-b border-slate-200 bg-slate-200 p-6 lg:min-h-full lg:border-r lg:border-b-0">
                  <div className="flex flex-col items-center text-center">
                    <Package className="h-9 w-9 text-slate-500" />
                    <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                      Product Image Slot {String(idx + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black tracking-tight text-slate-900">{product.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">{product.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Ready To Power Your Engines?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            Connect with our export team for product details, quantity planning, and dispatch support.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded bg-white px-8 py-3 font-bold uppercase tracking-wider text-red-700 transition-colors hover:bg-slate-100"
          >
            Contact Now
          </Link>
        </div>
      </section>
    </main>
  );
}