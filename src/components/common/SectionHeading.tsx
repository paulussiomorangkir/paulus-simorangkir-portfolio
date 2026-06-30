import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "@/animations/variants";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  /** Short slug shown as a code-comment eyebrow, e.g. "tentang" -> "// tentang" */
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={cn("max-w-prose", align === "center" && "mx-auto text-center", className)}
    >
      <p className="font-mono text-sm text-indigo-500 dark:text-indigo-400" aria-hidden="true">
        {`// ${eyebrow}`}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 dark:text-paper-100 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}
