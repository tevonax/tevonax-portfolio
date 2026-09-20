import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  /** id of the <h2>; the parent <section> references it via aria-labelledby. */
  id: string;
  index: string;
  label: string;
  title: string;
  description?: string;
  tone?: "default" | "inverse";
};

/**
 * Editorial section header: a numbered mono label in the left column and the
 * heading + lead in the right. Renders the section's single <h2>.
 */
export function SectionHeader({
  id,
  index,
  label,
  title,
  description,
  tone = "default",
}: SectionHeaderProps) {
  const inverse = tone === "inverse";

  return (
    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
      <p
        className={cn(
          "type-label md:col-span-3 md:pt-3",
          inverse ? "text-inverse-muted" : "text-ink-subtle",
        )}
      >
        <span className={inverse ? "text-accent-on-inverse" : "text-accent"}>{index}</span>
        <span aria-hidden="true" className="mx-2 opacity-40">
          /
        </span>
        {label}
      </p>
      <div className="md:col-span-9">
        <h2 id={id} className="type-h2">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "type-lead mt-5 max-w-2xl",
              inverse ? "text-inverse-muted" : "text-ink-muted",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
