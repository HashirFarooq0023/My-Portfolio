import { aboutContent } from "@/lib/content/about";
import { projectsSection } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "./ProjectGrid";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading meta={projectsSection} />
        <ProjectGrid />
        <Reveal className="mt-12 flex justify-center">
          <Button href={aboutContent.contact.github} variant="secondary" icon="github" target="_blank" rel="noopener noreferrer">
            {projectsSection.allProjects}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
