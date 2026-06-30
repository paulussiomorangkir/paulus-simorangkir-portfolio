import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { staggerContainer, revealViewport } from "@/animations/variants";
import { PROJECT_ITEMS } from "@/constants/projects";

export function ProjectGrid() {
  return (
    <section id="projects" aria-label="Proyek" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="proyek"
          title="Hal-hal yang sudah dibangun."
          description="Dipilih bukan untuk menunjukkan jumlah, tapi untuk menunjukkan cara berpikir saat membangun."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {PROJECT_ITEMS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
