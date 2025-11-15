import React from "react";
import { cn } from "../../lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const TypographyH1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tighter text-slate-50 sm:text-5xl lg:text-6xl",
        className
      )}
      {...props}
    />
  )
);
TypographyH1.displayName = "TypographyH1";

export const TypographyH2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl",
        className
      )}
      {...props}
    />
  )
);
TypographyH2.displayName = "TypographyH2";

export const TypographyLead = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-lg font-normal leading-relaxed text-slate-300 sm:text-xl",
        className
      )}
      {...props}
    />
  )
);
TypographyLead.displayName = "TypographyLead";

export const TypographyMuted = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-sm text-slate-400",
        className
      )}
      {...props}
    />
  )
);
TypographyMuted.displayName = "TypographyMuted";
