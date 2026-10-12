"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  onLoad?: boolean;
}

// onLoad: pure CSS fade-up (paints before hydration). Otherwise Motion fades in on scroll.
export function Reveal({ children, className, delay = 0, y = 32, onLoad = false }: RevealProps) {
  const reduce = useReducedMotion();
  if (onLoad) {
    return (
      <div
        className={cn("animate-fade-up [animation-delay:var(--delay)] motion-reduce:animate-none", className)}
        style={{ "--delay": `${delay}s`, "--rise": `${y}px` } as CSSProperties}
      >
        {children}
      </div>
    );
  }
  const shown = { opacity: 1, y: 0, transition: { duration: 0.9, ease: ease.snap, delay } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={shown}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
