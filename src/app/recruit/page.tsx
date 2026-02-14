"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactBanner from "@/components/ContactBanner";
import { FadeInUp, StaggerContainer } from "@/components/animations";

const cultureItems = [
  {
    num: "01",
    title: "技術を学ぶことを楽しめる方",
    body: "金型製作には、精密さ・探求心・継続した学びが欠かせません。「知らないことを知るのが好き」「手を動かしながら成長したい」そんな方が、当社で大きく活躍できます。",
    icon: "/images/culture-icon-01.png",
  },
  {
    num: "02",
    title: "誠実にものづくりと向き合える方",
    body: "金型は、お客様の製品品質を左右する\u201C原点\u201Dです。任された工程に責任を持ち、丁寧に、正確に取り組める姿勢を大切にしています。",
    icon: "/images/culture-icon-02.png",
  },
  {
    num: "03",
    title: "チームで成果をつくることを大切にできる方",
    body: "当社の仕事は、一人の力では完成しません。設計・加工・仕上げ・検査…すべてがつながることで、最高の品質が生まれます。互いを尊重し、協力し合える方を歓迎します。",
    icon: "/images/culture-icon-03.png",
  },
];

type Position = {
  id: string;
  title: string;
  image: string;
  employmentType: string;
  salary: string;
  salaryRange: string;
  tags: string[];
  summary: string;
  jobDescription: string[];
  requirements: string[];
  workHours: string;
  holidays: string[];
  benefits: string[];
  incomeExamples: string[];
  selectionFlow: string[];
};

const positions: Position[] = [
  {
    id: "operator",
    title: "オペレーター",
    image: "/images/recruit-operator.webp",
    employmentType: "中途採用（正社員）",
    salary: "月給 215,000円〜370,000円",
    salaryRange: "21.5万〜37万円",
    tags: ["未経験OK", "学歴不問", "急募"],
    summary: "未経験OK◎モクモク作業で技術が身につく金型オペレータースタッフ！",
    jobDescription: [
      "【ワイヤーカット放電加工機のオペレーター】",
      "ワイヤーカット放電加工機を使用して、プラスチック金型の部品を加工するお仕事です。特別な経験や資格は不要。未経験の方も安心してスタートできます！",
      "【MC工作機械のオペレーター・加工データ作成】",
      "CAMソフトを使ってMCセンターの加工データを作成し、ワークのセット・加工までを担当していただきます。経験者は優遇いたしますが、スキルに応じて丁寧にサポートしますのでご安心ください。",
    ],
    requirements: [
      "学歴不問 / 未経験OK",
      "【ワイヤーカット放電加工機】未経験大歓迎！先輩がやさしく教えるので安心してチャレンジしてください。",
      "【MC工作機械】MC加工オペレーター及び加工データ作成の経験がある方優遇",
    ],
    workHours: "8:00〜16:45（実働7時間45分、休憩12:00〜13:00）",
    holidays: ["週休2日制（会社カレンダーに準ずる）", "GW休暇", "夏季休暇", "年末年始休暇"],
    benefits: [
      "各種社会保険完備（雇用・厚生年金・労災・健康）",
      "交通費支給（5,000〜20,000円）",
      "資格取得支援",
      "仕出し弁当（3割負担）",
      "役職手当（10,000〜50,000円）",
      "家族手当（配偶者：5,000円、子：2,500円※3人まで）",
      "賞与年2回（業績に応じて支給）",
    ],
    incomeExamples: [
      "350万円 / 入社1年目・26歳",
      "400万円 / 入社5年目・29歳",
      "500万円 / 入社10年目・33歳",
    ],
    selectionFlow: [
      "「応募する」ボタンよりご応募",
      "採用担当者より、お電話もしくはメールにてご連絡",
      "面接（見学も可能です）",
      "内定 ※最短3日以内の入社が可能",
    ],
  },
  {
    id: "manufacturing",
    title: "金型加工",
    image: "/images/recruit-manufacturing.webp",
    employmentType: "中途採用（正社員）",
    salary: "月給 210,000円〜330,000円",
    salaryRange: "21万〜33万円",
    tags: ["未経験OK", "学歴不問", "急募"],
    summary: "50年続く安定企業で成長！選べる金型加工・組立の仕事★",
    jobDescription: [
      "【金型加工スタッフ】",
      "汎用フライス盤・汎用ラジアルボール盤を使い、金型の切削や穴あけなどの加工作業を行います。手を動かしながら確かな技術を身につけ、経験を活かしてさらにスキルアップできるお仕事です！",
      "【金型手仕上組み立て技術者・NC放電加工機オペレーター】",
      "プラスチック金型の仕上げ、すり合わせ、組み立て調整作業や、NC放電加工機のオペレーター業務を担当していただきます。未経験の方も丁寧に指導しますので安心してください。",
    ],
    requirements: [
      "学歴不問 / 未経験OK",
      "【金型手仕上組み立て】未経験大歓迎！先輩がやさしく教えるので安心してチャレンジしてください。",
      "【金型加工スタッフ】金型制作の実務経験、汎用フライス盤および汎用ラジアル盤の操作経験がある方優遇",
    ],
    workHours: "8:00〜16:45（実働7時間45分、休憩12:00〜13:00）",
    holidays: ["週休2日制（会社カレンダーに準ずる）", "GW休暇", "夏季休暇", "年末年始休暇"],
    benefits: [
      "各種社会保険完備（雇用・厚生年金・労災・健康）",
      "交通費支給（5,000〜20,000円）",
      "資格取得支援",
      "仕出し弁当（3割負担）",
      "役職手当（10,000〜50,000円）",
      "家族手当（配偶者：5,000円、子：2,500円※3人まで）",
      "賞与年2回（業績に応じて支給）",
    ],
    incomeExamples: [
      "350万円 / 入社1年目・26歳",
      "400万円 / 入社5年目・29歳",
      "500万円 / 入社10年目・33歳",
    ],
    selectionFlow: [
      "「応募する」ボタンよりご応募",
      "採用担当者より、お電話もしくはメールにてご連絡",
      "面接（見学も可能です）",
      "内定 ※最短3日以内の入社が可能",
    ],
  },
  {
    id: "design",
    title: "設計",
    image: "/images/recruit-design.webp",
    employmentType: "中途採用（正社員）",
    salary: "月給 205,000円〜450,000円",
    salaryRange: "20.5万〜45万円",
    tags: ["未経験OK", "学歴不問", "急募"],
    summary: "未経験OK！CADで始める金型設計★若手活躍中の安定メーカー！",
    jobDescription: [
      "【設計技術者】",
      "CADパック、CADマイスター、その他CADを用いたプラスチックの金型設計業務をお任せします。",
      "「設計業務」と言うと難しく聞こえるかもしれませんが、未経験でも大歓迎◎ 仲間と一緒に成長しましょう！",
      "希望があればこれまでの経験を活かして、より高度な設計にもチャレンジできます。",
    ],
    requirements: [
      "学歴不問 / 未経験OK",
      "CADパック、CADマイスター、その他CADの経験者優遇",
      "金型経験のない方でも、スキルにあわせて指導が可能です。イチから丁寧にお教えします。",
    ],
    workHours: "8:00〜16:45（実働7時間45分、休憩12:00〜13:00）",
    holidays: ["週休2日制（会社カレンダーに準ずる）", "GW休暇", "夏季休暇", "年末年始休暇"],
    benefits: [
      "各種社会保険完備（雇用・厚生年金・労災・健康）",
      "交通費支給（5,000〜20,000円）",
      "資格取得支援",
      "仕出し弁当（3割負担）",
      "役職手当（10,000〜50,000円）",
      "家族手当（配偶者：5,000円、子：2,500円※3人まで）",
      "賞与年2回（業績に応じて支給）",
    ],
    incomeExamples: [
      "350万円 / 入社1年目・26歳",
      "400万円 / 入社5年目・29歳",
      "500万円 / 入社10年目・33歳",
    ],
    selectionFlow: [
      "「応募する」ボタンよりご応募",
      "採用担当者より、お電話もしくはメールにてご連絡",
      "面接（見学も可能です）",
      "内定 ※最短3日以内の入社が可能",
    ],
  },
];

function PositionModal({
  position,
  onClose,
}: {
  position: Position;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[1001] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full text-2xl text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="閉じる"
        >
          ×
        </button>

        {/* Header Image */}
        <div className="relative h-[200px] lg:h-[280px]">
          <Image
            src={position.image}
            alt={position.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <p className="text-white/80 text-sm mb-1">{position.employmentType}</p>
            <h3 className="text-white text-2xl lg:text-3xl font-bold">
              {position.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {position.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#004888]/10 text-[#004888] text-sm font-medium rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Summary */}
          <p className="text-lg font-bold text-gray-800 mb-6">{position.summary}</p>

          {/* Salary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-1">給与</p>
            <p className="text-xl font-bold text-[#004888]">{position.salary}</p>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
              仕事内容
            </h4>
            <div className="space-y-3">
              {position.jobDescription.map((desc, i) => (
                <p key={i} className={`text-gray-700 ${desc.startsWith("【") ? "font-bold mt-4" : ""}`}>
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
              応募資格・条件
            </h4>
            <ul className="space-y-2">
              {position.requirements.map((req, i) => (
                <li key={i} className="text-gray-700">
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Work Hours & Holidays */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                勤務時間
              </h4>
              <p className="text-gray-700">{position.workHours}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                休日休暇
              </h4>
              <ul className="space-y-1">
                {position.holidays.map((holiday, i) => (
                  <li key={i} className="text-gray-700">
                    {holiday}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
              福利厚生
            </h4>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {position.benefits.map((benefit, i) => (
                <li key={i} className="text-gray-700 flex items-start">
                  <span className="text-[#004888] mr-2">◇</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Income Examples */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
              年収例
            </h4>
            <div className="flex flex-wrap gap-4">
              {position.incomeExamples.map((example, i) => (
                <div key={i} className="bg-gray-50 px-4 py-2 rounded">
                  <p className="text-gray-700">{example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selection Flow */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
              選考フロー
            </h4>
            <div className="flex flex-col gap-2">
              {position.selectionFlow.map((step, i) => (
                <div key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-7 h-7 bg-[#004888] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="text-center">
            <Link
              href="/contact#inquiry"
              className="inline-block w-full max-w-md py-4 bg-[#004888] text-white text-lg font-bold tracking-wider text-center transition-colors hover:bg-[#003366]"
            >
              この職種に応募する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecruitPage() {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);

  return (
    <main>
      {/* Page Header */}
      <section className="pt-24 lg:pt-28 pb-6 lg:pb-8">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <p className="text-section-jp text-[#004888]">採用情報</p>
            <h1 className="font-en text-[64px] lg:text-[96px] font-bold text-[#004888] tracking-wider leading-none">
              RECRUIT
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Hero Image - Fixed Background */}
      <section
        className="h-[300px] lg:h-[500px] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/recruit-hero.jpg')" }}
        role="img"
        aria-label="採用イメージ"
      />

      {/* Culture */}
      <section id="culture" className="bg-[#004888] text-white py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <h2 className="font-en text-[64px] lg:text-[96px] font-bold text-white tracking-wider">
              OUR CULTURE
            </h2>
            <p className="text-section-jp text-white mt-1 mb-6">
              求める人物像
            </p>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p className="text-body text-white max-w-3xl leading-relaxed mb-16">
              私たちは、金型づくりを&ldquo;技術の仕事&rdquo;であると同時に、&ldquo;人の姿勢が品質をつくる仕事&rdquo;だと考えています。
              経験の有無よりも、次のような想いを持つ方と一緒に働きたいと思っています。
            </p>
          </FadeInUp>

          <div className="space-y-16">
            {cultureItems.map((item, index) => (
              <FadeInUp key={item.num} delay={index * 100 + 200}>
                <div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-en text-[48px] lg:text-[64px] font-bold text-white">
                      {item.num}
                    </span>
                    <h3 className="text-[24px] lg:text-[32px] font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="max-w-3xl">
                    <p className="text-body text-white leading-relaxed">
                      {item.body}
                    </p>
                    <div className="flex justify-end mt-6">
                      <Image
                        src={item.icon}
                        alt=""
                        width={100}
                        height={100}
                        className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section id="environment" className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="font-en text-[40px] lg:text-[56px] font-bold text-[#004888] tracking-wider">
                ENVIRONMENT
              </h2>
              <p className="text-section-jp text-[#004888] mt-1">働く環境</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div className="overflow-hidden">
              <Image
                src="/images/recruit-main.jpg"
                alt="働く環境"
                width={1200}
                height={600}
                className="w-full h-[300px] lg:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Requirements - Position Cards */}
      <section id="requirements" className="py-section-y-sp lg:py-section-y bg-[#F9F9F9]">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="font-en text-[40px] lg:text-[56px] font-bold text-[#004888] tracking-wider">
                OUTLINE
              </h2>
              <p className="text-section-jp text-[#004888] mt-1">募集職種</p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={100}>
            {positions.map((position) => (
              <button
                key={position.id}
                onClick={() => setSelectedPosition(position)}
                className="bg-white text-left group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Card Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={position.image}
                    alt={position.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {position.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#004888]/10 text-[#004888] text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {position.title}
                  </h3>

                  {/* Employment Type */}
                  <p className="text-sm text-gray-500 mb-3">
                    {position.employmentType}
                  </p>

                  {/* Salary */}
                  <p className="text-[#004888] font-bold mb-3">
                    {position.salaryRange}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {position.summary}
                  </p>

                  {/* View Detail */}
                  <span className="inline-flex items-center text-[#004888] font-bold text-sm group-hover:underline">
                    詳細を見る
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Entry CTA */}
      <section className="py-10 lg:py-16">
        <FadeInUp>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              上記以外の職種についてもお気軽にお問い合わせください
            </p>
            <Link
              href="/contact#inquiry"
              className="inline-block w-[300px] h-[60px] leading-[60px] bg-[#004888] text-white text-[20px] font-bold tracking-wider text-center transition-colors hover:bg-[#003366]"
            >
              ENTRY
            </Link>
          </div>
        </FadeInUp>
      </section>

      <ContactBanner />

      {/* Modal */}
      {selectedPosition && (
        <PositionModal
          position={selectedPosition}
          onClose={() => setSelectedPosition(null)}
        />
      )}

      {/* Modal Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
