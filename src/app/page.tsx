import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Cog,
  Factory,
  Gauge,
  Globe2,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

import { FactoryJourney } from "@/components/factory-journey";
import { IndustrialSection } from "@/components/industrial-section";
import { MetalValveCanvas } from "@/components/metal-valve-canvas";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "M.M. Valves | Precision Engine Valves",
  description:
    "Precision engine valves for diesel, automotive, OEM, and aftermarket applications.",
};

const capabilities = [
  {
    title: "Thermal resilience",
    copy: "Materials and heat-treatment discipline tuned for hot-cycle durability.",
    icon: Gauge,
  },
  {
    title: "Dimensional control",
    copy: "Process checks at each stage to keep concentricity, finish, and fit consistent.",
    icon: BadgeCheck,
  },
  {
    title: "Supply reliability",
    copy: "Structured manufacturing planning for repeat programs and export orders.",
    icon: Truck,
  },
  {
    title: "Application fit",
    copy: "Custom valve development for OEM specifications and performance requirements.",
    icon: Wrench,
  },
];

const productFamilies = [
  {
    title: "Diesel Engine Valves",
    copy: "Built for load, heat, and long service cycles in demanding diesel applications.",
  },
  {
    title: "Automotive Engine Valves",
    copy: "Production-ready solutions for passenger and light commercial vehicles.",
  },
  {
    title: "Inlet & Exhaust Valves",
    copy: "Balanced flow and thermal behavior for intake and exhaust performance.",
  },
  {
    title: "Custom Engine Valve Solutions",
    copy: "Tailored engineering for non-standard platforms, programs, and export needs.",
  },
];

const proofPoints = [
  "OEM and aftermarket programs",
  "Controlled forging, machining, and finishing",
  "Inspection-led quality assurance",
];

export default function HomePage() {
  return (
    <main className="overflow-hidden pb-16 pt-6">
      <section className="section-wrap relative pt-2 sm:pt-6 lg:pt-10">
        <div className="absolute left-[-8%] top-8 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute right-[-6%] top-28 h-96 w-96 rounded-full bg-accent-two/10 blur-3xl pointer-events-none" />

        <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <Reveal delay={0.1} y={40} scale={0.98}>
            <div>
              <p className="section-kicker">Precision engine valves</p>
              <h1 className="title-balance mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.92] text-steel-strong sm:text-6xl lg:text-[5.6rem]">
                Made to deliver performance without looking generic.
              </h1>
              <p className="text-grid mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                M.M. Valves builds OEM and aftermarket engine valves with the discipline of a technical workshop and the clarity of an editorial brand system. The result is a cleaner visual identity and a stronger story around the product.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/products" className="button-primary inline-flex items-center gap-2 group transition-all hover:scale-105">
                  Explore Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="button-ghost inline-flex items-center gap-2 group transition-all hover:bg-black/5">
                  Request Technical Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {proofPoints.map((point, i) => (
                  <Reveal key={point} delay={0.3 + (i * 0.1)} y={20}>
                    <div className="metric-card rounded-xl px-5 py-4 shadow-sm border border-line bg-white/50 backdrop-blur-sm transition-colors hover:border-accent/40">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-steel-strong text-balance">{point}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:gap-6">
                {[
                  ["2014", "Founded in India"],
                  ["OEM + Aftermarket", "Core market focus"],
                  ["Custom Programs", "Built to spec"],
                ].map(([value, label], i) => (
                  <Reveal key={value} delay={0.4 + (i * 0.1)} y={20}>
                    <div className="border-t-[3px] border-line pt-4 transition-colors hover:border-accent">
                      <p className="text-xl lg:text-2xl xl:text-[1.75rem] font-black uppercase leading-[1.1] text-steel-strong tracking-tight">{value}</p>
                      <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-widest text-muted">{label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} x={30} scale={0.95}>
            <div className="relative">
              <div className="hero-panel relative overflow-hidden rounded-[2.5rem] border border-white/10 p-4 sm:p-5 shadow-2xl transition-transform hover:shadow-accent/20">
                <div className="hero-grid absolute inset-0 opacity-60" />
                <div className="relative rounded-[2rem] border border-white/10 bg-white/6 p-5 sm:p-6 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 text-white/75">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/45">Engine Valve Range</p>
                    <p className="mt-1 text-lg font-semibold text-white">OEM, aftermarket, and custom-engineered programs</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-white/70">
                    Since 2014
                  </div>
                </div>

                <div className="relative mt-4 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#080d14]">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
                  <MetalValveCanvas mode="hero" className="h-[440px] w-full" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[0.66rem] uppercase tracking-[0.2em] text-white backdrop-blur-md shadow-lg transition-transform hover:scale-105">
                    <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                    Performance made visible
                  </div>
                  <div className="absolute bottom-8 left-1/2 w-[112%] -translate-x-1/2 rotate-[-5deg] transition-transform hover:rotate-0 hover:scale-[1.02] duration-500">
                    <div className="hero-band px-4 py-3 text-center text-[clamp(1rem,2vw,1.65rem)] font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(0,0,0,0.5)]">
                      Serving global OEM and aftermarket programs
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Reveal delay={0.6} y={15}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition-all hover:bg-white/10 hover:border-accent/40 group h-full">
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">
                        <Factory className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                        Manufacturing Focus
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">
                        Forging, machining, heat treatment, grinding, and inspection arranged as a controlled production flow.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.7} y={15}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition-all hover:bg-white/10 hover:border-accent-two/60 group h-full">
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-two mb-3">
                        <Globe2 className="h-5 w-5 text-accent-two group-hover:scale-110 transition-transform" />
                        Market Support
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">
                        Designed for domestic distribution, export supply, and repeat technical programs globally.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-wrap mt-14">
        <div className="section-divider h-[3px] w-full" />
      </section>

      <IndustrialSection
        eyebrow="What Sets Us Apart"
        title="Engineered for Performance and Durability"
        description="A highly disciplined approach to manufacturing engine valves, prioritizing structured engineering, repeatable output, and exact application fit."
      >
        <div className="mt-10 flex flex-col gap-6">
          {/* Main Capabilities Grid (The Technical Core) */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#fffdf8] text-accent shadow-sm border border-line/50">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-lg font-black uppercase tracking-wide text-steel-strong">{item.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Quality & Production Flow Split */}
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
            {/* Left side: Quality focus */}
            <div className="tech-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10 flex flex-col">
              <div className="relative z-10 flex-1 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">Precision Control</p>
                <h3 className="mt-3 text-3xl font-black uppercase text-white leading-[1.05]">
                  Strict Quality <br /> Discipline
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  Process checks at each stage to keep concentricity, finish, and fit consistent.
                </p>
                
                <div className="mt-8 flex flex-col gap-5 pt-6 border-t border-white/15">
                  {[
                    ["Inspection-led", "Extensive checkpoints at each critical stage of manufacturing."],
                    ["Export-ready", "Commercial and packing flows built for repeat international shipping."],
                  ].map(([title, copy]) => (
                    <div key={title} className="flex items-start gap-4">
                      <ShieldCheck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h4>
                        <p className="text-xs leading-5 text-white/60 mt-1">{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Production flow */}
            <div className="rounded-[2rem] border border-line bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-center">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="section-kicker">Production flow</p>
                  <h3 className="mt-3 text-3xl font-black uppercase text-steel-strong leading-tight">From forge to final pack</h3>
                </div>
                <Cog className="h-10 w-10 text-accent-two flex-shrink-0 opacity-20" />
              </div>
              <div className="mt-10">
                <FactoryJourney />
              </div>
            </div>
          </div>
        </div>
      </IndustrialSection>

      <IndustrialSection
        eyebrow="Product Families"
        title="Focused ranges that map directly to the way customers buy engine valves"
        description="The reference pages are product-led, so the new layout gives each family a stronger card treatment and clearer hierarchy."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {productFamilies.map((product, index) => (
            <article
              key={product.title}
              className={`rounded-[1.8rem] border p-6 shadow-sm ${index === 0 ? "border-accent bg-white" : "border-line bg-white/82"}`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-accent-two">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-5 text-2xl font-black uppercase leading-[0.96] text-steel-strong">
                {product.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{product.copy}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent-two">
                View route
                <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </IndustrialSection>

      <section className="section-wrap mt-10">
        <div className="tech-panel overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">Need a supplier conversation?</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.94] text-white sm:text-5xl">
                Bring us the specification, the volume, and the application.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                We will respond with a technical and commercial path that fits the program rather than forcing a generic stock answer.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href="/contact" className="button-primary inline-flex items-center gap-2">
                Start an inquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/manufacturing" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-steel-strong">
                See manufacturing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}