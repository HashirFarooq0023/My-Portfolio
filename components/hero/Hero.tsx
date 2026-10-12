import Image from "next/image";
import { hero, site } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealLine } from "@/components/ui/RevealLine";
import { TabCard } from "@/components/ui/TabCard";
import { ContourField } from "./ContourField";
import { VisorBand } from "./VisorBand";

export function Hero() {
  return (
    <section id="top" className="relative -mt-18 overflow-hidden pt-18 md:-mt-22 md:pt-22">
      <ContourField />
      <Container className="relative grid min-h-[calc(100svh-5.5rem)] grid-cols-4 items-center gap-10 py-12 sm:grid-cols-8 lg:grid-cols-12 lg:gap-6">
        <div className="col-span-4 sm:col-span-8 lg:col-span-6">
          <h1>
            <RevealLine onLoad className="text-display-serif">{hero.headline.serif}</RevealLine>
            <RevealLine onLoad index={1} className="text-display-sans">{hero.headline.sans}</RevealLine>
          </h1>
          <p className="mt-8 max-w-[40ch] text-lead text-graphite">{hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={site.bookCall.href} icon={<Icon name="calendar" />}>{site.bookCall.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">{hero.secondaryCta.label}</Button>
          </div>
          <TabCard label={hero.availability.label} className="mt-12 max-w-xs">
            <p className="flex items-center gap-2 font-semibold">
              <span className="size-2.5 rounded-full bg-signal" aria-hidden="true" />
              {hero.availability.status}
            </p>
            {hero.availability.lines.map((line) => (
              <p key={line} className="mt-1 text-sm text-graphite">{line}</p>
            ))}
          </TabCard>
        </div>

        <div className="relative col-span-4 mx-auto w-4/5 sm:col-span-6 sm:col-start-2 lg:col-span-5 lg:col-start-8 lg:w-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] bg-fog">
            <Image
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
          <VisorBand />
        </div>
      </Container>
    </section>
  );
}
