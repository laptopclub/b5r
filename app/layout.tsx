import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description: "b5r - independent work by Dan Brazier.",
  title: "b5r"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
