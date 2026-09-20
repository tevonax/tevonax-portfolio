import type { CSSProperties } from "react";
import { Aperture } from "@/components/brand/Aperture";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Staggered entrance delay, consumed by `.hero-rise` in globals.css. */
const rise = (delay: number) => ({ "--rise-delay": `${delay}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-0" />

      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="type-display">
            Software, built with <span className="dimension">precision</span>.
          </h1>

          <p className="hero-rise type-lead mt-8 max-w-xl text-ink-muted" style={rise(120)}>
            Tevonax designs and engineers web platforms, mobile apps and custom
            software: clear in structure, careful in detail and built to last.
          </p>

          <div className="hero-rise mt-10 flex flex-wrap gap-3" style={rise(220)}>
            <ButtonLink href="#contact" size="lg" arrow>
              Start a project
            </ButtonLink>
            <ButtonLink href="#services" size="lg" variant="secondary">
              Explore our services
            </ButtonLink>
          </div>
        </div>

        <figure className="hero-rise lg:col-span-5" style={rise(160)}>
          <Aperture className="mx-auto w-full max-w-[26rem] lg:max-w-none" />
          <figcaption className="type-label mt-5 text-center text-ink-subtle">
            Fig. 01 &mdash; The Tevonax mark
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
