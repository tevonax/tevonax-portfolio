import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/content/site";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeader
            id="process-title"
            index="03"
            label="Process"
            title="How we work"
            description="A clear, repeatable path from idea to launch, with you involved at every stage."
          />
        </Reveal>

        <ol className="mt-16 md:grid md:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative border-l border-line-strong pb-10 pl-7 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-7 md:pt-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 size-2.5 bg-accent md:left-0 md:top-0 md:-translate-y-1/2"
              />
              <p className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="type-h3 mt-3">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
