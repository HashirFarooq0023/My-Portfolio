"use client";

import { useState, useCallback, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { communityContent as c } from "@/lib/content/community";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoTile } from "@/components/ui/BentoTile";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

interface LightboxState {
  src: StaticImageData;
  alt: string;
  badge: string;
  date: string;
  postUrl: string;
  viewLabel: string;
  closeLabel: string;
}

export function Community() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const handleClose = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  const posts = c?.posts ?? (c?.post ? [c.post] : []);

  return (
    <>
      <Section id="community">
        <Container>
          <SectionHeading meta={c} />

          <div className="space-y-8 md:space-y-12">
            {posts.map((post, idx) => {
              if (!post || !post.authorAvatar?.src) return null;
              return (
                <Reveal key={post.id} delay={idx * 0.08}>
                <BentoTile className="overflow-hidden p-6 md:p-10">
                  <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: LinkedIn Post Narrative */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-between space-y-6">
                      {/* Author Header */}
                      <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
                        <div className="flex items-center gap-3.5">
                          <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-ink/15 bg-fog shadow-sm">
                            <Image
                              src={post.authorAvatar.src}
                              alt={post.authorAvatar.alt}
                              fill
                              sizes="48px"
                              className="object-cover object-top"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h3 className="font-bold leading-tight tracking-tight text-ink md:text-lg">
                                {post.authorName}
                              </h3>
                              <span
                                aria-label={post.verifiedLabel}
                                className="inline-flex size-4 items-center justify-center rounded-full bg-volt text-[10px] text-ink font-bold"
                              >
                                <Icon name="check" className="size-2.5" />
                              </span>
                            </div>
                            <p className="text-xs text-graphite md:text-sm">{post.authorRole}</p>
                            <p className="text-[11px] text-graphite/80">{post.publishedDate}</p>
                          </div>
                        </div>

                        <a
                          href={post.postUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={post.viewOnLinkedInLabel}
                          className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper px-3 py-1.5 text-xs font-semibold text-ink shadow-sm transition-[border-color,background-color,translate] duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-chalk"
                        >
                          <Icon name="linkedin" className="size-3.5 text-[#0A66C2]" />
                          <span className="hidden sm:inline">{post.cardKicker}</span>
                        </a>
                      </div>

                      {/* Post Content */}
                      <div className="space-y-4">
                        {post.contentLines.map((line) => (
                          <p key={line} className="text-lead text-ink/90">
                            {line}
                          </p>
                        ))}
                      </div>

                      {/* Post Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-ink/10 bg-chalk/80 px-3 py-1 text-xs font-medium text-graphite"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Call to Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-ink/10">
                        <a
                          href={post.postUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-semibold text-chalk shadow-sm transition-[background-color,color,scale] duration-300 hover:scale-102 hover:bg-volt hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                        >
                          <Icon name="linkedin" className="size-4" />
                          <span>{post.viewOnLinkedInLabel}</span>
                          <Icon name="arrowUpRight" className="size-3.5" />
                        </a>

                        <button
                          type="button"
                          onClick={() =>
                            setLightbox({
                              src: post.postImage.src,
                              alt: post.postImage.alt,
                              badge: post.certificateBadge,
                              date: post.publishedDate,
                              postUrl: post.postUrl,
                              viewLabel: post.viewOnLinkedInLabel,
                              closeLabel: post.closeLightboxLabel,
                            })
                          }
                          className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-[border-color,background-color] duration-300 hover:border-ink hover:bg-chalk"
                        >
                          <Icon name="award" className="size-4 text-ink" />
                          <span>{post.openLightboxLabel}</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Certificate / Award Media */}
                    <div className="col-span-12 lg:col-span-6">
                      {post.secondaryImage ? (
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          {/* Image 1: Trophy */}
                          <div className="group/cert relative isolate overflow-hidden rounded-panel border border-ink/15 bg-paper p-2.5 shadow-md transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-xl">
                            <button
                              type="button"
                              onClick={() =>
                                setLightbox({
                                  src: post.postImage.src,
                                  alt: post.postImage.alt,
                                  badge: post.certificateBadge,
                                  date: post.publishedDate,
                                  postUrl: post.postUrl,
                                  viewLabel: post.viewOnLinkedInLabel,
                                  closeLabel: post.closeLightboxLabel,
                                })
                              }
                              aria-label={post.openLightboxLabel}
                              className="relative block aspect-square w-full overflow-hidden rounded-lg bg-fog text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                            >
                              <Image
                                src={post.postImage.src}
                                alt={post.postImage.alt}
                                fill
                                sizes="(min-width: 1024px) 25vw, 50vw"
                                className="object-cover object-center transition-transform duration-500 ease-snap group-hover/cert:scale-[1.04]"
                              />
                              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100" />
                              <span className="pointer-events-none absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full border border-paper/40 bg-ink/80 px-2.5 py-1 text-[11px] font-semibold text-chalk shadow backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100">
                                <Icon name="award" className="size-3 text-volt" />
                                <span>{post.openLightboxLabel}</span>
                              </span>
                            </button>
                            <div className="mt-2 text-center text-xs font-semibold text-ink">
                              {post.certificateBadge}
                            </div>
                          </div>

                          {/* Image 2: Certificate */}
                          <div className="group/cert relative isolate overflow-hidden rounded-panel border border-ink/15 bg-paper p-2.5 shadow-md transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-xl">
                            <button
                              type="button"
                              onClick={() =>
                                setLightbox({
                                  src: post.secondaryImage!.src,
                                  alt: post.secondaryImage!.alt,
                                  badge: post.certificateBadge,
                                  date: post.publishedDate,
                                  postUrl: post.postUrl,
                                  viewLabel: post.viewOnLinkedInLabel,
                                  closeLabel: post.closeLightboxLabel,
                                })
                              }
                              aria-label={post.openLightboxLabel}
                              className="relative block aspect-square w-full overflow-hidden rounded-lg bg-fog text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                            >
                              <Image
                                src={post.secondaryImage.src}
                                alt={post.secondaryImage.alt}
                                fill
                                sizes="(min-width: 1024px) 25vw, 50vw"
                                className="object-cover object-center transition-transform duration-500 ease-snap group-hover/cert:scale-[1.04]"
                              />
                              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100" />
                              <span className="pointer-events-none absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full border border-paper/40 bg-ink/80 px-2.5 py-1 text-[11px] font-semibold text-chalk shadow backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100">
                                <Icon name="award" className="size-3 text-volt" />
                                <span>{post.openLightboxLabel}</span>
                              </span>
                            </button>
                            <div className="mt-2 text-center text-xs font-medium text-graphite">
                              {post.publishedDate}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="group/cert relative isolate overflow-hidden rounded-panel border border-ink/15 bg-paper p-3 shadow-lg shadow-ink/5 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-xl">
                          <button
                            type="button"
                            onClick={() =>
                              setLightbox({
                                src: post.postImage.src,
                                alt: post.postImage.alt,
                                badge: post.certificateBadge,
                                date: post.publishedDate,
                                postUrl: post.postUrl,
                                viewLabel: post.viewOnLinkedInLabel,
                                closeLabel: post.closeLightboxLabel,
                              })
                            }
                            aria-label={post.openLightboxLabel}
                            className="relative block aspect-[800/562] w-full overflow-hidden rounded-lg bg-fog text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                          >
                            <Image
                              src={post.postImage.src}
                              alt={post.postImage.alt}
                              fill
                              sizes="(min-width: 1024px) 45vw, 95vw"
                              className="object-cover object-center transition-transform duration-500 ease-snap group-hover/cert:scale-[1.03]"
                            />
                            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100" />
                            <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-paper/40 bg-ink/80 px-3 py-1.5 text-xs font-semibold text-chalk shadow backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100">
                              <Icon name="award" className="size-3.5 text-volt" />
                              <span>{post.openLightboxLabel}</span>
                            </span>
                          </button>
                          <div className="mt-3 flex items-center justify-between px-2 text-xs text-graphite">
                            <span className="font-semibold text-ink">{post.certificateBadge}</span>
                            <span>{post.publishedDate}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </BentoTile>
              </Reveal>
            );
          })}
        </div>
        </Container>
      </Section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-130 flex items-center justify-center bg-ink/75 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-panel border border-ink/20 bg-paper shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-ink/10 bg-chalk/80 px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper px-3 py-1 text-xs font-semibold">
                    <Icon name="award" className="size-3.5 text-ink" />
                    <span>{lightbox.badge}</span>
                  </span>
                  <span className="hidden sm:inline text-xs text-graphite">{lightbox.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={lightbox.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper px-3 py-1 text-xs font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-chalk"
                  >
                    <Icon name="linkedin" className="size-3.5 text-[#0A66C2]" />
                    <span>{lightbox.viewLabel}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label={lightbox.closeLabel}
                    className="grid size-8 place-items-center rounded-full border border-ink/15 text-graphite transition-colors hover:border-ink hover:bg-ink hover:text-chalk focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    <Icon name="close" className="size-4" />
                  </button>
                </div>
              </div>

              {/* High-Resolution Certificate/Trophy Image */}
              <div className="relative aspect-[4/3] w-full bg-fog overflow-hidden sm:aspect-[16/11]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 80vw, 95vw"
                  className="object-contain p-2"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
