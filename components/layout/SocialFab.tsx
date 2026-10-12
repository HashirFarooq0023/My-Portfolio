"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { aboutContent } from "@/lib/content/about";
import { site } from "@/lib/content/site";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

const items: readonly { name: IconName & keyof typeof site.social; href: string }[] = [
  { name: "instagram", href: aboutContent.contact.instagram },
  { name: "linkedin", href: aboutContent.contact.linkedin },
  { name: "github", href: aboutContent.contact.github },
];

const ring = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

export function SocialFab() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-80 flex flex-col items-center gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {open && (
          <motion.ul id="social-fab" className="flex flex-col items-center gap-3" exit={{ opacity: 0, transition: { duration: 0.15 } }}>
            {items.map(({ name, href }, i) => (
              <motion.li
                key={name}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: ease.snap, delay: (items.length - 1 - i) * 0.05 }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={site.social[name]}
                  className={cn(
                    "grid size-12 place-items-center rounded-full border border-contour bg-paper/90 text-ink shadow-lg shadow-ink/10 backdrop-blur-md transition-[background-color,color,border-color,scale] duration-300 hover:scale-110 hover:border-ink hover:bg-ink hover:text-volt",
                    ring,
                  )}
                >
                  <Icon name={name} className="size-4.5" />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="social-fab"
        aria-label={open ? site.fab.close : site.fab.open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "grid size-14 place-items-center rounded-full shadow-xl shadow-ink/20 transition-[background-color,color,scale] duration-300 ease-snap hover:scale-105 active:scale-95",
          open ? "bg-volt text-ink" : "bg-ink text-volt",
          ring,
        )}
      >
        <Icon name="plus" className={cn("size-5 transition-transform duration-500 ease-snap", open && "rotate-[135deg]")} />
      </button>
    </div>
  );
}
