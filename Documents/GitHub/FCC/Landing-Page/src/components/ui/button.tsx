import React from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap border font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fcc-accent disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  default: "border-fcc-accent bg-fcc-accent text-fcc-black hover:border-fcc-cream hover:bg-fcc-cream",
  secondary: "border-fcc-border bg-fcc-panel text-fcc-cream hover:border-fcc-accent",
  outline: "border-fcc-border bg-fcc-black text-fcc-cream hover:border-fcc-accent hover:text-fcc-accent",
  ghost: "border-transparent text-fcc-cream hover:text-fcc-accent",
  link: "border-transparent text-fcc-accent underline-offset-4 hover:underline",
  destructive: "border-red-500 bg-red-600 text-white hover:bg-red-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-2 text-[11px]",
  sm: "px-4 py-1.5 text-[10px]",
  lg: "px-6 py-2.5 text-xs",
  icon: "h-10 w-10",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
