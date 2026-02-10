"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/" },
    { name: "Me", href: "/me" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="font-bold text-xl tracking-tighter">
          Sun.<span className="text-blue-600">Dev</span>
        </Link>

        {/* 탭 메뉴 */}
        <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`
                  px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? "bg-white dark:bg-zinc-600 text-black dark:text-white shadow-sm" 
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                  }
                `}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}