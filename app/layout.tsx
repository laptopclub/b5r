import { SiteShell, type SiteChrome } from "@laptopclub/foundation-ui";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";

const atkinsonHyperlegibleMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-atkinson-hyperlegible-mono"
});

const site: SiteChrome = {
  copyrightStartYear: 2026,
  logoText: "b5r",
  title: "b5r"
};

export const metadata: Metadata = {
  description: "b5r - independent work by Dan Brazier.",
  metadataBase: new URL("https://b5r.co.uk"),
  title: "b5r"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={atkinsonHyperlegibleMono.variable}>
      <body><SiteShell site={site}>{children}</SiteShell></body>
    </html>
  );
}
