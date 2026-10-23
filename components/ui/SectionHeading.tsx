import type { SectionMeta } from "@/lib/content/types";
import { cn } from "@/lib/cn";
import { RevealText } from "./RevealText";
import { RuleLine } from "./RuleLine";

interface SectionHeadingProps {
  meta: SectionMeta;
  className?: string;
}

// Editorial header: serif numeral, a hairline that draws across, a tracked label chip,
// then the two-voice headline set flush left beneath it.
export function SectionHeading({ meta, className }: SectionHeadingProps) {
  return (
    <header className={cn("mb-8 sm:mb-12 md:mb-16", className)}>
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <span className="font-serif text-2xl italic leading-none sm:text-[clamp(1.75rem,2.6vw,2.5rem)]">{meta.index}</span>
        <RuleLine className="flex-1" />
        <span className="rounded-full border border-current/20 px-2.5 py-1 text-[0.625rem] font-semibold uppercase leading-none tracking-[0.16em] sm:px-3.5 sm:py-1.5 sm:text-[0.6875rem] sm:tracking-[0.18em]">
          {meta.label}
        </span>
      </div>
      <h2 className="mt-6 sm:mt-8 md:mt-10">
        <RevealText text={meta.headline.serif} className="text-h2-serif" />
        <RevealText text={meta.headline.sans} className="text-h2-sans" delay={0.15} stagger={0.02} />
      </h2>
    </header>
  );
}
