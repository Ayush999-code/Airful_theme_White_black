import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "glow";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-zinc-900/70 text-zinc-300 border border-zinc-800/80",
    outline: "bg-white/5 text-zinc-300 border border-zinc-700/80",
    glow: "bg-[#227774]/10 text-[#c6f4ef] border border-[#227774]/30 shadow-[0_0_20px_rgba(34,119,116,0.25)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
