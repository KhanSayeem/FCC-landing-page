import React from "react";

const footerLinks: { href: string; label: string }[] = [];

const policyLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-fcc-border bg-fcc-black">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <img src="/logo-no-background.svg" alt="Financial Command Center AI" className="h-8 w-auto" />
            <span className="text-xs tracking-tight text-fcc-cream">Financial Command Center AI - by Daywin Labs</span>
          </div>
          <p className="text-[11px] text-fcc-gray">
            FCC is the secure, self-hosted Financial OS that connects banking, payments, and accounting into one AI-powered system.
          </p>
          <p className="text-[11px] text-fcc-gray">
            Book your free AI CFO audit:{" "}
            <a href="https://www.daywinlabs.com/contact" className="underline transition hover:text-fcc-accent">
              daywinlabs.com/contact
            </a>
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 text-[11px] text-fcc-gray md:items-end">
          {footerLinks.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {footerLinks.map((link) => {
                const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
                return (
                  <a key={link.href} href={href} className="border border-fcc-border px-2 py-1 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent">
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {policyLinks.map((link) => (
              <a key={link.href} href={link.href} className="border border-fcc-border px-2 py-1 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent">
                {link.label}
              </a>
            ))}
          </div>
          <div>
            Contact:{" "}
            <a href="mailto:sayeem@daywinlabs.com" className="underline transition hover:text-fcc-accent">
              sayeem@daywinlabs.com
            </a>{" "}
            -{" "}
            <a href="https://www.daywinlabs.com" className="underline transition hover:text-fcc-accent">
              www.daywinlabs.com
            </a>
          </div>
          <p className="text-[11px] text-fcc-gray">© 2025 Daywin Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
