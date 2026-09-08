import type { Metadata } from "next";
import { headers } from "next/headers";
import { resolveLocale } from "../i18n";
import { AboutPage } from "./about-page";

export const metadata: Metadata = {
  title: "About Tao | taotao.au",
  description: "The person behind the useful tools and playful experiments at taotao.au.",
};

export default async function About({ searchParams }: {
  searchParams: Promise<{ language?: string | string[]; lang?: string | string[] }>;
}) {
  const headersList = await headers();
  const query = await searchParams;
  const locale = resolveLocale({
    languageParam: query.language ?? query.lang,
    acceptLanguage: headersList.get("accept-language"),
  });
  return <AboutPage locale={locale} />;
}
