import type { Metadata } from "next";
import { headers } from "next/headers";

import { resolveLocale, type Locale } from "./i18n";

export const siteUrl = "https://www.taotao.au";

export type LocalizedPath = "/" | "/about";

export type LocaleSearchParams = Promise<{
  language?: string | string[];
  lang?: string | string[];
}>;

export async function resolvePageLocale(searchParams: LocaleSearchParams) {
  const headersList = await headers();
  const query = await searchParams;
  return resolveLocale({
    languageParam: query.language ?? query.lang,
    acceptLanguage: headersList.get("accept-language"),
  });
}

export function localizedUrl(path: LocalizedPath, locale: Locale) {
  return `${siteUrl}${path}${locale === "zh" ? "?lang=zh" : ""}`;
}

export function localizedLanguages(path: LocalizedPath) {
  return {
    en: localizedUrl(path, "en"),
    zh: localizedUrl(path, "zh"),
  };
}

export function localizedAlternates(path: LocalizedPath, locale: Locale): Metadata["alternates"] {
  return {
    canonical: localizedUrl(path, locale),
    languages: {
      ...localizedLanguages(path),
      "x-default": localizedUrl(path, "en"),
    },
  };
}
