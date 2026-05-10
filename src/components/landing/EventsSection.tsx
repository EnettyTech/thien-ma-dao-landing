import {
  SOCIAL_FACEBOOK_URL,
  SOCIAL_ZALO_URL,
} from "@/lib/constants";

export function EventsSection() {
  return (
    <section
      id="su-kien"
      className="relative scroll-mt-24 overflow-hidden bg-surface-container-low/50 py-24"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="mx-auto grid max-w-[1280px] gap-6 px-5 md:grid-cols-3 md:px-12 lg:gap-6 lg:px-20">
        <div className="md:col-span-2">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="font-headline text-3xl font-semibold text-primary md:text-[32px] md:leading-10">
              Sự kiện nổi bật
            </h2>
            <a
              href="#su-kien"
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-primary transition hover:gap-2"
            >
              Xem tất cả
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <article className="jade-glass flex cursor-pointer gap-6 rounded-2xl border-l-4 border-l-tertiary-container p-6 transition-transform hover:translate-x-2">
              <div className="flex min-w-[80px] flex-col items-center justify-center rounded-xl bg-surface-container-highest px-4 text-primary">
                <span className="text-2xl font-bold">24</span>
                <span className="text-xs font-semibold uppercase">T05</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-headline text-lg text-on-surface">
                  Đại tiệc tiên ma — nhận ngay thần thú
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Chuỗi sự kiện mừng phiên bản mới; tham gia săn quà và đua top
                  lực chiến.
                </p>
              </div>
            </article>

            <article className="jade-glass flex cursor-pointer gap-6 rounded-2xl p-6 transition-transform hover:translate-x-2">
              <div className="flex min-w-[80px] flex-col items-center justify-center rounded-xl bg-surface-container-highest px-4 text-primary">
                <span className="text-2xl font-bold">20</span>
                <span className="text-xs font-semibold uppercase">T05</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-headline text-lg text-on-surface">
                  Khai mở server mới — đua top nhận trân bảo
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Cạnh tranh lực chiến và bang hội để khắc danh bảng xếp hạng.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div
          id="cong-dong"
          className="relative flex scroll-mt-28 flex-col items-center gap-6 overflow-hidden rounded-3xl border border-primary/10 bg-surface-container-highest p-8 text-center shadow-inner"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
          <span className="material-symbols-outlined text-5xl text-tertiary-container">
            auto_awesome
          </span>
          <h3 className="font-headline text-xl text-primary">
            Cộng đồng tiên hiệp
          </h3>
          <p className="text-sm text-on-surface-variant">
            Tham gia nhóm để chia sẻ build, kinh nghiệm tu luyện và săn boss.
          </p>
          <a
            href={SOCIAL_ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white"
          >
            <span className="material-symbols-outlined text-sm">groups</span>
            Nhóm Zalo
          </a>
          <div className="mt-auto flex justify-center gap-3">
            <a
              href={SOCIAL_ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nhóm Zalo Thiên Ma Đạo"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-sm transition hover:scale-105 hover:brightness-110"
            >
              <span className="text-xs font-bold leading-none">Zalo</span>
            </a>
            <a
              href={SOCIAL_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Thiên Ma Đạo"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm transition hover:scale-105 hover:brightness-110"
            >
              <span className="text-xl font-bold leading-none">f</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
