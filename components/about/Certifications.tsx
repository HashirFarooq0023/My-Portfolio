"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { aboutSection as a } from "@/lib/content/site";
import type { CertificationItem } from "@/lib/content/types";
import { BentoTile } from "@/components/ui/BentoTile";
import { Icon } from "@/components/ui/Icon";
import { TechLabel } from "@/components/ui/TechLabel";
import { Kicker } from "./Kicker";

export function Certifications() {
  const [selected, setSelected] = useState<CertificationItem | null>(null);

  const handleClose = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <>
      <BentoTile className="p-5 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div className="space-y-1">
            <Kicker>{a.certificationsKicker}</Kicker>
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">{a.certificationsTitle}</h3>
          </div>
          <p className="text-sm text-graphite">{a.certificationsHint}</p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {a.certifications.map((item) => {
            const c = item as CertificationItem;
            return (
              <div
                key={c.id}
                className="group/cert relative flex flex-col justify-between overflow-hidden rounded-panel border border-ink/10 bg-chalk/60 p-4 transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1 hover:border-ink hover:bg-paper sm:p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper px-2.5 py-1 text-xs font-semibold tracking-wide">
                      <Icon name="award" className="size-3.5 text-ink" />
                      {c.issuer}
                    </span>
                    <span className="text-xs font-medium text-graphite">{c.date}</span>
                  </div>

                  {c.image && (
                    <button
                      type="button"
                      onClick={() => setSelected(c)}
                      aria-label={`${a.viewCertificateLabel} ${c.title}`}
                      className="group/img relative mt-4 block aspect-[16/11] w-full overflow-hidden rounded-lg border border-ink/10 bg-fog text-left shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-ink hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <Image
                        src={c.image.src}
                        alt={c.image.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                        className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-ink/20 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-chalk shadow-lg">
                          <Icon name="search" className="size-3.5" />
                          {a.viewCertificateLabel}
                        </span>
                      </div>
                    </button>
                  )}

                  <h4 className="mt-4 text-base font-bold leading-snug tracking-tight text-ink">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-graphite">{c.detail}</p>
                </div>

                <div className="mt-5 space-y-3 pt-3 border-t border-ink/10">
                  <ul className="flex flex-wrap gap-1.5">
                    {c.skills.map((s) => (
                      <li key={s} className="inline-flex items-center rounded-full bg-paper px-2 py-0.5 text-[0.75rem] font-medium text-ink">
                        <TechLabel name={s} />
                      </li>
                    ))}
                  </ul>

                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <span>{a.verifyCredentialLabel}</span>
                      <Icon name="external" className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </BentoTile>

      <AnimatePresence>
        {selected && selected.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-card border border-ink/20 bg-paper p-5 shadow-2xl md:p-6"
            >
              <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-4">
                <div>
                  <h4 className="text-lg font-bold text-ink">{selected.title}</h4>
                  <p className="text-xs text-graphite">
                    {selected.issuer} — {selected.date}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label={a.closeModalLabel}
                  className="rounded-full border border-ink/15 p-2 text-ink transition-colors hover:bg-ink hover:text-chalk focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <Icon name="close" className="size-4" />
                </button>
              </div>

              <div className="relative mt-4 aspect-[16/11] max-h-[65vh] w-full overflow-hidden rounded-panel border border-ink/10 bg-fog">
                <Image
                  src={selected.image.src}
                  alt={selected.image.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              {selected.credentialUrl && (
                <div className="mt-4 flex justify-end">
                  <a
                    href={selected.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink bg-ink px-4 py-2 text-xs font-semibold text-chalk transition-[background-color,color] duration-300 hover:bg-volt hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <span>{a.verifyCredentialLabel}</span>
                    <Icon name="external" className="size-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
