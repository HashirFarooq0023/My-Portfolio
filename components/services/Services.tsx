import { services } from "@/lib/content/services";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Process } from "./Process";
import { ServiceList } from "./ServiceList";

export function Services() {
  return (
    <Section id="services" className="bg-paper">
      <Container>
        <SectionHeading meta={services} />
        <ServiceList />
        <Process />
      </Container>
    </Section>
  );
}
