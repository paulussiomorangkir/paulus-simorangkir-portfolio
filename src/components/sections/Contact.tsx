import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/features/contact/ContactForm";
import { fadeUp, revealViewport } from "@/animations/variants";
import { PROFILE } from "@/constants/profile";

export function Contact() {
  return (
    <section id="contact" aria-label="Kontak" className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <SectionHeading
            eyebrow="kontak"
            title="Punya proyek atau ide kolaborasi?"
            description="Isi formulirnya, atau hubungi langsung lewat salah satu kanal di bawah. Saya biasanya membalas dalam 1–2 hari kerja."
          />

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-8 space-y-4"
          >
            <li className="flex items-center gap-3 text-sm text-ink-600 dark:text-ink-200">
              <FiMail className="h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
              <a href={`mailto:${PROFILE.email}`} className="hover:text-indigo-500">
                {PROFILE.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-ink-600 dark:text-ink-200">
              <FiPhone className="h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
              <a href={PROFILE.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                {PROFILE.whatsapp} (WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-200">
              <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
              <span>{PROFILE.address}</span>
            </li>
          </motion.ul>
        </div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealViewport}>
          <Card className="md:p-8">
            <ContactForm />
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
