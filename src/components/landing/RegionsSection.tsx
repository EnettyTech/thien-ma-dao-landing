import Image from "next/image";

import { DEMO_IMAGES } from "@/lib/constants";

const regions = [
  {
    tag: "Tầng mây thứ 9",
    title: "Vân Đỉnh Cung",
    image: DEMO_IMAGES.regions[0],
    stagger: false,
  },
  {
    tag: "U linh trấn",
    title: "Trúc Lâm Tự",
    image: DEMO_IMAGES.regions[1],
    stagger: true,
  },
  {
    tag: "Bồng lai đảo",
    title: "Thác Thiên Hà",
    image: DEMO_IMAGES.regions[2],
    stagger: false,
  },
  {
    tag: "Ma giới",
    title: "Huyền Không Môn",
    image: DEMO_IMAGES.regions[3],
    stagger: true,
  },
];

export function RegionsSection() {
  return (
    <section
      id="luc-dia"
      className="scroll-mt-24 px-5 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 flex flex-col items-center gap-4">
          <h2 className="font-headline text-center text-3xl font-semibold tracking-tight text-primary md:text-[32px] md:leading-10">
            Lục địa tiên ma
          </h2>
          <div className="silk-ribbon w-48" />
          <p className="max-w-2xl text-center text-base text-on-surface-variant">
            Khám phá những vùng đất thần bí — từ đỉnh núi mờ sương đến hang động
            u linh trong thế giới Thiên Ma Đạo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {regions.map((r) => (
            <div
              key={r.title}
              className={`group relative h-96 overflow-hidden rounded-2xl border border-outline-variant/30 shadow-lg transition hover:shadow-2xl ${
                r.stagger ? "lg:translate-y-8" : ""
              }`}
            >
              <Image
                src={r.image}
                alt={r.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-widest text-tertiary-fixed">
                  {r.tag}
                </span>
                <h3 className="font-headline mb-2 text-xl text-white">{r.title}</h3>
                <div className="flex items-center gap-2 text-sm text-secondary-fixed opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Khám phá ngay</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
