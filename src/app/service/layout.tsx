import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SERVICE",
  description:
    "プラスチック射出成型用金型の設計・製作。自動車部品・家電・OA機器等、幅広い製品に対応する金型メーカー。",
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
