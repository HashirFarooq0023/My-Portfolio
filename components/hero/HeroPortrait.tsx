"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content/site";
import { ease } from "@/lib/motion";

// Pill-shaped portrait that opens from its center, set inline with the surname.
export function HeroPortrait() {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className="relative inline-block h-[0.9em] w-[1.55em] shrink-0 overflow-hidden rounded-full bg-fog sm:w-[2.5em]"
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 50% 0 50% round 999px)" }}
      animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0% 0 0% round 999px)" }}
      transition={{ duration: 1.1, ease: ease.snap, delay: 0.55 }}
    >
      <motion.span
        className="absolute inset-0 block"
        initial={reduce ? false : { scale: 1.35 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: ease.snap, delay: 0.55 }}
      >
        <Image
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 28vw, 40vw"
          className="object-cover object-[50%_32%]"
        />
      </motion.span>
    </motion.span>
  );
}
