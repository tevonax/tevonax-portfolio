"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

type NavItem = { label: string; href: string };

/** Disclosure menu shown below the `lg` breakpoint. Anchored to the sticky header. */
export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  // Close on Escape or when the user taps outside the menu.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="grid size-10 place-items-center text-ink transition-colors hover:bg-sunken"
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-canvas shadow-[0_24px_40px_-24px_rgb(0_0_0/0.25)]"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[1200px] px-5 pb-6 pt-2 sm:px-8">
          <ul>
            {items.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex h-14 items-center justify-between text-lg font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="/#contact"
            size="lg"
            arrow
            onClick={() => setOpen(false)}
            className="mt-6 w-full"
          >
            Start a project
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
}
