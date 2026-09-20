/**
 * Canonical site URL used for metadata, sitemap and structured data.
 *
 * Set NEXT_PUBLIC_SITE_URL in the hosting environment (e.g. https://your-domain.com).
 * On Vercel, the production domain is picked up automatically as a fallback.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  return "http://localhost:3000";
}
