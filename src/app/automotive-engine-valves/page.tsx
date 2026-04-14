import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Automotive Engine Valve Supplier | M.M. Valves",
  description:
    "Automotive engine valve supplier for OEM and replacement market requirements.",
};

export default function AutomotiveEngineValvesPage() {
  return (
    <PageShell
      eyebrow="SEO Landing"
      title="Automotive Engine Valve Supplier"
      intro="Automotive valve solutions developed for stable performance, durability, and quality consistency across production volumes."
      mode="hero"
      imageSrc="/Automotive Engine Valve.jpg"
    >
      <p className="text-muted leading-7">
        We support passenger and commercial vehicle applications with precision-engineered inlet and exhaust valve manufacturing capabilities.
      </p>
    </PageShell>
  );
}
