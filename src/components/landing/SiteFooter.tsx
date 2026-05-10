import { PLAY_STORE_URL } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full border-t-2 border-primary/10 bg-surface-container-highest">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-8 px-5 py-12 md:grid-cols-3 md:px-12 lg:gap-10 lg:px-20">
        <div className="flex flex-col gap-4">
          <span className="font-headline text-3xl font-semibold text-primary">
            Thiên Ma Đạo
          </span>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            RPG tu tiên trên mobile — phá cảnh, song tu, bang chiến và idle thu
            linh khí. Thông tin chi tiết trên cửa hàng Google Play.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="w-fit border-b border-primary/20 pb-2 pr-8 text-sm font-semibold uppercase tracking-wide text-on-surface">
            Liên kết
          </h4>
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <a
              className="text-on-surface-variant decoration-tertiary transition hover:text-primary hover:underline"
              href="#top"
            >
              Trang chủ
            </a>
            <a
              className="text-on-surface-variant decoration-tertiary transition hover:text-primary hover:underline"
              href="#su-kien"
            >
              Sự kiện
            </a>
            <a
              className="text-on-surface-variant decoration-tertiary transition hover:text-primary hover:underline"
              href="#luc-dia"
            >
              Cẩm nang
            </a>
            <a
              className="text-on-surface-variant decoration-tertiary transition hover:text-primary hover:underline"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="w-fit border-b border-primary/20 pb-2 pr-8 text-sm font-semibold uppercase tracking-wide text-on-surface">
            Chứng nhận
          </h4>
          <div className="flex gap-4">
            <div className="flex h-20 w-16 items-center justify-center rounded bg-on-surface-variant/10">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-30">
                verified
              </span>
            </div>
            <div className="flex h-20 w-16 items-center justify-center rounded bg-on-surface-variant/10 px-2">
              <span className="text-center text-[10px] font-bold uppercase text-on-surface-variant opacity-40">
                Teen
              </span>
            </div>
          </div>
          <p className="mt-2 text-[10px] text-on-surface-variant opacity-60">
            Chơi game quá 180 phút mỗi ngày có thể ảnh hưởng sức khỏe. Thông tin
            độ tuổi theo nhãn cửa hàng.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] border-t border-primary/5 px-5 py-6 md:px-12 lg:px-20">
        <p className="text-sm text-on-surface-variant opacity-70">
          © {new Date().getFullYear()} Thiên Ma Đạo — quyền
          thuộc nhà phát hành Becen.
        </p>
      </div>
    </footer>
  );
}
