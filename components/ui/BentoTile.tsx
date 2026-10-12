"use client";

import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

interface BentoTileProps {
  children: ReactNode;
  className?: string;
  tone?: "glass" | "ink" | "fog";
  active?: boolean;
}

const tones = {
  glass: "border-ink/10 bg-paper/55 hover:border-ink/25 hover:shadow-ink/10",
  fog: "border-ink/10 bg-fog/55 hover:border-ink/25 hover:shadow-ink/10",
  ink: "border-chalk/10 bg-ink text-chalk hover:border-volt/40 hover:shadow-ink/30",
} as const;

// Glass tile with a pointer-following glow, a soft lift and a deeper shadow on hover.
export function BentoTile({ children, className, tone = "glass", active = false }: BentoTileProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const strength = tone === "ink" ? "18%" : "30%";
  const glow = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, color-mix(in oklab, var(--color-volt) ${strength}, transparent), transparent 70%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <div
      onPointerMove={reduce ? undefined : onMove}
      className={cn(
        "group/tile relative isolate h-full overflow-hidden rounded-card border p-7 backdrop-blur-md md:p-8",
        "transition-[translate,border-color,box-shadow] duration-500 ease-snap hover:-translate-y-1 hover:shadow-2xl",
        active ? "-translate-y-1 border-ink/30 bg-paper/90 shadow-2xl shadow-ink/10" : tones[tone],
        className,
      )}
    >
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/tile:opacity-100"
          style={{ background: glow }}
        />
      )}
      {children}
    </div>
  );
}
