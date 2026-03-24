import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社案内",
  description:
    "株式会社竹内金型製作所の会社概要。愛知県あま市で昭和45年に創業。代表挨拶・会社概要・沿革・アクセス情報をご紹介します。",
  alternates: {
    canonical: "/company",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
