import { aboutContent, type AboutSkills } from "@/lib/content/about";
import { aboutSection } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WordsReveal } from "@/components/ui/WordsReveal";

const skillKeys = Object.keys(aboutSection.skillLabels) as (keyof AboutSkills)[];

export function About() {
  const [lead, ...body] = aboutContent.bio;

  return (
    <Section id="about">
      <Container>
        <SectionHeading meta={aboutSection} />

        <div className="grid grid-cols-12 gap-x-6">
          <WordsReveal text={aboutSection.statement} className="col-span-12 max-w-[22ch] text-statement md:col-span-9 md:col-start-4" />
        </div>

        <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-20 md:mt-32 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <p className="max-w-[40ch] text-lead">{lead}</p>
            </Reveal>
            {body.map((p) => (
              <Reveal key={p}>
                <p className="mt-7 max-w-[62ch] border-l-2 border-transparent pl-5 text-[1.0625rem] leading-[1.7] text-graphite transition-colors duration-300 hover:border-ink hover:text-ink">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="col-span-12 lg:col-span-6" delay={0.1}>
            <div className="rounded-card border border-contour bg-paper p-6 md:p-10">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="text-h3">{aboutSection.skillsTitle}</h3>
                <p className="text-sm text-graphite">{aboutSection.skillsHint}</p>
              </div>
              <dl className="group/toolkit">
                {skillKeys.map((k) => (
                  <div
                    key={k}
                    className="grid gap-3 border-t border-contour py-5 transition-opacity duration-300 group-hover/toolkit:opacity-45 hover:opacity-100! sm:grid-cols-[9rem_1fr] sm:gap-6"
                  >
                    <dt className="pt-1.5 text-sm font-medium text-graphite">{aboutSection.skillLabels[k]}</dt>
                    <dd className="flex flex-wrap gap-2">
                      {aboutContent.skills[k].map((s) => (
                        <span
                          key={s}
                          className="group/chip inline-flex cursor-default items-center gap-2 rounded-full border border-contour bg-chalk px-3.5 py-1.5 text-sm transition-[background-color,color,border-color,translate] duration-300 ease-snap hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-chalk"
                        >
                          <span aria-hidden="true" className="size-1.5 rounded-full bg-contour transition-colors duration-300 group-hover/chip:bg-volt" />
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
