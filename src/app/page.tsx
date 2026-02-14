import Image from "next/image";
import Link from "next/link";
import ContactBanner from "@/components/ContactBanner";

export default function Home() {
  return (
    <main>
      {/* ==================== 1. HERO (Video Background) ==================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        <div className="relative text-center text-white px-4">
          <h1 className="font-serif-jp text-hero-title-sp lg:text-hero-title mb-6">
            原点を、極める
          </h1>
          <p className="text-body lg:text-body-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            金型はすべての製品の原点。
            <br />
            私たちはその重要性を胸に、日夜技術を磨き、信頼される品質を届けています。
          </p>
        </div>
      </section>

      {/* ==================== 2. CONCEPT (About / Philosophy) ==================== */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/concept-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative py-section-y-sp lg:py-section-y">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl">
              <h2 className="font-serif-jp text-[28px] lg:text-[36px] font-bold text-white mb-8">
                原点
              </h2>
              <p className="text-body text-white/80 leading-relaxed mb-10">
                私たちの生活の身近にあるボールペンや定規、テレビのリモコン、電話や時計…
                そして自動車やエアコン、パソコンに至るまで、目に触れるほとんどの製品は、
                金型によって形作られています。量産される工業製品をたどれば、その多くは金型に
                行き着く...まさに金型は「モノづくり」の原点です。
              </p>

              <h2 className="font-serif-jp text-[28px] lg:text-[36px] font-bold text-white mb-8">
                極める
              </h2>
              <p className="text-body text-white/80 leading-relaxed mb-10">
                竹内金型製作所は、この原点に向き合い、責任を持って技術を磨き続けています。
                金型はすべての製品の品質と信頼を左右する重要な要素。だからこそ、社員一人ひとりが高い技術力を誇り、妥協なく生産に取り組みます。
              </p>

              <Link
                href="/about"
                className="inline-block text-white underline underline-offset-4 transition-colors hover:text-white/70"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. SERVICE ==================== */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:w-1/2">
              <h2 className="font-en text-section-en-sp lg:text-section-en text-primary tracking-wider">
                SERVICE
              </h2>
              <p className="text-section-jp text-text-muted mt-1 mb-8">
                事業紹介
              </p>
              <p className="text-body text-text-primary leading-relaxed mb-8">
                私たちは、プラスチック射出成型の設計・製作を手がける金型メーカーです。
                豊富な加工設備と現場の技術を活かし、細かな精度が求められる金型にも真摯に向き合いながら、
                量産部品づくりの土台となる金型を提供しています。
              </p>
              <Link
                href="/service"
                className="inline-block text-primary underline underline-offset-4 transition-colors hover:text-primary-dark"
              >
                Learn More
              </Link>
            </div>
            {/* Right: Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/service-thumb.jpg"
                alt="金型製作"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. COMPANY ==================== */}
      <section className="bg-[#111111] text-white py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Image Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-3">
              <Image
                src="/images/company-1.jpg"
                alt="工場内部"
                width={300}
                height={200}
                className="w-full h-auto object-cover col-span-2"
              />
              <Image
                src="/images/company-2.jpg"
                alt="設備"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
              <Image
                src="/images/company-3.jpg"
                alt="作業風景"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Right: Text */}
            <div className="lg:w-1/2">
              <h2 className="font-en text-section-en-sp lg:text-section-en text-white tracking-wider">
                COMPANY
              </h2>
              <p className="text-section-jp text-white/60 mt-1 mb-8">
                会社案内
              </p>
              <p className="text-body text-white/80 leading-relaxed mb-8">
                昭和45年の創業以来、時代が変わっても、ものづくりへの想いは変わりません。
                挑戦と改善を重ねながら、技術を磨き、品質を磨き続けてきました。
                その歩みが、今の私たちを形づくっています。
              </p>
              <Link
                href="/company"
                className="inline-block text-white underline underline-offset-4 transition-colors hover:text-white/70"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. RECRUIT ==================== */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          {/* Top Row: 2 columns */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-10">
            {/* Left: Heading + Text */}
            <div className="lg:w-1/2">
              <h2 className="font-en text-section-en-sp lg:text-section-en text-primary tracking-wider">
                RECRUIT
              </h2>
              <p className="text-section-jp text-text-muted mt-1 mb-8">
                採用情報
              </p>
              <p className="text-body text-text-primary leading-relaxed">
                竹内金型製作所では、経験よりも意欲を重視しています。
                ベテランの先輩が手取り足取り教えてくれるので、未経験からでも技術者として成長できます。
              </p>
              <p className="text-body text-text-primary leading-relaxed mt-4">
                金型は奥深い。でも、その分できることが増えていく楽しさがあります。
                手に職をつけたい。長く働ける技術を身につけたい。そんな方にとって、ここは確かな挑戦の場です。
              </p>
            </div>
            {/* Right: Link List */}
            <div className="lg:w-1/2 flex flex-col justify-center gap-6">
              {[
                { en: "OUR CULTURE", jp: "求める人物像", href: "/recruit#culture" },
                { en: "ENVIRONMENT", jp: "働く環境", href: "/recruit#environment" },
                { en: "REQUIREMENTS", jp: "募集要項", href: "/recruit#requirements" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-border pb-4 transition-colors hover:border-primary"
                >
                  <div>
                    <span className="block text-sm font-bold text-primary tracking-wider">
                      {item.en}
                    </span>
                    <span className="block text-body-sm text-text-secondary mt-1">
                      {item.jp}
                    </span>
                  </div>
                  <span className="text-primary transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              ))}
              <Link
                href="/recruit"
                className="inline-block text-primary underline underline-offset-4 transition-colors hover:text-primary-dark mt-2"
              >
                VIEW ALL
              </Link>
            </div>
          </div>
          {/* Bottom: Full Width Image */}
          <div className="mt-8">
            <Image
              src="/images/recruit-main.jpg"
              alt="採用イメージ"
              width={1200}
              height={500}
              className="w-full h-[300px] lg:h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==================== 6. EQUIPMENT ==================== */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          {/* Header row */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-en text-section-en-sp lg:text-section-en text-primary tracking-wider">
                EQUIPMENT
              </h2>
              <p className="text-section-jp text-text-muted mt-1">設備</p>
            </div>
            <Link
              href="/service#equipment"
              className="text-primary underline underline-offset-4 transition-colors hover:text-primary-dark"
            >
              VIEW ALL
            </Link>
          </div>
          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((n) => (
              <Image
                key={n}
                src={`/images/equip-${n}.jpg`}
                alt={`設備${n}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. CONTACT BANNER ==================== */}
      <ContactBanner />
    </main>
  );
}
