import Image from "next/image";

import {
  APP_STORE_URL,
  APK_DOWNLOAD_URL,
  BANNER_IMAGE,
  PLAY_STORE_URL,
} from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-0 flex-col overflow-hidden pb-8 md:min-h-screen md:items-center md:justify-center md:pb-0"
    >
      {/* Banner layer: tall strip on mobile (art readable); full bleed on md+ */}
      <div className="relative mt-14 h-[min(46vh,420px)] w-full shrink-0 md:absolute md:inset-0 md:mt-0 md:h-full md:min-h-[100svh]">
        <Image
          src={BANNER_IMAGE}
          alt="Thiên Ma Đạo — banner"
          fill
          priority
          className="hero-mask object-cover object-[center_22%] md:object-[center_top]"
          sizes="100vw"
        />
        {/* Mobile: light vignette so edges don’t clip harshly; desktop: blend to page bg */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_35%,transparent_20%,rgba(247,250,250,0.35)_100%)] md:bg-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background md:from-transparent md:via-background/15 md:to-background" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] flex-1 items-center px-4 md:min-h-0 md:grid-cols-2 md:gap-10 md:px-12 md:pt-20 lg:px-20">
        <div className="rounded-2xl border border-primary/15 bg-background/93 px-4 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md supports-[backdrop-filter]:bg-background/85 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          <div className="flex flex-col gap-5 md:gap-8">
            <div className="jade-glass inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-primary-container/30 px-3 py-1.5 md:px-4 md:py-1">
              <span
                className="material-symbols-outlined shrink-0 text-sm text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary md:text-sm md:tracking-widest">
                Siêu phẩm kiếm hiệp 2026
              </span>
            </div>

            <h1 className="font-headline text-[2.125rem] font-bold leading-[1.1] tracking-tight text-primary text-glow sm:text-5xl md:text-6xl">
              Thiên Ma Đạo
              <br />
              <span className="text-[1.35rem] font-semibold text-tertiary sm:text-3xl md:text-[2rem]">
                Khởi đầu tiên duyên
              </span>
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
              Hành trình tu chân huyền ảo: hóa thân tiên nhân lỗi lạc, vượt kiếp
              nạn để tiến tới cảnh giới trường sinh — idle, bang chiến, bảo vật
              như mô tả trên Google Play.
            </p>

            <div className="flex flex-col gap-5 md:gap-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="celestial-button flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg px-4 py-2 transition hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:justify-start sm:min-h-0 sm:px-5 sm:py-2.5 sm:hover:scale-[1.02]"
                >
                  <span
                    className="material-symbols-outlined shrink-0 text-[20px] text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    ios
                  </span>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] font-semibold uppercase leading-none text-secondary opacity-75">
                      Download on
                    </div>
                    <div className="text-sm font-bold leading-none text-secondary">
                      App Store
                    </div>
                  </div>
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="celestial-button flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg px-4 py-2 transition hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:justify-start sm:min-h-0 sm:px-5 sm:py-2.5 sm:hover:scale-[1.02]"
                >
                  <span
                    className="material-symbols-outlined shrink-0 text-[20px] text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] font-semibold uppercase leading-none text-secondary opacity-75">
                      Get it on
                    </div>
                    <div className="text-sm font-bold leading-none text-secondary">
                      Google Play
                    </div>
                  </div>
                </a>
                <a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="celestial-button flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg px-4 py-2 transition hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:justify-start sm:min-h-0 sm:px-5 sm:py-2.5 sm:hover:scale-[1.02]"
                >
                  <span
                    className="material-symbols-outlined shrink-0 text-[20px] text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    android
                  </span>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] font-semibold uppercase leading-none text-secondary opacity-75">
                      Download APK
                    </div>
                    <div className="text-sm font-bold leading-none text-secondary">
                      APK
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-outline-variant/40 pt-4 md:gap-6 md:border-0 md:pt-0">
                <button
                  type="button"
                  className="flex min-h-11 min-w-0 flex-1 basis-[140px] cursor-pointer items-center justify-center gap-2 rounded-lg text-on-surface-variant transition hover:bg-surface-container-low hover:text-primary sm:flex-initial sm:justify-start"
                >
                  <span className="material-symbols-outlined shrink-0 transition group-hover:scale-110">
                    confirmation_number
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Nạp thẻ
                  </span>
                </button>
                <div className="hidden h-4 w-px bg-outline-variant sm:block" />
                <button
                  type="button"
                  className="flex min-h-11 min-w-0 flex-1 basis-[140px] cursor-pointer items-center justify-center gap-2 rounded-lg text-on-surface-variant transition hover:bg-surface-container-low hover:text-primary sm:flex-initial sm:justify-start"
                >
                  <span className="material-symbols-outlined shrink-0 transition group-hover:scale-110">
                    verified_user
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Bảo mật
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
