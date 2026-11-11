import type { Metadata } from "next";
import { EnquiryModal } from "../components/enquiry-modal";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";

const atkinsonHyperlegibleMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-atkinson-hyperlegible-mono"
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
    <html lang="en" className={atkinsonHyperlegibleMono.variable}>
      <body className="bg-surface-base font-mono text-ink selection:bg-accent selection:text-accent-contrast">
        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-end px-4 py-4">
            <EnquiryModal />
          </header>
          <main className="flex flex-1">{children}</main>
          <footer className="bg-surface-base px-4 py-10">
            <div className="flex w-full justify-end border-t-4 border-ink pt-4 max-[40rem]:justify-start">
              <nav aria-label="Social links" className="flex gap-2">
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
        </div>
      </body>
    </html>
  );
}
