import Script from "next/script";
import { analytics } from "@/lib/site";

// Google Analytics 4（gtag.js）
// 測定ID は data/site.json の analytics.gaMeasurementId で管理
export default function GoogleAnalytics() {
  const measurementId = analytics.gaMeasurementId;

  if (!measurementId || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
