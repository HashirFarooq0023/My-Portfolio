import { aboutContent, type AboutSkills } from "@/lib/content/about";
import { aboutSection as a } from "@/lib/content/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WordsReveal } from "@/components/ui/WordsReveal";

const skillKeys = Object.keys(a.skillLabels) as (keyof AboutSkills)[];

const tile =
  "group relative h-full overflow-hidden rounded-card border border-contour bg-paper/80 p-7 backdrop-blur-sm transition-[border-color,translate] duration-500 ease-snap hover:-translate-y-1 hover:border-ink md:p-9";
const kicker = "text-sm font-medium text-graphite";

export function About() {
  const [lead, craft, , offClock] = aboutContent.bio;

  return (
    <Section id="about">
      <Container>
        <SectionHeading meta={a} />

        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {/* Statement */}
          <Reveal className="col-span-12 lg:col-span-8">
            <div className="relative flex h-full min-h-80 flex-col justify-between gap-12 overflow-hidden rounded-card bg-ink p-7 text-chalk md:p-12">
              <p className="flex items-center gap-3 text-sm font-medium text-volt">
                <span aria-hidden="true" className="size-2 rounded-full bg-volt" />
                {a.statementLabel}
              </p>
              <WordsReveal text={a.statement} className="max-w-[20ch] text-statement" />
              <p className="text-sm text-contour">{aboutContent.name}</p>
            </div>
          </Reveal>

          {/* Snapshot */}
          <Reveal className="col-span-12 md:col-span-6 lg:col-span-4" delay={0.08}>
            <div className={tile}>
              <h3 className={kicker}>{a.snapshotTitle}</h3>
              <dl className="mt-6">
                {a.snapshot.map((row) => (
                  <div key={row.label} className="border-t border-contour py-4 first:border-t-0 first:pt-0">
                    <dt className="text-xs uppercase tracking-[0.08em] text-graphite">{row.label}</dt>
                    <dd className="mt-1 text-lg font-semibold leading-snug tracking-tight">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-fog px-4 py-2 text-sm font-medium">
                <span aria-hidden="true" className="relative flex size-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
                  <span className="relative size-2 rounded-full bg-signal" />
                </span>
                {a.statusLabel}
              </p>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className={tile}>
              <h3 className={kicker}>{a.bioTitle}</h3>
              <p className="mt-6 text-lead">{lead}</p>
              <p className="mt-5 leading-[1.7] text-graphite">{craft}</p>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal className="col-span-12 md:col-span-7 lg:col-span-4" delay={0.08}>
            <div className={tile}>
              <h3 className={kicker}>{a.experienceTitle}</h3>
              <ol className="relative mt-6 space-y-6 border-l border-contour pl-6">
                {a.experience.map((item) => (
                  <li key={item.role} className="group/exp relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.85rem] top-1.5 size-3 rounded-full border-[1.5px] border-ink bg-chalk transition-colors duration-300 group-hover/exp:bg-volt"
                    />
                    <p className="font-semibold leading-snug tracking-tight">{item.role}</p>
                    <p className="text-sm font-medium">{item.org}</p>
                    <p className="mt-1 text-sm text-graphite">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Off the clock */}
          <Reveal className="col-span-12 md:col-span-5 lg:col-span-3" delay={0.16}>
            <div className={cn(tile, "bg-fog/80")}>
              <h3 className={kicker}>{a.offClockTitle}</h3>
              <p className="mt-6 font-serif text-xl leading-snug">{offClock}</p>
            </div>
          </Reveal>
        </div>

        {/* Toolkit */}
        <div className="mt-20 flex flex-wrap items-end justify-between gap-4 md:mt-28">
          <h3 className="text-h3">{a.skillsTitle}</h3>
          <p className="text-graphite">{a.skillsHint}</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {skillKeys.map((k, i) => (
            <Reveal key={k} delay={(i % 3) * 0.06}>
              <div className="group relative isolate h-full overflow-hidden rounded-card border border-contour bg-paper/80 p-6 backdrop-blur-sm transition-[border-color] duration-500 hover:border-ink md:p-7">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-snap group-hover:scale-y-100"
                />
                <div className="flex items-baseline justify-between">
                  <h4 className="font-semibold transition-colors duration-500 group-hover:text-chalk">{a.skillLabels[k]}</h4>
                  <span className="font-serif text-3xl leading-none text-contour transition-colors duration-500 group-hover:text-volt">
                    {String(aboutContent.skills[k].length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {aboutContent.skills[k].map((s) => (
                    <li
                      key={s}
                      className="cursor-default rounded-full border border-contour bg-chalk px-3.5 py-1.5 text-sm transition-[background-color,color,border-color,translate] duration-300 ease-snap group-hover:border-footer-line group-hover:bg-footer-line group-hover:text-chalk hover:-translate-y-0.5 hover:border-volt! hover:bg-volt! hover:text-ink!"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
