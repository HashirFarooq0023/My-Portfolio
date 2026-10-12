"use client";

import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  onLoad?: boolean;
  stagger?: number;
}

// Splits text into characters that rise out of a per-word mask. Screen readers get the plain string.
export function RevealText({ text, className, delay = 0, onLoad = false, stagger = 0.03 }: RevealTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  let n = 0;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } },
  };
  const char = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : { hidden: { y: "115%" }, show: { y: 0, transition: { duration: 0.9, ease: ease.snap } } };

  return (
    <span className={cn("block", className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        className="block"
        variants={container}
        initial="hidden"
        {...(onLoad ? { animate: "show" } : { whileInView: "show", viewport: { once: true, amount: 0.5 } })}
      >
        {words.map((word, w) => (
          <span key={`${word}-${w}`} className="-mb-[0.12em] inline-flex overflow-hidden pb-[0.12em] whitespace-nowrap">
            {[...word].map((c) => (
              <motion.span key={n++} variants={char} className="inline-block">
                {c}
              </motion.span>
            ))}
            {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
