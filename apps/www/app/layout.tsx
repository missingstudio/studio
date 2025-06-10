import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { JetBrains_Mono as FontMono } from "next/font/google";
import "./globals.css";


const fontSans = FontSans({ subsets: ['latin'] })
const fontMono = FontMono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Missing studio",
  description: "AI studio to build AI products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} ${fontMono.className}`}>
        {children}
      </body>
    </html>
  );
}
