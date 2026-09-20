import type { SVGProps } from "react";
import { MARK_PATH } from "./mark";

/** The Tevonax circle-and-T mark. Inherits colour from `currentColor`. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={MARK_PATH} />
    </svg>
  );
}
