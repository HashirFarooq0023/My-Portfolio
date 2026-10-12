"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/lib/content/projects";
import { projectsSection as work } from "@/lib/content/site";
import type { ProjectCategory } from "@/lib/content/types";
import { cn } from "@/lib/cn";
import { ProjectCard } from "./ProjectCard";

const byFeatured = (a: { featured?: boolean }, b: { featured?: boolean }) => Number(!!b.featured) - Number(!!a.featured);

// Two flex-wrap tiers: media cards (two per row, an odd lead card spans full width and turns horizontal)
// and compact text cards (three per row, last row grows to fill). No row ever leaves a gap.
export function ProjectGrid() {
  const [active, setActive] = useState<string>(work.filters[0].id);
  const filter = work.filters.find((f) => f.id === active) ?? work.filters[0];
  const allowed: readonly ProjectCategory[] = filter.categories;
  const items = projects.filter((p) => allowed.includes(p.category));
  const media = items.filter((p) => p.gallery?.length).sort(byFeatured);
  const compact = items.filter((p) => !p.gallery?.length).sort(byFeatured);
  const leadFull = media.length % 2 === 1;

  return (
    <>
      <div className="pointer-events-none sticky top-24 z-20 mb-12">
        <div
          role="group"
          aria-label={work.filtersLabel}
          className="pointer-events-auto inline-flex flex-wrap gap-1 rounded-full border border-contour bg-paper/85 p-1.5 shadow-lg shadow-ink/5 backdrop-blur-md"
        >
          {work.filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
              className="relative rounded-full px-5 py-2.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {active === f.id && (
                <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <span className={cn("relative transition-colors duration-300", active === f.id ? "text-chalk" : "text-graphite hover:text-ink")}>
                {f.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {media.length > 0 && (
        <motion.div layout className="flex flex-wrap gap-5">
          <AnimatePresence mode="popLayout">
            {media.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                className={cn("basis-full grow", !(leadFull && i === 0) && "md:basis-[calc(50%-0.625rem)]")}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {compact.length > 0 && (
        <motion.div layout className={cn("flex flex-wrap gap-5", media.length > 0 && "mt-5")}>
          <AnimatePresence mode="popLayout">
            {compact.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={media.length + i}
                className="basis-full grow md:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.834rem)]"
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
