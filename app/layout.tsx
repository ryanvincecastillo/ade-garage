import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.urls.site),
  title: "ADe Garage — Thai Concept & Motorcycle Parts | Ships Nationwide",
  description:
    "Thai concept and genuine motorcycle parts in Tagum City. Browse our catalog and order on Shopee, TikTok Shop, or Messenger. Ships nationwide.",
  keywords: [
    "ADe Garage",
    "motorcycle parts",
    "Tagum City",
    "Shopee",
    "TikTok Shop",
    "Raider parts",
    "Ninja parts",
    "nationwide shipping",
  ],
  openGraph: {
    title: "ADe Garage — Motorcycle Parts Hub",
    description:
      "Browse parts and order on Shopee, TikTok Shop, or Messenger. Ships nationwide.",
    url: brand.urls.site,
    siteName: "ADe Garage",
    images: [{ url: "/logo.png", width: 720, height: 720, alt: "ADe Garage" }],
    locale: "en_PH",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "ADe Garage",
  description: brand.site.tagline,
  url: brand.urls.site,
  telephone: brand.site.phone,
  image: `${brand.urls.site}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prk. 6 San Miguel (Campo 4)",
    addressLocality: "Tagum City",
    addressRegion: "Davao del Norte",
    addressCountry: "PH",
  },
  areaServed: { "@type": "Country", name: "Philippines" },
  sameAs: [
    brand.urls.facebook,
    brand.urls.shopee,
    brand.urls.tiktok,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${outfit.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
