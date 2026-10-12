"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { services } from "@/lib/content/services";
import { site } from "@/lib/content/site";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ServiceList() {
  const [open, setOpen] = useState<string | null>(services.items[0].id);
  const reduce = useReducedMotion();

  return (
    <ul className="border-b border-contour">
      {services.items.map((item, i) => {
        const isOpen = open === item.id;
        const panelId = `service-${item.id}`;
        return (
          <motion.li
            key={item.id}
            className="border-t border-contour"
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: ease.snap, delay: i * 0.08 }}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="group relative isolate -mx-4 grid w-[calc(100%+2rem)] grid-cols-12 items-center gap-x-6 overflow-hidden rounded-panel px-4 py-8 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:-mx-6 md:w-[calc(100%+3rem)] md:px-6 md:py-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-snap group-hover:scale-y-100"
                />
                <span className="col-span-2 text-sm font-medium text-graphite transition-colors duration-500 group-hover:text-contour md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-8 text-h3 transition-[color,translate] duration-500 ease-snap group-hover:translate-x-2 group-hover:text-chalk md:col-span-6">
                  {item.name}
                </span>
                <span className="hidden text-graphite transition-colors duration-500 group-hover:text-contour md:col-span-4 md:block">
                  {item.outcome}
                </span>
                <span
                  className={cn(
                    "col-span-2 grid size-12 place-items-center justify-self-end rounded-full border-[1.5px] transition-[background-color,border-color,color,rotate] duration-500 ease-snap md:col-span-1",
                    isOpen ? "rotate-45 border-ink bg-ink text-chalk group-hover:border-volt group-hover:bg-volt group-hover:text-ink" : "border-ink group-hover:border-chalk group-hover:text-chalk",
                  )}
                >
                  <Icon name="plus" className="size-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.5, ease: ease.snap }}
                >
                  <div className="grid grid-cols-12 gap-x-6 gap-y-10 pb-12 pt-2 md:pb-14">
                    <div className="col-span-12 md:col-span-6 md:col-start-2">
                      <p className="mb-8 text-graphite md:hidden">{item.outcome}</p>
                      <p className="mb-5 text-sm font-medium">{services.deliverablesLabel}</p>
                      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {item.deliverables.map((d) => (
                          <li key={d} className="flex gap-3 text-[1.0625rem] leading-snug">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-12 flex flex-col gap-6 md:col-span-4 md:col-start-8 md:items-end md:text-right">
                      <dl className="grid grid-cols-2 gap-6 md:grid-cols-1">
                        <div>
                          <dt className="text-sm text-graphite">{services.timelineLabel}</dt>
                          <dd className="mt-1 font-semibold">{item.timeline}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-graphite">{services.stackLabel}</dt>
                          <dd className="mt-1 font-semibold">{item.stack}</dd>
                        </div>
                      </dl>
                      <Button href={site.bookCall.href} size="sm" icon="calendar">{site.bookCall.label}</Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </ul>
  );
}
