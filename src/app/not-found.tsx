import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="py-28 md:py-40">
      <Container>
        <p className="type-label text-ink-subtle">
          <span className="text-accent">404</span>
          <span aria-hidden="true" className="mx-2 opacity-40">
            /
          </span>
          Not found
        </p>
        <h1 id="not-found-title" className="type-display mt-6 max-w-3xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="type-lead mt-7 max-w-xl text-ink-muted">
          The link may be broken or the page may have moved. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" size="lg" arrow>
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
