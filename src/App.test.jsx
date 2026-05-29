import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { afterEach } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { topFindings, scorecardItems, actionPlan } from "./data/auditData";

const redirectsPath = resolve(process.cwd(), "public", "_redirects");

const requiredSections = [
  "Executive Summary",
  "Strategic Diagnosis",
  "Top 10 Findings",
  "Business Model Clarity",
  "User Journey & Conversion Audit",
  "Trust & Credibility Audit",
  "Premium Positioning Audit",
  "Vehicle Listing Quality Audit",
  "SEO & Local SEO Audit",
  "Technical Health Audit",
  "Competitor Benchmark",
  "Opportunity Roadmap",
  "Recommended Website Structure",
  "Recommended Homepage Messaging",
  "Ideal Vehicle Page Template",
  "Final Scorecard",
  "Prioritized Action Plan",
  "Final Strategic Recommendation",
];

describe("DOMCar audit report", () => {
  afterEach(() => {
    window.history.pushState({}, "", "/");
    document.documentElement.lang = "en";
  });

  it("renders every required audit section with accessible headings", () => {
    render(<App />);

    const headings = screen
      .getAllByRole("heading")
      .map((heading) => heading.textContent);

    requiredSections.forEach((section) => {
      expect(headings).toContain(section);
    });
  });

  it("presents the core commercial diagnosis and evidence boundaries", () => {
    render(<App />);

    expect(
      screen.getAllByText(/DOMCar already has the raw assets to look credible/i)
        .length,
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(/Not verified in the current audit/i).length,
    ).toBeGreaterThanOrEqual(2);
    expect(screen.queryByText(/terrible|toxic|disaster|amateur|failure/i)).not.toBeInTheDocument();
  });

  it("keeps the top findings, scorecard, and action plan data complete", () => {
    expect(topFindings).toHaveLength(10);
    expect(scorecardItems).toHaveLength(11);
    expect(actionPlan).toHaveLength(12);
  });

  it("includes the Netlify SPA rewrite fallback", () => {
    expect(existsSync(redirectsPath)).toBe(true);
    expect(readFileSync(redirectsPath, "utf8").trim()).toBe(
      "/* /index.html 200",
    );
  });

  it("adds bilingual alternate links without inventing a canonical URL", () => {
    window.history.pushState({}, "", "/en");

    render(<App />);

    const alternates = Object.fromEntries(
      [...document.head.querySelectorAll('link[rel="alternate"]')].map(
        (link) => [link.getAttribute("hreflang"), link.getAttribute("href")],
      ),
    );

    expect(alternates).toEqual({
      en: "/en",
      ru: "/ru",
    });
    expect(document.head.querySelector('link[rel="canonical"]')).not.toBeInTheDocument();
  });

  it("surfaces scorecard ratings and priority labels for business readers", () => {
    render(<App />);

    const scorecard = screen.getByTestId("scorecard-grid");
    expect(within(scorecard).getByText("Business clarity")).toBeInTheDocument();
    expect(
      within(scorecard).getByLabelText("Business clarity score 4 out of 10"),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Priority 1").length).toBeGreaterThanOrEqual(5);
  });

  it("shows six umbrella sidebar sections and expands the first one by default", async () => {
    const user = userEvent.setup();
    render(<App />);

    const navigation = screen.getByRole("navigation", {
      name: "Audit chapter navigation",
    });
    expect(within(navigation).getAllByRole("button")).toHaveLength(6);
    expect(
      within(navigation).getByRole("button", { name: /Executive Context/i }),
    ).toHaveAttribute("aria-expanded", "true");
    expect(within(navigation).getByText("Executive Summary")).toBeVisible();
    expect(within(navigation).queryByText("Top 10 Findings")).not.toBeInTheDocument();

    await user.click(
      within(navigation).getByRole("button", { name: /Trust & Conversion/i }),
    );

    expect(
      within(navigation).getByRole("button", { name: /Trust & Conversion/i }),
    ).toHaveAttribute("aria-expanded", "true");
    expect(within(navigation).getByText("Top 10 Findings")).toBeVisible();
    expect(within(navigation).queryByText("Executive Summary")).not.toBeInTheDocument();
  });

  it("renders the Russian report from the /ru route", () => {
    window.history.pushState({}, "", "/ru");

    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Цифровой аудит DOMCar Cyprus" }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("ru");
    expect(
      screen.getByRole("button", { name: "RU" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("heading", { name: "Стратегическая диагностика" }),
    ).toBeInTheDocument();
  });

  it("switches languages from the sidebar and updates the route", () => {
    window.history.pushState({}, "", "/en");

    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "RU" }));

    expect(window.location.pathname).toBe("/ru");
    expect(document.documentElement.lang).toBe("ru");
    expect(screen.getByText("Цифровой аудит DOMCar Cyprus")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "EN" }));

    expect(window.location.pathname).toBe("/en");
    expect(document.documentElement.lang).toBe("en");
    expect(screen.getByText("DOMCar Cyprus Digital Audit")).toBeInTheDocument();
  });
});
