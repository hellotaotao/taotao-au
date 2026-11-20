import type { Metadata } from "next";

import { HomePage } from "./home-page";
import { pageMetadata, resolvePageLocale, type LocaleSearchParams } from "./seo";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: LocaleSearchParams;
}): Promise<Metadata> {
  return pageMetadata("/", await resolvePageLocale(searchParams));
}

export default async function Home({
  searchParams,
}: {
  searchParams: LocaleSearchParams;
}) {
  return <HomePage locale={await resolvePageLocale(searchParams)} />;
}
