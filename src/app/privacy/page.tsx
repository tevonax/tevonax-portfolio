import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles personal information on this website.`,
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "20 September 2026";

const h2 = "type-h3 mt-12";
const p = "mt-4 max-w-2xl leading-relaxed text-ink-muted";
const ul = "mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-ink-muted marker:text-ink-subtle";

/**
 * This policy describes how the site behaves today: no cookies, no analytics,
 * no advertising trackers. If any of that changes (analytics, embeds, a CRM),
 * update this page in the same change.
 */
export default function PrivacyPage() {
  return (
    <section aria-labelledby="privacy-title" className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="type-label text-ink-subtle">Legal</p>
          <h1 id="privacy-title" className="type-h2 mt-5">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-ink-subtle">Last updated: {LAST_UPDATED}</p>

          <p className={`${p} mt-8`}>
            This policy explains what personal information {site.name} (&ldquo;we&rdquo;)
            handles when you use this website, and why.
          </p>

          <h2 className={h2}>What we collect</h2>
          <ul className={ul}>
            <li>
              <strong className="font-medium text-ink">Information you send us.</strong> If you
              use the contact form or email us, we receive your name, email address, the project
              details you choose to share, and optionally your company and budget.
            </li>
            <li>
              <strong className="font-medium text-ink">Standard server logs.</strong> Our hosting
              provider records technical data such as IP address, browser type and the pages
              requested, to operate and secure the service.
            </li>
          </ul>
          <p className={p}>
            We do not run analytics or advertising trackers on this website.
          </p>

          <h2 className={h2}>Cookies and local storage</h2>
          <p className={p}>
            We do not set cookies. If you switch between light and dark themes, your choice is
            saved in your browser&rsquo;s local storage so the site remembers it. That value
            stays on your device and is not sent to us.
          </p>

          <h2 className={h2}>How we use your information</h2>
          <ul className={ul}>
            <li>To reply to your enquiry and discuss your project.</li>
            <li>To keep reasonable business records of our correspondence.</li>
            <li>To keep the website secure and working.</li>
          </ul>

          <h2 className={h2}>Who we share it with</h2>
          <p className={p}>
            Contact-form messages are delivered to us by an email delivery provider that
            processes them on our behalf, and the website is served by a hosting provider. We do
            not sell your personal information.
          </p>

          <h2 className={h2}>How long we keep it</h2>
          <p className={p}>
            We keep enquiries only for as long as we need them to respond to you and to keep
            reasonable business records.
          </p>

          <h2 className={h2}>Your choices</h2>
          <p className={p}>
            You can ask us to access, correct or delete the personal information we hold about
            you at any time by emailing{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent"
            >
              {site.email}
            </a>
            .
          </p>

          <h2 className={h2}>Changes to this policy</h2>
          <p className={p}>
            If we change how this website handles personal information, we will update this page
            and the date above.
          </p>
        </div>
      </Container>
    </section>
  );
}
