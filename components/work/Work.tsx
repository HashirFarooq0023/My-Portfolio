import { aboutContent } from "@/lib/content/about";
import { work } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "./ProjectGrid";

export function Work() {
  return (
    <Section id="work">
      <Container>
        <SectionHeading meta={work} />
        <ProjectGrid />
        <Reveal className="mt-16 flex justify-center">
          <Button href={aboutContent.contact.github} variant="secondary" icon="github" target="_blank" rel="noopener noreferrer">
            {work.allProjects}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
