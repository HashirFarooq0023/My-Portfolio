import type { Project } from "@/lib/content/projects";
import { projectsSection } from "@/lib/content/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

interface ProjectLinksProps {
  project: Project;
  className?: string;
}

const pill =
  "group/link relative z-10 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-chalk/80 py-2 pl-3 pr-2.5 text-sm font-semibold " +
  "transition-[background-color,color,border-color] duration-500 ease-snap group-hover:border-chalk/15 group-hover:bg-footer-line group-hover:text-chalk " +
  "hover:border-volt! hover:bg-volt! hover:text-ink! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

// External project links: live site with a pulsing status dot, code with the GitHub mark.
export function ProjectLinks({ project, className }: ProjectLinksProps) {
  if (!project.liveUrl && !project.githubUrl) return null;
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={pill}>
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
            <span className="relative size-2 rounded-full bg-signal" />
          </span>
          {projectsSection.liveLabel}
          <Icon name="arrowUpRight" className="size-3.5 transition-transform duration-300 group-hover/link:rotate-45" />
        </a>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={pill}>
          <Icon name="github" className="size-3.5" />
          {projectsSection.codeLabel}
          <Icon name="arrowUpRight" className="size-3.5 transition-transform duration-300 group-hover/link:rotate-45" />
        </a>
      )}
    </div>
  );
}
