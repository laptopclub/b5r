import type { Metadata } from "next";
import { AxisIndicators } from "../components/axis-indicators";
import { EnquiryModal } from "../components/enquiry-modal";
import { MarbleParallax } from "../components/marble-parallax";
import { PointerPositionProvider } from "../components/pointer-position-provider";
import { RockHornsIcon } from "../components/rock-horns-icon";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono"
});

const geistPixel = localFont({
  src: "./fonts/GeistPixelVF.woff2",
  variable: "--font-geist-pixel"
});

const melvorn = localFont({
  src: "./fonts/MelvornRegular-KVrmo.ttf",
  variable: "--font-melvorn"
});

export const metadata: Metadata = {
  alternates: {
    canonical: "/"
  },
  description: "b5r.",
  metadataBase: new URL("https://b5r.uk"),
  title: "b5r"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistMono.variable} ${geistPixel.variable} ${melvorn.variable}`}>
      <body className="bg-surface-base font-mono text-ink selection:bg-accent selection:text-accent-contrast">
        <PointerPositionProvider>
          <MarbleParallax />
          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="flex items-center justify-end px-4 py-4">
              <EnquiryModal />
            </header>
            <main className="flex flex-1">{children}</main>
            <footer className="px-4 py-4">
              <div className="flex w-full items-end justify-between">
                <div className="border-t-4 border-ink pt-2">
                  <div className="flex h-8 border border-ink">
                    <RockHornsIcon className="size-[30px] shrink-0 text-ink" />
                    <p className="m-0 flex items-center px-2 font-mono text-sm leading-none">© 2026</p>
                  </div>
                </div>
                <nav aria-label="Social links" className="flex gap-2 border-t-4 border-ink pt-2">
                  <a aria-label="GitHub" className="flex size-8 items-center justify-center border border-ink text-lg leading-none text-ink hover:bg-ink hover:text-surface-base focus-visible:bg-ink focus-visible:text-surface-base focus-visible:outline-0" href="https://github.com/danb5r" rel="me noreferrer" target="_blank">
                    <i aria-hidden="true" className="bi bi-github" />
                  </a>
                  <a aria-label="LinkedIn" className="flex size-8 items-center justify-center border border-ink text-lg leading-none text-ink hover:bg-ink hover:text-surface-base focus-visible:bg-ink focus-visible:text-surface-base focus-visible:outline-0" href="https://www.linkedin.com/in/danbrazieruk/" rel="me noreferrer" target="_blank">
                    <i aria-hidden="true" className="bi bi-linkedin" />
                  </a>
                  <a aria-label="Instagram" className="flex size-8 items-center justify-center border border-ink text-lg leading-none text-ink hover:bg-ink hover:text-surface-base focus-visible:bg-ink focus-visible:text-surface-base focus-visible:outline-0" href="https://www.instagram.com/danb5r/" rel="me noreferrer" target="_blank">
                    <i aria-hidden="true" className="bi bi-instagram" />
                  </a>
                </nav>
              </div>
            </footer>
            <AxisIndicators />
          </div>
        </PointerPositionProvider>
      </body>
    </html>
  );
}
