"use client";

import { motion, useReducedMotion } from "motion/react";
import { services } from "@/lib/content/services";
import { ease } from "@/lib/motion";

export function Process() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-32 md:mt-44">
      <h3 className="mb-12 text-h3">{services.processTitle}</h3>
      <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {services.process.map((step, i) => (
          <li key={step.title} className="relative pt-8">
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px origin-left bg-ink"
              initial={{ scaleX: reduce ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, ease: ease.snap, delay: i * 0.15 }}
            />
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: ease.snap, delay: 0.2 + i * 0.15 }}
            >
              <span className="block font-serif text-6xl leading-none md:text-7xl">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-6 text-xl font-bold tracking-tight">{step.title}</p>
              <p className="mt-2 max-w-[30ch] text-graphite">{step.body}</p>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}
