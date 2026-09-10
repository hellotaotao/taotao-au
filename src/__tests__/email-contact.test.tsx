import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { EmailContact, contactEmail } from "../app/email-contact";
import { HomePage } from "../app/home-page";
import { AboutPage } from "../app/about/about-page";

afterEach(() => vi.unstubAllGlobals());

describe("Email contact", () => {
  it.each(["en", "zh"] as const)("reveals, copies and closes the address in %s", async (locale) => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { clipboard: { writeText } });
    render(<EmailContact locale={locale} />);
    const trigger = screen.getByRole("button", { name: "Email" });
    expect(screen.queryByText(contactEmail)).not.toBeInTheDocument();
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(contactEmail)).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: locale === "en" ? "Copy" : "\u590d\u5236" }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent(locale === "en" ? "Copied" : "\u5df2\u590d\u5236"));
    expect(writeText).toHaveBeenCalledWith(contactEmail);
    fireEvent.click(trigger);
    expect(screen.queryByText(contactEmail)).not.toBeInTheDocument();
  });

  it.each([undefined, { writeText: vi.fn().mockRejectedValue(new Error("Denied")) }])("keeps the address selectable when clipboard is unavailable", async (clipboard) => {
    vi.stubGlobal("navigator", { clipboard });
    render(<EmailContact locale="en" />);
    fireEvent.click(screen.getByRole("button", { name: "Email" }));
    fireEvent.click(screen.getByRole("button", { name: "Copy" }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Copy unavailable"));
    expect(screen.getByText(contactEmail)).toBeVisible();
  });

  it.each(["en", "zh"] as const)("uses a disclosure instead of mailto across both pages in %s", (locale) => {
    const { unmount } = render(<HomePage locale={locale} />);
    expect(screen.getByRole("button", { name: "Email" })).toBeVisible();
    expect(document.querySelector('a[href^="mailto:"]')).toBeNull();
    unmount();
    render(<AboutPage locale={locale} />);
    expect(screen.getAllByRole("button", { name: "Email" })).toHaveLength(2);
    const footer = screen.getByRole("contentinfo");
    fireEvent.click(within(footer).getByRole("button", { name: "Email" }));
    expect(within(footer).getByText(contactEmail)).toBeVisible();
    expect(document.querySelector('a[href^="mailto:"]')).toBeNull();
  });
});
