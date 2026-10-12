"use client";

import { useRef } from "react";
import Script from "next/script";
import { useInView } from "motion/react";
import { aboutContent } from "@/lib/content/about";
import { contact } from "@/lib/content/site";

export function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { once: true, margin: "600px 0px" });
  const base = aboutContent.contact.calendly;
  const url = `${base}?hide_gdpr_banner=1&background_color=ffffff&text_color=151514&primary_color=151514`;

  return (
    <div ref={ref}>
      <div className="min-h-170 bg-chalk">
        {near && (
          <>
            <div className="calendly-inline-widget h-170 w-full" data-url={url} />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          </>
        )}
      </div>
      <a
        href={base}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-paper px-4 py-3 text-sm underline decoration-contour underline-offset-4 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        {contact.calendlyFallback}
      </a>
    </div>
  );
}
