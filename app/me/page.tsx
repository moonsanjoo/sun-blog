export default function MePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">
      
      {/* 내 소개 */}
      <section>
        <h1 className="text-4xl font-bold mb-6">About Me 🧑‍💻</h1>
        <div className="prose dark:prose-invert leading-loose text-zinc-600 dark:text-zinc-300">
          <p>
            안녕하세요! 문제 해결을 즐기는 개발자 <strong>문선주</strong>입니다.
            단순히 코드를 짜는 것을 넘어, 비즈니스 가치를 창출하는 것에 관심이 많습니다.
          </p>
          <p>
            현재 <strong>웹개발</strong> 경험을 바탕으로 전체적인 흐름을 보는 눈을 기르고 있으며,
            프론트엔드와 백엔드를 아우르는 풀스택 역량을 쌓아가고 있습니다.
          </p>
        </div>
      </section>

      {/* 기술 스택 (새로 추가해봤어요!) */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Tech Stack 🛠️</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js 15", "TypeScript", "Spring Boot", "Tailwind CSS", "Supabase"].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-md text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 관심사 (아까 메인에 있던 것 이동) */}
      <section>
        <h2 className="text-2xl font-bold mb-6">My Interests ❤️</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/30">
            <span className="text-4xl mb-4 block">📷</span>
            <h3 className="font-bold text-lg text-orange-900 dark:text-orange-100 mb-2">Vintage Camera</h3>
            <p className="text-sm text-orange-800/80 dark:text-orange-200/60 leading-relaxed">
              차가운 디지털 속에 담긴 따뜻한 노이즈를 사랑합니다.<br/>
              <span className="font-medium mt-2 block text-orange-700">Collection: Canon IXUS, Leica V-Lux20</span>
            </p>
          </div>
          
          <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30">
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
  );
}