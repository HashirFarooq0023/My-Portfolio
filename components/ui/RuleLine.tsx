"use client";

import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RuleLineProps {
  className?: string;
}

// Hairline that draws from left to right the first time it scrolls into view.
export function RuleLine({ className }: RuleLineProps) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className={cn("block h-px origin-left bg-current opacity-20", className)}
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.2, ease: ease.snap }}
    />
  );
}
