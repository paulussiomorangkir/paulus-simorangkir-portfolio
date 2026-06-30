import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { fadeUp, revealViewport } from "@/animations/variants";
import { PROFILE } from "@/constants/profile";

const FACTS = [
  { label: "Lokasi", value: PROFILE.location },
  { label: "Peran", value: PROFILE.role },
  { label: "Fokus", value: "React, TypeScript & AI tooling" },
  { label: "Status", value: "Terbuka untuk proyek & kolaborasi" },
];

export function About() {
  return (
    <section id="about" aria-label="Tentang" className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <SectionHeading eyebrow="tentang" title="Dari lini produksi ke lini kode." />

        <div className="md:col-span-2 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="space-y-4 text-base leading-relaxed text-ink-500 dark:text-ink-300"
          >
            <p>
              Sebelum menulis baris kode pertama, perjalanan kerja saya dimulai dari hal-hal yang
              jauh dari layar komputer — dari instalasi gizi rumah sakit, meja administrasi,
              konter bar, hingga lini produksi pabrik. Setiap peran itu mengajarkan hal yang sama:
              kerja yang baik selalu soal proses yang rapi dan bisa diandalkan.
            </p>
            <p>
              Nilai itu yang saya bawa saat memutuskan fokus ke pengembangan web. Lulus dari SMK
              Yayasan Perguruan Pelita Pematangsiantar lalu menempuh Diploma 3 di Universitas
              Imelda Medan, saya menemukan di frontend engineering hal yang selama ini saya cari:
              ruang untuk membangun sesuatu yang presisi, terstruktur, dan terasa baik dipakai
              orang lain.
            </p>
            <p>
              Sekarang saya banyak berkolaborasi dengan tooling AI — ChatGPT, Claude, dan
              beberapa AI coding assistant — bukan untuk menggantikan cara berpikir, tapi untuk
              mempercepat eksplorasi ide dan menulis kode produksi yang lebih baik.
            </p>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-10 grid grid-cols-2 gap-6 self-start md:mt-0"
          >
            {FACTS.map((fact) => (
              <div key={fact.label} className="border-l-2 border-indigo-500/30 pl-4">
                <dt className="font-mono text-xs uppercase tracking-wide text-ink-400">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-800 dark:text-paper-100">
                  {fact.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
