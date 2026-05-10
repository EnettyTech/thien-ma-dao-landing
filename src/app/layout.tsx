import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, EB_Garamond } from "next/font/google";

import "./globals.css";

import { PLAY_STORE_URL } from "@/lib/constants";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-headline",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#006a68",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "Thiên Ma Đạo",
    statusBarStyle: "default",
  },
  title: {
    default: "Thiên Ma Đạo — Trang chủ",
    template: "%s | Thiên Ma Đạo",
  },
  description:
    "Thiên Ma Đạo: hành trình tu chân, khám phá lục địa tiên ma — tải game trên Google Play.",
  keywords: [
    "Thiên Ma Đạo",
    "tu tiên",
    "kiếm hiệp",
    "mobile game",
    "Google Play",
  ],
  openGraph: {
    title: "Thiên Ma Đạo — Trang chủ",
    description:
      "Hành trình tu chân huyền ảo — phá cảnh, bang chiến, sự kiện mới mỗi tuần.",
    url: PLAY_STORE_URL,
    siteName: "Thiên Ma Đạo",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`light ${beVietnam.variable} ${ebGaramond.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* External icon font — cannot live in globals.css after Tailwind @import (CSS order rules). */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full bg-background text-base leading-relaxed text-on-background selection:bg-secondary-container selection:text-secondary">
        {children}
      </body>
    </html>
  );
}
