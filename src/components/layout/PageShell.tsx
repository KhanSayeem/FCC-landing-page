import React from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface PageShellProps {
  children: React.ReactNode;
  showFooter?: boolean;
  className?: string;
}

export const PageShell = ({ children, showFooter = true, className }: PageShellProps) => {
  const mainClass = className ? `flex-1 ${className}` : "flex-1 pt-24";

  return (
    <div className="min-h-screen bg-fcc-black text-fcc-cream antialiased">
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className={mainClass}>{children}</main>
        {showFooter && <SiteFooter />}
      </div>
    </div>
  );
};
