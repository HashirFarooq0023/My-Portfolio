import { aboutContent, type AboutSkills } from "@/lib/content/about";
import { aboutSection } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WordsReveal } from "@/components/ui/WordsReveal";
import { ParallaxImage } from "./ParallaxImage";

const skillKeys = Object.keys(aboutSection.skillLabels) as (keyof AboutSkills)[];

export function About() {
  const [lead, ...body] = aboutContent.bio;

  return (
    <Section id="about">
      <Container>
        <SectionHeading meta={aboutSection} />

        <div className="grid grid-cols-12 gap-x-6">
          <WordsReveal text={aboutSection.statement} className="col-span-12 max-w-[24ch] text-statement md:col-span-9 md:col-start-4" />
        </div>

        <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-16 md:mt-36 lg:gap-x-10">
          <div className="col-span-12 md:col-span-5">
            <ParallaxImage image={aboutSection.image} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5] md:sticky md:top-28" />
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="max-w-[40ch] text-lead">{lead}</p>
            </Reveal>
            {body.map((p) => (
              <Reveal key={p}>
                <p className="mt-8 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-graphite">{p}</p>
              </Reveal>
            ))}

            <Reveal className="mt-20">
              <p className="mb-2 text-sm font-medium">{aboutSection.skillsTitle}</p>
              <dl className="grid gap-x-10 sm:grid-cols-2">
                {skillKeys.map((k) => (
                  <div key={k} className="border-t border-contour py-6">
                    <dt className="text-sm text-graphite">{aboutSection.skillLabels[k]}</dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {aboutContent.skills[k].map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-contour bg-paper/60 px-3.5 py-1.5 text-sm transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-chalk"
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
