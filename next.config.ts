import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 旧サイト: トップページ
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      // 旧サイト: 概要ページ
      {
        source: "/gaiyou",
        destination: "/about",
        permanent: true,
      },
      // 旧サイト: .html 拡張子付きページの汎用リダイレクト
      // 新サイトに対応するページがあればそこへ、なければトップへ
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/service.html",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/company.html",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/recruit.html",
        destination: "/recruit",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      // サブディレクトリの index.html
      {
        source: "/:path*/index.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
