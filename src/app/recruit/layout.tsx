import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RECRUIT",
  description:
    "株式会社竹内金型製作所の採用情報。未経験OK、金型オペレーター・金型加工・設計の正社員募集。充実の福利厚生と資格取得支援あり。",
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
