import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

import SiteHeader from "./site-header";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  mode?: "hero" | "exploded" | "scan";
};

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  mode = "hero",
}: PageShellProps) {
  const visualLabel =
    mode === "exploded"
      ? "Product visual placeholder"
      : mode === "scan"
        ? "Quality visual placeholder"
        : "Brand visual placeholder";

  return (
    <div className="industrial-shell min-h-screen">
      <SiteHeader />
      <main className="pt-24 pb-16">
        <section className="section-wrap grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-bold mb-4">{eyebrow}</p>
              <h1 className="title-balance mt-4 text-4xl font-black uppercase text-steel-strong sm:text-5xl lg:text-6xl leading-[1.05]">{title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-xl bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-accent/90 transition-colors"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-line bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-steel-strong hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Send Inquiry
                </Link>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="flex h-full min-h-[380px] w-full items-center justify-center rounded-3xl border border-dashed border-accent/20 bg-gradient-to-br from-[#f8fbff] to-[#edf3f9] text-center shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
              <div className="relative z-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/60 shadow-sm border border-white mb-4">
                  <span className="text-accent text-2xl">⚡</span>
                </div>
                <p className="text-[0.72rem] uppercase tracking-[0.22em] font-bold text-accent">{visualLabel}</p>
                <p className="mt-3 text-sm font-medium text-steel px-6">Render 3D model or high-res photography here</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section-wrap mt-20">
          <Reveal delay={0.3}>
            <div className="rounded-3xl border border-line bg-white p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-two to-accent opacity-50"></div>
              {children}
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
