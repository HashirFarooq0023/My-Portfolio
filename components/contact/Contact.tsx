import { aboutContent } from "@/lib/content/about";
import { contact, links } from "@/lib/content/site";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { ContactRow } from "./ContactRow";

export function Contact() {
  return (
    <section id="contact" className="relative px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-shell bg-volt">
        <Container className="py-[clamp(3.5rem,7vw,6rem)]">
          <SectionHeading meta={contact} />
          <div className="grid grid-cols-12 gap-x-6 gap-y-14 lg:gap-x-10">
            <Reveal className="col-span-12 lg:col-span-5">
              <div className="divide-y divide-ink/15 border-y border-ink/15">
                <ContactRow href={links.whatsapp} icon="whatsapp" label={contact.whatsappLabel} value={aboutContent.contact.phone} />
                <ContactRow href={links.gmail} icon="mail" label={contact.emailLabel} value={aboutContent.contact.email} />
              </div>
              <a
                href={links.mailto}
                className="mt-5 inline-block text-sm underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                {contact.mailFallback}
              </a>
              <p className="mt-12 flex items-center gap-2.5 text-sm font-medium">
                <span aria-hidden="true" className="size-2 rounded-full bg-ink" />
                {contact.reply}
              </p>
              <SocialLinks className="mt-8" />
            </Reveal>
            <Reveal delay={0.15} className="col-span-12 lg:col-span-7">
              <div className="rounded-card bg-paper p-3 md:p-4">
                <p className="px-3 pb-3 pt-2 text-sm font-medium md:px-4">{contact.calendarTitle}</p>
                <div className="overflow-hidden rounded-panel">
                  <CalendlyEmbed />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
