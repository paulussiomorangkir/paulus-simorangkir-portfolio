import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 dark:border-white/10 text-ink-700 dark:text-paper-100 transition-colors hover:bg-ink-900/5 dark:hover:bg-white/5"
    >
      {isDark ? <FiSun className="h-4 w-4" aria-hidden="true" /> : <FiMoon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
