import { Container } from "@/components/ui/Container";
import { PlusIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/content/site";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeader
            id="faq-title"
            index="05"
            label="FAQ"
            title="Questions, answered"
            description="How we work and what to expect before you get in touch."
          />
        </Reveal>

        {/* Native <details>: keyboard accessible and works without JavaScript. */}
        <Reveal className="mt-14 md:grid md:grid-cols-12 md:gap-8">
          <div className="border-b border-line md:col-span-9 md:col-start-4">
            {faqs.map((item) => (
              <details key={item.question} className="group border-t border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <PlusIcon className="size-5 shrink-0 text-ink-subtle transition-transform duration-200 group-open:rotate-45 group-open:text-accent" />
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-ink-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
