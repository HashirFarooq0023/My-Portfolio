import Image from "next/image";
import { hero } from "@/lib/content/site";

// Cutout portrait centered in the hero, rising from the bottom
// Framed neatly between the first and last name, scaled down on mobile devices for clear layout.
export function HeroPortrait() {
  return (
    <div className="relative aspect-square h-[clamp(14rem,44svh,21rem)] w-auto shrink-0 select-none sm:h-[clamp(20rem,58svh,32rem)] md:h-[clamp(24rem,72svh,50rem)]">
      <div className="absolute inset-0 block animate-settle motion-reduce:animate-none">
        <Image
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 65vw, (max-width: 1024px) 50vw, 38vw"
          className="object-contain object-bottom drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
