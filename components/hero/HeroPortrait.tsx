"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content/site";
import { ease } from "@/lib/motion";

// Portrait card sized in em of the serif display size so it always spans exactly the two
// name lines (0.8em serif line + 0.82 × 0.79em sans line), at the photo's own 651:780 ratio.
export function HeroPortrait() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="text-hero-serif relative h-[1.46em] w-[1.22em] shrink-0 overflow-hidden rounded-[0.14em] bg-fog"
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(100% 0% 0% 0% round 0.14em)" }}
      animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0% round 0.14em)" }}
      transition={{ duration: 1.1, ease: ease.snap, delay: 0.5 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: ease.snap, delay: 0.5 }}
      >
        <Image
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 22vw, 30vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
