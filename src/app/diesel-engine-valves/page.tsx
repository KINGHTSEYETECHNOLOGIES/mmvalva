import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Diesel Engine Valve Manufacturer | M.M. Valves",
  description:
    "Diesel engine valve manufacturer focused on durability, heat resistance, and consistent quality supply.",
};

export default function DieselEngineValvesPage() {
  return (
    <PageShell
      eyebrow="SEO Landing"
      title="Diesel Engine Valve Manufacturer"
      intro="We deliver diesel engine valves designed for demanding operating loads, stable performance, and wear resistance."
      mode="exploded"
    >
      <ul className="grid gap-3 text-steel sm:grid-cols-2">
        <li className="rounded-xl edge-line bg-[#f8fbff] p-4">Thermal resistance for sustained operation</li>
        <li className="rounded-xl edge-line bg-[#f8fbff] p-4">Precision dimensional control</li>
        <li className="rounded-xl edge-line bg-[#f8fbff] p-4">Surface finish quality</li>
        <li className="rounded-xl edge-line bg-[#f8fbff] p-4">Reliable batch consistency</li>
      </ul>
    </PageShell>
  );
}
