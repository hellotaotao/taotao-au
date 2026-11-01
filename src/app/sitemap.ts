import type { MetadataRoute } from "next";

import { localizedLanguages, localizedUrl, type LocalizedPath } from "./seo";

const paths: LocalizedPath[] = ["/", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    (["en", "zh"] as const).map((locale) => ({
      url: localizedUrl(path, locale),
      alternates: { languages: localizedLanguages(path) },
    })),
  );
}
