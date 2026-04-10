import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "OEM & Exports | M.M. Valves",
  description:
    "OEM and export support from M.M. Valves across India and key neighboring markets.",
};

export default function OemExportsPage() {
  return (
    <PageShell
      eyebrow="OEM & Exports"
      title="Reliable supply for domestic and global buyers"
      intro="We support OEM and aftermarket customers with dependable manufacturing and export operations under AJ Automotive."
      mode="hero"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl edge-line bg-[#f8fbff] p-5">
          <h2 className="text-2xl font-semibold text-steel-strong">OEM Support</h2>
          <p className="mt-3 text-muted">Consistent specs, process repeatability, and responsive production support for long-term OEM programs.</p>
        </article>
        <article className="rounded-xl edge-line bg-[#f8fbff] p-5">
          <h2 className="text-2xl font-semibold text-steel-strong">Aftermarket Support</h2>
          <p className="mt-3 text-muted">Stable quality and timely dispatch for replacement market and channel partners.</p>
        </article>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {["India", "Nepal", "Bangladesh", "Afghanistan"].map((region) => (
          <span key={region} className="rounded-full edge-line bg-[#f8fbff] px-4 py-2 text-sm uppercase tracking-[0.1em] text-steel">
            {region}
          </span>
        ))}
      </div>
    </PageShell>
  );
}
