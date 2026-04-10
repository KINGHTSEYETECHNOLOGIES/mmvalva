import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Custom Engine Valve Solutions | M.M. Valves",
  description:
    "Custom engine valve solutions for OEM and specialized industrial requirements.",
};

export default function CustomEngineValveSolutionsPage() {
  return (
    <PageShell
      eyebrow="SEO Landing"
      title="Custom Engine Valve Solutions"
      intro="We develop custom valve solutions aligned to application specifications, performance targets, and production needs."
      mode="scan"
    >
      <p className="text-muted leading-7">
        From material selection to final inspection, our team supports custom requirements with controlled production and repeatable quality output.
      </p>
    </PageShell>
  );
}
