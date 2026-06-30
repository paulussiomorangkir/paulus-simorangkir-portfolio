import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Card } from "@/components/ui/Card";
import { staggerItem } from "@/animations/variants";
import type { ProjectItem } from "@/types";

const STATUS_LABEL: Record<ProjectItem["status"], string> = {
  live: "Live",
  "in-progress": "Sedang dikerjakan",
  concept: "Konsep",
};

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Card className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-paper-100">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full bg-signal-500/10 px-3 py-1 font-mono text-[11px] text-signal-600 dark:text-signal-500">
            {STATUS_LABEL[project.status]}
          </span>
        </div>

        <p className="mt-1 text-sm font-medium text-indigo-500 dark:text-indigo-400">{project.role}</p>

        <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm text-ink-500 dark:text-ink-300">
              <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
              {highlight}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-ink-900/10 px-3 py-1 font-mono text-[11px] text-ink-500 dark:border-white/10 dark:text-ink-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-4 border-t border-ink-900/10 pt-4 dark:border-white/10">
          {project.href && (
            <a
              href={project.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-indigo-500 dark:text-paper-100"
            >
              Kunjungi <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
          {project.repoHref && (
            <a
              href={project.repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-indigo-500 dark:text-paper-100"
            >
              <FiGithub className="h-3.5 w-3.5" aria-hidden="true" /> Kode
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
