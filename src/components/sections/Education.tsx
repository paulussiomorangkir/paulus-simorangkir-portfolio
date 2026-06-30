import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem, revealViewport } from "@/animations/variants";
import { EDUCATION_ITEMS } from "@/constants/education";

export function Education() {
  return (
    <section id="education" aria-label="Pendidikan" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="pendidikan" title="Latar belakang pendidikan." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {EDUCATION_ITEMS.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card className="h-full">
                <p className="font-mono text-xs text-ink-400">{item.period}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                  {item.institution}
                </h3>
                <p className="mt-1 text-sm font-medium text-indigo-500 dark:text-indigo-400">
                  {item.credential}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {item.summary}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
