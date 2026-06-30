import type { ProjectItem } from "@/types";

export const PROJECT_ITEMS: readonly ProjectItem[] = [
  {
    id: "sistem-penggajian",
    title: "Sistem Informasi Penggajian — Fakultas Kedokteran",
    description:
      "Sistem untuk mengelola data penggajian staf dan dosen, menggantikan proses manual dengan alur kerja digital yang terstruktur dan mudah diaudit.",
    role: "Pengembang",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Merancang struktur basis data untuk data kepegawaian dan komponen gaji",
      "Membangun antarmuka input dan rekap yang mudah digunakan staf non-teknis",
      "Mengurangi kesalahan pencatatan dibanding proses manual sebelumnya",
    ],
    status: "live",
  },
  {
    id: "portfolio-pribadi",
    title: "Situs Web Portofolio Pribadi",
    description:
      "Portofolio ini sendiri — dibangun dengan arsitektur berbasis fitur, animasi yang halus, dan integrasi formulir kontak langsung ke Google Sheets.",
    role: "Desainer & Pengembang",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Apps Script"],
    highlights: [
      "Arsitektur skalabel berbasis fitur dengan TypeScript strict mode",
      "Formulir kontak tanpa backend server, terhubung ke Google Sheets",
      "Mendukung mode gelap/terang dan navigasi keyboard penuh",
    ],
    href: "/",
    repoHref: "https://github.com/paulussiomorangkir",
    status: "live",
  },
];
