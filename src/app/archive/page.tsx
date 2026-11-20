import type { Metadata } from "next";
import { pageMetadata, resolvePageLocale, type LocaleSearchParams } from "../seo";
import { ArchivePage } from "./archive-page";

export async function generateMetadata({ searchParams }: {
  searchParams: LocaleSearchParams;
}): Promise<Metadata> {
  return pageMetadata("/archive", await resolvePageLocale(searchParams));
}

export default async function Archive({ searchParams }: {
  searchParams: LocaleSearchParams;
}) {
  return <ArchivePage locale={await resolvePageLocale(searchParams)} />;
}
