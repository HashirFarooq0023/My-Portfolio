"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealLineProps {
  children: ReactNode;
  index?: number;
  className?: string;
  onLoad?: boolean;
}

export function RevealLine({ children, index = 0, className, onLoad = false }: RevealLineProps) {
  const reduce = useReducedMotion();
  const hidden = reduce ? { opacity: 0 } : { y: "105%" };
  const shown = reduce
    ? { opacity: 1 }
    : { y: 0, transition: { duration: 0.7, ease: ease.snap, delay: (onLoad ? 0.3 : 0) + index * 0.09 } };

  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={cn("block", className)}
        initial={hidden}
        {...(onLoad ? { animate: shown } : { whileInView: shown, viewport: { once: true, amount: 0.6 } })}
      >
        {children}
      </motion.span>
    </span>
  );
}
