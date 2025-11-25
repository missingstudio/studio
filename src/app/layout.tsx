import "./globals.css";
import type { Metadata } from "next";
import { config } from "~/lib/site-config";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const { spaceGrotesk } = config.fonts;

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  alternates: { canonical: "/" },
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: "My portfolio, blog, and personal website.",
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
