import type { SectionMeta } from "@/lib/content/types";
import { cn } from "@/lib/cn";
import { RevealText } from "./RevealText";

interface SectionHeadingProps {
  meta: SectionMeta;
  className?: string;
}

export function SectionHeading({ meta, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 grid grid-cols-12 gap-x-6 gap-y-8 md:mb-16", className)}>
      <p className="col-span-12 flex items-center gap-3 pt-3 text-sm font-medium md:col-span-3">
        <span>{meta.index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-current" />
        <span className="opacity-70">{meta.label}</span>
      </p>
      <h2 className="col-span-12 md:col-span-9">
        <RevealText text={meta.headline.serif} className="text-h2-serif" />
        <RevealText text={meta.headline.sans} className="text-h2-sans" delay={0.15} stagger={0.02} />
      </h2>
    </div>
  );
}
