import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SiteFooter, SiteHeader } from "./_components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mimris-site.vercel.app"),
  alternates: { canonical: "/" },
  title: {
    default: "Mimris — Model the world. Work with it.",
    template: "%s | Mimris",
  },
  description:
    "Mimris turns domain knowledge into explicit models that people, software, and AI can understand and use.",
  openGraph: {
    type: "website",
    siteName: "Mimris",
    url: "/",
    title: "Mimris — Model the world. Work with it.",
    description:
      "Active Knowledge Modelling for turning domain knowledge into durable context for people, software, and AI.",
    images: [{ url: "/assets/social-card-1200x630.png", width: 1200, height: 630, alt: "Mimris" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/social-card-1200x630.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f0e8",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mimris",
  url: "https://mimris-site.vercel.app/",
  description:
    "Mimris turns domain knowledge into explicit models that people, software, and AI can understand and use.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Script
          id="mimris-website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
