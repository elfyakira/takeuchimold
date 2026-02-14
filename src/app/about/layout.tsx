import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT US",
  description:
    "株式会社竹内金型製作所の強み。55年以上の職人技術・最新鋭設備・改善への姿勢で高精度金型を提供します。",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
