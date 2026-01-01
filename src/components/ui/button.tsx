"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#2b9f9a] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#d5f5f1] via-[#8ddbd4] to-[#2b9f9a] text-black shadow-[0_14px_40px_rgba(34,119,116,0.35)] hover:shadow-[0_22px_55px_rgba(34,119,116,0.4)] hover:-translate-y-0.5",
      secondary:
        "bg-zinc-900/70 text-white border border-zinc-800/80 hover:bg-zinc-800/80 hover:border-zinc-700",
      ghost:
        "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
      outline:
        "bg-transparent text-white border border-slate-700/80 hover:bg-slate-900/60 hover:border-[#2b9f9a]/70",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
