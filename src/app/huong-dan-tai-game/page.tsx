import Link from "next/link";
import type { Metadata } from "next";

import { GameDownloadGuide } from "@/components/landing/GameDownloadGuide";
import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const metadata: Metadata = {
  title: "Hướng dẫn tải game",
  description:
    "Hướng dẫn tải Thiên Ma Đạo: iOS (TestFlight), Android (open testing Google Play), hoặc cài từ file APK.",
};

export default function GameDownloadGuidePage() {
  return (
    <div className="relative flex min-h-full flex-col bg-background">
      <Header />
      <main className="flex-1 px-4 pb-16 pt-24 md:px-12 md:pt-28 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-on-surface-variant transition hover:text-primary"
          >
            <span className="material-symbols-outlined text-lg leading-none">
              arrow_back
            </span>
            Về trang chủ
          </Link>
          <h1 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Hướng dẫn tải game
          </h1>
          <p className="mt-3 max-w-xl text-sm text-on-surface-variant md:text-base">
            Chọn nền tảng bên dưới để xem các bước chi tiết tương ứng.
          </p>
          <div className="mt-10">
            <GameDownloadGuide />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
