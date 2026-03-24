import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-en text-[120px] lg:text-[180px] font-bold text-[#004888]/10 leading-none select-none">
          404
        </p>
        <h1 className="text-[24px] lg:text-[32px] font-bold text-text-primary -mt-8 mb-4">
          ページが見つかりません
        </h1>
        <p className="text-body text-text-secondary leading-relaxed mb-10">
          お探しのページは移動または削除された可能性があります。
          <br />
          URLをお確かめの上、下記よりお探しのページをご覧ください。
        </p>
        <nav className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#004888] text-white text-[15px] font-medium tracking-wider hover:bg-[#003366] transition-colors"
          >
            トップページへ
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-[#004888] text-[#004888] text-[15px] font-medium tracking-wider hover:bg-[#004888] hover:text-white transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px] text-text-secondary">
          <li>
            <Link href="/about" className="hover:text-[#004888] transition-colors">
              私たちについて
            </Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-[#004888] transition-colors">
              事業内容
            </Link>
          </li>
          <li>
            <Link href="/company" className="hover:text-[#004888] transition-colors">
              会社案内
            </Link>
          </li>
          <li>
            <Link href="/recruit" className="hover:text-[#004888] transition-colors">
              採用情報
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
