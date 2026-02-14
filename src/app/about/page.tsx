import type { Metadata } from "next";
import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "ABOUT US",
  description:
    "株式会社竹内金型製作所の強み。55年以上の職人技術・最新鋭設備・改善への姿勢で高精度金型を提供します。",
};

const features = [
  {
    num: "01",
    title: "「 技術 」 ─ 経験に裏打ちされた職人精度",
    body: "半世紀以上の経験で蓄積された加工ノウハウと、職人による精密な作業品質が当社の基盤です。複雑形状・微細精度・高難度金型にも対応できる理由は、材料特性や成形挙動まで理解したうえで最適な工法を選択できる\u201C技術の深さ\u201Dにあります。安定した品質と高い再現性は、こうした技術力によって支えられています。",
    image: "/images/concept-bg.jpg",
  },
  {
    num: "02",
    title: "「 設備 」 ─ 高精度を実現する最新鋭の加工環境",
    body: "高速マシニングセンタを中心に、CAD/CAM・3RNC放電加工・ワイヤーカット放電加工等などの先端設備を整備。高速加工、多軸加工、高効率データ連携により、精度向上・安定品質・短納期化を同時に実現する生産体制を構築しています。設備投資を継続することで、品質要求の高度化にも確実に対応できます。",
    image: "/images/feature-equip.jpg",
  },
  {
    num: "03",
    title: "「 姿勢 」 ─ 変化に応える柔軟性と改善への意志",
    body: "技術革新や市場ニーズの変化に対し、柔軟かつ前向きに取り組む姿勢が当社の強みです。新しい構造や材料、加工方法にも積極的に挑戦し、\u201Cより良い品質のための改善\u201Dを日常的に行う文化が根づいています。この姿勢こそが、高い信頼性と持続的な技術力の土台となっています。",
    image: "/images/feature-team.jpg",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Header - 50vh */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <Image
          src="/images/about-hero.jpg"
          alt="工場内部"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-container mx-auto px-6 lg:px-12 w-full">
          <h1 className="font-en text-[40px] lg:text-[64px] font-bold text-white tracking-wider">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Intro + Features - Dark BG */}
      <section className="bg-[#111111] text-white py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          {/* Intro */}
          <div className="mb-16 lg:mb-24">
            <h2 className="font-en text-section-en-sp lg:text-section-en text-white tracking-wider">
              FEATURE
            </h2>
            <p className="text-section-jp text-white/60 mt-1 mb-8">
              3つの強み
            </p>
            <h3 className="text-[20px] lg:text-[24px] font-bold text-white mb-6">
              品質をつくるのは、技術と設備、そして姿勢です。
            </h3>
            <p className="text-body text-white/80 max-w-2xl leading-relaxed">
              私たちは長年培ってきた職人技術と最新鋭の設備を軸に、
              お客様が求める品質・精度・再現性を確実に実現するため、
              工程ごとの最適化と技術力の向上に継続して取り組んでいます。
            </p>
          </div>

          {/* 3 Features */}
          <div className="space-y-20 lg:space-y-28">
            {features.map((f) => (
              <div
                key={f.num}
                className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
              >
                {/* Text */}
                <div className="lg:w-1/2">
                  <span className="font-en text-feature-num text-white/20">
                    {f.num}
                  </span>
                  <h4 className="text-[18px] lg:text-[20px] font-bold text-white mt-4 mb-6">
                    {f.title}
                  </h4>
                  <p className="text-body text-white/80 leading-relaxed">
                    {f.body}
                  </p>
                </div>
                {/* Image */}
                <div className="lg:w-1/2">
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={600}
                    height={450}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
    </main>
  );
}
