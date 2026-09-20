import Link from "next/link";
import { cn } from "@/lib/cn";
import { LogoMark } from "./LogoMark";

/**
 * Mark + wordmark lockup. The wordmark is live text set in Open Sans
 * ExtraBold, which closely matches the supplied logo lettering.
 * When the final vector logo is available, swap the contents of this
 * component for it; every usage picks up the change.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tevonax home"
      className={cn("inline-flex items-center gap-1.5 text-ink", className)}
    >
      <LogoMark className="size-8 shrink-0" />
      <span
        aria-hidden="true"
        className="font-brand text-2xl font-extrabold leading-none tracking-[-0.02em]"
      >
        tevonax
      </span>
    </Link>
  );
}
