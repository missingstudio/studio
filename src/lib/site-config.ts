import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const config = {
  url: "https://www.missing.studio",
  title: "Missing studio",
  description: "We are The General Intelligence Company of India",
  fonts: {
    spaceGrotesk,
  },
};

export type SiteConfig = typeof config;
