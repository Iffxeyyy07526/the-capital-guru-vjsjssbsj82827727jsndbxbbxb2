import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-brand-gold text-black hover:bg-brand-gold/90 border border-brand-gold",
      secondary: "bg-brand-surface-2 text-brand-text hover:bg-brand-surface-2/80 border border-brand-gold/20",
      outline: "bg-transparent border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10",
      ghost: "bg-transparent hover:bg-brand-gold/10 text-brand-text",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
