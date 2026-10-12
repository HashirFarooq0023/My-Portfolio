"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/lib/content/projects";
import { work } from "@/lib/content/site";
import type { ProjectCategory } from "@/lib/content/types";
import { cn } from "@/lib/cn";
import { ProjectCard } from "./ProjectCard";

// Asymmetric rhythm that always completes a row: 7/5, then 5/7.
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"] as const;

export function ProjectGrid() {
  const [active, setActive] = useState<string>(work.filters[0].id);
  const filter = work.filters.find((f) => f.id === active) ?? work.filters[0];
  const allowed: readonly ProjectCategory[] = filter.categories;
  const items = projects
    .filter((p) => allowed.includes(p.category))
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <>
      <div role="group" aria-label={work.filtersLabel} className="mb-12 inline-flex flex-wrap gap-1 rounded-full border border-contour bg-paper p-1.5">
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

      <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-12 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {items.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} className={spans[i % spans.length]} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
