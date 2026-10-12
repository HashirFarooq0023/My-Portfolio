import type { Metadata } from "next";
import { instrumentSerif, archivo } from "./fonts";
import { site } from "@/lib/content/site";
import { ContourField } from "@/components/hero/ContourField";
import { SocialFab } from "@/components/layout/SocialFab";
import "./globals.css";

export const metadata: Metadata = site.metadata;

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
