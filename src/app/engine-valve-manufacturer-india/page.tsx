import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Engine Valve Manufacturer in India | M.M. Valves",
  description:
    "M.M. Valves is an engine valve manufacturer in India delivering precision valves for OEM and aftermarket applications.",
};

export default function EngineValveManufacturerIndiaPage() {
  return (
    <PageShell
      eyebrow="SEO Landing"
      title="Engine Valve Manufacturer in India"
      intro="M.M. Valves manufactures precision diesel and automotive engine valves in India for OEM-grade and aftermarket requirements."
      mode="hero"
    >
      <p className="text-muted leading-7">
        Our valves are built for thermal stability, dimensional control, and long service life through forging, machining, heat treatment, grinding, and inspection-driven production.
      </p>
    </PageShell>
  );
}
