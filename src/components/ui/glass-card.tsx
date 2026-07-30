import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function GlassCard({ className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover &&
          "hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
        className,
      )}
      {...props}
    />
  );
}
