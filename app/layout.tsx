import { SiteHeader, type SiteChrome } from "@laptopclub/foundation-ui";
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
  metadataBase: new URL("https://b5r.uk"),
  title: "b5r"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={atkinsonHyperlegibleMono.variable}>
      <body className="bg-surface-base font-mono text-ink selection:bg-accent selection:text-accent-contrast">
        <div className="flex min-h-screen flex-col">
          <SiteHeader site={site} />
          <main className="flex-1">{children}</main>
          <footer className="bg-surface-base px-4 py-10 text-ink-muted">
            <div className="flex w-full items-end justify-between max-[40rem]:flex-col max-[40rem]:items-start max-[40rem]:gap-4">
              <p className="m-0 uppercase leading-6">© 2026<br />B5R</p>
              <div className="flex items-center max-[40rem]:order-[-1]">
                <a aria-label="GitHub" className="text-xl leading-none text-ink-muted hover:bg-accent hover:text-accent-contrast focus-visible:bg-accent focus-visible:text-accent-contrast focus-visible:outline-0" href="https://github.com/danb5r" rel="me noreferrer" target="_blank">
                  <i aria-hidden="true" className="bi bi-github" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
