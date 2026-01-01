import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-[1450px]",
    xl: "max-w-[1450px]",
    full: "max-w-full",
  };

  return (
    <div className={cn("mx-auto w-full px-[15px]", sizes[size], className)}>
      {children}
    </div>
  );
}
