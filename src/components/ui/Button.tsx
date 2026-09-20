import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-canvas hover:bg-accent hover:text-accent-ink",
  secondary: "border border-line-strong text-ink hover:border-ink hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

type Shared = {
  variant?: Variant;
  size?: Size;
  /** Show a trailing arrow that nudges on hover. */
  arrow?: boolean;
};

function classes({ variant = "primary", size = "md", className }: Shared & { className?: string }) {
  return cn(base, variants[variant], sizes[size], className);
}

const arrowIcon = (
  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
);

export function ButtonLink({
  variant,
  size,
  arrow = false,
  className,
  children,
  ...props
}: ComponentProps<"a"> & Shared) {
  return (
    <a className={classes({ variant, size, className })} {...props}>
      {children}
      {arrow && arrowIcon}
    </a>
  );
}

export function Button({
  variant,
  size,
  arrow = false,
  className,
  children,
  ...props
}: ComponentProps<"button"> & Shared) {
  return (
    <button type="button" className={classes({ variant, size, className })} {...props}>
      {children}
      {arrow && arrowIcon}
    </button>
  );
}
