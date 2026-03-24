import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "プラスチック射出成型用金型の設計・製作。高速マシニングセンタ・NC放電加工機・ワイヤーカット放電加工機など充実した設備で、自動車部品・家電・OA機器等の金型を製作しています。",
  alternates: {
    canonical: "/service",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
