/**
 * Geometry of the Tevonax mark on a 64×64 grid, measured from the supplied
 * logo: a filled circle with a "T" cut into it. The T's stem runs out through
 * the bottom edge of the circle.
 *
 * Shared by the header logo, hero graphic and generated icons so the mark is
 * defined in exactly one place.
 */

/** Circle with the T removed (single closed path, no masking required). */
export const MARK_PATH =
  "M37.6 63.51V22.9H51.9V13.5H12.1V22.9H26.4V63.51A32 32 0 1 1 37.6 63.51Z";

/** The T itself, bounded by the circle's edge (used for effects inside the cut). */
export const MARK_T_PATH =
  "M26.4 22.9H12.1V13.5H51.9V22.9H37.6V63.51A32 32 0 0 1 26.4 63.51Z";
