import { contact } from "@/lib/site";

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="pt-32 lg:pt-40 pb-8 lg:pb-12">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <p className="text-section-jp text-text-muted">お問い合わせ</p>
          <h1 className="font-en text-[40px] lg:text-[64px] font-bold text-primary tracking-wider">
            CONTACT
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-section-y-sp lg:pb-section-y">
        <div className="max-w-narrow mx-auto px-6 lg:px-12">
          <p className="text-body text-text-secondary mb-12 text-center">
            お問い合わせは、お電話またはメールにて承っております。
            <br />
            お気軽にご連絡ください。
          </p>

          <div className="space-y-12">
            {/* Phone */}
            <div className="text-center">
              <h2 className="text-[18px] font-bold text-text-primary mb-4">
                お電話でのお問い合わせ
              </h2>
              <a
                href={`tel:${contact.phoneTel}`}
                className="inline-block text-[32px] lg:text-[48px] font-bold text-primary tracking-wider hover:opacity-80 transition-opacity"
              >
                {contact.phoneFormatted}
              </a>
              <p className="text-body-sm text-text-muted mt-2">
                受付時間：{contact.hours}（土日祝日を除く）
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-body-sm text-text-muted">または</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Email */}
            <div className="text-center">
              <h2 className="text-[18px] font-bold text-text-primary mb-4">
                メールでのお問い合わせ
              </h2>
              <a
                href={`mailto:${contact.email}`}
                className="inline-block text-[24px] lg:text-[32px] font-bold text-primary tracking-wider hover:opacity-80 transition-opacity break-all"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
