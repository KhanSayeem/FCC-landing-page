import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#why", label: "Why FCC" },
  { href: "#how", label: "How It Works" },
  { href: "#security", label: "Security" },
  { href: "#pilot", label: "Pilot Program" },
];

export const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);
  const headerClasses = isScrolled ? "bg-fcc-black/90 shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl" : "bg-fcc-black/70 backdrop-blur";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo-no-background.svg" alt="Financial Command Center AI" className="h-8 w-auto" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.2em] sm:hidden">FCC</span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">Financial Command Center AI</span>
          </div>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-[10px] uppercase tracking-[0.18em] md:flex">
          {navLinks.map((link) => {
            const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
            return (
              <a key={link.href} href={href} className="text-fcc-cream transition-colors hover:text-fcc-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fcc-accent focus-visible:ring-offset-2 focus-visible:ring-offset-fcc-black">
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em]">
          <a
            href="/contact"
            className="hidden rounded border border-fcc-border/70 px-4 py-1.5 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fcc-accent focus-visible:ring-offset-2 focus-visible:ring-offset-fcc-black sm:inline-flex"
          >
            Talk to Us
          </a>
          <a
            href="/contact"
            className="hidden rounded border border-fcc-accent bg-fcc-accent px-5 py-1.5 font-semibold text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fcc-accent focus-visible:ring-offset-2 focus-visible:ring-offset-fcc-black md:inline-flex"
          >
            BOOK A DEMO
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-fcc-border/60 p-2 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fcc-accent focus-visible:ring-offset-2 focus-visible:ring-offset-fcc-black md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="bg-fcc-black/95 px-4 py-4 backdrop-blur sm:px-6 md:hidden">
          <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.18em]">
            {navLinks.map((link) => {
              const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
              return (
                <a
                  key={link.href}
                  href={href}
                  className="rounded border border-fcc-border/60 px-3 py-2 text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/contact"
              className="rounded border border-fcc-accent bg-fcc-accent px-3 py-2 text-center font-semibold text-fcc-black transition hover:border-fcc-cream hover:bg-fcc-cream"
              onClick={handleLinkClick}
            >
              BOOK A DEMO
            </a>
            <a
              href="/contact"
              className="rounded border border-fcc-border/70 px-3 py-2 text-center text-fcc-cream transition hover:border-fcc-accent hover:text-fcc-accent"
              onClick={handleLinkClick}
            >
              Talk to Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
