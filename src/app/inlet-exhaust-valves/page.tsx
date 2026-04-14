import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Inlet and Exhaust Valve Manufacturer | M.M. Valves",
  description:
    "Inlet and exhaust valve manufacturer with process-driven production and quality-led output.",
};

export default function InletExhaustValvesPage() {
  return (
    <PageShell
      eyebrow="SEO Landing"
      title="Inlet and Exhaust Valve Manufacturer"
      intro="Inlet and exhaust valves engineered for airflow efficiency, heat durability, and application-specific reliability."
      mode="exploded"
      imageSrc="/engine-valves inlet amd Ex.jpg"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl edge-line bg-[#f8fbff] p-5">
          <h2 className="text-2xl font-semibold text-steel-strong">Inlet Valves</h2>
          <p className="mt-3 text-muted">Focused on intake efficiency and stable dimensional performance.</p>
        </article>
        <article className="rounded-xl edge-line bg-[#f8fbff] p-5">
          <h2 className="text-2xl font-semibold text-steel-strong">Exhaust Valves</h2>
          <p className="mt-3 text-muted">Built for high thermal loads and long-term durability.</p>
        </article>
      </div>
    </PageShell>
  );
}
