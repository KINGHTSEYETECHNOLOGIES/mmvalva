import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certificates | M.M. Valves",
  description:
    "View and download the official M.M. Valves certificate and supporting quality documentation.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden border-b-4 border-red-700 bg-slate-900 py-20 sm:py-24">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_80%_20%,#ef4444_0,transparent_32%),linear-gradient(135deg,transparent_25%,#334155_25%,#334155_26%,transparent_26%)]" />
        <div className="container relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
            <BadgeCheck className="h-4 w-4 text-red-500" />
            Verified Documentation
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Certificates
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Official documentation reflecting our commitment to controlled
            manufacturing, consistent quality, and dependable supply.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {[
              [ShieldCheck, "Quality Focus", "Documented commitment"],
              [FileCheck2, "Official Record", "Verified certification"],
              [BadgeCheck, "M.M. Valves", "Company certification"],
            ].map(([Icon, title, detail]) => {
              const CardIcon = Icon as typeof ShieldCheck;
              return (
                <div
                  key={title as string}
                  className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-red-50 text-red-700">
                    <CardIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold uppercase tracking-wide text-slate-900">
                      {title as string}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-slate-500">
                      {detail as string}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            <header className="border-b border-slate-200 p-6 lg:p-8">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-red-700">
                  Official Certificate
                </p>
                <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-3xl">
                  M.M. Valves Certificate
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Official company certification document.
                </p>
              </div>
            </header>

            <div className="flex justify-center bg-slate-200 p-3 sm:p-5 lg:p-8">
              <Image
                src="/documents/MM-Valves-Certificate.png"
                alt="M.M. Valves ISO 9001:2015 certificate"
                width={992}
                height={1403}
                className="h-auto w-full max-w-4xl bg-white shadow-lg"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
