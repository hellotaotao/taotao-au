import { headers } from "next/headers";

import { HomePage } from "./home-page";
import { detectLocaleFromAcceptLanguage } from "./i18n";

export default async function Home() {
  const headersList = await headers();
  const locale = detectLocaleFromAcceptLanguage(
    headersList.get("accept-language"),
  );

  return <HomePage locale={locale} />;
}
