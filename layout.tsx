import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
// import Plausible from "next-plausible"; // TODO: add Plausible later
import "./globals.css";

export const metadata: Metadata = {
  title: "AIUGC Media — AI UGC video ads for ecommerce brands and agencies",
  description:
    "Ship 20+ UGC-style video ad concepts in days, not weeks. AI-generated creative for DTC brands and performance marketing agencies. No creator sourcing, no usage rights, no revision cycles.",
  metadataBase: new URL("https://aiugcmedia.com"),
  openGraph: {
    title: "AIUGC Media — AI UGC for performance marketing",
    description:
      "20+ ad concepts shipped in days. For ecommerce brands and agencies running paid social.",
    url: "https://aiugcmedia.com",
    siteName: "AIUGC Media",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
