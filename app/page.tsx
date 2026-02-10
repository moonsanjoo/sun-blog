import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 배경 꾸밈 효과 (은은한 조명) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-3xl mx-auto px-6 py-24 space-y-24">
        {/* 1. 히어로 섹션 */}
        <section className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
              👋 Welcome to my universe
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-zinc-800 dark:text-zinc-100">
              안녕하세요, <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                선주
              </span>
              입니다.
            </h1>
          </div>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            사용자에게 닿는 즐거움을 만드는 <strong>Full Stack 개발자</strong>입니다.
            <br />
            코드 너머의 일상에서는 <strong>빈티지 디카</strong>를 수집하고,
            <br />
            생각을 정리하기 위해 <strong>부산</strong>을 달립니다. 🏃‍♀️
          </p>
          
          {/* 버튼 그룹 */}
          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="https://blog.naver.com/elseifmoon" 
              target="_blank"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Naver Blog 🟩
            </Link>
            <Link
              href="/guestbook"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
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
              <article className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">
                    Frontend
                  </span>
                  <span className="text-xs text-zinc-400">2025. 11. 03</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Axios? 이제 Ky 씁니다
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  3KB짜리 Fetch 래퍼로 HTTP 클라이언트 교체한 후기. 번들 사이즈는 줄이고 DX는 챙기는 방법을 공유합니다.
                </p>
              </article>
            </Link>

            {/* 카드 2 */}
            <Link href="/blog/keycloak-auth" className="group">
              <article className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-md">
                    Security
                  </span>
                  <span className="text-xs text-zinc-400">2026. 01. 18</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                  React SPA에서 Keycloak 인증 구현하기
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  keycloak-js를 사용한 SSO 인증과 토큰 갱신 전략. 로그인 깜빡임 없이 매끄러운 UX를 만드는 법.
                </p>
              </article>
            </Link>
          </div>
        </section>

        {/* 3. 관심사 위젯 (Bento Grid 스타일) */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6 px-2">
            🧩 My Interests
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-zinc-900 border border-orange-100 dark:border-orange-900/30 hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl mb-4 block">📷</span>
              <h3 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-2">Vintage Camera</h3>
              <p className="text-sm text-orange-800/80 dark:text-orange-200/60 leading-relaxed">
                차가운 디지털 속에 담긴 따뜻한 노이즈를 사랑합니다.<br/>
                <span className="font-medium mt-2 block text-orange-700">Collection: Canon IXUS, Leica V-Lux20</span>
              </p>
            </div>
            
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-zinc-900 border border-emerald-100 dark:border-emerald-900/30 hover:scale-[1.02] transition-transform duration-300">
              <span className="text-4xl mb-4 block">🏃‍♀️</span>
              <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-100 mb-2">Running</h3>
              <p className="text-sm text-emerald-800/80 dark:text-emerald-200/60 leading-relaxed">
                복잡한 머릿속을 비우는 시간.<br/>
                부산의 바닷바람을 맞으며 달릴 때 가장 살아있음을 느낍니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}