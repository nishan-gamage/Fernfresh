import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { site } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Premium Home & Airbnb Cleaning in Auckland`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: site.name,
    images: [{ url: "/images/living-room.jpg", width: 1800, height: 1200 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#17301f",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: site.name,
  url: site.url,
  telephone: "+64212217625",
  email: site.email,
  image: `${site.url}/images/living-room.jpg`,
  areaServed: { "@type": "City", name: "Auckland" },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  sameAs: [site.facebook],
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
      </body>
    </html>
  );
}
