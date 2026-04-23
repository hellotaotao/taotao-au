import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Home page", () => {
  it("renders Tao Wang hero and project hub sections", () => {
    render(<Home />);

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
      screen.getByRole("heading", { level: 2, name: /Current projects/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Mentii/i })).toHaveAttribute(
      "href",
      "https://menti.taotao.au",
    );

    expect(
      screen.getByRole("link", { name: /BetterSchool/i }),
    ).toHaveAttribute("href", "https://betterschool.au");
  });

  it("renders about, now, and contact sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 2, name: /About/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: /^Now$/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: /Contact/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/hellotaotao",
    );
  });
});
