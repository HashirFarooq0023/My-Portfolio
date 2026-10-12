"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "./Container";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled ? "border-contour bg-chalk/80 backdrop-blur-md" : "border-transparent",
      )}
    >
      <Container className={cn("flex items-center justify-between transition-[height] duration-300", scrolled ? "h-18" : "h-18 md:h-22")}>
        <a href="#top" className={cn("leading-none", focusRing)}>
          <span className="block font-serif text-2xl">{site.wordmark.serif}</span>
          <span className="block text-lg font-extrabold tracking-tight">{site.wordmark.sans}</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={cn("hover:text-graphite", focusRing)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={site.bookCall.href} icon={<Icon name="calendar" />} className="hidden sm:inline-flex">
            {site.bookCall.label}
          </Button>
          <a
            href={site.bookCall.href}
            aria-label={site.bookCall.label}
            className={cn("inline-flex size-12 items-center justify-center rounded-[var(--radius-control)] bg-volt sm:hidden", focusRing)}
          >
            <Icon name="calendar" />
          </a>
          <button
            type="button"
            aria-label={open ? site.menu.close : site.menu.open}
            aria-expanded={open}
            aria-controls="menu-overlay"
            onClick={() => setOpen((v) => !v)}
            className={cn("group relative z-50 inline-flex size-12 flex-col items-end justify-center gap-1.5 rounded-[var(--radius-control)] border-[1.5px] border-ink px-3 md:hidden", focusRing)}
          >
            <span className={cn("h-0.5 bg-ink transition-transform duration-200", open ? "w-6 translate-y-1 rotate-45" : "w-4 group-hover:w-6")} />
            <span className={cn("h-0.5 w-6 bg-ink transition-transform duration-200", open && "-translate-y-1 -rotate-45")} />
          </button>
        </div>
      </Container>

      {open && (
        <div id="menu-overlay" className="fixed inset-0 z-40 flex flex-col justify-center bg-chalk md:hidden">
          <Container>
            <ul className="space-y-4">
              {site.nav.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(i % 2 ? "text-h2-sans" : "text-h2-serif hover:italic", focusRing)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
