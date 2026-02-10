import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Sun's Blog",
  description: "Sun의 개발 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        {/* 상단 메뉴바 (고정) */}
        <Navbar />
        
        {/* 실제 페이지 내용 (메뉴바 높이만큼 여백 줌) */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}