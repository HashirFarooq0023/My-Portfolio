"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { site } from "@/lib/content/site";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container } from "./Container";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export function Header() {
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-110 h-0.5 origin-left bg-ink"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-100 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled && !open ? "border-b border-contour/70 bg-chalk/75 backdrop-blur-md" : "border-b border-transparent",
        )}
      >
        <Container className="flex h-18 items-center justify-between gap-6 md:h-20">
          <Link href="/#top" className={cn("relative z-50 flex items-baseline gap-1.5 whitespace-nowrap text-xl leading-none lg:text-2xl", open && "text-chalk", focusRing)}>
            <span className="font-serif">{site.wordmark.serif}</span>
            <span className="font-extrabold tracking-tight">{site.wordmark.sans}</span>
          </Link>

          <nav
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "hidden rounded-full border p-1.5 backdrop-blur-md transition-[background-color,border-color] duration-500 md:block",
              scrolled ? "border-contour bg-paper/75" : "border-transparent bg-transparent",
            )}
          >
            <ul className="flex">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    onFocus={() => setHovered(item.href)}
                    className={cn("relative block rounded-full px-3 py-2.5 text-sm font-medium lg:px-5", focusRing)}
                  >
                    {hovered === item.href && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className={cn("relative transition-colors duration-300", hovered === item.href && "text-chalk")}>
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href={site.bookCall.href} size="sm" icon="calendar">
                {site.bookCall.label}
              </Button>
            </div>
            <button
              type="button"
              aria-label={open ? site.menu.close : site.menu.open}
              aria-expanded={open}
              aria-controls="menu-overlay"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "group relative z-50 inline-flex size-12 flex-col items-center justify-center gap-1.5 rounded-full border-[1.5px] transition-colors duration-300 md:hidden",
                open ? "border-chalk" : "border-ink",
                focusRing,
              )}
            >
              <span className={cn("h-0.5 w-5 transition-transform duration-300", open ? "translate-y-1 rotate-45 bg-chalk" : "translate-x-1 bg-ink group-hover:translate-x-0")} />
              <span className={cn("h-0.5 w-5 transition-transform duration-300", open ? "-translate-y-1 -rotate-45 bg-chalk" : "bg-ink")} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-overlay"
            className="fixed inset-0 z-90 flex flex-col justify-between bg-ink pb-10 pt-32 text-chalk md:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: reduce ? 0 : 0.7, ease: ease.snap }}
          >
            <Container>
              <ul className="space-y-3">
                {site.nav.map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, ease: ease.snap, delay: 0.15 + i * 0.06 }}
                      className={cn("block", i % 2 ? "text-h2-sans" : "text-h2-serif italic", "focus-visible:outline-2 focus-visible:outline-chalk")}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </Container>
            <Container>
              <SocialLinks inverted />
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
