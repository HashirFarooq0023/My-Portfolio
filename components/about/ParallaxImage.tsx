"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ImageAsset } from "@/lib/content/types";
import { cn } from "@/lib/cn";

interface ParallaxImageProps {
  image: ImageAsset;
  className?: string;
  sizes: string;
}

export function ParallaxImage({ image, className, sizes }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden rounded-card bg-fog", className)}>
      <motion.div className="absolute inset-[-10%]" style={reduce ? undefined : { y }}>
        <Image src={image.src} alt={image.alt} fill placeholder="blur" sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  );
}
