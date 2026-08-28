import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

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
    for (const value of ["zh", "cn", "zh-cn", "zh-tw", "chinese", "中文"]) {
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

describe("Home page", () => {
  it("renders Tao Wang hero and keeps the primary homepage pathways", () => {
    render(<HomePage locale="en" />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Tao Wang/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/practical AI products, tools, and experiments/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Shipping small, useful products with AI where it actually helps/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /View current projects/i }),
    ).toHaveAttribute("href", "#projects");

    expect(screen.getByRole("link", { name: /Get in touch/i })).toHaveAttribute(
      "href",
      "#contact",
    );

    expect(
      screen.getByRole("group", { name: /Current build signals/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Fast trial/i)).toBeInTheDocument();
  });

  it("renders Chinese content and translated project maturity", () => {
    render(<HomePage locale="zh" />);

    expect(
      screen.getByText(/我构建实用的 AI 产品、工具和实验/),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "当前项目",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: "当前投入" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: "更多线上实验" }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("已上线产品")).toHaveLength(3);
    expect(screen.getAllByText("活跃开发中")).toHaveLength(4);
    expect(screen.getAllByText("原型")).toHaveLength(6);
    expect(
      screen.getByText(/11,034 所学校/),
    ).toBeInTheDocument();

    const now = screen.getByRole("region", { name: "现在" });
    expect(
      within(now).getByText(
        /当前主要投入 BetterSchool、SayType、KanaDrill、Maths Practice、Voicely 和 EverLog/,
      ),
    ).toBeInTheDocument();
    expect(
      within(now).getByText(/通过短周期的构建、测试和发布/),
    ).toBeInTheDocument();
    expect(
      within(now).getByText(/保留可用的线上实验/),
    ).toBeInTheDocument();
  });

  it("renders current work and live experiments as separate project tiers", () => {
    render(<HomePage locale="en" />);

    const projects = screen.getByRole("region", {
      name: /Current projects/i,
    });

    expect(
      within(projects).getByRole("heading", {
        level: 2,
        name: /Current projects/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(projects).getByText(
        /Current products first, followed by live experiments that are still useful to explore/i,
      ),
    ).toBeInTheDocument();

    const activeNow = within(projects).getByRole("group", {
      name: /Active now/i,
    });
    const experiments = within(projects).getByRole("group", {
      name: /More live experiments/i,
    });

    expect(within(activeNow).getAllByRole("link")).toHaveLength(6);
    expect(within(experiments).getAllByRole("link")).toHaveLength(7);

    const activeLinks = [
      ["BetterSchool", "https://betterschool.au/"],
      ["SayType", "https://saytype.taotao.au/"],
      ["KanaDrill", "https://kanadrill.taotao.au/"],
      ["Maths Practice", "https://mathtrainer.taotao.au/"],
      ["Voicely", "https://voicely.taotao.au/"],
      ["EverLog", "https://everlog.taotao.au/"],
    ] as const;

    for (const [name, href] of activeLinks) {
      expect(within(activeNow).getByRole("link", { name })).toHaveAttribute(
        "href",
        href,
      );
    }

    expect(
      within(activeNow).getByText(/11,034 Australian schools/i),
    ).toBeInTheDocument();
    expect(
      within(activeNow).getByText(/macOS, Windows, and Linux/i),
    ).toBeInTheDocument();
    expect(
      within(activeNow).getByText(/local-first iOS meeting transcription/i),
    ).toBeInTheDocument();

    const experimentLinks = [
      ["Threadline Studio", "https://stringart.taotao.au/"],
      ["MathPlay AU", "https://mathplay.taotao.au/"],
      ["Mentii", "https://menti.taotao.au/"],
      ["Veiled Roundtable", "https://avalon.taotao.au/"],
      ["EnergyLens", "https://energy.taotao.au/"],
      ["CaseMap", "https://casemap.taotao.au/"],
      ["AI Ops Canvas", "https://mindboard.taotao.au/"],
    ] as const;

    for (const [name, href] of experimentLinks) {
      expect(within(experiments).getByRole("link", { name })).toHaveAttribute(
        "href",
        href,
      );
    }

    expect(within(projects).getAllByText("Live product")).toHaveLength(3);
    expect(within(projects).getAllByText("Active build")).toHaveLength(4);
    expect(within(projects).getAllByText("Prototype")).toHaveLength(6);

    for (const staleName of ["String Art", "Mindboard", "Avalon Host"]) {
      expect(
        within(projects).queryByRole("link", { name: staleName }),
      ).not.toBeInTheDocument();
    }
  });

  it("keeps the now section aligned with the active-now portfolio", () => {
    render(<HomePage locale="en" />);

    const now = screen.getByRole("region", { name: /^Now$/i });

    expect(
      within(now).getByText(
        /Focusing current build time on BetterSchool, SayType, KanaDrill, Maths Practice, Voicely, and EverLog/i,
      ),
    ).toBeInTheDocument();

    expect(
      within(now).getByText(
        /Turning active builds into dependable products through short build-test-ship loops/i,
      ),
    ).toBeInTheDocument();

    expect(
      within(now).getByText(
        /Keeping live experiments available without letting them crowd out the work receiving attention now/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders about and contact sections as named regions", () => {
    render(<HomePage locale="en" />);

    const about = screen.getByRole("region", { name: /About/i });
    const contact = screen.getByRole("region", { name: /Contact/i });

    expect(about).toBeInTheDocument();
    expect(contact).toBeInTheDocument();

    expect(within(contact).getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/hellotaotao",
    );

    expect(within(contact).getByRole("link", { name: /Email/i })).toHaveAttribute(
      "href",
      "mailto:hellotaotao@gmail.com",
    );

    expect(
      within(contact).getByRole("link", { name: /LinkedIn/i }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/ta0wang");
  });
});
