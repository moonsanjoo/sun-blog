import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">
      {/* 1. 히어로 섹션 */}
      <section className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-zinc-800 dark:text-zinc-100">
          안녕하세요, <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            선주
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
          {/* 카드 1: SQLD */}
          <Link href="/blog/sqld-review" className="group">
            <article className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                SQLD 1주일 합격 후기 벼락치기 공부법
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                노베이스도 가능! 기출문제 위주로 핵심만 파고들어 1주일 만에 SQL 개발자 자격증 취득한 꿀팁 정리.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
                <span className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded">Database</span>
                <span>2024. 03. 15</span>
              </div>
            </article>
          </Link>

          {/* 카드 2: ADsP */}
          <Link href="/blog/adsp-review" className="group">
            <article className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                ADsP 3일 컷! 비전공자 합격 전략
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                데이터 분석 준전문가, 정말 3일 만에 가능할까? 민트책 한 권으로 끝내는 효율적인 암기 패턴 공유.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded">Data</span>
                <span>2024. 05. 20</span>
              </div>
            </article>
          </Link>

          {/* 카드 3: 정처기 */}
          <Link href="/blog/eip-review" className="group">
            <article className="p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                정보처리기사 필기 3일 합격 후기
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                방대한 양에 겁먹지 마세요. 자주 나오는 개념만 쏙쏙 골라 3일 만에 필기 합격한 노하우.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded">Certification</span>
                <span>2024. 02. 10</span>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </div>
  );
}