import { hero, site } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { ContourField } from "./ContourField";
import { HeroPortrait } from "./HeroPortrait";
import { VisorBand } from "./VisorBand";

// Hero and band together fill exactly one viewport.
export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden pt-18 md:pt-20">
      <ContourField />
      <Container className="relative flex flex-1 flex-col justify-between gap-6 pb-4 pt-4 md:gap-8 md:pt-6">
        <Reveal onLoad delay={0.1} y={12}>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-contour pb-4 text-sm font-medium">
            <span>{hero.meta.role}</span>
            <span className="text-graphite">{hero.meta.location}</span>
            <span className="flex items-center gap-2.5">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
                <span className="relative size-2.5 rounded-full bg-signal" />
              </span>
              {hero.meta.availability}
            </span>
          </div>
        </Reveal>

        <h1>
          <RevealText onLoad delay={0.2} stagger={0.05} text={hero.name.serif} className="text-hero-serif max-sm:text-[33vw]" />
          <span className="text-hero-sans max-sm:text-[19vw] mt-[0.02em] flex items-center justify-end gap-[0.12em]">
            <HeroPortrait />
            <RevealText onLoad delay={0.35} stagger={0.05} text={hero.name.sans} />
          </span>
        </h1>

        <div className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
          <Reveal onLoad delay={0.9} className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="max-w-[34ch] text-lead">{hero.lead}</p>
          </Reveal>
          <Reveal onLoad delay={1.05} className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end md:gap-4 lg:col-span-7">
            <Button href={site.bookCall.href} icon="calendar">{site.bookCall.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">{hero.secondaryCta.label}</Button>
            <div className="hidden lg:block">
              <Magnetic strength={0.4}>
                <a
                  href={hero.scroll.href}
                  aria-label={hero.scroll.label}
                  className="grid size-14 place-items-center rounded-full border-[1.5px] border-contour transition-colors duration-300 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  <Icon name="arrowDown" className="size-4 animate-nudge motion-reduce:animate-none" />
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </Container>
      <VisorBand />
    </section>
  );
}
