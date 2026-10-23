import type { OffClockItem } from "@/lib/content/types";
import { cn } from "@/lib/cn";
import { CueShotArt } from "./CueShotArt";
import { ReticleArt } from "./ReticleArt";

interface HobbyCardProps {
  item: OffClockItem;
  index: number;
}

const variants = {
  gaming: {
    Art: ReticleArt,
    card: "border-chalk/10 bg-ink text-chalk hover:shadow-ink/30",
    frame: "bg-chalk/[0.03] ring-chalk/10",
    num: "text-chalk/35 group-hover/hobby:text-volt",
  },
  chess: {
    Art: CueShotArt,
    card: "border-ink/10 bg-paper text-ink hover:shadow-ink/10",
    frame: "bg-fog/60 ring-ink/5",
    num: "text-contour group-hover/hobby:text-ink",
  },
  pubg: {
    Art: ReticleArt,
    card: "border-chalk/10 bg-ink text-chalk hover:shadow-ink/30",
    frame: "bg-chalk/[0.03] ring-chalk/10",
    num: "text-chalk/35 group-hover/hobby:text-volt",
  },
  snooker: {
    Art: CueShotArt,
    card: "border-ink/10 bg-paper text-ink hover:shadow-ink/10",
    frame: "bg-fog/60 ring-ink/5",
    num: "text-contour group-hover/hobby:text-ink",
  },
} as const;

// Illustrated hobby card: decorative SVG scene on top, oversized label below.
export function HobbyCard({ item, index }: HobbyCardProps) {
  const v = variants[item.id];
  return (
    <li
      className={cn(
        "group/hobby flex flex-col gap-5 rounded-panel border p-3 pb-5 transition-[translate,box-shadow] duration-500 ease-snap hover:-translate-y-1.5 hover:shadow-2xl md:p-4 md:pb-6",
        v.card,
      )}
    >
      <div className={cn("relative aspect-[16/11] overflow-hidden rounded-[0.875rem] ring-1 ring-inset", v.frame)}>
        <v.Art className="absolute inset-0 size-full" />
      </div>
      <div className="flex items-end justify-between gap-3 px-1 sm:px-2">
        <h4 className="text-[clamp(1.5rem,2.6vw,2.5rem)] font-extrabold leading-none tracking-[-0.03em]">{item.label}</h4>
        <span className={cn("font-serif text-2xl sm:text-3xl italic leading-none transition-colors duration-500", v.num)}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </li>
  );
}
