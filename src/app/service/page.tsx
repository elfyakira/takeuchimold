import type { Metadata } from "next";
import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "SERVICE",
  description:
    "プラスチック射出成型用金型の設計・製作。自動車部品・家電・OA機器等、幅広い製品に対応する金型メーカー。",
};

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
      <section className="pt-32 lg:pt-40 pb-8 lg:pb-12">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <p className="text-section-jp text-text-muted">事業内容</p>
          <h1 className="font-en text-[40px] lg:text-[64px] font-bold text-primary tracking-wider">
            SERVICE
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section>
        <Image
          src="/images/service-hero.jpg"
          alt="金型製作"
          width={1400}
          height={500}
          className="w-full h-[300px] lg:h-[500px] object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif-jp text-[20px] lg:text-[24px] font-bold text-text-primary mb-8">
            蓄積された技術で、最適な金型を。
          </h2>
          <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
            長年にわたり培ってきた技術力と経験を基盤に、幅広い製品カテゴリーに対応したプラスチック金型の設計・製作を手がけています。
            自動車部品・住設機器・家電・OA機器・工業部品など、多様な用途・材質・成形方式に対応し、
            製品特性や量産条件を踏まえた最適な構造設計を行うことが可能です。
          </p>
        </div>
      </section>

      {/* Works */}
      <section className="bg-bg-light py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <h2 className="font-en text-section-en-sp lg:text-section-en text-primary tracking-wider">
            WORKS
          </h2>
          <p className="text-section-jp text-text-muted mt-1 mb-10">
            制作事例
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Image
                key={n}
                src={`/images/works-${n}.jpg`}
                alt={`制作事例${n}`}
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover"
              />
            ))}
          </div>
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
            <h2 className="text-[24px] lg:text-[32px] font-bold text-white text-center mb-10">
              設備詳細
            </h2>
            <div className="overflow-x-auto">
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
                      className="border-b border-white/10"
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
          </div>
        </div>
      </section>

      <ContactBanner />
    </main>
  );
}
