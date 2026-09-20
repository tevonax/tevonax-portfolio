import { Container } from "@/components/ui/Container";
import {
  CloudIcon,
  CustomIcon,
  DesignIcon,
  MobileIcon,
  SparkIcon,
  WebIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services, techStack, type ServiceIcon } from "@/content/site";
import { cn } from "@/lib/cn";

const icons: Record<ServiceIcon, typeof WebIcon> = {
  web: WebIcon,
  mobile: MobileIcon,
  custom: CustomIcon,
  design: DesignIcon,
  cloud: CloudIcon,
  ai: SparkIcon,
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeader
            id="services-title"
            index="01"
            label="Services"
            title="What we build"
            description="End-to-end product engineering, from the first sketch to a system that runs reliably in production."
          />
        </Reveal>

        <ul className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <li
                key={service.title}
                className="group relative border-b border-r border-line after:absolute after:inset-x-0 after:-top-px after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                <article className="flex h-full flex-col p-7 transition-colors duration-200 hover:bg-surface md:p-8">
                  <div className="flex items-start justify-between">
                    <Icon className="size-7 text-ink transition-colors duration-200 group-hover:text-accent" />
                    <span className="type-label text-ink-subtle">
                      S/{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="type-h3 mt-12">{service.title}</h3>
                  <p className="mt-3 text-ink-muted">{service.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-8 font-mono text-xs text-ink-subtle">
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-24 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <h3 className="type-h3">Technology stack</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
              Modern, proven tools, chosen to fit each problem rather than the other way round.
            </p>
            <div className="mt-6 space-y-2.5 text-xs text-ink-subtle">
              <p className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="border border-ink px-2 py-0.5 font-mono text-ink"
                >
                  Core
                </span>
                Day-to-day tools
              </p>
              <p className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="border border-line px-2 py-0.5 font-mono text-ink-muted"
                >
                  Also
                </span>
                Used when a project calls for it
              </p>
            </div>
          </div>

          <dl className="border-t border-line md:col-span-9">
            {techStack.map((group) => (
              <div
                key={group.group}
                className="grid gap-4 border-b border-line py-6 lg:grid-cols-[11rem_1fr] lg:gap-8"
              >
                <dt>
                  <span className="block font-medium">{group.group}</span>
                  <span className="mt-1 block text-sm text-ink-subtle">{group.summary}</span>
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className={cn(
                          "border px-3 py-1 font-mono text-xs",
                          item.core ? "border-ink text-ink" : "border-line text-ink-muted",
                        )}
                      >
                        {item.name}
                        {item.core && <span className="sr-only"> (core tool)</span>}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
