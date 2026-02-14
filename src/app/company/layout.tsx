import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "COMPANY",
  description:
    "株式会社竹内金型製作所の会社概要。昭和45年創業、愛知県あま市の金型メーカー。代表挨拶・会社概要・アクセス。",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
