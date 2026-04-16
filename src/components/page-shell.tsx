import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import { Wrench } from "lucide-react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  mode?: "hero" | "exploded" | "scan";
  imageSrc?: string;
};

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  mode = "hero",
  imageSrc,
}: PageShellProps) {
  const visualLabel =
    mode === "exploded"
      ? "Product visual placeholder"
      : mode === "scan"
        ? "Quality visual placeholder"
        : "Brand visual placeholder";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* PAGE HEADER */}
        <section className="border-b-4 border-red-700 bg-slate-900 pt-24 pb-18">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-red-500 font-bold mb-4">{eyebrow}</p>
                <h1 className="text-4xl font-black uppercase text-white sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">{title}</h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-300">{intro}</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/products"
                    className="inline-flex justify-center items-center px-8 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-wider rounded transition-colors"
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-slate-700 hover:border-white text-white font-bold uppercase tracking-wider rounded transition-colors"
                  >
                    Send Inquiry
                  </Link>
                </div>
              </div>
              
              <div className="relative flex h-full min-h-[380px] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-slate-800 text-center shadow-xl">
                {imageSrc ? (
                  <Image src={imageSrc} alt={title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                ) : (
                  <div className="relative z-10 flex flex-col items-center p-6 text-slate-400">
                    <Wrench className="h-10 w-10 text-slate-500 mb-4" />
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-300">{visualLabel}</p>
                    <p className="mt-3 text-sm font-medium">High-quality product visualization</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PAGE CONTENT */}
        <section className="bg-slate-50 py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
