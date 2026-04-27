import { headers } from "next/headers";

import { HomePage } from "./home-page";
import { resolveLocale } from "./i18n";

type HomeSearchParams = Promise<{
  language?: string | string[];
  lang?: string | string[];
}>;

export default async function Home({
  searchParams,
}: {
  searchParams: HomeSearchParams;
}) {
  const headersList = await headers();
  const query = await searchParams;
  const locale = resolveLocale({
    languageParam: query.language ?? query.lang,
    acceptLanguage: headersList.get("accept-language"),
  });

  return <HomePage locale={locale} />;
}
