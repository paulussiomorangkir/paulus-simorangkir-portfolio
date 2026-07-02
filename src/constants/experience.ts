import type { ExperienceItem } from "@/types";

/**
 * Ordered like a git log: most recent first.
 * TODO(Paulus): isi `period` dengan rentang tahun yang sebenarnya
 * (contoh: "2022 — 2023") sebelum publish.
 */
export const EXPERIENCE_ITEMS: readonly ExperienceItem[] = [
  
  {
    id: "yamaha",
    commitHash: "7e3b110",
    role: "Staf Administrasi",
    organization: "Yamaha",
    period: "Periode kerja",
    summary:
      "Menangani pencatatan dan administrasi yang rapi dan akurat — terbiasa bekerja dengan data terstruktur, sebuah kebiasaan yang relevan saat kini bekerja dengan API dan database.",
    tags: ["Administrasi", "Manajemen Data"],
  },
  {
    id: "bartender",
    commitHash: "4d8a02c",
    role: "Bartender & Pelayan",
    organization: "Layanan Hospitality",
    period: "Periode kerja",
    summary:
      "Bekerja langsung dengan pelanggan dalam tempo cepat — melatih kemampuan membaca kebutuhan orang lain, kemampuan yang kini diterapkan dalam merancang pengalaman pengguna (UX).",
    tags: ["Layanan Pelanggan", "Kerja di Bawah Tekanan"],
  },
  {
    id: "mie",
    commitHash: "1c0f5aa",
    role: "Staf Produksi",
    organization: "Pabrik Mie",
    period: "Periode kerja",
    summary:
      "Memulai karier dari lini produksi — memahami pentingnya proses yang konsisten dan efisien, nilai yang terus dibawa saat membangun sistem yang skalabel dan mudah dipelihara.",
    tags: ["Produksi", "Konsistensi Proses"],
  },
];
