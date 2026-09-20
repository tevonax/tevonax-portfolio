"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type NavItem = { label: string; href: string };

const sectionId = (href: string) => href.replace("/#", "");

/**
 * Primary navigation with scroll-spy: the link for the section crossing the
 * middle of the viewport is marked as the current location.
 */
export function DesktopNav({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = items.map((item) => sectionId(item.href));
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActive(ids.find((id) => visible.has(id)) ?? null);
      },
      // A thin band in the middle of the viewport decides which section is "current".
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items, pathname]);

  const current = pathname === "/" ? active : null;

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const isCurrent = current === sectionId(item.href);
        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={isCurrent ? "location" : undefined}
              className={cn(
                "px-3.5 py-2 text-sm transition-colors hover:bg-sunken hover:text-ink",
                isCurrent
                  ? "text-ink shadow-[inset_0_-2px_0_var(--accent)]"
                  : "text-ink-muted",
              )}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
