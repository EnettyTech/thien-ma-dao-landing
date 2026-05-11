"use client";

import { useState } from "react";

import {
  APK_DOWNLOAD_URL,
  APP_STORE_URL,
  PLAY_INTERNAL_TEST_URL,
  PLAY_STORE_URL,
} from "@/lib/constants";

type TabId = "ios" | "android" | "apk";

const tabs: { id: TabId; label: string }[] = [
  { id: "ios", label: "iOS" },
  { id: "android", label: "Android" },
  { id: "apk", label: "APK" },
];

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if(!href) return <div className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition hover:decoration-primary">{children}</div>
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 transition hover:decoration-primary"
    >
      {children}
    </a>
  );
}

export function GameDownloadGuide() {
  const [active, setActive] = useState<TabId>("ios");

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div
        className="flex flex-wrap gap-1 rounded-xl border border-outline-variant/50 bg-surface-container-low p-1 sm:flex-nowrap"
        role="tablist"
        aria-label="Nền tảng tải game"
      >
        {tabs.map((tab) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`min-h-11 flex-1 rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wide transition sm:min-h-0 sm:px-4 ${
                selected
                  ? "bg-primary text-on-primary shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-container-highest hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-primary/15 bg-background/80 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-sm md:p-8">
        {active === "ios" && (
          <section
            id="panel-ios"
            role="tabpanel"
            aria-labelledby="tab-ios"
            className="space-y-4 text-on-surface"
          >
            <h2 className="font-headline text-xl font-bold text-primary md:text-2xl">
              Cài game qua TestFlight (iOS)
            </h2>
            <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
              TestFlight là cách Apple phân phối bản beta. Bạn cần iPhone hoặc
              iPad chạy iOS/iPadOS tương thích và tài khoản Apple ID.
            </p>
            <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed md:text-base">
              <li>
                Nếu chưa có, cài ứng dụng{" "}
                <span className="font-medium text-on-surface">TestFlight</span>{" "}
                từ App Store (tìm &quot;TestFlight&quot;).
              </li>
              <li>
                Mở liên kết mời beta:{" "}
                <ExternalLink href={APP_STORE_URL}>
                  tham gia TestFlight — Thiên Ma Đạo
                </ExternalLink>
                . Trình duyệt sẽ mở TestFlight.
              </li>
              <li>
                Trong TestFlight, chấp nhận lời mời (nếu được hỏi), sau đó chọn{" "}
                <span className="font-medium text-on-surface">Cài đặt</span>{" "}
                hoặc <span className="font-medium text-on-surface">Chấp nhận</span>.
              </li>
              <li>
                Đợi tải xong. Bạn có thể mở game từ TestFlight hoặc từ biểu tượng
                trên màn hình chính.
              </li>
              <li>
                Khi có bản cập nhật beta, mở lại TestFlight và bấm{" "}
                <span className="font-medium text-on-surface">Cập nhật</span>.
              </li>
            </ol>
          </section>
        )}

        {active === "android" && (
          <section
            id="panel-android"
            role="tabpanel"
            aria-labelledby="tab-android"
            className="space-y-4 text-on-surface"
          >
            <h2 className="font-headline text-xl font-bold text-primary md:text-2xl">
              Tham gia thử nghiệm nội bộ (Google Play)
            </h2>
            <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
              Internal testing trên Google Play cho phép cài game qua Play Store
              sau khi tài khoản Google của bạn được thêm vào danh sách tester.
            </p>
            <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed md:text-base">
              <li>
                Đảm bảo bạn đăng nhập Google Play bằng đúng Gmail mà nhà phát
                hành đã thêm vào nhóm thử nghiệm.
              </li>
              <li>
                Mở trang tham gia thử nghiệm:{" "}
                <ExternalLink href={""}>
                  Tham gia thử nghiệm trên Google Play
                </ExternalLink>
                .
              </li>
              <li>
                Bấm{" "}
                <span className="font-medium text-on-surface">
                  Trở thành người thử nghiệm
                </span>{" "}
                (hoặc tương đương) để ghi nhận tài khoản của bạn.
              </li>
              <li>
                Sau khi tham gia thành công, mở{" "}
                <ExternalLink href={""}>
                  trang game trên Google Play
                </ExternalLink>{" "}
                và bấm <span className="font-medium text-on-surface">Cài đặt</span>.
              </li>
              <li>
                Nếu chưa thấy nút cài, đợi vài phút, khởi động lại Play Store hoặc
                kiểm tra lại Gmail đã đúng chưa.
              </li>
            </ol>
          </section>
        )}

        {active === "apk" && (
          <section
            id="panel-apk"
            role="tabpanel"
            aria-labelledby="tab-apk"
            className="space-y-4 text-on-surface"
          >
            <h2 className="font-headline text-xl font-bold text-primary md:text-2xl">
              Cài game từ file APK
            </h2>
            <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
              Cách này phù hợp khi bạn không dùng Play Store hoặc được cung cấp
              file APK trực tiếp. Chỉ tải từ liên kết chính thức của nhà phát
              hành.
            </p>
            <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed md:text-base">
              <li>
                Tải file APK:{" "}
                <ExternalLink href={APK_DOWNLOAD_URL}>
                  tải Thiên Ma Đạo (APK)
                </ExternalLink>
                .
              </li>
              <li>
                Trên điện thoại, mở{" "}
                <span className="font-medium text-on-surface">Cài đặt</span> →{" "}
                <span className="font-medium text-on-surface">Bảo mật</span> (hoặc{" "}
                <span className="font-medium text-on-surface">Ứng dụng</span>) và
                cho phép cài từ trình duyệt hoặc thư mục bạn vừa tải file (tùy
                máy: &quot;Nguồn không xác định&quot; / Install unknown apps).
              </li>
              <li>
                Mở file <span className="font-medium text-on-surface">.apk</span>{" "}
                trong thư mục Tải xuống (hoặc ứng dụng Files), xác nhận{" "}
                <span className="font-medium text-on-surface">Cài đặt</span>.
              </li>
              <li>
                Sau khi cài xong, mở game từ ngăn kéo ứng dụng. Nếu có bản mới,
                gỡ bản cũ hoặc cài đè theo hướng dẫn từ nhà phát hành.
              </li>
            </ol>
          </section>
        )}
      </div>
    </div>
  );
}
