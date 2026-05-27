import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fastbillboards.com"),
  title: {
    default: "FastBillboards.com | Billboard Negotiation Concierge — Flat $1,000 Fee",
    template: "%s | FastBillboards.com",
  },
  description:
    "FastBillboards is a billboard negotiation concierge service. We negotiate your billboard campaign for a flat $1,000 fee — no agency markups, no commissions. Save $2,000–$8,000 per campaign.",
  keywords: [
    "billboard negotiation service",
    "billboard advertising concierge",
    "flat fee billboard consultant",
    "billboard advertising cost",
    "save money on billboard advertising",
    "billboard media buyer",
    "OOH advertising consultant",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastbillboards.com",
    siteName: "FastBillboards.com",
    title: "FastBillboards.com | Billboard Negotiation Concierge",
    description:
      "Flat $1,000 fee. No agency markups. Expert billboard negotiation from a 10-year industry insider.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FastBillboards — Billboard Negotiation Concierge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FastBillboards.com | Billboard Negotiation Concierge",
    description: "Flat $1,000 fee. No agency markups. Expert billboard negotiation.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-navy text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
