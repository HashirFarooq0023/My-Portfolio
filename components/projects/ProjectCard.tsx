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
import { TechLabel } from "@/components/ui/TechLabel";
import { ProjectLinks } from "./ProjectLinks";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

const fade = "transition-colors duration-500";

// Image projects get a media card that turns horizontal when wide (container query);
// projects without screenshots get a compact text card, so no space is reserved for media.
export const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(function ProjectCard({ project, index, className }, ref) {
  const reduce = useReducedMotion();
  const cover = project.gallery?.[0];
  const s = projectsSection;

  const meta = (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
        <span className={cn("text-graphite group-hover:text-contour", fade)}>{String(index + 1).padStart(2, "0")}</span>
        <span className={cn("rounded-full border border-contour px-3 py-1 group-hover:border-footer-line group-hover:text-chalk", fade)}>
          {s.typeLabels[project.category]}
        </span>
        {project.featured && (
          <span className={cn("flex items-center gap-2 group-hover:text-chalk", fade)}>
            <span aria-hidden="true" className={cn("size-2 rounded-full bg-ink group-hover:bg-volt", fade)} />
            {s.featuredLabel}
          </span>
        )}
      </div>
      <span
        aria-hidden="true"
        className={cn(
          "grid shrink-0 place-items-center rounded-full border-[1.5px] border-ink transition-[background-color,border-color,rotate] duration-500 ease-snap group-hover:rotate-45 group-hover:border-volt group-hover:bg-volt",
          cover ? "size-12" : "size-10",
        )}
      >
        <Icon name="arrowUpRight" className="size-4" />
      </span>
    </div>
  );

  const body = (
    <>
      <h3 className={cn(cover ? "text-h3 mt-6" : "mt-5 text-2xl font-bold tracking-tight", "max-w-[22ch] group-hover:text-chalk", fade)}>
        <Link
          href={`/projects/${project.id}`}
          aria-label={`${s.openLabel} ${project.title}`}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none after:focus-visible:rounded-card after:focus-visible:outline-2 after:focus-visible:-outline-offset-4 after:focus-visible:outline-ink"
        >
          {project.title}
        </Link>
      </h3>
      <p className={cn("mt-3 max-w-[52ch] text-graphite group-hover:text-contour", fade)}>{project.shortDescription}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, cover ? 5 : 4).map((t) => (
          <li key={t} className={cn("inline-flex items-center rounded-full bg-fog px-3 py-1.5 text-[0.8125rem] group-hover:bg-footer-line group-hover:text-chalk", fade)}>
            <TechLabel name={t} />
          </li>
        ))}
      </ul>
      <ProjectLinks project={project} className="mt-6" />
    </>
  );

  return (
    <motion.article
      ref={ref}
      layout={!reduce}
      initial={{ opacity: 0, y: reduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: ease.snap, delay: (index % 3) * 0.08 }}
      className={cn(
        "@container group relative isolate overflow-hidden rounded-card border border-contour bg-paper",
        "transition-[border-color,translate] duration-500 ease-snap hover:-translate-y-1.5 hover:border-ink",
        cover ? "p-5 md:p-6" : "flex flex-col p-6 md:p-7",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 translate-y-full rounded-t-[45%] bg-ink transition-[translate,border-radius] duration-700 ease-snap group-hover:translate-y-0 group-hover:rounded-none"
      />
      {cover ? (
        <div className="grid gap-6 @4xl:grid-cols-12 @4xl:items-center @4xl:gap-10">
          <div className={cn("relative aspect-[2.15/1] overflow-hidden rounded-panel border border-contour bg-fog group-hover:border-footer-line @4xl:order-2 @4xl:col-span-7", fade)}>
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-snap group-hover:scale-[1.03]"
            />
          </div>
          <div className="px-1 pb-1 @4xl:col-span-5 @4xl:px-4">
            {meta}
            {body}
          </div>
        </div>
      ) : (
        <>
          {meta}
          {body}
        </>
      )}
    </motion.article>
  );
});
