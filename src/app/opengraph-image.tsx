import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import siteData from "@data/site.json";

export const runtime = "nodejs";
export const alt = siteData.company.name || "会社名";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // ロゴ画像を読み込み（site.jsonのimages.logoを使用）
  const logoFileName = siteData.images.logo?.replace("/images/", "") || "logo.png";
  const logoPath = join(process.cwd(), "public/images", logoFileName);

  let logoBase64: string | null = null;
  try {
    const logoData = await readFile(logoPath);
    logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;
  } catch {
    // ロゴが見つからない場合はテキストのみで表示
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        {logoBase64 ? (
          <img
            src={logoBase64}
            alt={siteData.company.name || "会社ロゴ"}
            style={{
              width: 500,
              height: "auto",
            }}
          />
        ) : (
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1a3a5c",
            }}
          >
            {siteData.company.name || "会社名"}
          </div>
        )}
        {siteData.company.catchphrase && (
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "#666666",
            }}
          >
            {siteData.company.catchphrase}
          </div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
