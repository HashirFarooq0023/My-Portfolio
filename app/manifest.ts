import type { MetadataRoute } from "next";
import { aboutContent } from "@/lib/content/about";
import { site } from "@/lib/content/site";
import { theme } from "@/lib/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.metadata.title,
    short_name: aboutContent.name,
    description: site.metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: theme.chalk,
    theme_color: theme.ink,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
