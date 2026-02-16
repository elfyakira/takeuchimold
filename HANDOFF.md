# 株式会社竹内金型製作所 HP制作 HANDOFF

> **このドキュメントは次世代セッションへの実装引き継ぎ仕様書です。**
> デザイン指示書・ヒアリング内容・基本情報が別途共有されます。
> このHANDOFFはそれらの情報を前提に、テンプレート構造との橋渡しと具体的な実装手順を示します。

---

## 0. 実装の進め方（必読）

### 0.1 情報ソースの優先順位

> **本案件ではデザイン指示書・ヒアリング・基本情報がすべてこのHANDOFF.mdに統合済みです。**
> **別途のデザインガイド参照は不要。このドキュメントとdesign-data.jsonだけで実装可能です。**

| 優先度 | ソース | 内容 |
|--------|--------|------|
| 1（最優先） | **このHANDOFF.md** | デザイン仕様・レイアウト・カラー・フォント・画像マッピング・テンプレート差分・実装手順のすべて |
| 2 | **doc/design-data.json** | 全5ページ分のテキスト・要素データ（element_id, type, text, role） |
| 3 | **DESIGN_GUIDE.md**（テンプレート同梱） | 反AIデザイン原則・一般的な設計ガイド（参考程度） |

### 0.2 実装手順（この順序で作業すること）

| Step | 作業 | 対象ファイル | 参照セクション |
|------|------|-------------|--------------|
| **0** | **画像をASCII名にコピー・ロゴ配置** | `public/images/` | **§9** |
| 1 | `data/site.json` に企業データを投入 | `data/site.json` | §12 |
| 2 | `tailwind.config.ts` のカラー・フォント定義を上書き | `tailwind.config.ts` | §5 |
| 3 | `src/app/layout.tsx` に Google Fonts 読み込みを追加 | `src/app/layout.tsx` | §6 |
| 4 | Header.tsx をデザイン仕様に合わせて改修 | `src/components/Header.tsx` | §7.1 |
| 5 | Footer.tsx をデザイン仕様に合わせて改修 | `src/components/Footer.tsx` | §7.3 |
| 6 | ContactBanner 共通コンポーネントを新規作成 | `src/components/ContactBanner.tsx` | §7.2 |
| 7 | TOPページ（7セクション + ContactBanner）を実装 | `src/app/page.tsx` | §8.1 |
| 8 | About Us ページを実装 | `src/app/about/page.tsx`（新規） | §8.2 |
| 9 | Service ページを実装 | `src/app/service/page.tsx`（新規） | §8.3 |
| 10 | Company ページを実装 | `src/app/company/page.tsx`（新規） | §8.4 |
| 11 | Recruit ページを実装 | `src/app/recruit/page.tsx`（新規） | §8.5 |
| 12 | Contact ページを実装 | `src/app/contact/page.tsx`（新規） | §8.6 |
| 13 | レスポンシブ検証・微調整 | 全ファイル | §11 |

---

## 1. プロジェクト情報

| 項目 | 内容 |
|------|------|
| 企業名 | 株式会社竹内金型製作所 |
| 英語表記 | Takeuchi Mold Co., Ltd. |
| ディレクトリ | `/mnt/c/client_hp/takeuchi_mold/` |
| テンプレート | template-fullorder（GitHub: tenchan000517/template-fullorder） |
| 技術スタック | Next.js 16.1.6 / React 19.2.3 / Tailwind CSS 4 / TypeScript 5 |
| コマンド | `npm run dev` / `npm run build` / `npm run start` / `npm run lint` |

---

## 2. テンプレート構造（既存ファイル解説）

> **テンプレートにはHeader/Footer/API/データ層が実装済み。ゼロから書かないこと。**

```
takeuchi_mold/
├── data/
│   └── site.json              ← 企業データの一元管理（現在空 → Step1で投入）
├── public/images/
│   ├── logo.png               ← ロゴ横長（クライアント素材に差し替え）
│   ├── logo-square.png        ← ロゴ正方形（同上）
│   └── logo-only.png          ← ロゴマーク（同上）
├── src/
│   ├── app/
│   │   ├── layout.tsx         ← ルートレイアウト（SEO/JSON-LD/Header/Footer読み込み済み）
│   │   ├── page.tsx           ← TOPページ（プレースホルダー → Step7で実装）
│   │   ├── globals.css        ← グローバルCSS
│   │   ├── icon.png           ← ファビコン
│   │   ├── apple-icon.tsx     ← Apple Touch Icon動的生成
│   │   ├── opengraph-image.tsx← OGP画像動的生成
│   │   └── api/contact/
│   │       └── route.ts       ← POST /api/contact（バリデーション実装済み、メール送信TODO）
│   ├── components/
│   │   ├── Header.tsx         ← 既存ヘッダー（"use client"、スクロール検知、SPドロワー付き）
│   │   └── Footer.tsx         ← 既存フッター（4カラムレイアウト）
│   └── lib/
│       └── site.ts            ← site.json読み込み + 型定義 + ショートカットexport
├── tailwind.config.ts         ← カスタムトークン定義（カラー上書き必要）
├── next.config.ts             ← Next.js設定（デフォルト）
├── DESIGN_GUIDE.md            ← 反AIデザイン原則ガイド
└── doc/
    ├── design-data.json       ← 全5ページの構造化要素データ
    └── wireframe/             ← ワイヤーフレーム用（空）
```

### パスエイリアス（tsconfig.json）
```
@/*     → ./src/*    （例: import Header from "@/components/Header"）
@data/* → ./data/*   （例: import siteData from "@data/site.json"）
```

### データフロー
```
data/site.json → src/lib/site.ts → Header.tsx / Footer.tsx / layout.tsx（SEO/JSON-LD）
```

`site.ts` の使い方:
```typescript
import { company, contact, navigation, locations, seo, images, site } from "@/lib/site";
```

---

## 3. 企業基本情報

| 項目 | 内容 |
|------|------|
| 代表者 | 竹内 芳一 |
| 所在地 | 〒497-0013 愛知県あま市七宝町川部四反田27番地 |
| 電話番号 | 052-444-8206 |
| FAX | 052-444-3811 |
| メールアドレス | n-ito@tkss.co.jp |
| 事業内容 | プラスチック射出成型用金型の設計・製作 |
| 営業品目 | 自動車部品・住設・家電・OA機器・コンテナ・工業部品・家庭用品等 |
| 設立 | 昭和45年2月 |
| 資本金 | 1,000万円 |
| 従業員数 | 25名 |
| 敷地/建物 | 3,550㎡ / 1,980㎡ |
| 営業時間 | 8:30〜17:30 |
| 現在のHP | http://www.tkss.co.jp/index.html |
| 取引銀行 | 大垣共立銀行 七宝支店 / 名古屋銀行 大治支店 / 三十三銀行 戸田支店 / 岐阜信用金庫 稲葉地支店 |

---

## 4. HP目的・ターゲット・デザイン方針

| 項目 | 内容 |
|------|------|
| HPの主な目的 | To B（法人向け）+ 採用 |
| メインターゲット | 製品製造メーカー / 40代までの求職者 |
| 自社の強み | 35年以上の実績とノウハウに基づく職人技術と最新鋭の工作機械やCAD/CAMを駆使した加工技術 |
| 現在のHPの課題 | デザインが古い・導線が分かりづらい |
| 期待すること | 会社としての信頼感が出るHP・デザインの近代化 |
| デザイン方針 | **「反AIデザイン」** — 実写真・十分な余白・一貫性。ストック写真感や過剰装飾を排除し、人間味のある職人企業のサイトにする |

---

## 5. デザインシステム（tailwind.config.ts の上書き指示）

> **テンプレートのデフォルトカラー（navy: #1a3a5c, accent: #e67635）は本案件では使用しない。**
> 以下の値で tailwind.config.ts を上書きすること。

### 5.1 カラーパレット

| Tailwindトークン | 値 | 用途 |
|---|---|---|
| `primary` (= テンプレートの navy を置換) | `#005596` | 英語見出し（SERVICE, RECRUIT等）、CTAアクセント |
| `primary-dark` (= テンプレートの navy-dark を置換) | `#003366` | ホバー、濃色背景 |
| `text-primary` | `#333333` | 本文（変更不要） |
| `text-secondary` | `#666666` | 補助テキスト（変更不要） |
| `text-muted` | `#888888` | ミュートテキスト（変更） |
| `bg-light` | `#F9F9F9` | ライトグレー背景（変更） |
| `bg-dark` | `#111111` | 黒背景（Company, Footer等で使用） |
| `border` | `#DDDDDD` | ボーダー（変更） |
| `accent-cyan` | `#00A0E9` | ハイライト（限定使用） |
| `overlay-dark` | `rgba(0,0,0,0.6)` | 画像オーバーレイ |

> **注意:** テンプレートの accent（オレンジ #e67635）は完全に削除。ホバーやCTAボタンには primary / primary-dark を使用。

### 5.2 フォント定義（tailwind.config.ts に追加）

| トークン | フォントファミリー |
|---------|----------------|
| `font-serif-jp` | `"Noto Serif JP", "游明朝", serif` |
| `font-sans`（既存上書き） | `"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif` |
| `font-en` | `"Roboto", "Helvetica Neue", sans-serif` |

### 5.3 フォントサイズ（追加/上書き）

> **2026-02-14 更新: セクションタイトルを大きく変更**

| トークン | サイズ | lineHeight | weight | 用途 |
|---------|--------|-----------|--------|------|
| `hero-title` | 128px (PC) / 72px (SP) | 1.0 | 400 | ヒーローコピー（明朝体、太字なし） |
| `section-en` | **96px (PC) / 64px (SP)** | 1.2 | **700** | セクション英語見出し（SERVICE等） |
| `section-jp` | 14px | 1.6 | 400 | セクション日本語副見出し |
| `feature-num` | 64px | 1.0 | 700 | 強み番号（01/02/03） |
| `nav` | 13px | 1.0 | 700 | ナビゲーション |
| `link-large` | **48px** | 1.2 | **700** | Learn More / VIEW ALL / GET IN TOUCH |

### 5.4 スペーシング（既存と一致、変更不要）

| トークン | 値 |
|---------|-----|
| `section-y` | 120px |
| `section-y-sp` | 80px |
| `max-w-container` | 1200px |

### 5.5 UIコンポーネント仕様

**リンク/ボタン:**

| 名称 | CSS | 使用場面 |
|------|-----|---------|
| Learn More / VIEW ALL（白背景） | `text-[48px] font-bold text-[#004888] underline underline-offset-8` | SERVICE, RECRUIT, EQUIPMENT |
| Learn More / GET IN TOUCH（暗い背景） | `text-[48px] font-bold text-white underline underline-offset-8` | CONCEPT, COMPANY, ContactBanner |
| ボックスprimary | `px-10 py-4 bg-primary text-white` | ENTRY |

---

## 6. layout.tsx 改修指示

> **現在のlayout.tsxにはフォント読み込みがない。以下を追加。**

```typescript
import { Noto_Serif_JP, Noto_Sans_JP, Roboto } from 'next/font/google';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif-jp',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans-jp',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});
```

**bodyタグ変更:**
```tsx
<body className={`${notoSerifJP.variable} ${notoSansJP.variable} ${roboto.variable} font-sans`}>
```

**viewport.themeColor 変更:** `#1a3a5c` → `#005596`

---

## 7. 共通コンポーネント改修

### 7.1 Header.tsx 改修（既存ファイルの変更）

テンプレートのHeaderは `bg-white + shadow` / `text-accent`（オレンジ）ベース。デザイン仕様に合わせて以下を変更:

| 項目 | テンプレート現状 | → デザイン仕様 |
|------|---------------|---------------|
| スクロール後背景 | `bg-white shadow-header` | `bg-black/80 backdrop-blur` |
| スクロール後テキスト | `text-text-primary`（黒） | `text-white`（白のまま） |
| ロゴ反転 | スクロール時に反転解除 | **常に白ロゴ**（`brightness-0 invert` を常時適用） |
| CTAボタン | `bg-accent` オレンジボタン表示 | **非表示**（site.json の cta.label を空文字にすることで自動的に非表示） |
| ナビホバー色 | `hover:text-accent` | `hover:text-white/70` |
| ナビフォント | 15px 通常 | 13px / bold / 英語大文字 / tracking-wider |
| SP固定ヘッダー背景 | 白 | 白のまま（変更なし） |

### 7.2 ContactBanner.tsx

> **2026-02-14 更新: タイトルサイズ拡大、GET IN TOUCHをテキストリンクに変更**

全ページのFooter直前に配置する共通セクション。

**レイアウト仕様:**
- 全幅、背景: 工場画像 + `rgba(0,0,0,0.5)` overlay
- パディング: `100px 0` (SP) / `150px 0` (PC)
- コンテナ: `max-w-container mx-auto`
- PC配置: `flex justify-between items-end`
- SP配置: `text-center` スタック

**要素:**
- 左: `CONTACT`（**64px SP / 96px PC, font-bold**, white, font-en）
- 左: `お問合せ`（section-jp, 14px, white/60）
- 左: `ご質問やご相談は、どうぞお気軽にお寄せください。小さなことでも大歓迎です。`（body, white/80）
- 右: `GET IN TOUCH`（**48px, font-bold, white, underline, underline-offset-8**）→ `/contact`

### 7.3 Footer.tsx 改修（既存ファイルの大幅変更）

テンプレートのFooterは4カラムレイアウト。デザインでは**シンプル1行**に変更:

| 項目 | テンプレート現状 | → デザイン仕様 |
|------|---------------|---------------|
| 背景色 | `bg-navy`（#1a3a5c） | `bg-[#111111]` |
| レイアウト | 4カラム（ロゴ/住所/ナビ/SNS） | **ナビリンク横並び中央揃え** |
| パディング | pt-12~20 pb-6~10 | `py-10` |
| ナビスタイル | text-sm text-white/80 縦リスト | text-sm **font-bold** text-white **横並び** |
| ロゴ | 表示 | **非表示** |
| 住所/電話 | 表示 | **非表示** |
| SNS | Instagram | **非表示** |
| コピーライト | あり | あり（維持） |

---

## 8. ページ別セクション構成

> **各セクションの詳細レイアウトはデザイン指示書（YAML）を参照。**
> **各セクションのテキスト内容は `doc/design-data.json` を参照。**
> 以下はテンプレートとの統合方法と補足情報。

### 8.1 TOPページ（`/` → `src/app/page.tsx` 既存ファイルを上書き）

> **デザインPDF上のsection_id対応:** p1_hero / p1_philosophy / p1_service / p1_company / p1_recruit / p1_equipment / p1_contact

| # | セクションID | レイアウト | 背景 | デザイン指示書の対応 |
|---|---|----------|------|-------------------|
| 1 | hero | full_screen 100vh | **動画背景**（hero-video.mp4）+ gradient overlay | page1 > hero |
| 2 | concept (= p1_philosophy) | full_width_split | 画像（concept-bg.jpg）+ rgba(0,0,0,0.7) | page1 > concept |
| 3 | service | 2_column（テキスト左/画像右） | white | page1 > service |
| 4 | company | 2_column_reverse（画像グリッド左/テキスト右） | bg-dark #111 | page1 > company |
| 5 | recruit | complex_grid（上部2col + 下部画像） | white | page1 > recruit |
| 6 | equipment | contained + grid_3_col | white | page1 > equipment |
| 7 | contact_banner | 共通コンポーネント | 画像overlay | page1 > contact_banner |

**テキストデータ:** `doc/design-data.json` → pages[0]（page_number: 1）

**補足:**
- **heroは動画背景**（`/images/hero-video.mp4`）を使用。`<video autoPlay muted loop playsInline>` で全画面再生 + gradient overlay
- heroのメインコピー `原点を、極める` は `font-serif-jp`（明朝体）で表示、中央配置
- conceptセクション（デザインPDF上は "p1_philosophy" / aboutセクション）は背景画像上に白テキスト、CTA `Learn More` → `/about`
- serviceの `Learn More` → `/service`
- companyの `Learn More` → `/company`
- recruitの右側リンクリスト: `/recruit#culture`, `/recruit#environment`, `/recruit#requirements`
- equipmentの `VIEW ALL` → `/service#equipment`

### 8.2 About Us（`/about` → `src/app/about/page.tsx` 新規）

| # | セクションID | レイアウト | 背景 | デザイン指示書の対応 |
|---|---|----------|------|-------------------|
| 1 | page_header | hero_half_height 50vh | 画像 + rgba(0,0,0,0.4) | page2 > page_header |
| 2 | intro+features | vertical_list（3項目、各2col） | bg-dark #111 | page2 > features |
| 3 | contact_banner | 共通 | 画像overlay | page2 > contact |

**テキストデータ:** `doc/design-data.json` → pages[1]（page_number: 2）

**補足:**
- 3つの強みは番号（01/02/03）が `feature-num`（64px, white/20）
- 各強みは 2カラム: 左テキスト / 右画像（4:3）
- 全セクション白テキスト on 黒背景

### 8.3 Service（`/service` → `src/app/service/page.tsx` 新規）

| # | セクションID | レイアウト | 背景 | デザイン指示書の対応 |
|---|---|----------|------|-------------------|
| 1 | page_header | タイトル + ヒーロー画像 | white | page3 > service_intro |
| 2 | intro | contained center | white | page3 > intro |
| 3 | works | grid_3_col | bg-light #F9F9F9 | page3 > works |
| 4 | equipment_list | full_width data_table | 画像 + rgba(0,0,0,0.8) | page3 > equipment_list |
| 5 | contact_banner | 共通 | 画像overlay | page3 > contact |

**テキストデータ:** `doc/design-data.json` → pages[2]（page_number: 3）

**補足:**
- 設備テーブルは16行（doc/design-data.json の p3_equipment_table 参照）
- テーブルは白テキスト on ダーク背景、ヘッダー行は `rgba(255,255,255,0.1)`
- works画像は後日クライアント提供（プレースホルダーで仮実装可）
- id="equipment" を設備セクションに付与（TOPページからのアンカーリンク用）

### 8.4 Company（`/company` → `src/app/company/page.tsx` 新規）

| # | セクションID | レイアウト | 背景 | デザイン指示書の対応 |
|---|---|----------|------|-------------------|
| 1 | page_header | タイトル + 社屋画像 | white | page4 > company_header |
| 2 | greeting | 2_column（テキスト左/社長写真右） | white | page4 > greeting |
| 3 | outline | contained definition_list | white | page4 > outline |
| 4 | access | contained | white | page4 > access |
| 5 | contact_banner | 共通 | 画像overlay | page4 > contact |

**テキストデータ:** `doc/design-data.json` → pages[3]（page_number: 4）

**補足:**
- 会社概要は定義リスト形式: 各行ボーダー区切り、ラベル幅30%/値70%
- 全11項目（doc/design-data.json の p4_outline 参照）
- アクセスマップ: イラスト地図を想定（未提供の場合はGoogle Maps iframe で仮実装）

### 8.5 Recruit（`/recruit` → `src/app/recruit/page.tsx` 新規）

| # | セクションID | レイアウト | 背景 | デザイン指示書の対応 |
|---|---|----------|------|-------------------|
| 1 | page_header | タイトル + 画像 | white | page5 > recruit_header |
| 2 | culture | 3_column カード | primary #005596 | page5 > culture |
| 3 | environment | contained | white | page5 > environment |
| 4 | requirements | card_grid 3col | white | page5 > requirements |
| 5 | entry_cta | centered button | white | page5 > entry_cta |
| 6 | contact_banner | 共通 | 画像overlay | page5 > contact |

**テキストデータ:** `doc/design-data.json` → pages[4]（page_number: 5）

**補足:**
- cultureセクション: 全面 primary 背景 + 白テキスト、3カードレイアウト
- 各カードのアンカー: id="culture", id="environment", id="requirements"
- 募集要項は「エンゲージに掲載の内容を後日入力」（プレースホルダーで仮実装）
- ENTRY ボタン: ボックスprimary型、幅300px、高さ60px、中央揃え

### 8.6 Contact（`/contact` → `src/app/contact/page.tsx`）

> **2026-02-14 更新: フォームを削除し、電話・メール表示のみに変更**

- ページタイトル: `CONTACT` / `お問い合わせ`（他ページと同じ英語+日本語スタイル）
- **お電話でのお問い合わせ**: 電話番号をクリックで発信可能（tel:リンク）
- **メールでのお問い合わせ**: メールアドレス `takeuchi@tkss.co.jp` をクリックでメーラー起動（mailto:リンク）
- デザイン: 白背景、max-w-narrow（800px）、中央揃え
- フォーム・API削除済み（`src/app/api/contact/` ディレクトリは削除）

---

## 9. 画像素材リスト（実ファイルマッピング）

> **クライアント提供の素材は日本語ディレクトリ名で格納されている。**
> **Step 0 で `public/images/` 直下にASCII名でコピーすること（Next.js Image の互換性確保）。**

### 9.1 コピーコマンド（Step 0 で実行）

```bash
cd /mnt/c/client_hp/takeuchi_mold/public/images

# ロゴ
cp "ロゴ/竹内金型ロゴ (透過).png" logo.png
cp "ロゴ/竹内金型ロゴ (透過).png" logo-square.png
cp "ロゴ/竹内金型ロゴ (透過).png" logo-only.png

# TOPページ - ヒーロー動画
cp "トップページ/トップ動画作.mp4" hero-video.mp4

# TOPページ - Concept/About背景
cp "トップページ/aboutセクション.JPG" concept-bg.jpg

# TOPページ - Service
cp "トップページ/Serviceセクション.JPG" service-thumb.jpg

# TOPページ - Company（コラージュ用 7枚から選択）
cp "トップページ/会社案内/会社案内セクション①.JPG" company-1.jpg
cp "トップページ/会社案内/会社案内セクション②.JPG" company-2.jpg
cp "トップページ/会社案内/会社案内セクション③.JPG" company-3.jpg
cp "トップページ/会社案内/会社案内セクション④.JPG" company-4.jpg
cp "トップページ/会社案内/会社案内セクション⑤.JPG" company-5.jpg
cp "トップページ/会社案内/会社案内セクション⑥.JPG" company-6.jpg
cp "トップページ/会社案内/会社案内セクション⑦.JPG" company-7.jpg

# TOPページ - 外観
cp "トップページ/外観画像.JPG" building-exterior.jpg

# TOPページ - Recruit
cp "トップページ/RECRUITセクション.JPG" recruit-main.jpg

# TOPページ - Equipment（3枚）
cp "トップページ/設備セクション/DSC00413.JPG" equip-1.jpg
cp "トップページ/設備セクション/DSC00415.JPG" equip-2.jpg
cp "トップページ/設備セクション/DSC00416.JPG" equip-3.jpg

# TOPページ - Contact Banner
cp "トップページ/CONTACTセクション.JPG" contact-bg.jpg

# About Us ページ（3枚 → hero + 3つの強み）
cp "aboutページ/DSC00393.JPG" about-hero.jpg
cp "aboutページ/DSC00421.JPG" feature-equip.jpg
cp "aboutページ/DSC00436.JPG" feature-team.jpg

# Service ページ
cp "Serviceページ/DSC00400.JPG" service-hero.jpg
cp "Serviceページ/DSC00435.JPG" service-sub.jpg
cp "Serviceページ/設備詳細裏.JPG" equip-bg.jpg

# Company ページ
cp "Companyページ/DSC00428.JPG" company-hero.jpg
cp "Companyページ/DSC00466.JPG" president.jpg

# Recruit ページ
cp "RECRUIT/DSC00389.JPG" recruit-hero.jpg

# 制作事例（Works / 6枚）
cp "制作事例/DSC01429.JPG" works-1.jpg
cp "制作事例/DSC01432.JPG" works-2.jpg
cp "制作事例/DSC01433.JPG" works-3.jpg
cp "制作事例/DSC01435.JPG" works-4.jpg
cp "制作事例/DSC01440.JPG" works-5.jpg
cp "制作事例/DSC01448.JPG" works-6.jpg
```

### 9.2 ファイルマッピング一覧

| コピー先（実装で使用） | 元ファイル | 使用箇所 |
|----------------------|-----------|---------|
| `hero-video.mp4` | トップページ/トップ動画作.mp4 | **Top hero（動画背景）** |
| `concept-bg.jpg` | トップページ/aboutセクション.JPG | Top concept 背景 |
| `service-thumb.jpg` | トップページ/Serviceセクション.JPG | Top service 右カラム |
| `company-1~7.jpg` | トップページ/会社案内/①~⑦.JPG | Top company 左カラム画像グリッド |
| `building-exterior.jpg` | トップページ/外観画像.JPG | 汎用：社屋外観 |
| `recruit-main.jpg` | トップページ/RECRUITセクション.JPG | Top recruit 下部画像 |
| `equip-1~3.jpg` | トップページ/設備セクション/ | Top equipment 3枚サムネイル |
| `contact-bg.jpg` | トップページ/CONTACTセクション.JPG | ContactBanner 背景 |
| `about-hero.jpg` | aboutページ/DSC00393.JPG | About page header（50vh） |
| `feature-equip.jpg` | aboutページ/DSC00421.JPG | About 強み02 画像 |
| `feature-team.jpg` | aboutページ/DSC00436.JPG | About 強み03 画像 |
| `service-hero.jpg` | Serviceページ/DSC00400.JPG | Service page header 画像 |
| `service-sub.jpg` | Serviceページ/DSC00435.JPG | Service intro 補助画像 |
| `equip-bg.jpg` | Serviceページ/設備詳細裏.JPG | Service equipment テーブル背景 |
| `company-hero.jpg` | Companyページ/DSC00428.JPG | Company page header 社屋画像 |
| `president.jpg` | Companyページ/DSC00466.JPG | Company greeting 社長写真 |
| `recruit-hero.jpg` | RECRUIT/DSC00389.JPG | Recruit page header |
| `works-1~6.jpg` | 制作事例/DSC01429~01448.JPG | Service works ギャラリー（6枚） |
| `logo.png` | ロゴ/竹内金型ロゴ (透過).png | Header / OGP / favicon |

**注意:**
- About 強み01（技術）の画像が不足 → `concept-bg.jpg`（金型手元写真）を流用、または `service-thumb.jpg` を使用
- `environment.jpg`（Recruit 働く環境）が未提供 → `recruit-main.jpg` を流用
- `access-map.png`（アクセスマップ）が未提供 → Google Maps iframe で仮実装
- 製品素材ディレクトリ（27枚）は追加のWorks画像として将来利用可能

---

## 10. サイトマップ

| パス | ページ名 | ファイル | 状態 |
|------|---------|---------|------|
| `/` | Top / Home | `src/app/page.tsx` | 既存（上書き） |
| `/about` | About Us | `src/app/about/page.tsx` | 新規作成 |
| `/service` | Service | `src/app/service/page.tsx` | 新規作成 |
| `/company` | Company | `src/app/company/page.tsx` | 新規作成 |
| `/recruit` | Recruit | `src/app/recruit/page.tsx` | 新規作成 |
| `/contact` | Contact | `src/app/contact/page.tsx` | 新規作成 |

---

## 11. レスポンシブ戦略

| ブレイクポイント | Tailwind | 対応 |
|---------------|---------|------|
| < 768px | デフォルト（mobile-first） | 1カラム、SPフォントサイズ |
| >= 768px | `md:` | タブレット |
| >= 1024px | `lg:` | PC表示（ナビ切替、2~3カラム） |

**主要な変更点:**
- 2カラム → SPで1カラムスタック
- `hero-title` 64px → SP `hero-title-sp` 36px
- `section-en` 48px → SP `section-en-sp` 32px
- `section-y` 120px → SP `section-y-sp` 80px
- 3カラムグリッド → SPで1カラム
- 設備テーブル → SPで横スクロール（`overflow-x-auto`）

---

## 12. data/site.json 投入データ

> **Step 1: 以下の内容で `data/site.json` を上書きする。**

```json
{
  "navigation": {
    "main": [
      { "label": "ABOUT US", "href": "/about" },
      { "label": "SERVICE", "href": "/service" },
      { "label": "COMPANY", "href": "/company" },
      { "label": "RECRUIT", "href": "/recruit" },
      { "label": "CONTACT", "href": "/contact" }
    ],
    "footer": [
      { "label": "ABOUT US", "href": "/about" },
      { "label": "SERVICE", "href": "/service" },
      { "label": "COMPANY", "href": "/company" },
      { "label": "RECRUIT", "href": "/recruit" },
      { "label": "CONTACT", "href": "/contact" }
    ],
    "cta": {
      "label": "",
      "href": "/contact"
    }
  },
  "company": {
    "name": "株式会社竹内金型製作所",
    "nameShort": "竹内金型製作所",
    "nameEn": "Takeuchi Mold Co., Ltd.",
    "id": "takeuchi-mold",
    "ceo": "竹内 芳一",
    "established": "昭和45年2月",
    "capital": "1,000万円",
    "revenue": "",
    "employees": "25名",
    "business": "プラスチック射出成型用金型の設計・製作",
    "license": "",
    "catchphrase": "原点を、極める",
    "mission": "金型はすべての製品の原点。私たちはその重要性を胸に、日夜技術を磨き、信頼される品質を届けています。"
  },
  "contact": {
    "phone": "052-444-8206",
    "phoneFormatted": "052-444-8206",
    "phoneTel": "0524448206",
    "fax": "052-444-3811",
    "email": "n-ito@tkss.co.jp",
    "hours": "8:30〜17:30",
    "recruitContact": "n-ito@tkss.co.jp"
  },
  "locations": {
    "headquarters": {
      "name": "本社",
      "zipCode": "497-0013",
      "address": "愛知県あま市七宝町川部四反田27番地",
      "access": "",
      "mapUrl": ""
    },
    "branches": []
  },
  "social": {
    "instagram": ""
  },
  "images": {
    "logo": "/images/logo.png",
    "logoSquare": "/images/logo-square.png",
    "logoOnly": "/images/logo-only.png"
  },
  "seo": {
    "siteUrl": "",
    "titleSuffix": " | 株式会社竹内金型製作所",
    "defaultTitle": "株式会社竹内金型製作所 | 原点を、極める",
    "defaultDescription": "愛知県あま市の金型メーカー。プラスチック射出成型用金型の設計・製作。55年以上の実績と職人技術で、自動車部品・家電・OA機器等の高精度金型を提供します。"
  },
  "stats": {
    "yearsInBusiness": "55年以上",
    "projectsCompleted": "",
    "employees": "25名",
    "retentionRate": ""
  },
  "history": [],
  "services": [],
  "works": [],
  "news": [],
  "recruit": {
    "catchphrase": "",
    "subCatchphrase": "",
    "data": [],
    "benefits": {
      "vacation": [],
      "allowances": [],
      "facilities": []
    },
    "positions": {
      "highSchool": { "title": "", "items": [] },
      "midCareer": { "title": "", "items": [] }
    },
    "faq": [],
    "interviews": []
  },
  "ceo": {
    "name": "竹内 芳一",
    "title": "代表取締役社長",
    "image": "/images/president.jpg",
    "message": [
      "創業以来、私たちは「金型はものづくりの原点である」という想いを大切にし、お客様の製品品質を支える確かな技術の提供に努めてまいりました。",
      "金型づくりは、一つとして同じ答えのない仕事です。だからこそ社員一人ひとりが技術を磨き続け、お客様の課題に真摯に向き合い、最適解を導き出す姿勢を大切にしています。その積み重ねこそが、当社の信頼と品質を支えていると考えております。",
      "今後も「原点を、極める。」という言葉を胸に、ものづくりの根幹を担う企業として、お客様の期待を超える金型づくりに邁進してまいります。"
    ]
  }
}
```

> **注意:** `navigation.cta.label` を空文字にすることで、テンプレートHeaderのCTAボタンが自動非表示になる。

---

## 13. 既存コンポーネントの技術メモ

### Header.tsx
- `"use client"` Client Component
- スクロール検知: `window.scrollY > 50` で `isScrolled` 切替
- PC/SP で別々の `<header>` をレンダリング（PC: `hidden lg:flex` / SP: `lg:hidden`）
- SPドロワー: 右スライド `translate-x` アニメーション、overlay付き
- ナビは `navigation.main` 配列を `.map()` でレンダリング

### Footer.tsx
- Server Component（`"use client"` なし）
- `navigation.footer` 配列を `.map()` でレンダリング
- 現在年を `new Date().getFullYear()` で自動取得

### API route.ts（POST /api/contact）
- バリデーション実装済み: name（必須100字）、email（必須形式）、phone（任意）、message（必須5000字）
- **メール送信は未実装**（TODO: SendGrid/Resend等の環境変数・SDK設定が必要）

### lib/site.ts
- `data/site.json` を型付きで読み込み
- `export const { site, navigation, company, contact, locations, seo, images }` でショートカット提供

---

## 14. 実装完了状況

> **2026-02-14 最終更新**

| Step | 作業 | 状態 |
|------|------|------|
| 0 | 画像コピー（34ファイル ASCII名配置） | **完了** |
| 1 | `data/site.json` 企業データ投入 | **完了** |
| 2 | `tailwind.config.ts` カラー・フォント上書き | **完了** |
| 3 | `layout.tsx` Google Fonts + themeColor | **完了** |
| 4 | `Header.tsx` 改修（モバイルと同じロゴ表示に統一） | **完了** |
| 5 | `Footer.tsx` 改修（シンプル1行ナビ中央 / #111bg） | **完了** |
| 6 | `ContactBanner.tsx` 新規作成 | **完了** |
| 7 | TOPページ（動画hero + 6セクション + ContactBanner） | **完了** |
| 8 | About Us ページ（hero 50vh + FEATURE 3つの強み） | **完了** |
| 9 | Service ページ（intro + works 6枚 + 設備テーブル16行） | **完了** |
| 10 | Company ページ（greeting + outline 11項目 + access map） | **完了** |
| 11 | Recruit ページ（culture + environment + positions モーダル） | **完了** |
| 12 | Contact ページ（求職者向けリデザイン） | **完了** |
| 13 | ビルド検証 | **完了** |
| 14 | SEO・LLMO対応（robots.txt / sitemap / JSON-LD / metadata） | **完了** |
| 15 | SEO・LLMOガイドをテンプレート・ワークフローに展開 | **完了** |

---

## 14.1 2026-02-14 セッションでの変更点

### コンタクトページ
- **フォームを削除** → 電話とメールアドレス表示のみに変更
- メールアドレス: `takeuchi@tkss.co.jp`
- `src/app/api/contact/` ディレクトリを削除（不要になったため）

### TOPページ デザイン調整

#### ヒーローセクション
- 「原点を、極める」を**明朝体**（Noto Serif JP）に変更
- フォントサイズ: 72px (SP) / 128px (PC)、太字なし
- 「、」と「極」の間の余白を詰める（-0.3em）
- スマホでは「原点を、」で改行、「極める」を右寄せ（pl-12）
- サブテキスト: 18px (SP) / 22px (PC)
- 表示位置を下に調整（pt-24 / lg:pt-32）

#### セクションタイトル共通スタイル
- SERVICE / COMPANY / RECRUIT / EQUIPMENT: **64px (SP) / 96px (PC)、太字、#004888**
- 日本語副見出し（事業紹介等）: **#004888**

#### Learn More / VIEW ALL 共通スタイル
- フォントサイズ: **48px**
- 太字
- カラー: **#004888**（白背景セクション）/ **白**（暗い背景セクション）
- アンダーライン: **underline-offset-8**

#### RECRUITセクション リンクリスト
- OUR CULTURE / ENVIRONMENT / REQUIREMENTS: **24px (SP) / 32px (PC)、太字、#004888**
- 日本語（求める人物像等）: **#004888**
- 矢印(→)を削除
- VIEW ALLを削除
- 右カラムを下に移動（pt-16 / lg:pt-24）

#### ContactBanner
- CONTACT: **64px (SP) / 96px (PC)、太字**
- GET IN TOUCH: **48px、太字、白、アンダーライン**（アウトラインボタンから変更）

### globals.css
- Noto Serif JP をGoogle Fontsに追加
- `--font-serif-jp` CSS変数を追加

### data/site.json
- メールアドレスを `takeuchi@tkss.co.jp` に更新

---

## 14.2 2026-02-14 セッション2での変更点

### ABOUT USページ
- ヒーローセクションをフルスクリーン（100vh）に変更
- 画像の上に黒オーバーレイ + 白テキスト
- キャッチコピー「品質をつくるのは、技術と設備、そして姿勢です。」をヒーロー内に配置

### FEATUREセクション（ABOUT US）レイアウト修正
- 01〜03の番号を白テキスト（48px/64px）に
- タイトルと番号を同じ行に配置
- 説明文は右端を画像と揃える
- 画像はテキストの下、右寄せ（60%幅）

### ページヘッダー統一
- SERVICE, COMPANY, CONTACT, RECRUIT: `pt-24 lg:pt-28`（上に移動）
- タイトルサイズ: 64px / 96px、太字、#004888

### ヒーロー画像の固定背景化
- SERVICE, COMPANY, RECRUIT: `bg-fixed bg-cover bg-center`
- パララックス風のスクロール効果

### セクションヘッダー統一（40px/56px、太字、#004888、中央揃え）
- WORKS / 制作事例
- FEATURE / 3つの強み（白テキスト）
- GREETING / ごあいさつ
- OUTLINE / 会社概要
- ACCESS / アクセス
- ENVIRONMENT / 働く環境
- OUTLINE / 募集職種（POSITIONSから変更）

### ヘッダーナビゲーション
- アクティブなメニューは青（#004888）
- 白背景ページでは黒テキスト、スクロール後は白テキスト
- RECRUITとCONTACTの間にセパレーター「|」追加
- テキストサイズを15pxに拡大

### 設備詳細セクション（SERVICE）
- モバイル: テーブル → カードレイアウトに変更
- デスクトップ: テーブル表示を維持

### モーダルz-index修正
- RECRUITページのモーダルをz-[1001]に変更（ヘッダーより前面）

### WORKS画像の背景置き換え
- Gemini Pro（Nanobanana）で6枚の商品写真を再生成
- オフィス背景 → プロの商品撮影用白/グレー背景に変更
- works-2は4K生成後、通常解像度でシャープに再生成

---

## 14.3 2026-02-14 セッション3での変更点

### CONTACTページ リデザイン（求職者向け）

> **重要な方針転換:** サイト全体を見直した結果、このサイトは**採用特化サイト**であり、BtoB要素はほとんどない。CONTACTページは法人向けではなく、**求職者向け**としてリデザインした。

#### 実装内容
- ページヘッダー: 他ページと統一（CONTACT / お問い合わせ、青タイトル）
- ヒーロー画像: `contact-bg.jpg`（固定背景、パララックス効果）
- メッセージ: 「採用に関するご質問、会社見学のご希望など、お気軽にお問い合わせください。」
- 電話/メール: シンプルなカード形式（縦スタック）
- メール件名: 「採用に関するお問い合わせ」がデフォルト
- 「採用情報」リンク: RECRUITページへの導線
- アンカーポイント: `id="inquiry"` + `scroll-mt-24 lg:scroll-mt-28`（ヘッダー分のオフセット）

#### 不採用にした要素（法人向け訴求）
- 「55年以上の実績」等の実績アピール
- 「金型製作プランをご提案」等のBtoBフロー
- 会社情報セクション
- 複雑なカードホバーエフェクト

### RECRUITページ 導線変更
- ENTRYボタン: `mailto:` → `/contact#inquiry` に変更
- モーダル内「この職種に応募する」: `mailto:` → `/contact#inquiry` に変更
- 理由: `mailto:` リンクはブラウザ/OS設定によりメーラーが起動しない場合がある

### src/lib/site.ts
- `stats` のexportを追加（`export const stats = site.stats;`）

---

## 14.4 2026-02-14 セッション4での変更点（SEO・LLMO対応）

### 実施内容

| 項目 | 対応 | ファイル |
|------|------|---------|
| robots.txt 作成 | 検索エンジン向け案内板 | `public/robots.txt` |
| sitemap.xml 作成 | Next.js動的生成（全6ページ） | `src/app/sitemap.ts` |
| recruit metadata 追加 | "use client"対応でlayout.tsx作成 | `src/app/recruit/layout.tsx` |
| contact metadata 追加 | title/description設定 | `src/app/contact/page.tsx` |
| 見出し構造修正 | about ページの h4 → h3 | `src/app/about/page.tsx` |
| JSON-LD強化 | LocalBusiness → ManufacturingBusiness | `src/app/layout.tsx` |
| alt属性改善 | 設備画像・制作事例を具体的に | `src/app/page.tsx`, `src/app/service/page.tsx` |

### JSON-LD 追加プロパティ

```typescript
{
  "@type": "ManufacturingBusiness",
  "@id": "https://www.tkss.co.jp/#organization",
  alternateName: "Takeuchi Mold Co., Ltd.",
  foundingDate: "1970-02",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
  geo: { "@type": "GeoCoordinates", latitude: 35.18, longitude: 136.81 },
  knowsAbout: [
    "プラスチック射出成型用金型",
    "金型設計",
    "金型製作",
    "自動車部品金型",
    "家電金型",
    "OA機器金型",
  ],
}
```

### 作成ドキュメント

| ファイル | 用途 |
|---------|------|
| `doc/SEO_LLMO_REPORT.md` | クライアント向けSEO・LLMO施策説明書 |
| `SEO_LLMO_GUIDE.md` | テンプレート向け汎用実装ガイド（固有名詞なし） |
| `doc/NOTEBOOKLM_SLIDE_PROMPT.md` | NotebookLMスライド作成用指示文 |

### テンプレート・ワークフローへの展開

SEO・LLMOガイドを全テンプレートに展開し、制作ワークフローに組み込み完了。

**テンプレートへの配置（7リポジトリすべてにプッシュ済み）:**
- template-standard
- template-fullorder
- template-recruit-magazine
- template-leadgen-minimal
- template-leadgen-visual
- template-trust-visual
- template-authority-minimal

**work-manual GAS更新（compositionPrompt.js）:**
- HANDOFFテンプレートの「参照ファイル」に `SEO_LLMO_GUIDE.md` を追加
- 「次にやること」の最終フェーズとしてSEO・LLMO対策チェックリストを追加
- 今後生成されるHANDOFFには自動的にSEO・LLMOフェーズが含まれる

---

## 15. 次世代セッションタスク

### 15.1 SEO・LLMO チェック

> **完了（2026-02-14）**

#### 実施済み項目

**SEO基本項目:**
- [x] 各ページの `<title>` タグが適切か
- [x] 各ページの `<meta name="description">` が適切か
- [x] 見出し構造（h1 > h2 > h3）が正しいか
- [x] 画像の `alt` 属性が適切か
- [x] 構造化データ（JSON-LD）が正しく出力されているか
- [x] OGP画像が正しく設定されているか
- [x] canonical URL が設定されているか
- [x] robots.txt / sitemap.xml が存在するか

**LLMO（LLM最適化）:**
- [x] 会社情報が明確に記載されているか（会社名、所在地、事業内容）
- [x] 各ページの目的が明確か
- [x] コンテンツが構造化されているか（リスト、テーブル等）
- [x] 専門用語に適切な説明があるか

#### 今後の作業（本番公開後）

- [ ] Google Search Console にサイト登録
- [ ] sitemap.xml を送信
- [ ] Rich Results Test で JSON-LD 検証
- [ ] OGP確認（Facebook/Twitter/LINE）

### 15.2 アニメーション実装

> **ステータス: takeuchimold完成・hp-template展開中**

#### takeuchimoldのアニメーション仕様（正解）

| 項目 | 仕様 |
|------|------|
| ライブラリ | **なし**（純粋CSS transition + IntersectionObserver） |
| スクロール位置問題 | `waitForScrollTop()`で解決 |
| ページ構造 | `layout.tsx`（metadata）+ `"use client" page.tsx` |

#### コンポーネント構成

```
src/components/animations/
├── FadeInUp.tsx          # スクロール連動フェードイン + スライドアップ
├── FadeInImage.tsx       # 方向別スライドイン画像（left/right/up）
├── StaggerContainer.tsx  # 子要素の順次アニメーション
├── AnimatedLink.tsx      # アンダーラインアニメーション付きリンク
├── HeroBackground.tsx    # ヒーロー背景フェードイン
└── index.ts              # エクスポート
```

#### 核心：waitForScrollTop()

```typescript
// スクロール位置が0になるまで待ち、さらに少し待機
function waitForScrollTop(): Promise<void> {
  return new Promise(resolve => {
    const check = () => {
      if (window.scrollY === 0) {
        // スクロール完了後、100ms待ってからアニメーション開始
        setTimeout(resolve, 100);
      } else {
        requestAnimationFrame(check);
      }
    };
    check();
  });
}
```

**なぜ必要か：**
1. TOPページで1000pxまでスクロール
2. Serviceページに遷移
3. **一瞬、Serviceページが1000pxの位置から表示される**
4. その後、0pxまでスクロールアップ
5. この間に1000px〜0pxの間の要素がすべてIntersectionObserverで「画面内」と判定されてアニメーション発火済みになる

`waitForScrollTop()`はスクロール位置が0になってからIntersectionObserverを開始することでこの問題を回避する。

#### ページ構造

アニメーションを使用するページは以下の構造にする：

**layout.tsx:**
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: '会社紹介',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

**page.tsx:**
```tsx
'use client';

import { FadeInUp, FadeInImage } from '@/components/animations';

export default function AboutPage() {
  return (
    <div>
      <FadeInUp>
        <h1>About Us</h1>
      </FadeInUp>
    </div>
  );
}
```

---

### 15.3 hp-template アニメーション展開

> **ステータス: 未完了（2026-02-14）**
>
> **重要警告: 前セッションで「完了」と誤報告された。実際は未完了。**

---

#### ⚠️ 前セッションの過ち（絶対に繰り返さないこと）

1. **FadeInUpだけを修正して「完了」と報告した** - 5つのアニメーションコンポーネント全てを適用すべきだった
2. **「基盤をコピーした」だけで「各ページに適用した」と誤解を招く報告をした** - 基盤コピーとページ適用は別作業
3. **StaggerItemが存在しないのにインポートされている問題を「削除」で解決しようとした** - 足りないコンポーネントは作成すべき
4. **各ページを実際に確認せずに作業完了と判断した** - 必ず全ページを目視確認すること

---

#### 5つのアニメーションコンポーネント（すべて使用すること）

| コンポーネント | 用途 | 使用場面 |
|---------------|------|---------|
| **FadeInUp** | スクロール連動フェードイン + スライドアップ | テキストブロック、カード、セクション |
| **FadeInImage** | 方向別スライドイン画像（left/right/up） | 画像要素、特に2カラムレイアウト |
| **StaggerContainer** | 子要素の順次アニメーション | リスト、グリッド、カードグループ |
| **AnimatedLink** | アンダーラインアニメーション付きリンク | CTAリンク、「Learn More」「VIEW ALL」等 |
| **HeroBackground** | ヒーロー背景フェードイン | ページトップのヒーローセクション背景 |

**注意: StaggerItemというコンポーネントは存在しない。StaggerContainerは子要素を自動的にスタガーする設計。**
**一部のテンプレートでStaggerItemをインポートしているが、これはエラー。StaggerItemコンポーネントを作成するか、インポートを削除してStaggerContainerのみ使用する。**

---

#### 現在の正確な状態

| テンプレート | animations基盤 | 全ページ適用 | 備考 |
|-------------|---------------|-------------|------|
| template-fullorder | ✓ コピー済 | ✗ 未確認 | TOPページのみ部分的に使用 |
| template-standard | ✓ コピー済 | ✗ 未確認 | 一部ページのみ、5つ全ては未適用 |
| template-authority-minimal | ✓ コピー済 | ✗ 未完了 | FadeInUpのみ置換、他4つは未適用 |
| template-trust-visual | ✓ コピー済 | ✗ 未完了 | TOPのみFadeInUp使用、StaggerItemインポートエラーあり |
| template-leadgen-minimal | ✓ コピー済 | ✗ 未確認 | FadeInViewは書き換え済み、5つ全ては未適用 |
| template-leadgen-visual | ✓ コピー済 | ✗ 未確認 | 基盤コピーのみ |
| template-recruit-magazine | ✓ コピー済 | ✗ 未確認 | 基盤コピーのみ |

---

#### 次世代セッションでやるべき作業

**各テンプレートに対して以下を実行すること：**

1. **全ページをリストアップ**
   ```bash
   ls -la /mnt/c/hp-template/<テンプレート名>/src/app/
   ```

2. **各ページで5つのアニメーションを適切に使用しているか確認**
   ```bash
   grep -r "FadeInUp\|FadeInImage\|StaggerContainer\|AnimatedLink\|HeroBackground" /mnt/c/hp-template/<テンプレート名>/src/app/ --include="*.tsx"
   ```

3. **使用していないコンポーネントがあれば適切な場所に追加**
   - ヒーローセクション背景 → HeroBackground
   - テキストブロック → FadeInUp
   - 画像 → FadeInImage（direction指定）
   - リスト/グリッド → StaggerContainer
   - CTAリンク → AnimatedLink

4. **Metadataがあるページはlayout.tsx分離**
   - `export const metadata`がある → layout.tsxに移動
   - page.tsxに`'use client'`を追加

5. **動作確認**
   ```bash
   cd /mnt/c/hp-template/<テンプレート名>
   npm run dev
   ```
   - ブラウザで全ページを確認
   - ページ遷移時にアニメーションが正しく発火するか確認
   - スクロールでアニメーションが発火するか確認

6. **ビルド確認**
   ```bash
   npm run build
   ```

---

#### 参照ファイル（マスター）

| ファイル | パス |
|---------|------|
| FadeInUp | `/mnt/c/client_hp/takeuchimold/src/components/animations/FadeInUp.tsx` |
| FadeInImage | `/mnt/c/client_hp/takeuchimold/src/components/animations/FadeInImage.tsx` |
| StaggerContainer | `/mnt/c/client_hp/takeuchimold/src/components/animations/StaggerContainer.tsx` |
| AnimatedLink | `/mnt/c/client_hp/takeuchimold/src/components/animations/AnimatedLink.tsx` |
| HeroBackground | `/mnt/c/client_hp/takeuchimold/src/components/animations/HeroBackground.tsx` |
| index.ts | `/mnt/c/client_hp/takeuchimold/src/components/animations/index.ts` |

---

#### 既知の問題

1. **StaggerItemインポートエラー**
   - template-trust-visual/src/app/page.tsx でStaggerItemをインポートしているが、コンポーネントが存在しない
   - 対応: StaggerItemコンポーネントを作成してindex.tsに追加するか、StaggerContainerのみ使用するようにコードを修正

2. **delay単位の不統一**
   - 旧コードは秒単位（0.2）、新コードはミリ秒（200）
   - FadeInUp/FadeInImageには自動変換を追加済み（delay < 1 なら秒と判断してミリ秒に変換）

3. **古いコンポーネントの残存**
   - 一部テンプレートに`animation/`（単数形）や`ScrollReset.tsx`が残っている可能性
   - 確認して削除すること

---

## 16. 未確定事項・TODO

| 項目 | 状態 | 対応 |
|------|------|------|
| 募集要項の詳細 | 未確定 | エンゲージ掲載内容を後日投入。プレースホルダーで仮実装 |
| 制作事例（WORKS）写真 | 未提供 | クライアントより提供後に配置。プレースホルダーで仮実装 |
| アクセスマップ | イラスト地図を想定 | 未提供の場合 Google Maps iframe で仮実装 |
| ロゴ画像 | テンプレートのダミー | クライアントのロゴに差し替え |
| Privacy Policy | 未定義 | 必要に応じて `/privacy` ページを追加 |
| 404/500エラーページ | 未定義 | Next.jsデフォルトまたはカスタムで実装 |
| OGP画像 | テンプレートの動的生成あり | 企業名・キャッチコピーを反映するよう確認 |

---

## 15. フォント設定（`layout.tsx`）参考コード

```typescript
import { Noto_Serif_JP, Noto_Sans_JP, Roboto } from 'next/font/google';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif-jp',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans-jp',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});
```

| 用途 | CSS変数 | フォント | 理由 |
|------|--------|--------|------|
| 日本語見出し（明朝） | `--font-serif-jp` | Noto Serif JP | 伝統、信頼、重厚感（ヒーロー「原点を、極める」等） |
| 日本語本文（ゴシック） | `--font-sans-jp` | Noto Sans JP | 可読性（本文全般） |
| 英語見出し/数字 | `--font-roboto` | Roboto | 力強さ、モダン（SERVICE, RECRUIT等の英語見出し） |
