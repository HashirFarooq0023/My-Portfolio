import { hero, site } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { RevealText } from "@/components/ui/RevealText";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { HeroPortrait } from "./HeroPortrait";
import { VisorBand } from "./VisorBand";

// Hero and band together fill exactly one viewport: a framed top rule, the name centred in the
// remaining space, and a bottom rule mirroring it with the tagline left and actions right.
export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden pt-18 md:pt-20">
      <Container className="relative flex flex-1 flex-col pb-[clamp(0.75rem,2svh,1.25rem)] pt-[clamp(0.5rem,1.5svh,1.5rem)]">
        <Reveal onLoad delay={0.05} y={12}>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-contour pb-3 text-sm font-medium">
            <span>{hero.meta.role}</span>
            <span className="flex w-full items-center justify-between gap-5 sm:w-auto">
              <span className="flex items-center gap-2.5 whitespace-nowrap">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
                <span className="relative size-2.5 rounded-full bg-signal" />
              </span>
              {hero.meta.availability}
              </span>
              <span aria-hidden="true" className="hidden h-5 w-px bg-contour sm:block" />
              <SocialLinks size="sm" className="[&_a]:border-contour [&_a:hover]:border-ink" />
            </span>
          </div>
        </Reveal>

        <div className="flex flex-1 items-center py-[clamp(0.5rem,2.5svh,1.75rem)]">
          <h1 className="w-full">
            <RevealText onLoad delay={0.1} text={hero.name.serif} className="text-hero-serif max-sm:text-[24vw]" />
            <span className="text-hero-sans max-sm:text-[19vw] mt-[0.06em] flex items-center justify-end gap-[0.12em] sm:mt-[0.14em]">
              <HeroPortrait />
              <RevealText onLoad delay={0.2} text={hero.name.sans} />
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-12 items-center gap-x-6 gap-y-3 border-t border-contour pt-[clamp(0.75rem,2svh,1.25rem)] md:gap-y-5">
          <Reveal onLoad delay={0.35} className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="max-w-[34ch] text-lead max-sm:text-xl">{hero.lead}</p>
          </Reveal>
          <Reveal onLoad delay={0.45} className="col-span-12 flex flex-wrap items-center gap-2 sm:gap-3 md:col-span-6 md:justify-end md:gap-4 lg:col-span-7">
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
