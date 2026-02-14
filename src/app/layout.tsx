import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seo, company, contact, locations, images } from "@/lib/site";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif-jp",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-jp",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

// JSON-LD構造化データ（製造業向け）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  "@id": "https://www.tkss.co.jp/#organization",
  name: company.name,
  alternateName: company.nameEn,
  description: seo.defaultDescription,
  url: seo.siteUrl || "https://www.tkss.co.jp",
  telephone: contact.phone,
  email: contact.email,
  foundingDate: "1970-02",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 25,
  },
  address: locations.headquarters.address
    ? {
        "@type": "PostalAddress",
        streetAddress: locations.headquarters.address,
        postalCode: locations.headquarters.zipCode,
        addressLocality: "あま市",
        addressRegion: "愛知県",
        addressCountry: "JP",
      }
    : undefined,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.18,
    longitude: 136.81,
  },
  image: images.logo,
  logo: images.logo,
  sameAs: [],
  areaServed: "JP",
  knowsAbout: [
    "プラスチック射出成型用金型",
    "金型設計",
    "金型製作",
    "自動車部品金型",
    "家電金型",
    "OA機器金型",
  ],
};

export const metadata: Metadata = {
  metadataBase: seo.siteUrl ? new URL(seo.siteUrl) : undefined,
  title: {
    default: seo.defaultTitle || company.name || "会社名",
    template: `%s${seo.titleSuffix || ""}`,
  },
  description: seo.defaultDescription,

  alternates: {
    canonical: "/",
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

  openGraph: {
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    locale: "ja_JP",
    type: "website",
    url: seo.siteUrl,
    siteName: company.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#005596",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} ${roboto.variable} font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
