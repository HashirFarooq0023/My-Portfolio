"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content/site";
import { ease } from "@/lib/motion";

// Portrait frame set inline with the surname at the asset's exact 1139:716 ratio, so the
// head-to-chest crop shows uncropped. Sized in em of the surname so it scales with the name.
export function HeroPortrait() {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className="relative inline-block aspect-[1139/716] h-[1em] w-[1.59em] shrink-0 overflow-hidden rounded-[0.24em] bg-fog sm:h-[1.2em] sm:w-[1.909em]"
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 50% 0 50% round 0.24em)" }}
      animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0% 0 0% round 0.24em)" }}
      transition={{ duration: 1.1, ease: ease.snap, delay: 0.55 }}
    >
      <motion.span
        className="absolute inset-0 block"
        initial={reduce ? false : { scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: ease.snap, delay: 0.55 }}
      >
        <Image
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 30vw, 40vw"
          className="object-cover object-center"
        />
      </motion.span>
    </motion.span>
  );
}
