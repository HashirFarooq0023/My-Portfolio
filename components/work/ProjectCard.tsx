import type { Project } from "@/lib/content/projects";
import { work } from "@/lib/content/site";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  wide: boolean;
}

const linkClass =
  "text-sm font-medium underline decoration-contour underline-offset-4 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export function ProjectCard({ project, wide }: ProjectCardProps) {
  return (
    <article className={cn("group col-span-4 sm:col-span-8", wide ? "lg:col-span-8" : "lg:col-span-4")}>
      <div className="relative overflow-hidden rounded-[var(--radius-panel)] border-[1.5px] border-ink bg-paper p-6 lg:p-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-volt opacity-0 transition-[transform,opacity] duration-700 ease-[var(--ease-snap)] group-hover:translate-x-[600%] group-hover:opacity-100 motion-reduce:hidden"
        />
        <p className="relative flex gap-3 text-sm font-medium text-graphite">
          <span className="rounded-[var(--radius-chip)] bg-fog px-2 py-0.5 text-ink">{work.typeLabels[project.category]}</span>
          {project.featured && <span>{work.featuredLabel}</span>}
        </p>
        <ul className="relative mt-6 space-y-2 text-[0.95rem] leading-relaxed text-graphite">
          {project.keyFeatures.slice(0, wide ? 3 : 2).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-tight tracking-tight">{project.title}</h3>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>{work.liveLabel}</a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>{work.codeLabel}</a>
          )}
        </div>
      </div>
      <p className="mt-2 max-w-[65ch] text-graphite">{project.shortDescription}</p>
      <p className="mt-2 text-sm">{project.techStack.join(", ")}</p>
    </article>
  );
}
