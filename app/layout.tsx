import "./globals.css";
import type { Metadata } from "next";
import { jsonLd } from "@/lib/schema";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerBar from "@/components/BannerBar";
import { env as client } from "@/lib/env.client";
import { env as server } from "@/lib/env.server";

const mont = Montserrat({ subsets: ["latin"] });

const metadataBaseSafe = (() => {
  try {
    return new URL(server.siteUrl);
  } catch {
    return undefined;
  }
})();

export const metadata: Metadata = {
  metadataBase: metadataBaseSafe,
  title: {
    default: "Cal Pride Plumbing — Lake Forest, CA",
    template: "%s · Cal Pride Plumbing"
  },
  description: `Friendly, professional plumbing in Orange County. Honest pricing, fast response. Call ${client.phone}.`,
  openGraph: {
    title: "Cal Pride Plumbing",
    description: "Orange County plumber. Licensed · Bonded · Insured.",
    type: "website",
    locale: "en_US"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <BannerBar />
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
