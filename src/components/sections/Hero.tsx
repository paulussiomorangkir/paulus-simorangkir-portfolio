import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { heroEntrance } from "@/animations/variants";
import { PROFILE } from "@/constants/profile";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Perkenalan"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="bg-blueprint-grid animate-grid-fade pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />

      <Container className="relative">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroEntrance}
          className="font-mono text-sm text-indigo-500 dark:text-indigo-400"
        >
          $ whoami
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={heroEntrance}
          className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 dark:text-paper-100 sm:text-5xl md:text-6xl"
        >
          {PROFILE.name},
          <span className="block text-ink-400 dark:text-ink-300">{PROFILE.role}.</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={heroEntrance}
          className="mt-6 max-w-prose text-lg leading-relaxed text-ink-500 dark:text-ink-300"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={heroEntrance}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            Lihat Proyek
            <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            variant="secondary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hubungi Saya
          </Button>
        </motion.div>

        <motion.a
          href="#about"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={heroEntrance}
          aria-label="Gulir ke bagian Tentang"
          className="mt-20 inline-flex items-center gap-2 font-mono text-xs text-ink-400 transition-colors hover:text-indigo-500 dark:text-ink-400"
        >
          <FiArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
          scroll
        </motion.a>
      </Container>
    </section>
  );
}
