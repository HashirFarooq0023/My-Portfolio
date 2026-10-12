"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ease } from "@/lib/motion";

// Static, deterministic "loss landscape" contours: wobbly closed rings around two minima.
function ring(cx: number, cy: number, r: number, seed: number): string {
  const pts = Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2;
    const k = r * (1 + 0.12 * Math.sin(3 * a + seed) + 0.06 * Math.cos(5 * a - seed));
    return `${(cx + Math.cos(a) * k * 1.6).toFixed(1)},${(cy + Math.sin(a) * k).toFixed(1)}`;
  });
  return `M${pts.join("L")}Z`;
}

const paths = [
  ...Array.from({ length: 7 }, (_, i) => ring(1150, 380, 50 + i * 55, i * 0.7)),
  ...Array.from({ length: 6 }, (_, i) => ring(250, 700, 40 + i * 50, i * 1.1 + 2)),
];

export function ContourField() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full opacity-70"
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
          transition={{ duration: 1.2, ease: ease.glide, delay: i * 0.04 }}
        />
      ))}
    </motion.svg>
  );
}
