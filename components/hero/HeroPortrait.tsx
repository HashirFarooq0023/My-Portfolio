"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content/site";
import { ease } from "@/lib/motion";

// Wide pill portrait set inline with the surname, framed from the hair line to the collar.
// Sized in em of the surname so it scales with the name.
export function HeroPortrait() {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className="relative inline-block h-[1em] w-[1.55em] shrink-0 overflow-hidden rounded-full bg-fog sm:h-[1.05em] sm:w-[2.55em]"
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 50% 0 50% round 999px)" }}
      animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0% 0 0% round 999px)" }}
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
          className="object-cover object-[50%_28%]"
        />
      </motion.span>
    </motion.span>
  );
}
