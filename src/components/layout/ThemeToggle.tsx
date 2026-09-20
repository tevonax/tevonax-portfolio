"use client";

import { MoonIcon, SunIcon } from "@/components/ui/icons";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Storage can be unavailable (private mode); the toggle still works for this visit.
  }
}

/**
 * The initial theme is applied before first paint by the inline script in
 * layout.tsx. This button only flips it; icons switch via the `dark:` variant,
 * so there is no hydration mismatch and no flash.
 */
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="grid size-10 place-items-center text-ink-muted transition-colors hover:bg-sunken hover:text-ink"
    >
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="block size-5 dark:hidden" />
    </button>
  );
}
