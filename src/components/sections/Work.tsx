import { LogoMark } from "@/components/brand/LogoMark";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, type Project } from "@/content/site";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col border border-line p-7 transition-colors duration-200 hover:border-line-strong hover:bg-surface md:p-8">
      <div className="type-label flex min-h-5 items-center justify-between gap-4 text-ink-subtle">
        <span>
          {project.category} &middot; {project.year}
        </span>
        {project.href && (
          <ArrowUpRight className="size-5 shrink-0 transition-colors group-hover:text-accent" />
        )}
      </div>
      <h3 className="type-h3 mt-10">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0"
          >
            {project.title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-3 text-ink-muted">{project.summary}</p>
      <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-8 font-mono text-xs text-ink-subtle">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

/** Shown until real projects are added to `projects` in src/content/site.ts. */
function ComingSoon() {
  return (
    <div className="relative mt-14 overflow-hidden border border-dashed border-line-strong bg-surface">
      <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-0" />
      <div className="relative grid items-center gap-10 p-8 md:grid-cols-12 md:p-14">
        <div className="md:col-span-8">
          <p className="type-label text-ink-subtle">Case studies</p>
          <h3 className="type-h3 mt-3 text-[clamp(1.5rem,1.2rem+1vw,2rem)]">
            Case studies are coming soon.
          </h3>
          <p className="mt-4 max-w-xl text-ink-muted">
            We publish each project as a proper write-up rather than a screenshot, and they
            will appear here as they are released. In the meantime, tell us about your
            project and we will show you how we would approach it.
          </p>
          <div className="mt-8">
            <ButtonLink href="#contact" arrow>
              Discuss your project
            </ButtonLink>
          </div>
        </div>
        <div className="hidden justify-end md:col-span-4 md:flex">
          <LogoMark className="size-40 text-line-strong" />
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="border-t border-line py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeader
            id="work-title"
            index="02"
            label="Work"
            title="Selected work"
            description="Projects presented as case studies: the problem, the approach and the result."
          />
        </Reveal>

        {projects.length > 0 ? (
          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.title}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <Reveal>
            <ComingSoon />
          </Reveal>
        )}
      </Container>
    </section>
  );
}
