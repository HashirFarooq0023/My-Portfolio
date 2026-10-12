"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { howWeWork } from "@/lib/content/services";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

const last = howWeWork.steps.length - 1;

// Steps sit on a connecting rail. The ink progress line runs up to the active node;
// hovering or focusing a step moves it, and a lime pulse travels the rail.
export function ProcessNodes() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(last);
  const [inView, setInView] = useState(false);
  const progress = inView ? active / last : 0;

  return (
    <motion.ol
      className="relative grid gap-y-10 lg:grid-cols-4"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.4 }}
      onMouseLeave={() => setActive(last)}
    >
      {/* rail: horizontal on desktop, vertical on mobile */}
      <span aria-hidden="true" className="absolute left-7 top-7 bottom-7 w-px bg-contour lg:inset-x-[12.5%] lg:bottom-auto lg:h-px lg:w-auto" />
      <span aria-hidden="true" className="absolute left-7 top-7 bottom-7 w-px lg:inset-x-[12.5%] lg:bottom-auto lg:h-px lg:w-auto">
        <motion.span
          className="absolute inset-0 hidden origin-left bg-ink lg:block"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress }}
          transition={{ duration: reduce ? 0 : 0.7, ease: ease.snap }}
        />
        <motion.span
          className="absolute inset-0 origin-top bg-ink lg:hidden"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: progress }}
          transition={{ duration: reduce ? 0 : 0.7, ease: ease.snap }}
        />
        {!reduce && inView && (
          <>
            <motion.span
              className="absolute -top-1 hidden size-2.5 -translate-x-1/2 rounded-full bg-volt ring-2 ring-ink lg:block"
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, ease: ease.glide, repeat: Infinity, repeatDelay: 0.8 }}
            />
            <motion.span
              className="absolute -left-1 size-2.5 -translate-y-1/2 rounded-full bg-volt ring-2 ring-ink lg:hidden"
              animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, ease: ease.glide, repeat: Infinity, repeatDelay: 0.8 }}
            />
          </>
        )}
      </span>

      {howWeWork.steps.map((step, i) => {
        const reached = inView && i <= active;
        const current = inView && i === active;
        return (
          <motion.li
            key={step.title}
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className="group relative flex gap-6 outline-none lg:flex-col lg:items-center lg:gap-8 lg:px-3 lg:text-center"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: ease.snap, delay: i * 0.12 }}
          >
            <span
              className={cn(
                "relative z-10 grid size-14 shrink-0 place-items-center rounded-full border-[1.5px] font-serif text-2xl transition-[background-color,border-color,color,scale] duration-500 ease-snap",
                current ? "scale-110 border-ink bg-volt text-ink" : reached ? "border-ink bg-ink text-chalk" : "border-contour bg-chalk text-graphite",
                "group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-ink",
              )}
            >
              {String(i + 1).padStart(2, "0")}
              {current && !reduce && (
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border-[1.5px] border-ink"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </span>
            <div
              className={cn(
                "flex-1 rounded-card border p-6 transition-[background-color,border-color,translate] duration-500 ease-snap lg:w-full",
                current ? "-translate-y-1 border-ink bg-paper" : "border-contour bg-transparent",
              )}
            >
              <p className="text-sm font-medium text-graphite">{step.when}</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-graphite lg:mx-auto lg:max-w-[28ch]">{step.body}</p>
            </div>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}
