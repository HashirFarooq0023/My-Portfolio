import Image from "next/image";
import { hero } from "@/lib/content/site";

// Portrait frame set inline with the surname at the asset's exact 1139:716 ratio, so the
// head-to-chest crop shows uncropped. Sized in em of the surname so it scales with the name.
// Server-rendered and visible on first paint (it is the LCP image); only a CSS settle plays.
export function HeroPortrait() {
  return (
    <span className="relative inline-block aspect-[1139/716] h-[1em] w-[1.59em] shrink-0 overflow-hidden rounded-[0.24em] bg-fog sm:h-[1.2em] sm:w-[1.909em]">
      <span className="absolute inset-0 block animate-settle motion-reduce:animate-none">
        <Image
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          fill
          preload
          fetchPriority="high"
          placeholder="blur"
          sizes="(min-width: 1024px) 30vw, 40vw"
          className="object-cover object-center"
        />
      </span>
    </span>
  );
}
