import type { Metadata } from "next";
import { headers } from "next/headers";

import { resolveLocale, type Locale } from "./i18n";

export const siteUrl = "https://www.taotao.au";

export type LocalizedPath = "/" | "/about" | "/archive";

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

const pageText: Record<LocalizedPath, Record<Locale, { title: string; description: string }>> = {
  "/": {
    en: {
      title: "taotao.au | Useful tools. Playful experiments.",
      description:
        "Side projects by Tao, a software engineer in Adelaide: TypeAloud for free, private voice typing, Voicely for on-device meeting transcripts, BetterSchool for finding Australian schools on a map, and more.",
    },
    zh: {
      title: "taotao.au | 实用的小工具，好玩的新尝试",
      description:
        "Tao 的业余项目合集：免费、100% 本地处理的语音输入软件 TypeAloud，在设备上完成会议转写的 Voicely，覆盖全澳学校的地图 BetterSchool，以及更多小工具和实验。",
    },
  },
  "/about": {
    en: {
      title: "About Tao | taotao.au",
      description: "Tao is a software engineer in Adelaide. These are the side projects behind taotao.au.",
    },
    zh: {
      title: "关于 Tao | taotao.au",
      description: "Tao 是住在阿德莱德的软件工程师，taotao.au 上的小工具和实验都是业余时间做的。",
    },
  },
  "/archive": {
    en: {
      title: "Older projects | taotao.au",
      description: "Side projects by Tao that are not under active development but are still online to try.",
    },
    zh: {
      title: "更早的项目 | taotao.au",
      description: "Tao 暂时没在开发、但仍然在线可以试用的业余项目。",
    },
  },
};

export function pageMetadata(path: LocalizedPath, locale: Locale): Metadata {
  return { ...pageText[path][locale], alternates: localizedAlternates(path, locale) };
}
