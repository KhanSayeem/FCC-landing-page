import React from "react";
import { PageShell } from "../components/layout/PageShell";

interface PolicyPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  eyebrow?: string;
  heroCtaLabel?: string;
  heroCtaHref?: string;
}

export const PolicyPageLayout = ({
  title,
  subtitle,
  children,
  eyebrow = "Financial Command Center AI",
  heroCtaLabel = "Back to Homepage",
  heroCtaHref = "/",
}: PolicyPageLayoutProps) => {
  return (
    <PageShell>
      <section className="border-b border-fcc-border bg-fcc-black">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.3em] text-fcc-accent">{eyebrow}</div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-fcc-cream sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-fcc-muted">{subtitle}</p>
          <div className="mt-6 flex justify-center">
            <a
              href={heroCtaHref}
              className="inline-flex border border-fcc-border bg-fcc-black px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
            >
              {heroCtaLabel}
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl border border-fcc-border bg-fcc-black p-8 text-sm leading-relaxed text-fcc-muted shadow-fcc-accent">
          {children}
        </div>
      </section>
    </PageShell>
  );
};
