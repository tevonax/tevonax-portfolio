import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";

const linkClass =
  "group inline-flex items-center gap-1.5 text-ink underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent";

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
      <ArrowUpRight className="size-4 text-ink-subtle transition-colors group-hover:text-accent" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Contact() {
  const channels: { label: string; node: ReactNode }[] = [
    {
      label: "Email",
      node: (
        <a href={`mailto:${site.email}`} className={`${linkClass} font-mono text-sm`}>
          {site.email}
        </a>
      ),
    },
  ];
  if (site.bookingUrl)
    channels.push({ label: "Book a call", node: <ExternalLink href={site.bookingUrl}>Schedule a call</ExternalLink> });
  if (site.whatsapp)
    channels.push({
      label: "WhatsApp",
      node: <ExternalLink href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}>Message us</ExternalLink>,
    });
  if (site.linkedin) channels.push({ label: "LinkedIn", node: <ExternalLink href={site.linkedin}>LinkedIn</ExternalLink> });
  if (site.x) channels.push({ label: "X", node: <ExternalLink href={site.x}>X (Twitter)</ExternalLink> });
  if (site.location) channels.push({ label: "Location", node: <span>{site.location}</span> });

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <p className="type-label text-ink-subtle">
            <span className="text-accent">06</span>
            <span aria-hidden="true" className="mx-2 opacity-40">
              /
            </span>
            Contact
          </p>
          <h2 id="contact-title" className="type-display mt-6 max-w-4xl">
            Let&rsquo;s build something solid.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <p className="type-lead max-w-md text-ink-muted">
              Tell us what you are building and where you want it to go. We will reply with
              clear, honest next steps.
            </p>
            <dl className="mt-10 space-y-6 border-t border-line pt-6">
              {channels.map((channel) => (
                <div key={channel.label}>
                  <dt className="type-label text-ink-subtle">{channel.label}</dt>
                  <dd className="mt-2">{channel.node}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100} className="md:col-span-8">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
