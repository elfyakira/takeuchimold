# アニメーション実装計画

> **作成日:** 2026-02-14
> **ステータス:** 計画中

---

## 1. アニメーションパターン分類

調査の結果、以下の**4つのアニメーションパターン**に集約できます。

---

### 1.1 フェードイン + スライドアップ（スクロール連動）

| 対象 | 出現箇所 |
|------|---------|
| セクションタイトル（h2） | 全ページ共通（SERVICE, COMPANY, RECRUIT等） |
| セクション説明文（p） | 全ページ共通 |
| ヒーローテキスト | TOP, About |
| フィーチャー番号（01/02/03） | About, Recruit |
| カード・ボックス | Contact（電話/メールボックス）, Recruit（ポジションカード） |

**推定: 約40〜50箇所**

---

### 1.2 画像フェードイン + ホバースケール

| 対象 | 出現箇所 |
|------|---------|
| 画像グリッド | TOP（Company 3枚, Equipment 3枚）, Service（Works 6枚）|
| 単体画像 | TOP（Service, Recruit）, About（Feature 3枚）, Company（社長写真）, Recruit（Environment）|
| ポジションカード画像 | Recruit（4枚）|

**推定: 約20箇所**

---

### 1.3 スタッガードアニメーション（グリッド要素の順次表示）

| 対象 | 出現箇所 |
|------|---------|
| 画像グリッド | TOP（Company, Equipment）, Service（Works）|
| テーブル行 | Service（設備テーブル 16行）|
| 定義リスト | Company（会社概要 11行）|
| カードグリッド | Recruit（ポジションカード）|

**推定: 約6グループ**

---

### 1.4 ホバーインタラクション

| 対象 | 出現箇所 |
|------|---------|
| アンダーラインリンク | Learn More, VIEW ALL, GET IN TOUCH（全ページ）|
| ボタン | ENTRY（Recruit）|
| ナビリンク | Header, Footer |
| テーブル行ハイライト | Service（設備テーブル）|
| カードシャドウ | Recruit（ポジションカード）※既存 |

**推定: 約15箇所**

---

## 2. ページ別アニメーション対象一覧

### 2.1 TOPページ（src/app/page.tsx）

| セクション | 要素 | アニメーションタイプ |
|-----------|------|-------------------|
| HERO | h1「原点を、極める」 | フェードイン + スライドアップ |
| HERO | p説明文 | フェードイン（遅延） |
| CONCEPT | h2「原点」「極める」 | フェードイン + スライドアップ |
| CONCEPT | p説明文 | フェードイン（遅延） |
| CONCEPT | "Learn More"リンク | ホバーアンダーラインアニメーション |
| SERVICE | h2「SERVICE」 | フェードイン + スライドアップ |
| SERVICE | p説明文 | フェードイン（遅延） |
| SERVICE | 画像 | フェードイン + ホバースケール |
| SERVICE | "Learn More"リンク | ホバーアンダーラインアニメーション |
| COMPANY | h2「COMPANY」 | フェードイン + スライドアップ |
| COMPANY | p説明文 | フェードイン（遅延） |
| COMPANY | 画像グリッド（3枚） | スタッガードフェードイン + ホバースケール |
| COMPANY | "Learn More"リンク | ホバーアンダーラインアニメーション |
| RECRUIT | h2「RECRUIT」 | フェードイン + スライドアップ |
| RECRUIT | リンクリスト（3項目） | スタッガードフェードイン |
| RECRUIT | 画像 | フェードイン + ホバースケール |
| EQUIPMENT | h2「EQUIPMENT」 | フェードイン + スライドアップ |
| EQUIPMENT | 画像グリッド（3枚） | スタッガードフェードイン + ホバースケール |
| EQUIPMENT | "VIEW ALL"リンク | ホバーアンダーラインアニメーション |

---

### 2.2 About Usページ（src/app/about/page.tsx）

| セクション | 要素 | アニメーションタイプ |
|-----------|------|-------------------|
| HERO | h1「ABOUT US」 | フェードイン + スライドアップ |
| HERO | h2「品質をつくるのは...」 | フェードイン（遅延） |
| HERO | p説明文 | フェードイン（遅延） |
| FEATURE | h2「FEATURE」 | フェードイン + スライドアップ |
| FEATURE | 番号（01/02/03） | スタッガードフェードイン |
| FEATURE | タイトル | フェードイン（遅延） |
| FEATURE | 説明文 | フェードイン（遅延） |
| FEATURE | 画像（3枚） | スタッガードフェードイン + ホバースケール |

---

### 2.3 Serviceページ（src/app/service/page.tsx）

| セクション | 要素 | アニメーションタイプ |
|-----------|------|-------------------|
| HEADER | h1「SERVICE」 | フェードイン + スライドアップ |
| INTRO | h2「蓄積された技術で...」 | フェードイン + スライドアップ |
| INTRO | p説明文 | フェードイン（遅延） |
| WORKS | h2「WORKS」 | フェードイン + スライドアップ |
| WORKS | 画像グリッド（6枚） | スタッガードフェードイン + ホバースケール |
| EQUIPMENT | h2「設備詳細」 | フェードイン + スライドアップ |
| EQUIPMENT | テーブル行（16行） | スタッガードフェードイン + ホバーハイライト |

---

### 2.4 Companyページ（src/app/company/page.tsx）

| セクション | 要素 | アニメーションタイプ |
|-----------|------|-------------------|
| HEADER | h1「COMPANY」 | フェードイン + スライドアップ |
| GREETING | h2「GREETING」 | フェードイン + スライドアップ |
| GREETING | 挨拶文（複数段落） | スタッガードフェードイン |
| GREETING | 社長写真 | フェードイン + ホバースケール |
| OUTLINE | h2「OUTLINE」 | フェードイン + スライドアップ |
| OUTLINE | 定義リスト（11行） | スタッガードフェードイン + ホバーハイライト |
| ACCESS | h2「ACCESS」 | フェードイン + スライドアップ |
| ACCESS | 地図iframe | フェードイン |

---

### 2.5 Recruitページ（src/app/recruit/page.tsx）

| セクション | 要素 | アニメーションタイプ |
|-----------|------|-------------------|
| HEADER | h1「RECRUIT」 | フェードイン + スライドアップ |
| CULTURE | h2「OUR CULTURE」 | フェードイン + スライドアップ |
| CULTURE | 番号（01/02/03） | スタッガードフェードイン |
| CULTURE | タイトル・説明文 | フェードイン（遅延） |
| CULTURE | アイコン画像 | フェードイン + スケールアップ |
| ENVIRONMENT | h2「ENVIRONMENT」 | フェードイン + スライドアップ |
| ENVIRONMENT | 画像 | フェードイン + ホバースケール |
| REQUIREMENTS | h2「OUTLINE」 | フェードイン + スライドアップ |
| REQUIREMENTS | ポジションカード（4枚） | スタッガードフェードイン |
| REQUIREMENTS | カード画像 | ホバースケール（既存強化） |
| MODAL | オーバーレイ | フェードイン |
| MODAL | モーダル本体 | スケールアップ + フェードイン |
| ENTRY | ボタン | ホバーエフェクト |

---

### 2.6 Contactページ（src/app/contact/page.tsx）

| セクション | 要素 | アニメーションタイプ |
|-----------|------|-------------------|
| HEADER | h1「CONTACT」 | フェードイン + スライドアップ |
| MAIN | メッセージテキスト | フェードイン |
| MAIN | 電話ボックス | フェードイン + ホバーシャドウ |
| MAIN | メールボックス | フェードイン + ホバーシャドウ |
| MAIN | 採用情報リンク | ホバーアンダーライン |

---

### 2.7 共通コンポーネント

#### Header.tsx
| 要素 | アニメーションタイプ |
|------|-------------------|
| PCヘッダー背景 | スクロール時フェードトランジション（既存） |
| ナビリンク | ホバーアンダーラインアニメーション |
| ロゴ | ホバースケール（軽度） |
| モバイルドロワー | スライドアニメーション（既存） |

#### Footer.tsx
| 要素 | アニメーションタイプ |
|------|-------------------|
| ナビリンク | ホバーアンダーラインアニメーション |

#### ContactBanner.tsx
| 要素 | アニメーションタイプ |
|------|-------------------|
| h2「CONTACT」 | フェードイン + スライドアップ |
| 説明文 | フェードイン（遅延） |
| "GET IN TOUCH"リンク | ホバーアンダーラインアニメーション |

---

## 3. 共通コンポーネント設計案

```
src/components/animations/
├── FadeInUp.tsx        # スクロール連動フェードイン+スライドアップ
├── FadeInImage.tsx     # 画像用フェードイン+ホバースケール
├── StaggerContainer.tsx # 子要素の順次アニメーション
└── AnimatedLink.tsx    # アンダーラインアニメーション付きリンク
```

### 3.1 FadeInUp.tsx

**用途:** セクションタイトル、テキスト、ボックスなど汎用

**Props:**
- `children`: React.ReactNode
- `delay`: number（遅延時間 ms）
- `duration`: number（アニメーション時間 ms、デフォルト 600）
- `distance`: number（移動距離 px、デフォルト 30）

### 3.2 FadeInImage.tsx

**用途:** 画像要素（Next.js Image対応）

**Props:**
- `src`: string
- `alt`: string
- `width` / `height` / `fill`: 通常のImage props
- `hoverScale`: number（ホバー時のスケール、デフォルト 1.05）
- `delay`: number

### 3.3 StaggerContainer.tsx

**用途:** グリッド、リスト、テーブルの順次アニメーション

**Props:**
- `children`: React.ReactNode[]
- `staggerDelay`: number（各要素間の遅延 ms、デフォルト 100）
- `baseDelay`: number（開始遅延 ms）

### 3.4 AnimatedLink.tsx

**用途:** Learn More、VIEW ALL等のリンク

**Props:**
- `href`: string
- `children`: React.ReactNode
- `variant`: 'light' | 'dark'（背景に応じた色）

---

## 4. 実装優先度

| 優先度 | パターン | 理由 |
|--------|---------|------|
| **高** | フェードイン + スライドアップ | 最も使用頻度が高く、視覚的インパクト大 |
| **高** | 画像フェードイン | 職人技・設備写真が多いサイトで効果的 |
| **中** | スタッガード | グリッド系UIの印象向上 |
| **低** | ホバーインタラクション | 既存で部分的に実装済み |

---

## 5. 技術選定

### 選択肢

| 技術 | メリット | デメリット | バンドルサイズ |
|------|---------|-----------|--------------|
| CSS Transitions + Intersection Observer | 軽量、依存なし | 複雑なアニメーションは困難 | 0KB |
| framer-motion | 柔軟、宣言的、豊富な機能 | バンドルサイズ増加 | ~30KB (gzip) |

### 推奨

**CSS Transitions + Intersection Observer** を推奨

理由:
- 本サイトのアニメーションはシンプル（フェードイン、スケール）
- 追加依存なしで軽量
- パフォーマンスに優れる
- HANDOFF.mdの「反AIデザイン原則」（過度な装飾を避ける）に合致

---

## 6. 設計原則（HANDOFF.mdより）

- **過度なアニメーションは避ける**
- すべての要素にアニメーションをつけない（本当に注目してほしい要素にのみ）
- 派手な動きより、控えめで自然な動き
- アニメーション時間は短め（0.3〜0.6秒程度）
- パフォーマンスに配慮（`will-change`、`transform`、`opacity` を使用）
- `prefers-reduced-motion` への配慮を検討

---

## 7. 実装チェックリスト

### Phase 1: 共通コンポーネント作成
- [ ] `src/components/animations/FadeInUp.tsx`
- [ ] `src/components/animations/FadeInImage.tsx`
- [ ] `src/components/animations/StaggerContainer.tsx`
- [ ] `src/components/animations/AnimatedLink.tsx`

### Phase 2: TOPページ適用
- [ ] HEROセクション
- [ ] CONCEPTセクション
- [ ] SERVICEセクション
- [ ] COMPANYセクション
- [ ] RECRUITセクション
- [ ] EQUIPMENTセクション

### Phase 3: 下層ページ適用
- [ ] About Us
- [ ] Service
- [ ] Company
- [ ] Recruit
- [ ] Contact

### Phase 4: 共通コンポーネント適用
- [ ] Header.tsx
- [ ] Footer.tsx
- [ ] ContactBanner.tsx

### Phase 5: 検証
- [ ] パフォーマンス確認（Lighthouse）
- [ ] モバイル動作確認
- [ ] `prefers-reduced-motion` 対応確認
- [ ] ビルド確認
