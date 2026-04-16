import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | M.M. Valves",
  description:
    "M.M. Valves company profile, manufacturing infrastructure, quality commitment, and growth journey since 2014.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-100">
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-9 sm:mb-10">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              M.M. Valves - Precision Engine Valve Manufacturer
            </h1>
            <p className="mt-2 text-sm font-semibold text-slate-600">Crafting Reliability Since 2014</p>
          </header>

          <div className="space-y-10 sm:space-y-12">
            <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="relative h-72 overflow-hidden rounded-xl bg-white shadow-sm sm:h-80">
                <Image
                  src="/images/about/Company Introduction.jpg"
                  alt="M.M. Valves facility exterior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight text-slate-900">Company Introduction</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Founded in 2014 by Mr. Sukhdevsinh Jadeja, M.M. Valves is a professionally managed manufacturing company specializing in diesel and automotive engine valves. From the beginning, the company has focused on precision engineering, process control, and consistent quality, enabling strong and long-term relationships with OEM and aftermarket customers.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  With continuous investment in in-house manufacturing capabilities, advanced machinery, and quality systems, M.M. Valves has established itself as a reliable engine valve manufacturing partner for customers who value performance, durability, and supply reliability.
                </p>
              </div>
            </article>

            <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-black tracking-tight text-slate-900">Manufacturing Strength and Infrastructure</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  M.M. Valves operates with a fully integrated manufacturing setup, allowing complete control over quality and production consistency.
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                  <li>In-house forging facility for better material control and strength</li>
                  <li>CNC machining centers for high-precision valve manufacturing</li>
                  <li>Grinding machines and automatic seat grinders for dimensional accuracy</li>
                  <li>Strengthening and finishing machines to enhance durability</li>
                  <li>Robotic automation implemented in CNC operations to improve consistency and efficiency</li>
                  <li>Well-organized packaging system ensuring safe handling and dispatch</li>
                </ul>
                <p className="mt-3 text-base font-semibold text-slate-900 sm:text-lg">Manufacturing Area: 4,500 sq. ft.</p>
                <p className="mt-1 text-base leading-relaxed text-slate-700 sm:text-lg">
                  This compact yet efficient facility is optimized for OEM-grade production and process discipline.
                </p>
              </div>
              <div className="order-1 relative h-72 overflow-hidden rounded-xl bg-white shadow-sm sm:h-80 lg:order-2">
                <Image
                  src="/images/about/Manufacturing Strength & Infrastructure.jpg"
                  alt="M.M. Valves production area"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </article>

            <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="relative h-72 overflow-hidden rounded-xl bg-white shadow-sm sm:h-80">
                <Image
                  src="/Quality Inspection .jpg"
                  alt="Quality inspection process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight text-slate-900">Quality Commitment</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Quality at M.M. Valves is built into every stage of production. Our structured manufacturing processes, skilled workforce, and controlled inspection systems ensure:
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                  <li>Consistent product quality.</li>
                  <li>Reliable batch-to-batch performance.</li>
                  <li>Compliance with OEM technical requirements.</li>
                </ul>
                <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                  This commitment to quality has enabled us to successfully collaborate with OEM customers and support them with dependable supply and performance.
                </p>
              </div>
            </article>

            <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-black tracking-tight text-slate-900">Company History and Growth</h2>
                <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700 sm:text-lg">
                  <li><span className="font-bold text-slate-900">2014</span> - Company founded; diesel engine valve manufacturing initiated.</li>
                  <li><span className="font-bold text-slate-900">2015</span> - Began collaboration with OEM customers.</li>
                  <li><span className="font-bold text-slate-900">2016</span> - Expanded into automotive engine valve manufacturing.</li>
                  <li><span className="font-bold text-slate-900">2019</span> - Launched aftermarket brand in India and export brand AJ Automotive.</li>
                </ul>
              </div>
              <div className="order-1 relative h-72 overflow-hidden rounded-xl bg-white shadow-sm sm:h-80 lg:order-2">
                <Image
                  src="/Robotic Arm.jpg"
                  alt="Robotic CNC manufacturing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
