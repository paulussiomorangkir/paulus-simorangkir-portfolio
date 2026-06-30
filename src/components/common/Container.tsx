import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6 md:px-10", className)} {...rest}>
      {children}
    </div>
  );
}
