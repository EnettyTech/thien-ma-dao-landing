import Image from "next/image";

import { DEMO_IMAGES } from "@/lib/constants";

export function SideRail() {
  return (
    <aside className="fixed right-4 top-1/4 z-40 hidden flex-col items-center gap-6 rounded-full border border-outline-variant/30 bg-surface-container-low/40 px-4 py-6 shadow-xl backdrop-blur-xl md:flex">
      <div className="mb-4 flex flex-col items-center gap-1">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-secondary p-0.5">
          <Image
            src={DEMO_IMAGES.avatar}
            alt=""
            width={48}
            height={48}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="group relative flex items-center justify-center">
          <span className="material-symbols-outlined rounded-full bg-tertiary-container p-3 text-on-tertiary-container shadow-md">
            auto_awesome
          </span>
          <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded bg-surface px-3 py-1 text-sm opacity-0 transition-opacity group-hover:opacity-100">
            Trúc Cơ
          </span>
        </div>
        <span className="material-symbols-outlined cursor-pointer p-3 text-secondary-fixed-dim transition hover:scale-110 hover:text-primary">
          flare
        </span>
        <span className="material-symbols-outlined cursor-pointer p-3 text-secondary-fixed-dim transition hover:scale-110 hover:text-primary">
          self_improvement
        </span>
        <span className="material-symbols-outlined cursor-pointer p-3 text-secondary-fixed-dim transition hover:scale-110 hover:text-primary">
          swords
        </span>
      </div>
      <a
        href="#top"
        className="mt-4 font-semibold uppercase tracking-wider text-secondary [writing-mode:vertical-lr] transition hover:brightness-125"
      >
        Đột phá
      </a>
    </aside>
  );
}
