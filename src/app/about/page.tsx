import type { Metadata } from "next";
import { pageMetadata, resolvePageLocale, type LocaleSearchParams } from "../seo";
import { AboutPage } from "./about-page";

export async function generateMetadata({ searchParams }: {
  searchParams: LocaleSearchParams;
}): Promise<Metadata> {
  return pageMetadata("/about", await resolvePageLocale(searchParams));
}

export default async function About({ searchParams }: {
  searchParams: LocaleSearchParams;
}) {
  return <AboutPage locale={await resolvePageLocale(searchParams)} />;
}
