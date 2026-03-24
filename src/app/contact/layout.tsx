import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社竹内金型製作所へのお問い合わせ。金型製作のご相談・採用に関するご質問・会社見学のご希望など、お気軽にご連絡ください。",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
