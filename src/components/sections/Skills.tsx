import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem, revealViewport } from "@/animations/variants";
import { SKILL_CATEGORIES } from "@/constants/skills";

export function Skills() {
  return (
    <section id="skills" aria-label="Keahlian" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="keahlian"
          title="Tools dan teknologi yang dipakai sehari-hari."
          description="Bukan daftar lengkap segalanya — ini yang benar-benar saya pakai untuk membangun dan mengirim produk."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div key={category.id} variants={staggerItem}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-100">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-300">
                  {category.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-ink-700 dark:text-ink-100">{item.name}</span>
                      </div>
                      <div
                        className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-900/10 dark:bg-white/10"
                        role="img"
                        aria-label={`Tingkat kemahiran ${item.name}: ${item.level} dari 5`}
                      >
                        <div
                          className="h-full rounded-full bg-indigo-500"
                          style={{ width: `${(item.level / 5) * 100}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
