import { aboutContent } from "@/lib/content/about";
import { projects } from "@/lib/content/projects";
import { work } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

// Asymmetric rhythm: wide/narrow, then narrow/wide.
const isWide = (i: number) => i % 4 === 0 || i % 4 === 3;

export function Work() {
  return (
    <Section id="work">
      <Container>
        <SectionHeading headline={work.headline} />
        {work.groups.map((group) => {
          const items = projects
            .filter((p) => (group.categories as readonly string[]).includes(p.category))
            .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
          return (
            <div key={group.id} id={`work-${group.id}`} className="mt-20 first-of-type:mt-0">
              <h3 className="mb-10 border-t border-contour pt-6">
                <span className="block font-serif text-2xl text-graphite">{group.label.serif}</span>
                <span className="block text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-tight">{group.label.sans}</span>
              </h3>
              <div className="grid grid-cols-4 gap-x-4 gap-y-14 sm:grid-cols-8 sm:gap-x-5 lg:grid-cols-12 lg:gap-x-6 xl:gap-x-8">
                {items.map((p, i) => (
                  <ProjectCard key={p.id} project={p} wide={isWide(i)} />
                ))}
              </div>
            </div>
          );
        })}
        <Button
          href={aboutContent.contact.github}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
          icon={<Icon name="github" />}
          className="mt-16"
        >
          {work.allProjects}
        </Button>
      </Container>
    </Section>
  );
}
