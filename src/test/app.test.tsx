import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import App, { DecisionTools } from "../App";
import { FAVORITES_KEY, readIds, saveIds, toggleId } from "../lib/storage";
import { CodeBlock } from "../components/CodeBlock";
import { ReferenceImage } from "../components/ReferenceImage";
describe("Favoriten", () => {
  it("speichert und entfernt IDs", () => {
    saveIds(FAVORITES_KEY, toggleId([], "calculate"));
    expect(readIds(FAVORITES_KEY)).toEqual(["calculate"]);
    saveIds(FAVORITES_KEY, toggleId(readIds(FAVORITES_KEY), "calculate"));
    expect(readIds(FAVORITES_KEY)).toEqual([]);
  });
  it("behandelt beschädigten und blockierten Speicher", () => {
    localStorage.setItem(FAVORITES_KEY, "{");
    expect(readIds(FAVORITES_KEY)).toEqual([]);
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Gesperrt");
    });
    expect(saveIds(FAVORITES_KEY, ["measure"])).toBe(false);
  });
});
describe("Schnelle Bedienung und Routing", () => {
  it("zeigt die neue Startseite ohne Kurs- oder Prozessblöcke", async () => {
    window.location.hash = "/";
    render(<App />);
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Was möchtest du machen oder finden?",
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Häufig gebraucht" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Lernpfad|Lesezeit|Neu bei Power BI/),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "IDA öffnen" }),
    ).toBeInTheDocument();
  });
  it("liefert direkte Suchvorschläge und öffnet einen Treffer", async () => {
    window.location.hash = "/";
    render(<App />);
    const input = await screen.findByRole("textbox", {
      name: "Aufgabe oder Funktion suchen",
    });
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "mehrere konten pro kunde" } });
    const suggestions = screen.getByRole("region", { name: "Suchvorschläge" });
    fireEvent.click(
      within(suggestions).getByRole("link", { name: /Eine Zeile je Person/ }),
    );
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Eine Zeile je Person",
      }),
    ).toBeInTheDocument();
  });
  it("öffnet eine kompakte Referenz und speichert einen Favoriten", async () => {
    window.location.hash = "/wissen/calculate";
    render(<App />);
    expect(
      await screen.findByRole("heading", { level: 1, name: "CALCULATE" }),
    ).toBeInTheDocument();
    for (const name of ["Kurzantwort", "So gehst du vor", "Typischer Fehler"])
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Merken" }));
    expect(readIds(FAVORITES_KEY)).toContain("calculate");
    fireEvent.click(screen.getByRole("link", { name: "Favoriten ansehen" }));
    expect(
      await screen.findByRole("heading", { level: 1, name: "Favoriten" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "CALCULATE" }),
    ).toBeInTheDocument();
  });
  it("filtert Suche über URL und zeigt Kontext an", async () => {
    window.location.hash = "/suche?q=Vorjahr";
    render(<App />);
    expect(
      await screen.findByRole("textbox", { name: "Suchbegriff" }),
    ).toHaveValue("Vorjahr");
    fireEvent.change(screen.getByRole("combobox", { name: "Werkzeug" }), {
      target: { value: "Excel" },
    });
    await waitFor(() =>
      expect(window.location.hash).toContain("bereich=Excel"),
    );
    fireEvent.change(screen.getByRole("combobox", { name: "Kontext" }), {
      target: { value: "Bestandsanalyse" },
    });
    await waitFor(() =>
      expect(window.location.hash).toContain("kontext=Bestandsanalyse"),
    );
  });
  it("stellt Excel-Tätigkeiten statt allgemeiner Artikelliste dar", async () => {
    window.location.hash = "/bereich/excel";
    render(<App />);
    expect(
      await screen.findByRole("heading", { level: 1, name: "Excel" }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Daten vorbereiten" }));
    expect(
      screen.getByRole("link", { name: "Leerzeichen entfernen: GLÄTTEN" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "SUMMEWENNS" }),
    ).not.toBeInTheDocument();
  });
  it("IDA zeigt den Entwicklungsstand ohne Artikel", async () => {
    window.location.hash = "/bereich/ida";
    render(<App />);
    expect(await screen.findByRole("heading", {level: 1, name: "IDA"})).toBeVisible();
    expect(screen.getByText("In Entwicklung")).toBeVisible();
    expect(screen.queryByRole("link", {name: "Liste erstellen"})).not.toBeInTheDocument();
  });
  it("erhält alte Direktlinks und migriert alte Favoriten", async () => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(["kundenstruktur"]));
    window.location.hash = "/wissen/kundenstruktur";
    render(<App />);
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Eine Zeile je Person",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Gemerkt" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
  it("entfernt die alte Lernpfadroute", async () => {
    window.location.hash = "/lernpfad";
    render(<App />);
    expect(
      await screen.findByRole("heading", { name: "Diese Seite gibt es nicht" }),
    ).toBeInTheDocument();
  });
  it("führt Skip-Link und Escape-Menü mit korrektem Fokus aus", async () => {
    window.location.hash = "/";
    render(<App />);
    await screen.findByRole("heading", { level: 1, name: /Was möchtest du/ });
    screen.getByRole("main").scrollIntoView = vi.fn();
    fireEvent.click(screen.getByRole("link", { name: "Zum Inhalt springen" }));
    expect(window.location.hash).toBe("#/");
    expect(screen.getByRole("main")).toHaveFocus();
    fireEvent.click(screen.getByRole("button", { name: "Menü öffnen" }));
    expect(screen.getByRole("link", { name: /^Start$/ })).toHaveFocus();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Menü öffnen" })).toHaveFocus();
  });
  it("zeigt eine kurze Entscheidung und setzt sie bei Themenwechsel zurück", () => {
    render(
      <MemoryRouter>
        <DecisionTools />
      </MemoryRouter>,
    );
    fireEvent.click(
      screen.getByRole("button", { name: "Auf Filter und Slicer reagieren" }),
    );
    expect(screen.getByRole("status")).toHaveTextContent("Ein Measure");
    fireEvent.change(screen.getByRole("combobox", { name: "Thema" }), {
      target: { value: "verbinden" },
    });
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
  it("kopiert Beispielcode", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    render(<CodeBlock code="SUM ( Demo[WERT] )" language="dax" />);
    fireEvent.click(screen.getByRole("button", { name: "Kopieren" }));
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent("Kopiert"),
    );
    expect(writeText).toHaveBeenCalledWith("SUM ( Demo[WERT] )");
  });
  it("öffnet Abbildungen im Dialog mit Base Path und schließt sie", () => {
    vi.stubEnv("BASE_URL", "/bankbi-kompass/");
    const show = vi
      .spyOn(HTMLDialogElement.prototype, "showModal")
      .mockImplementation(function (this: HTMLDialogElement) {
        this.setAttribute("open", "");
      });
    const close = vi
      .spyOn(HTMLDialogElement.prototype, "close")
      .mockImplementation(function (this: HTMLDialogElement) {
        this.removeAttribute("open");
        this.dispatchEvent(new Event("close"));
      });
    render(
      <ReferenceImage
        image={{
          src: "images/power-bi/beziehung.svg",
          alt: "Schema mit einem Produkt und zwei Konten",
          caption: "Synthetisches Beziehungsschema",
          schema: true,
          status: "bereit",
        }}
      />,
    );
    const trigger = screen.getByRole("button", {
      name: /Abbildung vergrößern/,
    });
    fireEvent.click(trigger);
    expect(show).toHaveBeenCalled();
    expect(screen.getByRole("dialog")).toBeVisible();
    expect(
      screen.getAllByAltText("Schema mit einem Produkt und zwei Konten")[0],
    ).toHaveAttribute("src", "/bankbi-kompass/images/power-bi/beziehung.svg");
    fireEvent.click(
      screen.getByRole("button", { name: "Abbildung schließen" }),
    );
    expect(close).toHaveBeenCalled();
    expect(trigger).toHaveFocus();
  });
});
