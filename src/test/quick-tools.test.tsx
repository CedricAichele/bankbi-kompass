import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { DecisionTools } from "../components/DecisionTools";
import { EntryList } from "../components/ReferenceLists";
import { decisions } from "../lib/decisions";
import { byId } from "../content";
describe("Werkzeugwahl und Schnellansicht", () => {
  it("liefert für jede Auswahl eine vorhandene Referenz und setzt Antworten beim Themenwechsel zurück", () => {
    render(
      <MemoryRouter>
        <DecisionTools />
      </MemoryRouter>,
    );
    for (const decision of decisions) {
      fireEvent.change(screen.getByRole("combobox"), {
        target: { value: decision.id },
      });
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
      for (const option of decision.options) {
        expect(byId(option.link)).toBeDefined();
        fireEvent.click(screen.getByRole("button", { name: option.label }));
        expect(screen.getByRole("status")).toHaveTextContent(option.answer);
        expect(
          within(screen.getByRole("status")).getByRole("link"),
        ).toHaveAttribute("href", "/wissen/" + option.link);
      }
    }
  });
  it("bietet Einsatzfall, Beispiel und den vollständigen Detailpfad im Suchtreffer", () => {
    const item = byId("calculate")!;
    render(
      <MemoryRouter>
        <EntryList items={[item]} quickView />
      </MemoryRouter>,
    );
    const summary = screen.getByText("Schnellansicht: CALCULATE");
    expect(summary.tagName).toBe("SUMMARY");
    const details = summary.closest("details")!;
    expect(details).not.toHaveAttribute("open");
    expect(within(details).getByText("Beispiel")).toBeInTheDocument();
    expect(within(details).getByRole("link", { hidden: true })).toHaveAttribute(
      "href",
      "/wissen/calculate",
    );
  });
});
