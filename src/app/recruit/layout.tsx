import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "竹内金型製作所の採用情報。未経験歓迎・学歴不問。金型オペレーター・金型設計スタッフを募集中。求める人物像・働く環境・募集要項をご紹介します。",
  alternates: {
    canonical: "/recruit",
  },
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
