"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  onLoad?: boolean;
}

export function Reveal({ children, className, delay = 0, y = 32, onLoad = false }: RevealProps) {
  const reduce = useReducedMotion();
  const shown = { opacity: 1, y: 0, transition: { duration: 0.9, ease: ease.snap, delay } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      {...(onLoad ? { animate: shown } : { whileInView: shown, viewport: { once: true, amount: 0.25 } })}
    >
      {children}
    </motion.div>
  );
}
