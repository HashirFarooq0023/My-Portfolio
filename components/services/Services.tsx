import { services } from "@/lib/content/services";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceList } from "./ServiceList";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading meta={services} />
        <ServiceList />
      </Container>
    </Section>
  );
}
