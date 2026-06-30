import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { staggerContainer, staggerItem, revealViewport } from "@/animations/variants";
import { EXPERIENCE_ITEMS } from "@/constants/experience";

export function Experience() {
  return (
    <section id="experience" aria-label="Pengalaman" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="pengalaman"
          title="Riwayat kerja, dibaca seperti git log."
          description="Setiap peran adalah commit dalam perjalanan yang sama: belajar bekerja dengan rapi, sebelum belajar menulis kode yang rapi."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 space-y-0 border-l border-ink-900/10 dark:border-white/10"
        >
          {EXPERIENCE_ITEMS.map((item) => (
            <motion.li key={item.id} variants={staggerItem} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-paper dark:ring-ink-900"
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-clay-500 dark:text-clay-400">
                  {item.commitHash}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                  {item.role}
                </h3>
                <span className="text-sm text-ink-400">@ {item.organization}</span>
              </div>

              <p className="mt-1 font-mono text-xs text-ink-400">{item.period}</p>

              <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                {item.summary}
              </p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-ink-900/10 px-3 py-1 font-mono text-[11px] text-ink-500 dark:border-white/10 dark:text-ink-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
