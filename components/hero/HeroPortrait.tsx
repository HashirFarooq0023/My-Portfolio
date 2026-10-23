import Image from "next/image";
import { hero } from "@/lib/content/site";

// Full-sized cutout portrait centered in the hero, rising from the bottom
// and framed between the first and last name, matching the reference editorial layout.
export function HeroPortrait() {
  return (
    <div className="relative aspect-square h-[clamp(24rem,72svh,50rem)] w-auto shrink-0 select-none">
      <div className="absolute inset-0 block animate-settle motion-reduce:animate-none">
        <Image
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 38vw, 75vw"
          className="object-contain object-bottom drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
