import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-900/10 dark:border-white/10",
        "bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm",
        "p-6 transition-colors",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
