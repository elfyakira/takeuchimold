import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "私たちについて",
  description:
    "竹内金型製作所の強み。半世紀以上の経験に裏打ちされた職人技術・最新鋭の加工設備・変化に応える柔軟な姿勢で、高精度なプラスチック射出成型用金型を提供します。",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
