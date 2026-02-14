import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "RECRUIT",
  description:
    "株式会社竹内金型製作所の採用情報。経験よりも意欲を重視。未経験から技術者として成長できる環境です。",
};

const cultureItems = [
  {
    num: "01",
    title: "技術を学ぶことを楽しめる方",
    body: "金型製作には、精密さ・探求心・継続した学びが欠かせません。「知らないことを知るのが好き」「手を動かしながら成長したい」そんな方が、当社で大きく活躍できます。",
  },
  {
    num: "02",
    title: "誠実にものづくりと向き合える方",
    body: "金型は、お客様の製品品質を左右する\u201C原点\u201Dです。任された工程に責任を持ち、丁寧に、正確に取り組める姿勢を大切にしています。",
  },
  {
    num: "03",
    title: "チームで成果をつくることを大切にできる方",
    body: "当社の仕事は、一人の力では完成しません。設計・加工・仕上げ・検査…すべてがつながることで、最高の品質が生まれます。互いを尊重し、協力し合える方を歓迎します。",
  },
];

export default function RecruitPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="pt-32 lg:pt-40 pb-8 lg:pb-12">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <p className="text-section-jp text-text-muted">採用情報</p>
          <h1 className="font-en text-[40px] lg:text-[64px] font-bold text-primary tracking-wider">
            RECRUIT
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section>
        <Image
          src="/images/recruit-hero.jpg"
          alt="採用イメージ"
          width={1400}
          height={500}
          className="w-full h-[300px] lg:h-[500px] object-cover"
          priority
        />
      </section>

      {/* Culture */}
      <section id="culture" className="bg-primary text-white py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <h2 className="font-en text-section-en-sp lg:text-section-en text-white tracking-wider">
            OUR CULTURE
          </h2>
          <p className="text-section-jp text-white/60 mt-1 mb-6">
            求める人物像
          </p>
          <p className="text-body text-white/80 max-w-2xl leading-relaxed mb-12">
            私たちは、金型づくりを&ldquo;技術の仕事&rdquo;であると同時に、&ldquo;人の姿勢が品質をつくる仕事&rdquo;だと考えています。
            経験の有無よりも、次のような想いを持つ方と一緒に働きたいと思っています。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cultureItems.map((item) => (
              <div
                key={item.num}
                className="bg-white/10 p-8 backdrop-blur-sm"
              >
                <span className="font-en text-feature-num text-white/20 block">
                  {item.num}
                </span>
                <h3 className="text-[18px] font-bold text-white mt-4 mb-4">
                  {item.title}
                </h3>
                <p className="text-body-sm text-white/80 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section id="environment" className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-en text-section-en-sp lg:text-section-en text-primary tracking-wider">
              ENVIRONMENT
            </h2>
            <p className="text-section-jp text-text-muted mt-1">働く環境</p>
          </div>
          <Image
            src="/images/recruit-main.jpg"
            alt="働く環境"
            width={1200}
            height={600}
            className="w-full h-[300px] lg:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-section-y-sp lg:py-section-y bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-en text-section-en-sp lg:text-section-en text-primary tracking-wider">
              OUTLINE
            </h2>
            <p className="text-section-jp text-text-muted mt-1">募集要項</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="border border-primary/20 p-8 min-h-[300px] flex items-center justify-center"
                >
                  <p className="text-body text-text-muted text-center">
                    エンゲージに掲載の
                    <br />
                    募集要項を後日入力
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entry CTA */}
      <section className="py-10 lg:py-16">
        <div className="text-center">
          <Link
            href="mailto:n-ito@tkss.co.jp"
            className="inline-block w-[300px] h-[60px] leading-[60px] bg-primary text-white text-[20px] font-bold tracking-wider text-center transition-colors hover:bg-primary-dark"
          >
            ENTRY
          </Link>
        </div>
      </section>

      <ContactBanner />
    </main>
  );
}
