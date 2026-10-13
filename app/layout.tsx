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
  metadataBase: new URL("https://b5r.co.uk"),
  title: "b5r"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={atkinsonHyperlegibleMono.variable}>
      <body>
        <div className="site-shell">
          <SiteHeader site={site} />
          <main>{children}</main>
          <footer className="site-footer">
            <div className="site-footer-content">
              <p>© 2026<br />B5R</p>
              <div className="site-footer-links">
                <a aria-label="GitHub" href="https://github.com/danb5r" rel="me noreferrer" target="_blank">
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
