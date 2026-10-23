import { aboutContent } from "@/lib/content/about";
import { site } from "@/lib/content/site";
import { siteUrl } from "@/lib/siteUrl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";
import { About } from "@/components/about/About";
import { Community } from "@/components/community/Community";
import { HowWeWork } from "@/components/process/HowWeWork";
import { Contact } from "@/components/contact/Contact";

const { contact } = aboutContent;
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: aboutContent.name,
  jobTitle: aboutContent.title,
  description: site.metadata.description,
  url: siteUrl,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressCountry: aboutContent.location },
  knowsAbout: Object.values(aboutContent.skills).flat(),
  sameAs: [contact.github, contact.linkedin, contact.instagram],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD must be raw JSON; escape "<" so content can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only z-120 rounded-full bg-ink px-5 py-3 text-chalk focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {site.skipLink}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Community />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
