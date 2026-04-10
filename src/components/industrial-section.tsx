import type { ReactNode } from "react";

type IndustrialSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function IndustrialSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: IndustrialSectionProps) {
  return (
    <section id={id} className="py-18 sm:py-24">
      <div className="section-wrap">
        {eyebrow ? (
          <p className="mb-4 text-xs uppercase tracking-[0.26em] text-accent-soft">{eyebrow}</p>
        ) : null}
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-steel-strong sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">{description}</p>
        {children}
      </div>
    </section>
  );
}
