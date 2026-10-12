"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content/site";
import { ease } from "@/lib/motion";

export function VisorBand() {
  const reduce = useReducedMotion();
  const phrases = [...hero.band, ...hero.band];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-12%] top-[62%] -rotate-3">
      <motion.div
        className="absolute inset-x-[-6%] -top-4 h-4 rounded-full bg-fog/60 blur-sm"
        initial={reduce ? false : { opacity: 0, x: -40 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.div
        className="overflow-hidden bg-ink py-3"
        initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.55, ease: ease.snap, delay: 0.45 }}
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-sans text-lg font-extrabold text-volt motion-reduce:animate-none">
          {phrases.map((p, i) => (
            <span key={`${p}-${i}`}>{p}</span>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-x-[4%] -bottom-4 h-3 rounded-full bg-fog/60 blur-sm"
        initial={reduce ? false : { opacity: 0, x: -40 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />
    </div>
  );
}
