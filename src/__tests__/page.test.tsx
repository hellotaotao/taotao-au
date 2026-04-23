import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "../app/page";

describe("Home page", () => {
  it("renders Tao Wang hero and keeps the primary homepage pathways", () => {
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
  });

  it("renders the current projects section with the full project set", () => {
    render(<Home />);

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
        /A selection of the products and experiments I am actively pushing forward right now/i,
      ),
    ).toBeInTheDocument();

    expect(within(projects).getByRole("link", { name: /Mentii/i })).toHaveAttribute(
      "href",
      "https://menti.taotao.au",
    );

    expect(
      within(projects).getByRole("link", { name: /BetterSchool/i }),
    ).toHaveAttribute("href", "https://betterschool.au");

    expect(
      within(projects).getByRole("link", { name: /WhispLine/i }),
    ).toHaveAttribute("href", "https://github.com/hellotaotao/WhispLine");

    expect(within(projects).getByRole("link", { name: /Voicely/i })).toHaveAttribute(
      "href",
      "https://github.com/hellotaotao/Voicely",
    );
  });

  it("renders about, now, and contact sections as named regions", () => {
    render(<Home />);

    const about = screen.getByRole("region", { name: /About/i });
    const now = screen.getByRole("region", { name: /^Now$/i });
    const contact = screen.getByRole("region", { name: /Contact/i });

    expect(about).toBeInTheDocument();
    expect(now).toBeInTheDocument();
    expect(contact).toBeInTheDocument();

    expect(
      within(now).getByText(/Turning taotao.au into the main home/i),
    ).toBeInTheDocument();

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
