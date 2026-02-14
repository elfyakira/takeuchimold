"use client";

import { contact } from "@/lib/site";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="pt-24 lg:pt-28 pb-6 lg:pb-8">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <p className="text-section-jp text-[#004888]">お問い合わせ</p>
            <h1 className="font-en text-[64px] lg:text-[96px] font-bold text-[#004888] tracking-wider leading-none">
              CONTACT
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Hero Image */}
      <section
        className="h-[250px] lg:h-[400px] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
        role="img"
        aria-label="お問い合わせ"
      />

      {/* Main Content */}
      <section className="py-section-y-sp lg:py-section-y">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Message */}
          <FadeInUp>
            <div id="inquiry" className="text-center mb-12 lg:mb-16 scroll-mt-24 lg:scroll-mt-28">
              <p className="text-[18px] lg:text-[20px] text-text-primary leading-relaxed">
                採用に関するご質問、会社見学のご希望など、
                <br className="hidden lg:block" />
                お気軽にお問い合わせください。
              </p>
            </div>
          </FadeInUp>

          {/* Contact Methods */}
          <div className="space-y-8">
            {/* Phone */}
            <FadeInUp delay={100}>
              <div className="bg-[#F9F9F9] p-8 lg:p-10 text-center transition-shadow duration-300 hover:shadow-lg">
                <p className="text-[14px] text-text-muted mb-3">お電話でのお問い合わせ</p>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="block text-[32px] lg:text-[40px] font-bold text-[#004888] tracking-wider hover:opacity-70 transition-opacity"
                >
                  {contact.phoneFormatted}
                </a>
                <p className="text-[14px] text-text-muted mt-3">
                  受付時間：{contact.hours}（土日祝日を除く）
                </p>
              </div>
            </FadeInUp>

            {/* Email */}
            <FadeInUp delay={200}>
              <div className="bg-[#F9F9F9] p-8 lg:p-10 text-center transition-shadow duration-300 hover:shadow-lg">
                <p className="text-[14px] text-text-muted mb-3">メールでのお問い合わせ</p>
                <a
                  href={`mailto:${contact.email}?subject=採用に関するお問い合わせ`}
                  className="block text-[20px] lg:text-[24px] font-bold text-[#004888] tracking-wider hover:opacity-70 transition-opacity"
                >
                  {contact.email}
                </a>
              </div>
            </FadeInUp>
          </div>

          {/* To Recruit */}
          <FadeInUp delay={300}>
            <div className="text-center mt-12 lg:mt-16">
              <Link
                href="/recruit"
                className="inline-flex items-center text-[#004888] font-bold hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                採用情報
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
