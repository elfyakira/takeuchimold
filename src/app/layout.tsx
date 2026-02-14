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

// JSON-LD構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: seo.defaultDescription,
  url: seo.siteUrl,
  telephone: contact.phone,
  email: contact.email,
  address: locations.headquarters.address
    ? {
        "@type": "PostalAddress",
        streetAddress: locations.headquarters.address,
        postalCode: locations.headquarters.zipCode,
        addressCountry: "JP",
      }
    : undefined,
  image: images.logo,
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
