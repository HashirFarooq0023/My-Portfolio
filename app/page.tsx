import { site } from "@/lib/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Work } from "@/components/work/Work";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-[var(--radius-control)] bg-ink px-4 py-2 text-chalk focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {site.skipLink}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
