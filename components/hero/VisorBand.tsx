import { hero } from "@/lib/content/site";
import { cn } from "@/lib/cn";

interface BandProps {
  className: string;
  track: string;
  dot: string;
}

function Band({ className, track, dot }: BandProps) {
  const phrases = [...hero.band, ...hero.band];
  return (
    <div className={cn("absolute inset-x-[-5%] overflow-hidden py-5 md:py-6", className)}>
      <div className={cn("flex w-max items-center whitespace-nowrap motion-reduce:animate-none", track)}>
        {phrases.map((p, i) => (
          <span
            key={`${p}-${i}`}
            className="flex items-center gap-8 pr-8 font-sans font-condensed text-3xl font-extrabold uppercase md:gap-12 md:pr-12 md:text-5xl"
          >
            {p}
            <span className={cn("size-2.5 rotate-45 md:size-3", dot)} />
          </span>
        ))}
      </div>
    </div>
  );
}

// Two crossing marquee bands: the Visor Band, recast as a section divider.
export function VisorBand() {
  return (
    <div aria-hidden="true" className="relative h-44 overflow-hidden md:h-60">
      <Band className="top-1/2 -translate-y-1/2 rotate-[2.5deg] bg-volt text-ink" track="animate-marquee-reverse" dot="bg-ink" />
      <Band className="top-1/2 -translate-y-1/2 -rotate-2 bg-ink text-volt" track="animate-marquee" dot="bg-volt" />
    </div>
  );
}
