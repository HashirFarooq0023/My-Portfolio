import { aboutContent, type AboutSkills } from "@/lib/content/about";
import { aboutSection as a } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WordsReveal } from "@/components/ui/WordsReveal";
import { TechLabel } from "@/components/ui/TechLabel";
import { BentoTile } from "@/components/ui/BentoTile";
import { Kicker } from "./Kicker";

const skillKeys = Object.keys(a.skillLabels) as (keyof AboutSkills)[];

export function About() {
  const [lead, craft, , offClock] = aboutContent.bio;

  return (
    <Section id="about">
      <Container>
        <SectionHeading meta={a} />

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <Reveal className="col-span-12 lg:col-span-8">
            <BentoTile tone="ink" className="flex min-h-80 flex-col justify-between gap-10 md:p-10">
              <Kicker onInk>{a.statementLabel}</Kicker>
              <WordsReveal text={a.statement} className="max-w-[20ch] text-statement" />
              <p className="text-sm text-contour">{aboutContent.name}</p>
            </BentoTile>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-6 lg:col-span-4" delay={0.06}>
            <BentoTile className="flex flex-col">
              <Kicker>{a.snapshotTitle}</Kicker>
              <dl className="mt-6 flex-1">
                {a.snapshot.map((row) => (
                  <div key={row.label} className="border-t border-ink/10 py-3.5 first:border-t-0 first:pt-0">
                    <dt className="text-xs uppercase tracking-[0.08em] text-graphite">{row.label}</dt>
                    <dd className="mt-1 text-[1.0625rem] font-semibold leading-snug tracking-tight">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-full border border-ink/10 bg-chalk/70 px-4 py-2 text-sm font-medium">
                <span aria-hidden="true" className="relative flex size-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
                  <span className="relative size-2 rounded-full bg-signal" />
                </span>
                {a.statusLabel}
              </p>
            </BentoTile>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-6 lg:col-span-5">
            <BentoTile>
              <Kicker>{a.bioTitle}</Kicker>
              <p className="mt-6 text-lead">{lead}</p>
              <p className="mt-5 leading-[1.7] text-graphite">{craft}</p>
            </BentoTile>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-7 lg:col-span-4" delay={0.06}>
            <BentoTile>
              <Kicker>{a.experienceTitle}</Kicker>
              <ol className="relative mt-6 space-y-6 border-l border-ink/10 pl-6">
                {a.experience.map((item) => (
                  <li key={item.role} className="group/exp relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.85rem] top-1.5 size-3 rounded-full border-[1.5px] border-ink bg-chalk transition-[background-color,scale] duration-300 group-hover/exp:scale-125 group-hover/exp:bg-volt"
                    />
                    <p className="font-semibold leading-snug tracking-tight">{item.role}</p>
                    <p className="text-sm font-medium">{item.org}</p>
                    <p className="mt-1 text-sm text-graphite">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </BentoTile>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-5 lg:col-span-3" delay={0.12}>
            <BentoTile tone="fog">
              <Kicker>{a.offClockTitle}</Kicker>
              <p className="mt-6 font-serif text-xl leading-snug">{offClock}</p>
            </BentoTile>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-4 md:mt-16">
          <h3 className="text-h3">{a.skillsTitle}</h3>
          <p className="text-graphite">{a.skillsHint}</p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {skillKeys.map((k, i) => (
            <Reveal key={k} delay={(i % 3) * 0.06}>
              <BentoTile className="md:p-7">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-semibold">{a.skillLabels[k]}</h4>
                  <span className="font-serif text-3xl leading-none text-contour transition-colors duration-500 group-hover/tile:text-ink">
                    {String(aboutContent.skills[k].length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {aboutContent.skills[k].map((s) => (
                    <li
                      key={s}
                      className="inline-flex cursor-default items-center rounded-full border border-ink/10 bg-chalk/70 px-3.5 py-2 text-sm transition-[background-color,color,border-color,translate] duration-300 ease-snap hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-chalk"
                    >
                      <TechLabel name={s} />
                    </li>
                  ))}
                </ul>
              </BentoTile>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
