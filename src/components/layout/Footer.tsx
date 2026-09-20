import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, GithubIcon, MailIcon } from "@/components/ui/icons";
import { nav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    site.linkedin && { label: "LinkedIn", href: site.linkedin },
    site.x && { label: "X (Twitter)", href: site.x },
  ].filter((item): item is { label: string; href: string } => Boolean(item));

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <Container className="pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              Tevonax is a software company building web platforms, mobile apps and custom
              software.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className="type-label text-ink-subtle">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="type-label text-ink-subtle">Connect</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
                >
                  <MailIcon className="size-4" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
                  >
                    <ArrowUpRight className="size-4" />
                    {social.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
              {site.location && <li className="text-ink-subtle">{site.location}</li>}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Tevonax. All rights reserved.</p>
          <p className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <span>Designed and built by Tevonax.</span>
          </p>
        </div>
      </Container>

      {/* Oversized wordmark, cropped by the page edge. Purely decorative and intentionally
          low-contrast, so it is generated CSS content rather than real text. */}
      <div
        aria-hidden="true"
        className="pointer-events-none -mb-[0.16em] select-none text-center font-brand text-[clamp(5rem,23vw,21rem)] font-extrabold leading-[0.85] tracking-[-0.04em] text-sunken before:content-['tevonax']"
      />
    </footer>
  );
}
