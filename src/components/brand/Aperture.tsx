import { MARK_PATH, MARK_T_PATH } from "./mark";

/**
 * Hero graphic: the Tevonax mark drawn like a technical figure. A light
 * sweeps down through the T cut-out while two thin orbit rings turn slowly
 * around the disc. Decorative; the caption in the hero names it.
 */
export function Aperture({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-20 -20 104 104"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <clipPath id="aperture-t">
          <path d={MARK_T_PATH} />
        </clipPath>
        <linearGradient id="aperture-scan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--accent)", stopOpacity: 0 }} />
          <stop offset="0.6" style={{ stopColor: "var(--accent)", stopOpacity: 0.5 }} />
          <stop offset="1" style={{ stopColor: "var(--accent)", stopOpacity: 0 }} />
        </linearGradient>
      </defs>

      {/* Measurement ticks around the disc */}
      <circle cx="32" cy="32" r="41" className="stroke-line-strong" strokeWidth="0.3" />
      <circle
        cx="32"
        cy="32"
        r="50"
        className="stroke-line-strong"
        strokeWidth="0.3"
        strokeDasharray="0.6 1.8"
      />

      {/* Orbiting nodes (nested groups: translate to centre, then rotate about it) */}
      <g transform="translate(32 32)">
        <g className="orbit" style={{ ["--orbit-duration" as string]: "48s" }}>
          <circle cx="41" cy="0" r="1.15" className="fill-accent" />
        </g>
      </g>
      <g transform="translate(32 32)">
        <g className="orbit" style={{ ["--orbit-duration" as string]: "90s", animationDirection: "reverse" }}>
          <circle cx="-50" cy="0" r="0.9" className="fill-ink" />
        </g>
      </g>

      {/* Crosshair registration marks */}
      <g className="stroke-ink-subtle" strokeWidth="0.35" strokeLinecap="round">
        <path d="M32 -16v6M32 74v-6M-16 32h6M74 32h-6" />
      </g>

      {/* The mark */}
      <path d={MARK_PATH} className="fill-ink" />

      {/* Light travelling down the T */}
      <g clipPath="url(#aperture-t)">
        <rect
          className="aperture-scan"
          x="8"
          y="0"
          width="48"
          height="24"
          fill="url(#aperture-scan)"
        />
      </g>
    </svg>
  );
}
