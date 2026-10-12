import type { Metadata } from "next";
import { instrumentSerif, archivo } from "./fonts";
import { site } from "@/lib/content/site";
import "./globals.css";

export const metadata: Metadata = site.metadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.lang} className={`${instrumentSerif.variable} ${archivo.variable}`}>
      <body className="bg-chalk font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
