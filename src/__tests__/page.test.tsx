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

    expect(
      screen.getByRole("group", { name: /Current build signals/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Fast trial/i)).toBeInTheDocument();
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
        /Live project websites first, followed by active builds that are still moving toward a public launch/i,
      ),
    ).toBeInTheDocument();

    expect(within(projects).getAllByRole("link")).toHaveLength(5);

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
    render(<Home />);

    const now = screen.getByRole("region", { name: /^Now$/i });

    expect(
      within(now).getByText(
        /Keeping taotao.au current with live public project websites/i,
      ),
    ).toBeInTheDocument();

    expect(
      within(now).getByText(
        /Improving live products like Mentii, BetterSchool.au, Voicely, and Energy Plan Lens/i,
      ),
    ).toBeInTheDocument();

    expect(
      within(now).getByText(
        /Building WhispLine \/ SayType before it has a deployed public website/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders about and contact sections as named regions", () => {
    render(<Home />);

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
