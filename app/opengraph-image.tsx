import { ImageResponse } from "next/og";
import { aboutContent } from "@/lib/content/about";
import { hero, site } from "@/lib/content/site";
import { theme } from "@/lib/theme";

export const alt = site.metadata.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card: chalk canvas, name, role and the lime visor band.
// ImageResponse only accepts inline styles, so token values come from lib/theme.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: theme.chalk, color: theme.ink, padding: "60px 72px 0", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26, color: theme.graphite }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 14, height: 14, borderRadius: 14, background: theme.signal }} />
            {site.metadata.ogKicker}
          </div>
          <div style={{ display: "flex", width: 56, height: 56, borderRadius: 14, background: theme.ink, alignItems: "center", justifyContent: "center", color: theme.volt, fontSize: 30 }}>
            {site.wordmark.serif.charAt(3)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 56 }}>
          <div style={{ fontSize: 132, letterSpacing: -5, lineHeight: 1 }}>{`${site.wordmark.serif} ${site.wordmark.sans}`}</div>
          <div style={{ marginTop: 24, fontSize: 38, color: theme.graphite }}>{aboutContent.title}</div>
        </div>
        <div style={{ position: "absolute", left: -40, right: -40, bottom: 64, height: 76, background: theme.volt, transform: "rotate(2deg)", display: "flex" }} />
        <div style={{ position: "absolute", left: -40, right: -40, bottom: 64, height: 76, background: theme.ink, transform: "rotate(-1.5deg)", display: "flex", alignItems: "center", paddingLeft: 110, gap: 28, color: theme.volt, fontSize: 30 }}>
          {hero.band.slice(0, 4).map((p) => (
            <div key={p} style={{ display: "flex", alignItems: "center", gap: 28 }}>
              {p}
              <div style={{ width: 10, height: 10, borderRadius: 10, background: theme.volt }} />
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
