import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products | M.M. Valves",
  description:
    "Precision engine valve product portfolio for OEM applications, quality inspection, and manufacturing capabilities.",
};

const productSections = [
  {
    title: "Engine Valve Manufacturing Range",
    copy: "At M.M. Valves, we manufacture high-precision engine valves designed to meet the performance, durability, and consistency requirements of OEM engines. Our valves are engineered for reliable operation under high temperature, pressure, and continuous duty conditions.",
    bullets: [
      "2-Wheeler Engines",
      "3-Wheeler Engines",
      "4-Wheeler Engines",
      "Commercial Vehicles",
      "Tractors",
      "Diesel Engines",
    ],
    footer:
      "Our product range supports both intake and exhaust valve applications, manufactured as per customer drawings and technical specifications.",
    image: "/images/Products/product-pg-1-768x516.avif",
  },
  {
    title: "Key Product Features",
    copy: "Our engine valves are manufactured with a strong focus on precision, consistency, and long service life:",
    bullets: [
      "High Durability - Designed to withstand high combustion temperatures and repeated operating cycles",
      "Precision Machining - Manufactured using CNC machining processes to ensure dimensional accuracy and repeatability",
      "Advanced Heat Treatment - Controlled heat treatment processes for improved strength, wear resistance, and thermal stability",
      "Strict Quality Control - In-process and final inspection to maintain consistent quality across production batches",
      "OEM-Approved Material Grades - Raw materials selected as per OEM requirements for intake and exhaust valve applications",
    ],
    image: "/images/Products/product-pg-2-768x516.avif",
  },
  {
    title: "Quality Inspection & Measurement Capability",
    copy: "To ensure consistent OEM-level quality, M.M. Valves maintains in-house inspection and measurement systems:",
    bullets: [
      "Hardness Testing to verify heat treatment effectiveness",
      "Machine-Mounted Gauges on all production machines for in-process dimensional checks",
      "Profile Measuring Machine for accurate profile, angle, and dimensional verification",
      "Regular Inspection by Qualified Engineer to monitor quality and implement corrective action when required",
    ],
    footer:
      "These systems help us maintain high accuracy, process stability, and repeatable quality across production batches.",
    image: "/images/Products/WhatsApp-Image-2026-01-01-at-11.44.32-768x1024.jpg",
  },
  {
    title: "OEM Supply Capability",
    copy: "We are a trusted engine valve supplier to OEM customers, supporting them with:",
    bullets: [
      "Consistent product quality",
      "Stable batch-to-batch performance",
      "Reliable supply for regular production schedules",
    ],
    footer:
      "Our manufacturing systems are aligned with OEM quality expectations and long-term supply partnerships.",
    image: "/images/Products/product-pg-4-768x432.avif",
  },
  {
    title: "Why OEMs Choose M.M. Valves",
    copy: "OEM customers partner with us for our manufacturing reliability and process control:",
    bullets: [
      "CNC-Based Manufacturing Technology - Ensures accuracy, uniformity, and scalability for volume production",
      "Consistent Quality Assurance - Quality checks at every critical stage of manufacturing",
      "Cost-Effective Volume Manufacturing - Optimized processes that support competitive pricing without compromising quality",
      "On-Time Delivery Performance - Strong production planning and commitment to delivery schedules",
    ],
    image: "/images/Products/image_2-768x576.jpg",
  },
  {
    title: "Manufacturing Partner",
    copy: "With over a decade of manufacturing experience, M.M. Valves is committed to delivering precision-engineered engine valves that meet OEM standards for performance, reliability, and cost efficiency.",
    footer:
      "We welcome opportunities to collaborate with OEMs, Tier-1 suppliers, and engine manufacturers for long-term partnerships.",
    image: "/images/Products/product-pg-6-768x432.avif",
  },
];

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-slate-100 to-slate-50">
      <section className="py-12 sm:py-14 lg:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 rounded-2xl border border-slate-200 bg-white px-6 py-7 shadow-sm sm:mb-12 sm:px-8 sm:py-8">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Precision Engine Valves for OEM Applications
            </h1>
            <div className="mt-3 h-1.5 w-24 rounded-full bg-red-700" />
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Engine components engineered for reliability, repeatability, and OEM-grade consistency.
            </p>
          </header>

          <div className="space-y-7 sm:space-y-8">
            {productSections.map((section, index) => (
              <article
                key={section.title}
                className="grid items-center gap-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <div className="relative h-72 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 sm:h-80 lg:h-[340px]">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-700">Section {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{section.title}</h2>
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-700 sm:text-lg">{section.copy}</p>
                  {section.bullets && (
                    <ul className="mt-4 list-disc space-y-1.5 pl-6 text-base leading-relaxed text-slate-700 marker:text-red-700 sm:text-lg">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.footer && (
                    <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-700 sm:text-lg">{section.footer}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
