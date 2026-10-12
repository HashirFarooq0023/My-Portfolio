import Image from "next/image";
import { aboutContent } from "@/lib/content/about";
import { aboutSection } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabCard } from "@/components/ui/TabCard";
import { SpecSheet } from "./SpecSheet";

export function About() {
  const [lead, ...body] = aboutContent.bio;

  return (
    <Section id="about">
      <Container className="grid grid-cols-4 gap-10 sm:grid-cols-8 lg:grid-cols-12 lg:gap-6 xl:gap-8">
        <div className="col-span-4 sm:col-span-8 lg:col-span-7">
          <SectionHeading headline={aboutSection.headline} />
          <p className="max-w-[58ch] text-lead">{lead}</p>
          {body.map((p) => (
            <p key={p} className="mt-6 max-w-[65ch] text-[1.0625rem] leading-relaxed text-graphite">{p}</p>
          ))}
        </div>
        <div className="col-span-4 sm:col-span-8 lg:col-span-5 lg:pt-4">
          <div className="relative mb-10 aspect-square overflow-hidden rounded-[var(--radius-panel)] bg-fog">
            <Image src={aboutSection.image.src} alt={aboutSection.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover object-top" />
          </div>
          <TabCard label={aboutSection.specTitle}>
            <SpecSheet />
          </TabCard>
        </div>
      </Container>
    </Section>
  );
}
