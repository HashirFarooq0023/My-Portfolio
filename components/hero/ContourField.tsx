"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ease } from "@/lib/motion";

// Site-wide fixed background. Static, deterministic "loss landscape" contours: wobbly closed rings around two minima.
function ring(cx: number, cy: number, r: number, seed: number): string {
  const pts = Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2;
    const k = r * (1 + 0.12 * Math.sin(3 * a + seed) + 0.06 * Math.cos(5 * a - seed));
    return `${(cx + Math.cos(a) * k * 1.6).toFixed(1)},${(cy + Math.sin(a) * k).toFixed(1)}`;
  });
  return `M${pts.join("L")}Z`;
}

const paths = [
  ...Array.from({ length: 8 }, (_, i) => ring(1180, 260, 50 + i * 60, i * 0.7)),
  ...Array.from({ length: 6 }, (_, i) => ring(180, 820, 40 + i * 55, i * 1.1 + 2)),
];

export function ContourField() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 6000], [0, -240]);

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[calc(100svh+240px)] w-full opacity-60"
      style={reduce ? undefined : { y }}
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          className="fill-none stroke-contour"
          strokeWidth={1}
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: ease.glide, delay: i * 0.05 }}
        />
      ))}
    </motion.svg>
  );
}
