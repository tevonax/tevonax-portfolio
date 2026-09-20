# Tevonax: portfolio website

Marketing and portfolio site for **Tevonax**, a software company.
Built with Next.js (App Router), React 19, TypeScript and Tailwind CSS v4. Pages are statically generated; the only server code is the contact form's Server Action.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command             | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the dev server                         |
| `npm run build`     | Production build                             |
| `npm run start`     | Serve the production build                   |
| `npm run lint`      | ESLint (includes a11y rules)                 |
| `npm run typecheck` | TypeScript check (also run in CI)            |

CI (`.github/workflows/ci.yml`) runs lint, type-check and build on every push and pull request.

## Editing content

All copy and data live in **`src/content/site.ts`**. No component changes are needed to update:

- contact email and GitHub link, plus optional LinkedIn, X, WhatsApp, booking link and location (any you fill in appear automatically in the Contact section and footer)
- services, the technology stack (mark day-to-day tools with `core: true`; the rest show as "also"), process steps, principles and FAQ
- **projects** (see below)

### Adding projects

The Work section shows a "coming soon" state until `projects` has entries. Add one and it appears automatically:

```ts
export const projects: readonly Project[] = [
  {
    title: "Project name",
    category: "Web application",
    year: "2026",
    summary: "One or two sentences on the problem and the outcome.",
    tags: ["Next.js", "PostgreSQL"],
    href: "https://example.com", // optional
  },
];
```

Only publish real projects, real numbers and real client names.

## Contact form

The form posts to a Server Action (`src/app/actions/contact.ts`), validates on the server, has a honeypot field against bots, works without JavaScript, and sends the enquiry with [Resend](https://resend.com) (`src/lib/mailer.ts`, plain `fetch`, no SDK).

Set these in the hosting environment (see `.env.example`):

| Variable             | Purpose                                                                 |
| -------------------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY`     | API key from Resend                                                     |
| `CONTACT_TO_EMAIL`   | Where enquiries are delivered (comma-separated for several)             |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `Tevonax <no-reply@your-domain.com>` |

If the variables are missing or the provider fails, the visitor keeps everything they typed and gets a prefilled email draft, so no enquiry is lost. If spam ever becomes a problem, add rate limiting or a CAPTCHA (for example Cloudflare Turnstile) in front of the action.

## Before launch checklist

- [ ] Confirm the business email in `src/content/site.ts` (`site.email`).
- [ ] Set up Resend and the three contact-form variables above; send a real test enquiry.
- [ ] Confirm the services, technology stack and FAQ answers reflect what Tevonax actually offers. Trim any tool the team cannot back up in a technical conversation: a shorter honest list is more credible.
- [ ] The primary domain is `site.url` in `src/content/site.ts` (`https://tevonax.com`). It drives canonical URLs, Open Graph tags, the sitemap and structured data in production builds. Set `NEXT_PUBLIC_SITE_URL` only to override it (for example on a staging domain).
- [ ] Review `src/app/privacy/page.tsx` (it describes the site as built: no cookies, no analytics) and update it if analytics or other tools are added.
- [ ] Replace the live-text wordmark in `src/components/brand/Logo.tsx` with the final vector logo, if available.
- [ ] Add real projects to `projects`, and any social/WhatsApp/booking links.

## Deploying to Vercel with tevonax.com

1. **Push the repo to GitHub** (Vercel deploys from it).
2. **Plan:** Vercel's Hobby plan is restricted to non-commercial, personal use. A company website belongs on the Pro plan (or another host).
3. **Import the project** in Vercel (Next.js is detected automatically). Add the environment variables `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (see `.env.example`), then deploy. Test everything on the temporary `*.vercel.app` URL first.
4. **Add the domain:** Project → Settings → Domains → add `tevonax.com` and `www.tevonax.com`, and set `www` to redirect to `tevonax.com`.
5. **DNS at Spaceship** (keep Spaceship's nameservers): add exactly the records Vercel displays for your project, normally an `A` record for the apex (host `@`) and a `CNAME` for `www`. Delete any existing parking records for those two hosts, and leave every other record (email `MX`, verification `TXT`) untouched. Do not switch nameservers unless you copy all existing records first.
6. Wait until Vercel shows the domain as valid. HTTPS is issued automatically.
7. **Email:** create the `hello@tevonax.com` mailbox (or forwarding), verify a sending subdomain in Resend (for example `mail.tevonax.com`) by adding the DNS records Resend shows, set `CONTACT_FROM_EMAIL` accordingly, redeploy, and send a real test enquiry.
8. **After launch:** add the site to Google Search Console and submit `https://tevonax.com/sitemap.xml`.

## Design system

- **Brand**: monochrome, taken from the logo (near-black on white), with a single ultramarine accent used sparingly for focus, hover and small highlights.
- **Shape**: corners are square everywhere in the UI by design (no border radius). Only the brand mark itself is circular. Keep new components consistent.
- **Themes**: light and dark, following the OS preference and remembered after the visitor toggles. Tokens live in `src/app/globals.css`; contrast ratios are documented there.
- **Type**: Inter (text), JetBrains Mono (labels), Open Sans ExtraBold (wordmark only). Fluid, clamp-based scale: `type-display`, `type-h2`, `type-h3`, `type-lead`, `type-label`.
- **Structure**: one `<h1>` per page, `<h2>` per section, `<h3>` per card; landmarks, skip link, visible focus states, scroll-spy navigation, and `prefers-reduced-motion` respected.
- **Signature motif**: the circle-and-T mark (`src/components/brand/mark.ts`) is the single source of truth for the logo geometry, reused by the header, hero graphic, favicon, app icons and social image.

## Performance notes

`experimental.inlineCss` is enabled in `next.config.ts`. It inlines the (tiny) Tailwind CSS to remove a render-blocking request for first-time visitors, and moved Lighthouse mobile performance from the mid-70s to about 95. It is an experimental Next.js flag: if a future upgrade misbehaves, removing it is safe.

## Project structure

```
src/
  app/            layout, pages (home, privacy), error pages, metadata routes
    actions/      Server Actions (contact form)
  components/
    brand/        logo mark, wordmark, hero graphic
    layout/       header, nav, mobile nav, theme toggle, footer
    sections/     hero, services, work, process, approach, faq, contact (+ form)
    ui/           button, container, section header, scroll reveal, icons
  content/site.ts all copy and data
  lib/            helpers (site URL, theme init, mailer, inquiry validation)
public/icons/     app icons referenced by the web manifest
```

## License

MIT, see [LICENSE](./LICENSE).
