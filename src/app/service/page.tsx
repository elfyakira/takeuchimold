"use client";

import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";
import { FadeInUp, StaggerContainer, HeroBackground } from "@/components/animations";

const equipmentData = [
  { name: "高速マシニングセンタ", maker: "牧野フライス", model: "V99L", size: "2300×1000×650" },
  { name: "高速マシニングセンタ", maker: "牧野フライス", model: "V77", size: "1200×700×650" },
  { name: "高速マシニングセンタ", maker: "牧野フライス 2パレット", model: "a81", size: "900×800×1020" },
  { name: "高速マシニングセンタ", maker: "牧野フライス", model: "V56", size: "900×550×450" },
  { name: "高速マシニングセンタ", maker: "牧野フライス", model: "V56", size: "900×550×450" },
  { name: "マシニングセンタ", maker: "牧野フライス", model: "GF6", size: "1000×700×650" },
  { name: "マシニングセンタ", maker: "牧野フライス", model: "FNC1210A20", size: "1210×1000×700" },
  { name: "マシニングセンタ", maker: "牧野フライス", model: "FNC1210A30", size: "1250×1000×700" },
  { name: "高速マシニングセンタ", maker: "オークマ", model: "MX-55VA", size: "1050×560×450" },
  { name: "NC放電加工機", maker: "ソディック 3R仕様", model: "AG80L", size: "1350×950×650" },
  { name: "NC放電加工機", maker: "ソディック 3R仕様", model: "AQ75L", size: "1050×900×600" },
  { name: "NC放電加工機", maker: "ソディック 3R仕様", model: "AG60L", size: "870×700×500" },
  { name: "ワイヤーカット放電機", maker: "ソディック リニヤ仕様", model: "AQ750L", size: "1050×750×400" },
  { name: "ワイヤーカット放電機", maker: "ソディック リニヤ仕様", model: "ALN600G", size: "800×570×350" },
  { name: "ワイヤーカット放電機", maker: "ソディック リニヤ仕様", model: "ALN600G", size: "800×570×350" },
  { name: "ダイスポッティングプレス", maker: "三起精工", model: "SDP1310-100", size: "1300×1000×1100" },
];

export default function ServicePage() {
  return (
    <main>
      {/* Page Header */}
      <section className="pt-24 lg:pt-28 pb-6 lg:pb-8">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <p className="text-section-jp text-[#004888]">事業内容</p>
            <h1 className="font-en text-[64px] lg:text-[96px] font-bold text-[#004888] tracking-wider leading-none">
              SERVICE
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Hero Image - Fixed Background */}
      <HeroBackground>
        <section
          className="h-[300px] lg:h-[500px] bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/service-hero.jpg')" }}
          role="img"
          aria-label="金型製作"
        />
      </HeroBackground>

      {/* Intro */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
          <FadeInUp>
            <h2 className="font-serif-jp text-[20px] lg:text-[24px] font-bold text-text-primary mb-8">
              蓄積された技術で、最適な金型を。
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
              長年にわたり培ってきた技術力と経験を基盤に、幅広い製品カテゴリーに対応したプラスチック金型の設計・製作を手がけています。
              自動車部品・住設機器・家電・OA機器・工業部品など、多様な用途・材質・成形方式に対応し、
              製品特性や量産条件を踏まえた最適な構造設計を行うことが可能です。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Works */}
      <section className="bg-bg-light py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <h2 className="font-en text-[40px] lg:text-[56px] font-bold text-[#004888] tracking-wider">
              WORKS
            </h2>
            <p className="text-section-jp text-[#004888] mt-1 mb-10">
              制作事例
            </p>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={100}>
            {[
              { n: 1, alt: "プラスチック射出成型用金型 - 自動車部品向け" },
              { n: 2, alt: "プラスチック射出成型用金型 - 住設機器向け" },
              { n: 3, alt: "プラスチック射出成型用金型 - 家電製品向け" },
              { n: 4, alt: "プラスチック射出成型用金型 - OA機器向け" },
              { n: 5, alt: "プラスチック射出成型用金型 - コンテナ向け" },
              { n: 6, alt: "プラスチック射出成型用金型 - 工業部品向け" },
            ].map(({ n, alt }) => (
              <div key={n} className="overflow-hidden">
                <Image
                  src={`/images/works-${n}.jpg`}
                  alt={alt}
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Equipment Table */}
      <section id="equipment" className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/equip-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative py-section-y-sp lg:py-section-y">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <FadeInUp>
              <h2 className="text-[24px] lg:text-[32px] font-bold text-white text-center mb-10">
                設備詳細
              </h2>
            </FadeInUp>
            {/* Desktop: Table */}
            <FadeInUp delay={100}>
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-sm text-white">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="text-left py-3 px-4 font-bold">設備名</th>
                      <th className="text-left py-3 px-4 font-bold">メーカー名</th>
                      <th className="text-left py-3 px-4 font-bold">機台名</th>
                      <th className="text-left py-3 px-4 font-bold">最大ワークサイズ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipmentData.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-4 text-white/90">{row.name}</td>
                        <td className="py-3 px-4 text-white/90">{row.maker}</td>
                        <td className="py-3 px-4 text-white/90">{row.model}</td>
                        <td className="py-3 px-4 text-white/90">{row.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInUp>

            {/* Mobile: Card Layout */}
            <StaggerContainer className="lg:hidden space-y-4" staggerDelay={50}>
              {equipmentData.map((row, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-lg p-4"
                >
                  <h3 className="text-white font-bold mb-2">{row.name}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-white/50">メーカー</span>
                      <p className="text-white/90">{row.maker}</p>
                    </div>
                    <div>
                      <span className="text-white/50">機台名</span>
                      <p className="text-white/90">{row.model}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-white/50">最大ワークサイズ</span>
                      <p className="text-white/90">{row.size}</p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <ContactBanner />
    </main>
  );
}
