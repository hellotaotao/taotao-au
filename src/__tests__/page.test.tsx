import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AboutPage } from "../app/about/about-page";
import { getHubProjects, hubCopy } from "../app/hub-data";
import { getProjectGroups } from "../app/i18n";

import { HomePage } from "../app/home-page";
import {
  detectLocaleFromAcceptLanguage,
  detectLocaleFromLanguageParam,
  resolveLocale,
} from "../app/i18n";

describe("i18n locale detection", () => {
  it("detects Chinese from zh language tags and defaults to English", () => {
    expect(detectLocaleFromAcceptLanguage("zh-CN,zh;q=0.9,en;q=0.8")).toBe(
      "zh",
    );
    expect(detectLocaleFromAcceptLanguage("zh-TW,en;q=0.7")).toBe("zh");
    expect(detectLocaleFromAcceptLanguage("en-AU,en;q=0.9")).toBe("en");
    expect(detectLocaleFromAcceptLanguage(undefined)).toBe("en");
    expect(detectLocaleFromAcceptLanguage("fr-FR,fr;q=0.9")).toBe("en");
  });

  it("detects manual Chinese language query values", () => {
    for (const value of ["zh", "cn", "zh-cn", "zh-tw", "chinese", "\u4e2d\u6587"]) {
      expect(detectLocaleFromLanguageParam(value)).toBe("zh");
      expect(detectLocaleFromLanguageParam(` ${value.toUpperCase()} `)).toBe(
        "zh",
      );
    }
  });

  it("detects manual English language query values", () => {
    for (const value of ["en", "en-au", "en-us", "english"]) {
      expect(detectLocaleFromLanguageParam(value)).toBe("en");
      expect(detectLocaleFromLanguageParam(` ${value.toUpperCase()} `)).toBe(
        "en",
      );
    }
  });

  it("ignores unknown or missing manual language query values", () => {
    expect(detectLocaleFromLanguageParam(undefined)).toBeUndefined();
    expect(detectLocaleFromLanguageParam(null)).toBeUndefined();
    expect(detectLocaleFromLanguageParam("")).toBeUndefined();
    expect(detectLocaleFromLanguageParam("fr")).toBeUndefined();
    expect(detectLocaleFromLanguageParam(["unknown", "zh"])).toBeUndefined();
  });

  it("resolves manual language query values before Accept-Language fallback", () => {
    expect(
      resolveLocale({
        languageParam: "en",
        acceptLanguage: "zh-CN,zh;q=0.9,en;q=0.8",
      }),
    ).toBe("en");

    expect(
      resolveLocale({
        languageParam: "cn",
        acceptLanguage: "en-AU,en;q=0.9",
      }),
    ).toBe("zh");

    expect(
      resolveLocale({
        languageParam: "unknown",
        acceptLanguage: "zh-TW,en;q=0.7",
      }),
    ).toBe("zh");

    expect(
      resolveLocale({
        languageParam: undefined,
        acceptLanguage: "fr-FR,fr;q=0.9",
      }),
    ).toBe("en");
  });
});

describe("Product hub", () => {
  it.each(["en", "zh"] as const)("keeps every project reachable in %s", (locale) => {
    render(<HomePage locale={locale} />);
    const links = screen.getAllByRole("link").filter((link) => /betterschool.au|saytype.taotao|kanadrill.taotao|mathtrainer.taotao|voicely.taotao|everlog.taotao|stringart.taotao|mathplay.taotao|menti.taotao|avalon.taotao|energy.taotao|casemap.taotao|mindboard.taotao/.test(link.getAttribute("href") ?? ""));
    expect(links).toHaveLength(13);
    expect(screen.getAllByText(locale === "en" ? "Live product" : "\u5df2\u4e0a\u7ebf\u4ea7\u54c1")).toHaveLength(3);
    expect(screen.getAllByText(locale === "en" ? "Active build" : "\u6d3b\u8dc3\u5f00\u53d1\u4e2d")).toHaveLength(4);
    expect(screen.getAllByText(locale === "en" ? "Prototype" : "\u539f\u578b")).toHaveLength(6);
    expect(new Set(links.map((link) => link.getAttribute("href"))).size).toBe(13);
  });

  it("puts products first and moves the biography off the homepage", () => {
    render(<HomePage locale="en" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Useful tools. Playful experiments.");
    expect(screen.queryByRole("heading", { name: "Tao Wang" })).not.toBeInTheDocument();
    expect(screen.queryByText(/Based in Adelaide/)).not.toBeInTheDocument();
    const featured = screen.getByRole("region", { name: "Try these first" });
    const lab = screen.getByRole("region", { name: "In the lab" });
    expect(within(featured).getAllByRole("link")).toHaveLength(3);
    expect(within(lab).getAllByRole("link")).toHaveLength(10);
    for (const name of ["SayType", "BetterSchool", "KanaDrill"]) {
      expect(within(featured).getByRole("heading", { name })).toBeInTheDocument();
    }
    expect(screen.getAllByRole("link", { name: "About" })[0]).toHaveAttribute("href", "/about?lang=en");
  });
});

describe("Hub data and About", () => {
  it.each(["en", "zh"] as const)("preserves existing destinations and maturity in %s", (locale) => {
    const original = getProjectGroups(locale).flatMap((group) => group.projects);
    const { featured, lab } = getHubProjects(locale);
    expect(featured.map((project) => project.name)).toEqual(["SayType", "BetterSchool", "KanaDrill"]);
    expect([...featured, ...lab]).toHaveLength(original.length);
    for (const project of original) {
      expect([...featured, ...lab].find((item) => item.name === project.name)).toMatchObject(project);
    }
  });

  it.each(["en", "zh"] as const)("moves profile and contact to About in %s", (locale) => {
    render(<AboutPage locale={locale} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(hubCopy[locale].hello);
    expect(screen.getAllByRole("link", { name: /LinkedIn/ })[0]).toHaveAttribute("href", "https://www.linkedin.com/in/ta0wang");
    expect(screen.getByRole("link", { name: new RegExp(hubCopy[locale].backToProducts) })).toHaveAttribute("href", `/?lang=${locale}#products`);
    expect(screen.getByRole("link", { name: hubCopy[locale].language })).toHaveAttribute("href", `/about?lang=${locale === "en" ? "zh" : "en"}`);
  });
});

describe("About identity and contact priorities", () => {
  it.each(["en", "zh"] as const)("distinguishes employment from hobbies in %s", (locale) => {
    render(<AboutPage locale={locale} />);
    expect(screen.getByText(locale === "en" ? /full-time software engineer/ : /\u5168\u804c\u8f6f\u4ef6\u5de5\u7a0b\u5e08/)).toBeInTheDocument();
    expect(screen.getByText(locale === "en" ? /side projects/ : /\u4e1a\u4f59\u9879\u76ee/)).toBeInTheDocument();
    expect(screen.getByRole("heading", {name: locale === "en" ? "Outside work, lately" : "\u5de5\u4f5c\u4e4b\u5916，\u6700\u8fd1\u5728\u505a\u4ec0\u4e48"})).toBeInTheDocument();
    const contact = screen.getByRole("region", {name: locale === "en" ? "Contact" : "\u8054\u7cfb"});
    expect(within(contact).getAllByRole("link").map(a => a.textContent?.replace("↗", ""))).toEqual(["Email", "LinkedIn", "GitHub"]);
  });
});


describe("SayType local transcription positioning", () => {
  it.each(["en", "zh"] as const)("shows the local promise in %s", (locale) => {
    render(<HomePage locale={locale} />);
    const project = getHubProjects(locale).featured.find((item) => item.name === "SayType")!;
    const card = screen.getByRole("heading", { name: "SayType" }).closest("article")!;
    const expected = locale === "en"
      ? "100% local, offline transcription. No subscription."
      : "100% \u672c\u5730\u79bb\u7ebf\u8f6c\u5199\uff0c\u65e0\u9700\u8ba2\u9605";
    expect(within(card).getByText(expected)).toBeInTheDocument();
    expect(project.platform).toBe("macOS \u00b7 Windows \u00b7 Linux");
    expect(project.description).toContain(locale === "en" ? "Optional cloud" : "\u53ef\u9009\u4e91\u7aef");
    expect(project.description).toContain(locale === "en" ? "model download" : "\u4e0b\u8f7d\u6a21\u578b");
    expect(within(card).getByRole("link")).toHaveAttribute("href", "https://saytype.taotao.au/");
  });
});
