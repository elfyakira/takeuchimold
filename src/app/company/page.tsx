import type { Metadata } from "next";
import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";
import { FadeInUp, StaggerContainer } from "@/components/animations";

export const metadata: Metadata = {
  title: "COMPANY",
  description:
    "株式会社竹内金型製作所の会社概要。昭和45年創業、愛知県あま市の金型メーカー。代表挨拶・会社概要・アクセス。",
};

const outlineItems = [
  { label: "社名", value: "株式会社竹内金型製作所" },
  { label: "所在地", value: "〒497-0013 愛知県あま市七宝町川部四反田27番地" },
  { label: "連絡先", value: "TEL 052-444-8206 / FAX 052-444-3811" },
  { label: "代表取締役社長", value: "竹内 芳一" },
  { label: "事業内容", value: "プラスチック射出成型用金型の設計・製作" },
  { label: "営業品目", value: "自動車部品・住設・家電・OA機器・コンテナ・工業部品・家庭用品等" },
  { label: "資本金", value: "1,000万円" },
  { label: "創業", value: "昭和45年2月" },
  { label: "従業員数", value: "25名" },
  { label: "敷地／建物", value: "3,550㎡ ／ 1,980㎡" },
  { label: "取引銀行", value: "大垣共立銀行 七宝支店 / 名古屋銀行 大治支店 / 三十三銀行 戸田支店 / 岐阜信用金庫 稲葉地支店" },
];

export default function CompanyPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="pt-24 lg:pt-28 pb-6 lg:pb-8">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <p className="text-section-jp text-[#004888]">会社案内</p>
            <h1 className="font-en text-[64px] lg:text-[96px] font-bold text-[#004888] tracking-wider leading-none">
              COMPANY
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Hero Image - Fixed Background */}
      <section
        className="h-[300px] lg:h-[500px] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/company-hero.jpg')" }}
        role="img"
        aria-label="社屋外観"
      />

      {/* Greeting */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <h2 className="font-en text-[40px] lg:text-[56px] font-bold text-[#004888] tracking-wider">
              GREETING
            </h2>
            <p className="text-section-jp text-[#004888] mt-1 mb-10">
              ごあいさつ
            </p>
          </FadeInUp>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Text */}
            <div className="lg:w-3/5">
              <FadeInUp delay={100}>
                <div className="text-body text-text-primary leading-relaxed space-y-6">
                  <p>
                    創業以来、私たちは「金型はものづくりの原点である」という想いを大切にし、
                    お客様の製品品質を支える確かな技術の提供に努めてまいりました。
                  </p>
                  <p>
                    金型づくりは、一つとして同じ答えのない仕事です。だからこそ社員一人ひとりが技術を磨き続け、
                    お客様の課題に真摯に向き合い、最適解を導き出す姿勢を大切にしています。
                    その積み重ねこそが、当社の信頼と品質を支えていると考えております。
                  </p>
                  <p>
                    今後も「原点を、極める。」という言葉を胸に、ものづくりの根幹を担う企業として、
                    お客様の期待を超える金型づくりに邁進してまいります。
                  </p>
                </div>
              </FadeInUp>
              <FadeInUp delay={200}>
                <p className="mt-10 text-body font-bold text-text-primary">
                  代表取締役社長　竹内 芳一
                </p>
              </FadeInUp>
            </div>
            {/* President Photo */}
            <FadeInUp delay={200} className="lg:w-2/5">
              <div className="overflow-hidden">
                <Image
                  src="/images/president.jpg"
                  alt="代表取締役社長 竹内 芳一"
                  width={400}
                  height={530}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Outline */}
      <section className="py-section-y-sp lg:py-section-y bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="font-en text-[40px] lg:text-[56px] font-bold text-[#004888] tracking-wider">
                OUTLINE
              </h2>
              <p className="text-section-jp text-[#004888] mt-1">会社概要</p>
            </div>
          </FadeInUp>
          <StaggerContainer as="dl" className="max-w-4xl mx-auto" staggerDelay={50}>
            {outlineItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col lg:flex-row border-b border-border py-5 hover:bg-gray-50 transition-colors"
              >
                <dt className="lg:w-[30%] text-body font-bold text-text-primary mb-1 lg:mb-0">
                  {item.label}
                </dt>
                <dd className="lg:w-[70%] text-body text-text-secondary">
                  {item.value}
                </dd>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Access */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="font-en text-[40px] lg:text-[56px] font-bold text-[#004888] tracking-wider">
                ACCESS
              </h2>
              <p className="text-section-jp text-[#004888] mt-1">アクセス</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div className="max-w-4xl mx-auto">
              <p className="text-body text-text-primary mb-6 text-center">
                〒497-0013 愛知県あま市七宝町川部四反田27番地
              </p>
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5!2d136.81!3d35.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44CSNDk3LTAwMTMg5oSb55-l55yM44GC44G-5biC5LiD5a6d55S65bed6YOo5Zub5Y-N55Sw77yS77yX!5e0!3m2!1sja!2sjp!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="アクセスマップ"
                />
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <ContactBanner />
    </main>
  );
}
