import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">
      {/* 1. 히어로 섹션: 간단한 자기소개 */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-zinc-800 dark:text-zinc-100">
          안녕하세요, 선주입니다. 👋
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          사용자에게 닿는 즐거움을 만드는 <strong>fULL STACK 개발자</strong>입니다.
          <br />
          코드 너머의 일상에서는 <strong>빈티지 디카</strong>를 수집하고,
          <br />
          생각을 정리하기 위해 <strong>러닝</strong>을 합니다.
        </p>
        
        {/* 소셜/연락처 버튼들 */}
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="https://blog.naver.com/elseifmoon" 
            target="_blank"
            className="px-4 py-2 text-sm font-medium rounded-full bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-950/30 dark:text-green-400 dark:hover:bg-green-900/50 transition-colors"
          >
            Naver Blog 🟩
          </Link>
          <Link
            href="/guestbook"
            className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            방명록 남기기 ✍️
          </Link>
        </div>
      </section>

      {/* 2. 최신 글 미리보기 (카드 형태) */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            Recent Posts
          </h2>
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-blue-600">
            전체보기 →
          </Link>
        </div>

        <div className="grid gap-6">
          {/* 포스트 카드 1 */}
          <Link href="/blog/axios-to-ky-migration" className="group block">
            <article className="p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                Axios? 이제 Ky 씁니다
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-2">
                3KB짜리 Fetch 래퍼로 HTTP 클라이언트 교체한 후기. 번들 사이즈는 줄이고 DX는 챙기는 방법을 공유합니다.
              </p>
              <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
                <span>2025. 11. 03</span>
                <span>•</span>
                <span className="text-blue-500">Frontend</span>
              </div>
            </article>
          </Link>

          {/* 포스트 카드 2 */}
          <Link href="/blog/keycloak-auth" className="group block">
            <article className="p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                React SPA에서 Keycloak 인증 구현하기
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-2">
                keycloak-js를 사용한 SSO 인증과 토큰 갱신 전략. 로그인 깜빡임 없이 매끄러운 UX를 만드는 법.
              </p>
              <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
                <span>2026. 01. 18</span>
                <span>•</span>
                <span className="text-blue-500">Security</span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* 3. 관심사 위젯  */}
      <section className="grid grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/50">
          <span className="text-2xl mb-2 block">📷</span>
          <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Vintage Cam</h3>
          <p className="text-sm text-orange-700 dark:text-orange-300">
            Canon IXUS, Leica V-Lux20, RICOH... <br/>저의 수집품을 소개할게요.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
          <span className="text-2xl mb-2 block">🏃‍♀️</span>
          <h3 className="font-bold text-emerald-900 dark:text-emerald-100 mb-1">Running</h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            부산에서 달리는 중. <br/>코드 밖에서 에너지를 채웁니다.
          </p>
        </div>
      </section>
    </div>
  );
}