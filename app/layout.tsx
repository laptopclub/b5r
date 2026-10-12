import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";
import "./globals.css";

const atkinsonHyperlegibleMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-atkinson-hyperlegible-mono"
});

export const metadata: Metadata = {
  description: "b5r - independent work by Dan Brazier.",
  title: "b5r"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={atkinsonHyperlegibleMono.variable}>
      <body>{children}</body>
    </html>
  );
}
