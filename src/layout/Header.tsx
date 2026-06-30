import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Container } from "@/components/common/Container";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { NAV_LINKS, PROFILE } from "@/constants/profile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-indigo-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Lompat ke konten utama
      </a>

      <header className="sticky top-0 z-50 w-full">
        <div className="glass-surface mx-3 mt-3 rounded-2xl md:mx-6 md:mt-4">
          <Container className="flex h-16 items-center justify-between !max-w-none">
            <a
              href="#hero"
              className="font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-paper-100"
            >
              {PROFILE.nickname}
              <span className="text-indigo-500">.dev</span>
            </a>

            <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-200 dark:hover:text-paper-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />
              <a
                href="#contact"
                className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
              >
                Hubungi Saya
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-900 dark:text-paper-100 md:hidden"
            >
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </Container>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              aria-label="Navigasi mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="glass-surface mx-3 mt-2 rounded-2xl p-4 md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-900/5 dark:text-paper-100 dark:hover:bg-white/5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center justify-between border-t border-ink-900/10 px-3 pt-3 dark:border-white/10">
                <ThemeToggle />
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white"
                >
                  Hubungi Saya
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
