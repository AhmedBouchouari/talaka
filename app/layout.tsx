import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaaSSy — Your day, simplified",
  description:
    "SaaSSy is the free mobile app that helps you plan, create, and stay on top of everything — anytime, anywhere.",
  openGraph: {
    title: "SaaSSy — Your day, simplified",
    description:
      "SaaSSy is the free mobile app that helps you plan, create, and stay on top of everything — anytime, anywhere.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
