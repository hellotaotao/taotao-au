import { describe, expect, it } from "vitest";

import robots from "../app/robots";
import { localizedAlternates, pageMetadata } from "../app/seo";
import sitemap from "../app/sitemap";

describe("search metadata", () => {
  it("makes the unparameterised URL canonical for English", () => {
    expect(localizedAlternates("/about", "en")).toEqual({
      canonical: "https://www.taotao.au/about",
      languages: {
        en: "https://www.taotao.au/about",
        zh: "https://www.taotao.au/about?lang=zh",
        "x-default": "https://www.taotao.au/about",
      },
    });
  });

  it("makes the lang parameter canonical for Chinese", () => {
    expect(localizedAlternates("/", "zh")?.canonical).toBe("https://www.taotao.au/?lang=zh");
  });

  it("lists both languages of every page in the sitemap", () => {
    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://www.taotao.au/",
      "https://www.taotao.au/?lang=zh",
      "https://www.taotao.au/about",
      "https://www.taotao.au/about?lang=zh",
      "https://www.taotao.au/archive",
      "https://www.taotao.au/archive?lang=zh",
    ]);
  });

  it("points robots.txt at the sitemap on the www host", () => {
    expect(robots().sitemap).toBe("https://www.taotao.au/sitemap.xml");
  });

  it("gives Chinese pages a Chinese title and description", () => {
    for (const path of ["/", "/about", "/archive"] as const) {
      const zh = pageMetadata(path, "zh");
      expect(zh.title).toMatch(/[\u4e00-\u9fff]/);
      expect(zh.description).toMatch(/[\u4e00-\u9fff]/);
      expect(pageMetadata(path, "en").title).not.toMatch(/[\u4e00-\u9fff]/);
    }
  });
});
