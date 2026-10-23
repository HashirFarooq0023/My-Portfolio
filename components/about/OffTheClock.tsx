import { aboutSection as a } from "@/lib/content/site";
import { BentoTile } from "@/components/ui/BentoTile";
import { HobbyCard } from "./hobbies/HobbyCard";
import { Kicker } from "./Kicker";

export function OffTheClock() {
  return (
    <BentoTile className="p-5 sm:p-7 md:p-10">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:col-span-5">
          <Kicker>{a.offClockTitle}</Kicker>
          <p className="max-w-[30ch] font-serif text-[clamp(1.35rem,2.3vw,2.125rem)] leading-[1.2] tracking-[-0.01em]">
            {a.offClockIntro}
          </p>
        </div>
        <ul className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:col-span-7">
          {a.offClock.map((item, i) => (
            <HobbyCard key={item.id} item={item} index={i} />
          ))}
        </ul>
      </div>
    </BentoTile>
  );
}
