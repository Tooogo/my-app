// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ja"],
  defaultLocale: "en",
  // ★ これがキモ：/en と /ja を“常に”有効にする
  localePrefix: "always",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
