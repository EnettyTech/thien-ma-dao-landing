import Link from "next/link";

import { PLAY_STORE_URL } from "@/lib/constants";
import Image from "next/image";

const nav = [
  { href: "/", label: "Trang chủ" },
  { href: "#su-kien", label: "Sự kiện" },
  { href: "#luc-dia", label: "Cẩm nang" },
  { href: "#cong-dong", label: "Cộng đồng" },
] as const;

export function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-primary/20 bg-surface/85 shadow-sm backdrop-blur-lg supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 md:px-12 md:py-4 lg:px-20">
        <div className="flex min-w-0 flex-1 items-center gap-3 md:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline truncate text-xl font-bold tracking-tight text-primary drop-shadow-sm md:text-[28px] md:leading-9"
          >
            <Image
              src="/logo.webp"
              alt="Thiên Ma Đạo"
              width={32}
              height={32}
              className="size-8 shrink-0 rounded-full object-cover"
              sizes="32px"
            />
            <span className="text-2xl font-bold">Thiên Ma Đạo</span>
          </Link>
          <div className="hidden gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm font-semibold uppercase tracking-wider transition-colors ${
                  item.href === "/"
                    ? "border-b-2 border-tertiary-container pb-1 text-tertiary-container"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          <details className="group relative md:hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden">
              <span className="flex cursor-pointer items-center gap-1 rounded-lg border border-primary/25 bg-surface-container-low/80 px-3 py-2 text-sm font-semibold text-primary transition hover:bg-surface-container-low">
                <span className="material-symbols-outlined text-xl leading-none">
                  menu
                </span>
                Menu
              </span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-[min(100vw-2rem,280px)] rounded-xl border border-outline-variant/40 bg-surface p-2 shadow-xl backdrop-blur-md">
              <ul className="flex flex-col gap-0.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-on-surface transition hover:bg-primary/10 hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="celestial-button shrink-0 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide text-secondary transition active:scale-95 active:opacity-90 md:px-6 md:text-sm"
          >
            Tải game
          </a>
        </div>
      </div>
    </nav>
  );
}
