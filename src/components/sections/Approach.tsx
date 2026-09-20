import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { principles } from "@/content/site";

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="bg-inverse py-24 text-inverse-ink md:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeader
            id="approach-title"
            index="04"
            label="Approach"
            title="What you can expect from us"
            description="The principles behind every project, whatever its size."
            tone="inverse"
          />
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-inverse-line bg-inverse-line md:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle.title} className="bg-inverse p-8 md:p-10">
              <p className="font-mono text-xs text-accent-on-inverse">
                P/{String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="type-h3 mt-8">{principle.title}</h3>
              <p className="mt-3 max-w-md text-inverse-muted">{principle.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
