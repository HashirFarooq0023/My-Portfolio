import { aboutContent } from "@/lib/content/about";
import { contact, links } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { TabCard } from "@/components/ui/TabCard";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { ContactIconButton } from "./ContactIconButton";

export function Contact() {
  return (
    <Section id="contact" className="bg-volt">
      <Container>
        <SectionHeading headline={contact.headline} />
        <div className="grid grid-cols-4 gap-10 sm:grid-cols-8 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          <TabCard label={contact.tabLabel} className="col-span-4 sm:col-span-8 lg:col-span-8">
            <CalendlyEmbed />
          </TabCard>
          <div className="col-span-4 space-y-6 sm:col-span-8 lg:col-span-4 lg:pt-10">
            <ContactIconButton href={links.whatsapp} icon="whatsapp" label={contact.whatsappLabel} hoverTint="group-hover:text-whatsapp" />
            <ContactIconButton href={links.gmail} icon="mail" label={contact.emailLabel} hoverTint="group-hover:text-gmail" />
            <p className="select-all font-medium">{aboutContent.contact.email}</p>
            <a href={links.mailto} className="inline-block text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
              {contact.mailFallback}
            </a>
            <p className="text-sm">{aboutContent.contact.phone}</p>
            <p className="text-sm">{contact.reply}</p>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </Section>
  );
}
