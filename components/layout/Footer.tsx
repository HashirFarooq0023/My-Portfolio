import { aboutContent } from "@/lib/content/about";
import { footer, links, site } from "@/lib/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/ui/Magnetic";
import { RevealText } from "@/components/ui/RevealText";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container } from "./Container";

const link = "transition-colors duration-300 hover:text-volt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chalk";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-chalk">
      <Container className="pt-20 md:pt-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-h2-serif">{footer.cta.serif}</p>
            <p className="text-h2-sans">{footer.cta.sans}</p>
            <Button href={site.bookCall.href} variant="on-ink" icon="calendar" className="mt-10">
              {site.bookCall.label}
            </Button>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-8">
            <p className="mb-5 text-sm text-chalk/50">{footer.navTitle}</p>
            <ul className="space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}><a href={item.href} className={link}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3">
            <p className="mb-5 text-sm text-chalk/50">{footer.contactTitle}</p>
            <ul className="space-y-3">
              <li><a href={links.mailto} className={link}>{aboutContent.contact.email}</a></li>
              <li><a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>{aboutContent.contact.phone}</a></li>
            </ul>
            <p className="mb-5 mt-10 text-sm text-chalk/50">{footer.socialTitle}</p>
            <SocialLinks inverted />
          </div>
        </div>
      </Container>

      <div aria-hidden="true" className="mt-16 select-none overflow-hidden whitespace-nowrap px-2 text-center text-[12.5vw] leading-[0.78] text-footer-line">
        <RevealText text={`${site.wordmark.serif} ${site.wordmark.sans}`} className="font-extrabold tracking-[-0.06em]" stagger={0.04} />
      </div>

      <Container className="flex items-center justify-between gap-6 border-t border-footer-line py-8 pr-24 text-sm text-contour md:pr-28">
        <p>{footer.copyright}</p>
        <Magnetic strength={0.4}>
          <a
            href="#top"
            aria-label={footer.backToTop}
            className="grid size-12 place-items-center rounded-full border-[1.5px] border-chalk/30 transition-colors duration-300 hover:border-volt hover:bg-volt hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chalk"
          >
            <Icon name="arrowUp" className="size-4" />
          </a>
        </Magnetic>
      </Container>
    </footer>
  );
}
