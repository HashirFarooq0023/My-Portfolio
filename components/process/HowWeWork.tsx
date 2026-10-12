import { howWeWork } from "@/lib/content/services";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessNodes } from "./ProcessNodes";

export function HowWeWork() {
  return (
    <Section id="work">
      <Container>
        <SectionHeading meta={howWeWork} />
        <ProcessNodes />
      </Container>
    </Section>
  );
}
