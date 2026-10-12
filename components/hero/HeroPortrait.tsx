"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/lib/content/site";
import { ease } from "@/lib/motion";

// Rounded portrait set inline with the surname, at the photo's own 651:780 ratio so the
// full head-to-chest crop shows without extra cropping. Sized in em of the surname.
export function HeroPortrait() {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className="relative inline-block h-[1.25em] w-[1.045em] shrink-0 overflow-hidden rounded-[0.3em] bg-fog"
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 50% 0 50% round 0.3em)" }}
      animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0% 0 0% round 0.3em)" }}
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
          sizes="(min-width: 1024px) 18vw, 30vw"
          className="object-cover"
        />
      </motion.span>
    </motion.span>
  );
}
