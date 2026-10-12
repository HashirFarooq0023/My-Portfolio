"use client";

import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/content/projects";
import { projectsSection } from "@/lib/content/site";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

interface ProjectCardProps {
  project: Project;
  index: number;
  className: string;
}

const textLink =
  "relative z-10 text-sm font-medium after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(function ProjectCard({ project, index, className }, ref) {
  const reduce = useReducedMotion();
  const cover = project.gallery?.[0];
  const detailHref = `/projects/${project.id}`;
  const s = projectsSection;

  return (
    <motion.article
      ref={ref}
      layout={!reduce}
      initial={{ opacity: 0, y: reduce ? 0 : 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: ease.snap, delay: (index % 2) * 0.1 }}
      className={cn(
        "group relative isolate flex min-h-96 flex-col overflow-hidden rounded-card border border-contour bg-paper p-6 md:min-h-112 md:p-8",
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
            {s.typeLabels[project.category]}
          </span>
          {project.featured && (
            <span className="flex items-center gap-2 transition-colors duration-500 group-hover:text-chalk">
              <span aria-hidden="true" className="size-2 rounded-full bg-ink transition-colors duration-500 group-hover:bg-volt" />
              {s.featuredLabel}
            </span>
          )}
        </div>
        <span
          aria-hidden="true"
          className="grid size-12 shrink-0 place-items-center rounded-full border-[1.5px] border-ink transition-[background-color,border-color,color,rotate] duration-500 ease-snap group-hover:rotate-45 group-hover:border-volt group-hover:bg-volt md:size-14"
        >
          <Icon name="arrowUpRight" className="size-5" />
        </span>
      </div>

      {cover ? (
        <div className="mt-6 overflow-hidden rounded-panel border border-contour bg-fog transition-colors duration-500 group-hover:border-footer-line">
          <Image
            src={cover.src}
            alt={cover.alt}
            placeholder="blur"
            sizes="(min-width: 768px) 55vw, 100vw"
            className="h-auto w-full transition-transform duration-700 ease-snap group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <ul className="mt-6 flex aspect-[2.2/1] flex-col justify-center gap-2 rounded-panel border border-contour bg-chalk p-5 transition-colors duration-500 group-hover:border-footer-line group-hover:bg-footer-line md:p-6">
          {project.keyFeatures.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm font-medium transition-colors duration-500 group-hover:text-chalk md:text-base">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-ink transition-colors duration-500 group-hover:bg-volt" />
              {f.split(":")[0]}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-8">
        <h3 className="text-h3 max-w-[20ch] transition-colors duration-500 group-hover:text-chalk">
          <Link
            href={detailHref}
            {...external}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none after:focus-visible:rounded-card after:focus-visible:outline-2 after:focus-visible:-outline-offset-4 after:focus-visible:outline-ink"
          >
            {project.title}
            <span className="sr-only"> {s.newTabHint}</span>
          </Link>
        </h3>
        <p className="mt-3 max-w-[52ch] text-graphite transition-colors duration-500 group-hover:text-contour">{project.shortDescription}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((t) => (
            <li key={t} className="rounded-full bg-fog px-3 py-1 text-[0.8125rem] transition-colors duration-500 group-hover:bg-footer-line group-hover:text-chalk">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-6 transition-colors duration-500 group-hover:text-chalk">
          {project.liveUrl && <a href={project.liveUrl} {...external} className={textLink}>{s.liveLabel}</a>}
          {project.githubUrl && <a href={project.githubUrl} {...external} className={textLink}>{s.codeLabel}</a>}
        </div>
      </div>
    </motion.article>
  );
});
