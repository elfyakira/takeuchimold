import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTACT",
  description:
    "株式会社竹内金型製作所へのお問い合わせ。採用に関するご質問、会社見学のご希望など、お気軽にご連絡ください。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
