import { site } from "@/lib/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t-4 border-footer-line bg-ink py-12 text-chalk">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chalk">
          <span className="block font-serif text-2xl">{site.wordmark.serif}</span>
          <span className="block text-lg font-extrabold tracking-tight">{site.wordmark.sans}</span>
        </a>
        <nav aria-label={site.footer.navLabel}>
          <ul className="flex gap-6 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-fog focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chalk">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks inverted />
      </Container>
      <Container>
        <p className="mt-10 text-sm text-contour">{site.footer.copyright}</p>
      </Container>
    </footer>
  );
}
