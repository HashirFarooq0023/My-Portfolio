import { site } from "@/lib/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { VisorBand } from "@/components/hero/VisorBand";
import { About } from "@/components/about/About";
import { Services } from "@/components/services/Services";
import { Work } from "@/components/work/Work";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-ink px-5 py-3 text-chalk focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {site.skipLink}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <VisorBand />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
