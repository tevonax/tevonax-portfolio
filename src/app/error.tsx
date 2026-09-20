"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Route-level error boundary. `retry` re-fetches and re-renders the failed segment. */
export default function ErrorPage({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <section aria-labelledby="error-title" className="py-28 md:py-40">
      <Container>
        <p className="type-label text-ink-subtle">
          <span className="text-accent">500</span>
          <span aria-hidden="true" className="mx-2 opacity-40">
            /
          </span>
          Something went wrong
        </p>
        <h1 id="error-title" className="type-display mt-6 max-w-3xl">
          We hit an unexpected error.
        </h1>
        <p className="type-lead mt-7 max-w-xl text-ink-muted">
          It is not you. Please try again, and if the problem continues, let us know.
        </p>
        <div className="mt-10">
          <Button size="lg" onClick={() => retry()}>
            Try again
          </Button>
        </div>
      </Container>
    </section>
  );
}
