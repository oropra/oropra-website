"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "primary-dark" | "secondary-dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, href, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-text-primary text-white hover:bg-text-emphasis active:scale-[0.98] shadow-sm",
      secondary:
        "bg-transparent border border-border-default text-text-secondary hover:border-border-strong hover:bg-bg-hover active:scale-[0.98]",
      ghost:
        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-hover active:scale-[0.98]",
      "primary-dark":
        "bg-white text-text-primary hover:bg-bg-hover active:scale-[0.98] shadow-sm",
      "secondary-dark":
        "bg-transparent border-[1.5px] border-white text-white hover:bg-white/10 active:scale-[0.98]",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "text-sm px-3 py-[9px] rounded-[9px]",
      md: "text-sm px-5 py-3 rounded-[9px]",
      lg: "text-[15px] px-7 py-[15px] rounded-[9px]",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
