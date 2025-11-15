import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#product", label: "Why FCC" },
  { href: "#problems", label: "Problems" },
  { href: "#architecture", label: "How it works" },
  { href: "#automation", label: "AI copilots" },
  { href: "#security", label: "Security" },
  { href: "#deploy", label: "Pilot program" },
];

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="border-b border-fcc-border bg-fcc-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo-no-background.svg" alt="Financial Command Center AI" className="h-8 w-auto" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.2em] sm:hidden">FCC</span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">Financial Command Center AI</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.18em] md:flex">
          {navLinks.map((link) => {
            const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
            return (
              <a key={link.href} href={href} className="text-fcc-cream transition-colors hover:text-fcc-accent">
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em]">
          <a
            href="/contact"
            className="hidden border border-fcc-border bg-fcc-black px-3 py-1.5 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent sm:inline-flex"
          >
            Talk to us
          </a>
          <a href="/contact" className="inline-flex border border-fcc-accent bg-fcc-accent px-4 py-1.5 font-medium text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream">
            Book AI CFO audit
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-fcc-border p-2 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-fcc-border bg-fcc-black/95 px-4 py-4 sm:px-6 md:hidden">
          <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.18em]">
            {navLinks.map((link) => {
              const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
              return (
                <a
                  key={link.href}
                  href={href}
                  className="border border-fcc-border px-3 py-2 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/contact"
              className="border border-fcc-accent bg-fcc-accent px-3 py-2 text-center font-semibold text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream"
              onClick={handleLinkClick}
            >
              Book AI CFO audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
