import type { Metadata, Viewport } from "next";
import { instrumentSerif, archivo } from "./fonts";
import { aboutContent } from "@/lib/content/about";
import { site } from "@/lib/content/site";
import { siteUrl } from "@/lib/siteUrl";
import { theme } from "@/lib/theme";
import { ContourField } from "@/components/hero/ContourField";
import { SocialFab } from "@/components/layout/SocialFab";
import "./globals.css";

const m = site.metadata;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: m.title, template: m.titleTemplate },
  description: m.description,
  applicationName: m.siteName,
  authors: [{ name: aboutContent.name, url: aboutContent.contact.linkedin }],
  creator: aboutContent.name,
  keywords: [...m.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: m.siteName,
    locale: m.locale,
    title: m.title,
    description: m.description,
  },
  twitter: { card: "summary_large_image", title: m.title, description: m.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: theme.chalk,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.lang} className={`${instrumentSerif.variable} ${archivo.variable}`}>
      <body className="relative font-sans text-ink antialiased">
        <ContourField />
        {children}
        <SocialFab />
      </body>
    </html>
  );
}
