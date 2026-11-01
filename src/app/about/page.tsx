import type { Metadata } from "next";
import { localizedAlternates, resolvePageLocale, type LocaleSearchParams } from "../seo";
import { AboutPage } from "./about-page";

export async function generateMetadata({ searchParams }: {
  searchParams: LocaleSearchParams;
}): Promise<Metadata> {
  return {
    title: "About Tao | taotao.au",
    description: "The person behind the useful tools and playful experiments at taotao.au.",
    alternates: localizedAlternates("/about", await resolvePageLocale(searchParams)),
  };
}

export default async function About({ searchParams }: {
  searchParams: LocaleSearchParams;
}) {
  return <AboutPage locale={await resolvePageLocale(searchParams)} />;
}
