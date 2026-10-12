"use client";

import { forwardRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/content/projects";
import { work } from "@/lib/content/site";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

interface ProjectCardProps {
  project: Project;
  index: number;
  className: string;
}

const textLink =
  "relative text-sm font-medium after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

export const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(function ProjectCard({ project, index, className }, ref) {
  const reduce = useReducedMotion();
  const primary = project.liveUrl ?? project.githubUrl;

  return (
    <motion.article
      ref={ref}
      layout={!reduce}
      initial={{ opacity: 0, y: reduce ? 0 : 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: ease.snap, delay: (index % 2) * 0.1 }}
      className={cn(
        "group relative isolate flex min-h-[24rem] flex-col overflow-hidden rounded-card border border-contour bg-paper p-7 md:min-h-[28rem] md:p-10",
        "transition-[border-color,translate] duration-500 ease-snap hover:-translate-y-1.5 hover:border-ink",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 translate-y-full rounded-t-[45%] bg-ink transition-[translate,border-radius] duration-700 ease-snap group-hover:translate-y-0 group-hover:rounded-none"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
          <span className="text-graphite transition-colors duration-500 group-hover:text-contour">{String(index + 1).padStart(2, "0")}</span>
          <span className="rounded-full border border-contour px-3 py-1 transition-colors duration-500 group-hover:border-footer-line group-hover:text-chalk">
            {work.typeLabels[project.category]}
          </span>
          {project.featured && (
            <span className="flex items-center gap-2 transition-colors duration-500 group-hover:text-chalk">
              <span aria-hidden="true" className="size-2 rounded-full bg-ink transition-colors duration-500 group-hover:bg-volt" />
              {work.featuredLabel}
            </span>
          )}
        </div>
        {primary && (
          <a
            href={primary}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${work.openLabel} ${project.title}`}
            className="grid size-14 shrink-0 place-items-center rounded-full border-[1.5px] border-ink transition-[background-color,border-color,color,rotate] duration-500 ease-snap group-hover:rotate-45 group-hover:border-volt group-hover:bg-volt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            <Icon name="arrowUpRight" className="size-5" />
          </a>
        )}
      </div>

      <div className="mt-auto pt-16">
        <h3 className="text-h3 max-w-[18ch] transition-colors duration-500 group-hover:text-chalk">{project.title}</h3>
        <p className="mt-4 max-w-[52ch] text-graphite transition-colors duration-500 group-hover:text-contour">{project.shortDescription}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((t) => (
            <li
              key={t}
              className="rounded-full bg-fog px-3 py-1 text-[0.8125rem] transition-colors duration-500 group-hover:bg-footer-line group-hover:text-chalk"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex gap-6 transition-colors duration-500 group-hover:text-chalk">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={textLink}>{work.liveLabel}</a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={textLink}>{work.codeLabel}</a>
          )}
        </div>
      </div>
    </motion.article>
  );
});
