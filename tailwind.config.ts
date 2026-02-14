import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors (§5.1)
        primary: {
          DEFAULT: "#005596",
          dark: "#003366",
        },
        // Text Colors
        text: {
          primary: "#333333",
          secondary: "#666666",
          muted: "#888888",
        },
        // Background Colors
        bg: {
          light: "#F9F9F9",
          white: "#ffffff",
          dark: "#111111",
        },
        // Border Colors
        border: {
          DEFAULT: "#DDDDDD",
        },
        // Accent
        "accent-cyan": "#00A0E9",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Meiryo"',
          "sans-serif",
        ],
        "serif-jp": [
          '"Noto Serif JP"',
          '"游明朝"',
          "serif",
        ],
        en: [
          '"Roboto"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      fontSize: {
        // Hero
        "hero-title": ["64px", { lineHeight: "1.3", fontWeight: "700" }],
        "hero-title-sp": ["36px", { lineHeight: "1.3", fontWeight: "700" }],
        // Section headings
        "section-en": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "section-en-sp": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "section-jp": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        // Feature number
        "feature-num": ["64px", { lineHeight: "1.0", fontWeight: "700" }],
        // Navigation
        "nav": ["13px", { lineHeight: "1.0", fontWeight: "700" }],
        // Body
        "body-lg": ["18px", { lineHeight: "1.8", fontWeight: "400" }],
        "body": ["16px", { lineHeight: "1.7", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        "caption": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        "section-y": "120px",
        "section-y-sp": "80px",
        "section-inner": "60px",
        "section-inner-sp": "40px",
      },
      maxWidth: {
        container: "1200px",
        narrow: "800px",
      },
      borderRadius: {
        btn: "4px",
      },
      boxShadow: {
        header: "0 2px 8px rgba(0, 0, 0, 0.08)",
        card: "0 2px 8px rgba(0, 0, 0, 0.06)",
        "fixed-cta": "0 -2px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
