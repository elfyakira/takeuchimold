// GA4 イベント計測ユーティリティ
// gtag.js は GoogleAnalytics コンポーネントで読み込まれる（本番環境のみ）
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// GA4 の「キーイベント（旧コンバージョン）」候補となるイベント群
export const events = {
  // 電話タップ
  phoneClick: () => trackEvent("phone_click"),
  // メールアドレスクリック
  emailClick: (email: string) => trackEvent("email_click", { email }),
  // お問い合わせ導線のクリック
  contactLinkClick: (href: string, text: string) =>
    trackEvent("contact_link_click", { href, text }),
  // CTA ボタンのクリック（data-cta / data-cta-location 属性で指定）
  ctaClick: (ctaName: string, location: string) =>
    trackEvent("cta_click", { cta_name: ctaName, location }),
  // 以下はお問い合わせフォーム実装時に使用する
  formStart: (formName = "tkss_hp_contact") =>
    trackEvent("form_start", { form_name: formName }),
  formSubmit: (formName = "tkss_hp_contact") =>
    trackEvent("form_submit", { form_name: formName }),
};
