
import type { Metadata } from "next";

import { Geist, Geist_Mono, Poppins, Raleway } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollEffects } from "@/components/ui/scroll-effects";
import { CtaPlacement } from "@/components/layout/cta-placement";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Airful | Digital Transformation & Technology Solutions",
  description:
    "Realize your vision with powerful technology solutions grounded in solid business wisdom. Digital strategy, AI implementation, web development, and marketing automation.",
  keywords: [
    "digital transformation",
    "technology solutions",
    "web development",
    "AI implementation",
    "marketing automation",
    "CRM integration",
    "digital strategy",
  ],
  authors: [{ name: "Airful" }],
  openGraph: {
    title: "Airful | Digital Transformation & Technology Solutions",
    description:
      "Realize your vision with powerful technology solutions grounded in solid business wisdom.",
    url: "https://airful.io",
    siteName: "Airful",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airful | Digital Transformation & Technology Solutions",
    description:
      "Realize your vision with powerful technology solutions grounded in solid business wisdom.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${raleway.variable} antialiased bg-black text-white`}
      >
        <ScrollEffects />
        <Header />
        <Breadcrumbs />
        <main>{children}</main>
        <CtaPlacement />
        <Footer />
      </body>
    </html>
  );
}
