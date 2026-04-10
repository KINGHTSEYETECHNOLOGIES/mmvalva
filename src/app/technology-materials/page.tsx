import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Technology & Materials | M.M. Valves",
  description:
    "Technical depth on materials, machining, heat treatment, and surface finishing used in M.M. Valves products.",
};

export default function TechnologyMaterialsPage() {
  return (
    <PageShell
      eyebrow="Technology & Materials"
      title="Engineered for heat, pressure, and durability"
      intro="Our valves are developed using high-grade materials and controlled operations to maintain strength and performance stability."
      mode="exploded"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Precision machining",
          "Heat treatment control",
          "Surface finishing",
          "Material integrity",
          "Wear resistance",
          "Performance stability",
        ].map((topic) => (
          <article key={topic} className="rounded-xl edge-line bg-[#f8fbff] p-4 text-steel-strong">
            {topic}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
