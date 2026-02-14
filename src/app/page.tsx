import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";
import { FadeInUp, FadeInImage, StaggerContainer, AnimatedLink } from "@/components/animations";

export default function Home() {
  return (
    <main>
      {/* ==================== 1. HERO (Video Background) ==================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-32">
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
          <FadeInUp duration={800}>
            <h1 className="text-[72px] lg:text-[128px] leading-none mb-8" style={{ fontFamily: 'var(--font-serif-jp)' }}>
              原点を、<br className="lg:hidden" /><span className="inline-block pl-12 lg:pl-0" style={{ marginLeft: '-0.3em' }}>極める</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={300} duration={800}>
            <p className="text-[18px] lg:text-[22px] text-white/80 max-w-4xl mx-auto leading-relaxed">
              金型はすべての製品の原点。
              <br />
              私たちはその重要性を胸に、日夜技術を磨き、<br className="lg:hidden" />信頼される品質を届けています。
            </p>
          </FadeInUp>
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
              <FadeInUp>
                <h2 className="font-serif-jp text-[32px] lg:text-[42px] font-bold text-white mb-8">
                  原点
                </h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-body text-white/80 leading-relaxed mb-10">
                  私たちの生活の身近にあるボールペンや定規、テレビのリモコン、電話や時計…
                  そして自動車やエアコン、パソコンに至るまで、目に触れるほとんどの製品は、
                  金型によって形作られています。量産される工業製品をたどれば、その多くは金型に
                  行き着く...まさに金型は「モノづくり」の原点です。
                </p>
              </FadeInUp>

              <FadeInUp delay={200}>
                <h2 className="font-serif-jp text-[32px] lg:text-[42px] font-bold text-white mb-8">
                  極める
                </h2>
              </FadeInUp>
              <FadeInUp delay={300}>
                <p className="text-body text-white/80 leading-relaxed mb-10">
                  竹内金型製作所は、この原点に向き合い、責任を持って技術を磨き続けています。
                  金型はすべての製品の品質と信頼を左右する重要な要素。だからこそ、社員一人ひとりが高い技術力を誇り、妥協なく生産に取り組みます。
                </p>
              </FadeInUp>

              <FadeInUp delay={400}>
                <AnimatedLink href="/about" variant="dark" size="large">
                  Learn More
                </AnimatedLink>
              </FadeInUp>
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
              <FadeInUp>
                <h2 className="font-en text-[64px] lg:text-[96px] font-bold text-[#004888] tracking-wider">
                  SERVICE
                </h2>
                <p className="text-section-jp text-[#004888] mt-1 mb-8">
                  事業紹介
                </p>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-body text-text-primary leading-relaxed mb-8">
                  私たちは、プラスチック射出成型の設計・製作を手がける金型メーカーです。
                  豊富な加工設備と現場の技術を活かし、細かな精度が求められる金型にも真摯に向き合いながら、
                  量産部品づくりの土台となる金型を提供しています。
                </p>
              </FadeInUp>
              <FadeInUp delay={200}>
                <AnimatedLink href="/service" variant="light" size="large">
                  Learn More
                </AnimatedLink>
              </FadeInUp>
            </div>
            {/* Right: Image */}
            <div className="lg:w-1/2">
              <FadeInImage
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
            <StaggerContainer className="lg:w-1/2 grid grid-cols-2 gap-3" staggerDelay={150}>
              <div className="col-span-2 overflow-hidden">
                <Image
                  src="/images/company-1.jpg"
                  alt="工場内部"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/images/company-2.jpg"
                  alt="設備"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/images/company-3.jpg"
                  alt="作業風景"
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </StaggerContainer>
            {/* Right: Text */}
            <div className="lg:w-1/2">
              <FadeInUp>
                <h2 className="font-en text-[64px] lg:text-[96px] font-bold text-white tracking-wider">
                  COMPANY
                </h2>
                <p className="text-section-jp text-white/60 mt-1 mb-8">
                  会社案内
                </p>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-body text-white/80 leading-relaxed mb-8">
                  昭和45年の創業以来、時代が変わっても、ものづくりへの想いは変わりません。
                  挑戦と改善を重ねながら、技術を磨き、品質を磨き続けてきました。
                  その歩みが、今の私たちを形づくっています。
                </p>
              </FadeInUp>
              <FadeInUp delay={200}>
                <AnimatedLink href="/company" variant="dark" size="large">
                  Learn More
                </AnimatedLink>
              </FadeInUp>
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
              <FadeInUp>
                <h2 className="font-en text-[64px] lg:text-[96px] font-bold text-[#004888] tracking-wider">
                  RECRUIT
                </h2>
                <p className="text-section-jp text-[#004888] mt-1 mb-8">
                  採用情報
                </p>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p className="text-body text-text-primary leading-relaxed">
                  竹内金型製作所では、経験よりも意欲を重視しています。
                  ベテランの先輩が手取り足取り教えてくれるので、未経験からでも技術者として成長できます。
                </p>
                <p className="text-body text-text-primary leading-relaxed mt-4">
                  金型は奥深い。でも、その分できることが増えていく楽しさがあります。
                  手に職をつけたい。長く働ける技術を身につけたい。そんな方にとって、ここは確かな挑戦の場です。
                </p>
              </FadeInUp>
            </div>
            {/* Right: Link List */}
            <StaggerContainer className="lg:w-1/2 flex flex-col justify-start gap-6 pt-16 lg:pt-24" staggerDelay={100}>
              {[
                { en: "OUR CULTURE", jp: "求める人物像", href: "/recruit#culture" },
                { en: "ENVIRONMENT", jp: "働く環境", href: "/recruit#environment" },
                { en: "REQUIREMENTS", jp: "募集要項", href: "/recruit#requirements" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block border-b border-border pb-4 transition-colors hover:border-[#004888]"
                >
                  <span className="block text-[24px] lg:text-[32px] font-bold text-[#004888] tracking-wider">
                    {item.en}
                  </span>
                  <span className="block text-body-sm text-[#004888] mt-1">
                    {item.jp}
                  </span>
                </a>
              ))}
            </StaggerContainer>
          </div>
          {/* Bottom: Full Width Image */}
          <FadeInUp delay={200}>
            <div className="mt-8 overflow-hidden">
              <Image
                src="/images/recruit-main.jpg"
                alt="採用イメージ"
                width={1200}
                height={500}
                className="w-full h-[300px] lg:h-[450px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ==================== 6. EQUIPMENT ==================== */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <FadeInUp>
              <div>
                <h2 className="font-en text-[64px] lg:text-[96px] font-bold text-[#004888] tracking-wider">
                  EQUIPMENT
                </h2>
                <p className="text-section-jp text-[#004888] mt-1">設備</p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <AnimatedLink href="/service#equipment" variant="light" size="large">
                VIEW ALL
              </AnimatedLink>
            </FadeInUp>
          </div>
          {/* 3-column grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={150}>
            {[
              { n: 1, alt: "高速マシニングセンタによる精密加工" },
              { n: 2, alt: "NC放電加工機での金型加工" },
              { n: 3, alt: "ワイヤーカット放電加工機" },
            ].map(({ n, alt }) => (
              <div key={n} className="overflow-hidden">
                <Image
                  src={`/images/equip-${n}.jpg`}
                  alt={alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ==================== 7. CONTACT BANNER ==================== */}
      <ContactBanner />
    </main>
  );
}
