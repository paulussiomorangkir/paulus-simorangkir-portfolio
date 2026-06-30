import { Container } from "@/components/common/Container";
import { SocialIcon } from "@/components/common/SocialIcon";
import { PROFILE, SOCIAL_LINKS } from "@/constants/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10 py-10 dark:border-white/10">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-base font-semibold text-ink-900 dark:text-paper-100">
            {PROFILE.name}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-400 dark:text-ink-400">
            © {year} · dibangun dengan React, TypeScript &amp; Tailwind CSS
          </p>
        </div>

        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.icon === "email" ? undefined : "_blank"}
                rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-600 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-white/10 dark:text-ink-200"
              >
                <SocialIcon icon={link.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
