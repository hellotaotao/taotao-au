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

  it("renders Chinese content for the Chinese locale", () => {
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
  });

  it("renders the current projects section with the full project set", () => {
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
        /Live project websites first, followed by active builds that are still moving toward a public launch/i,
      ),
    ).toBeInTheDocument();

    expect(within(projects).getAllByRole("link")).toHaveLength(6);

    expect(within(projects).getByRole("link", { name: /Mentii/i })).toHaveAttribute(
      "href",
      "https://menti.taotao.au/",
    );

    expect(
      within(projects).getByRole("link", { name: /BetterSchool.au/i }),
    ).toHaveAttribute("href", "https://betterschool.au/");

    const voicelyLink = within(projects).getByRole("link", { name: /Voicely/i });
    expect(voicelyLink).toHaveAttribute("href", "https://voicely.taotao.au/");
    expect(voicelyLink).not.toHaveAttribute(
      "href",
      "https://github.com/hellotaotao/Voicely",
    );

    expect(
      within(projects).getByRole("link", { name: /Energy Plan Lens/i }),
    ).toHaveAttribute("href", "https://energy.taotao.au/");

    expect(
      within(projects).getByRole("link", { name: /Avalon Host/i }),
    ).toHaveAttribute("href", "https://avalon.taotao.au/");

    expect(
      within(projects).getByRole("link", { name: /WhispLine \/ SayType/i }),
    ).toHaveAttribute("href", "https://github.com/hellotaotao/WhispLine");

    expect(
      within(projects).queryByRole("link", { name: /Field Proof/i }),
    ).not.toBeInTheDocument();
    expect(
      within(projects).queryByRole("link", { name: /AI Ops Canvas/i }),
    ).not.toBeInTheDocument();
    expect(
      within(projects).queryByRole("link", { name: /Social Deduction Host/i }),
    ).not.toBeInTheDocument();
  });

  it("keeps the now section aligned with current public project sites", () => {
    render(<HomePage locale="en" />);

    const now = screen.getByRole("region", { name: /^Now$/i });

    expect(
      within(now).getByText(
        /Keeping taotao.au current with live public project websites/i,
      ),
    ).toBeInTheDocument();

    expect(
      within(now).getByText(
        /Improving live products like Mentii, BetterSchool.au, Voicely, Energy Plan Lens, and Avalon Host/i,
      ),
    ).toBeInTheDocument();

    expect(
      within(now).getByText(
        /Building WhispLine \/ SayType before it has a deployed public website/i,
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
  });
});
