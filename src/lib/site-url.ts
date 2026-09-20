import { site } from "@/content/site";

/**
 * Canonical site URL used for metadata, sitemap, robots and structured data.
 *
 * Order of precedence:
 *  1. NEXT_PUBLIC_SITE_URL, if set (e.g. for a staging domain)
 *  2. Production builds: the real domain from `site.url`
 *  3. Local development: http://localhost:3000
 *
 * Because production builds default to the real domain, canonical URLs and
 * social previews are correct on Vercel even before any variable is set, and
 * preview deployments point back at the main domain instead of competing with it.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  if (process.env.NODE_ENV === "production") return site.url;

  return "http://localhost:3000";
}
