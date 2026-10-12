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
    <div className={cn("absolute inset-x-[-5%] overflow-hidden py-3 md:py-4", className)}>
      <div className={cn("flex w-max items-center whitespace-nowrap motion-reduce:animate-none", track)}>
        {phrases.map((p, i) => (
          <span key={`${p}-${i}`} className="flex items-center gap-6 pr-6 font-sans text-xl font-extrabold tracking-tight md:gap-10 md:pr-10 md:text-3xl">
            {p}
            <span className={cn("size-2 rounded-full md:size-2.5", dot)} />
          </span>
        ))}
      </div>
    </div>
  );
}

// Two crossing marquee bands: the Visor Band, closing the hero.
export function VisorBand() {
  return (
    <div aria-hidden="true" className="relative h-[clamp(4.25rem,12svh,9rem)] shrink-0 overflow-hidden">
      <Band className="top-1/2 -translate-y-1/2 rotate-2 bg-volt text-ink" track="animate-marquee-reverse" dot="bg-ink" />
      <Band className="top-1/2 -translate-y-1/2 -rotate-2 bg-ink text-volt" track="animate-marquee" dot="bg-volt" />
    </div>
  );
}
