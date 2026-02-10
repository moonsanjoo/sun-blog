import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">
      {/* 1. 히어로 섹션 */}
      <section className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-zinc-800 dark:text-zinc-100">
          안녕하세요, <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            San
          </span>
          입니다.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          사용자에게 닿는 즐거움을 만드는 <strong>Full Stack 개발자</strong>입니다.
          <br />
          이곳은 제가 배운 것과 경험한 것을 기록하는 공간입니다.
        </p>
        
        <div className="flex justify-center gap-3 pt-2">
          <Link
            href="https://blog.naver.com/elseifmoon" 
            target="_blank"
            className="px-5 py-2.5 text-sm font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 shadow-md transition-transform hover:-translate-y-0.5"
          >
            Naver Blog 🟩
          </Link>
          <Link
            href="/guestbook"
            className="px-5 py-2.5 text-sm font-semibold rounded-full bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-700 shadow-md transition-transform hover:-translate-y-0.5"
          >
            방명록 남기기 ✍️
          </Link>
        </div>
      </section>

      {/* 2. 최신 글 섹션 */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
            📝 Recent Posts
          </h2>
          <Link href="/blog" className="text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors">
            전체보기 →
          </Link>
        </div>

        <div className="grid gap-5">
          {/* 카드 1 */}
          <Link href="/blog/axios-to-ky-migration" className="group">
            <article className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                Axios? 이제 Ky 씁니다
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                3KB짜리 Fetch 래퍼로 HTTP 클라이언트 교체한 후기.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded">Frontend</span>
                <span>2025. 11. 03</span>
              </div>
            </article>
          </Link>

          {/* 카드 2 */}
          <Link href="/blog/keycloak-auth" className="group">
            <article className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                React SPA에서 Keycloak 인증 구현하기
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                로그인 깜빡임 없이 매끄러운 UX를 만드는 법.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
                <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded">Security</span>
                <span>2026. 01. 18</span>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </div>
  );
}