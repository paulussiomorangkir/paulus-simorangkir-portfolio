import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import type { SocialLink } from "@/types";

const ICON_MAP: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: FiGithub,
  instagram: FiInstagram,
  whatsapp: FaWhatsapp,
  email: FiMail,
};

interface SocialIconProps {
  icon: SocialLink["icon"];
  className?: string;
}

export function SocialIcon({ icon, className }: SocialIconProps) {
  const IconComponent = ICON_MAP[icon];
  return <IconComponent className={className} aria-hidden="true" />;
}
