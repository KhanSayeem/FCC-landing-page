import React from "react";
import { Button } from "../components/ui/button";
import { TypographyH1, TypographyLead } from "../components/ui/typography";

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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,_99,_235,_0.25),_transparent_55%)]" />
      <header className="px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-blue-300/80">{eyebrow}</div>
          <TypographyH1 className="text-3xl sm:text-4xl lg:text-5xl">{title}</TypographyH1>
          <TypographyLead className="text-base text-slate-300">{subtitle}</TypographyLead>
          <div className="pt-4">
            <Button
              size="lg"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = heroCtaHref;
                }
              }}
            >
              {heroCtaLabel}
            </Button>
          </div>
        </div>
      </header>
      <main className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-blue-900/20 backdrop-blur">
          {children}
        </div>
      </main>
      <footer className="border-t border-slate-900/40 bg-slate-950/80 px-6 py-8 text-center text-sm text-slate-500 lg:px-12">
        &copy; {new Date().getFullYear()} Financial Command Center AI. All rights reserved.
      </footer>
    </div>
  );
};
