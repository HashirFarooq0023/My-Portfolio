import { site } from "@/lib/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { Services } from "@/components/services/Services";
import { About } from "@/components/about/About";
import { HowWeWork } from "@/components/process/HowWeWork";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
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
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
