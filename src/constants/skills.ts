import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Antarmuka yang cepat, rapi, dan nyaman dipakai.",
    items: [
      { name: "HTML & CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "React", level: 4 },
      { name: "Vite", level: 4 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Integrasi",
    description: "Menyambungkan frontend ke data dan layanan nyata.",
    items: [
      { name: "Google Apps Script", level: 4 },
      { name: "REST API", level: 4 },
    ],
  },
  {
    id: "database",
    title: "Data",
    description: "Menyimpan dan mengelola data secara praktis.",
    items: [
      { name: "Google Sheets", level: 4 },
      { name: "MySQL (dasar)", level: 3 },
    ],
  },
  {
    id: "tools",
    title: "Alat & Workflow",
    description: "Perangkat kerja harian untuk membangun dan merancang.",
    items: [
      { name: "Git & GitHub", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Figma", level: 3 },
      { name: "Canva", level: 4 },
      { name: "Microsoft Office", level: 4 },
    ],
  },
  {
    id: "ai",
    title: "Kolaborasi dengan AI",
    description: "Mempercepat riset, desain, dan eksekusi kode dengan AI.",
    items: [
      { name: "ChatGPT", level: 4 },
      { name: "Claude", level: 4 },
      { name: "Google AI Studio", level: 3 },
      { name: "Lovable", level: 3 },
      { name: "Bolt", level: 3 },
    ],
  },
];
