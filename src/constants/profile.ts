import type { SocialLink } from "@/types";

export const PROFILE = {
  name: "Paulus Simorangkir",
  nickname: "Paulus",
  role: "Frontend Web Developer & AI Enthusiast",
  tagline: "Membangun pengalaman web modern sambil terus belajar AI dan teknologi baru.",
  email: "paulusssimorangkir@gmail.com",
  whatsapp: "083821474643",
  whatsappHref: "https://wa.me/6283821474643",
  address: "Jalan Bilal Gang Dahlia No.02",
  location: "Pematangsiantar / Medan, Sumatera Utara",
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/paulussiomorangkir", icon: "github" },
  { label: "Instagram", href: "https://instagram.com/paulus_smkr", icon: "instagram" },
  { label: "WhatsApp", href: PROFILE.whatsappHref, icon: "whatsapp" },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: "email" },
];

export const NAV_LINKS = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Pendidikan", href: "#education" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
] as const;
