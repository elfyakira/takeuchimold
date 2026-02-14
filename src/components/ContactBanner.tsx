import { FadeInUp, AnimatedLink } from "@/components/animations";

export default function ContactBanner() {
  return (
    <section className="relative">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative py-[100px] lg:py-[150px]">
        <div className="max-w-container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
          {/* Left */}
          <div>
            <FadeInUp>
              <h2 className="font-en text-[64px] lg:text-[96px] font-bold text-white tracking-wider">
                CONTACT
              </h2>
              <p className="text-section-jp text-white/60 mt-1">お問合せ</p>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p className="text-body-sm text-white/80 mt-4 max-w-md">
                ご質問やご相談は、どうぞお気軽にお寄せください。
                <br className="hidden lg:block" />
                小さなことでも大歓迎です。
              </p>
            </FadeInUp>
          </div>

          {/* Right - CTA Link */}
          <FadeInUp delay={200}>
            <div className="lg:text-right">
              <AnimatedLink href="/contact" variant="dark" size="large">
                GET IN TOUCH
              </AnimatedLink>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
