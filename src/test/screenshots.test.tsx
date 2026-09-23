import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../App";
import { imageSchema, parseContent, stepsOf, sectionsOf } from "../content/schema";
import { byId, contents } from "../content";
import { renderToStaticMarkup } from "react-dom/server";
import { ReferenceImage } from "../components/ReferenceImage";

const picture = {
  src: "/images/grundlagen/demo.webp",
  alt: "Schematische Tabelle mit zwei Zeilen",
  caption: "Eine schematische Demo-Tabelle",
  schema: true,
  status: "bereit" as const,
  schritt: 2,
};
describe("Screenshot-Anleitungen", () => {
  it("verlangt bei Ersatzaufnahmen einen vollständigen Plan und erhält den alten Dateipfad", () => {
    const replacement = byId("xverweis")!.screenshots.find(image => image.status === "ersetzen")!;
    expect(imageSchema.safeParse(replacement).success).toBe(true);
    expect(imageSchema.safeParse({ ...replacement, aufnahmeplan: undefined }).success).toBe(false);
    expect(imageSchema.safeParse({ ...replacement, src: undefined }).success).toBe(false);
  });
  it("blendet unbrauchbare Altbilder aus und erhält die internen Aufnahmedaten", () => {
    const replacement = byId("xverweis")!.screenshots.find(image => image.status === "ersetzen")!;
    const { container } = render(<ReferenceImage image={replacement} />);
    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(replacement.aufnahmeplan?.klickfolge.length).toBeGreaterThan(0);
    expect(replacement.aufnahmeplan?.daten).toContain("1002");
    expect(screen.queryByText("Aufnahmeplan für diesen Screenshot")).not.toBeInTheDocument();
    expect(screen.queryByText("Synthetische Aufnahmedaten")).not.toBeInTheDocument();
  });
  it("normalisiert Root-Pfade und lehnt ungültige Zuordnungen und unvollständige TODOs ab", () => {
    expect(imageSchema.parse(picture).src).toBe("images/grundlagen/demo.webp");
    for (const invalid of [
      { ...picture, schritt: 0 },
      { ...picture, schritt: 1.5 },
      { ...picture, src: undefined },
      { ...picture, status: "todo" },
      { ...picture, src: "images/ida/demo.webp", schema: false },
    ])
      expect(imageSchema.safeParse(invalid).success).toBe(false);
    expect(
      imageSchema.safeParse({
        ...picture,
        src: undefined,
        status: "todo",
        todo: "Echte Abbildung noch ergänzen.",
      }).success,
    ).toBe(true);
  });
  it("prüft Schrittgrenzen gegen den tatsächlichen Inhalt", () => {
    const item = byId("measure")!;
    expect(() =>
      parseContent(
        "---\n" +
          JSON.stringify({
            ...item,
            screenshots: [{ ...picture, schritt: stepsOf(sectionsOf(item.body).Schritte).length + 1 }],
          }) +
          "\n---\n" +
          item.body,
      ),
    ).toThrow(/nicht vorhandenen Schritt/);
    expect(
      stepsOf("1. Erste Aktion.\n   Weitere Erklärung.\n2. Zweite Aktion."),
    ).toEqual(["Erste Aktion.\n   Weitere Erklärung.", "Zweite Aktion."]);
  });
  it("zeigt Schritt, Schema-Hinweis, Vergrößerung und Schließen mit Fokuswiederherstellung", () => {
    vi.stubEnv("BASE_URL", "/bankbi-kompass/");
    render(<ReferenceImage image={picture} />);
    expect(screen.getAllByText("Schematische Darstellung")[0]).toBeVisible();
    expect(screen.getAllByText("Schritt 2")[0]).toBeVisible();
    const trigger = screen.getByRole("button", {
      name: /Abbildung vergrößern/,
    });
    expect(screen.getAllByAltText(picture.alt)[0]).toHaveAttribute(
      "src",
      "/bankbi-kompass/images/grundlagen/demo.webp",
    );
    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("Schematische Darstellung")).toBeVisible();
    fireEvent.click(within(dialog).getByRole("button", { name: "Zoom 200 %" }));
    expect(
      within(dialog).getByRole("button", { name: "An Fenster anpassen" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      within(dialog).getByLabelText(
        "Bildbereich, mit Pfeiltasten verschiebbar",
      ),
    ).toHaveClass("is-zoomed");
    fireEvent(
      dialog,
      new Event("cancel", { bubbles: false, cancelable: true }),
    );
    expect(dialog).not.toHaveAttribute("open");
    expect(trigger).toHaveFocus();
    fireEvent.click(trigger);
    expect(
      within(dialog).getByRole("button", { name: "Zoom 200 %" }),
    ).toHaveAttribute("aria-pressed", "false");
  });
  it("blendet geplante Bilder vollständig ohne leere Boxen oder Zoomaktion aus", () => {
    const { container } = render(
      <ReferenceImage
        image={{
          alt: picture.alt,
          caption: picture.caption,
          schema: false,
          status: "todo",
          todo: "Mit synthetischen Daten neu aufnehmen.",
        }}
      />,
    );
    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("behandelt fehlgeschlagene Bildanforderungen verständlich", () => {
    render(<ReferenceImage image={picture} />);
    fireEvent.error(screen.getAllByAltText(picture.alt)[0]);
    expect(screen.getByText("Abbildung derzeit nicht verfügbar.")).toBeVisible();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("zeigt brauchbare Ersatzbilder normal einschließlich Zoom, aber ohne Auftrag", () => {
    const image = byId("measure")!.screenshots.find(p => p.status === "ersetzen")!;
    const { container } = render(<ReferenceImage image={image} />);
    expect(screen.getAllByAltText(image.alt)[0]).toBeVisible();
    expect(container.textContent).not.toMatch(/TODO|Ersatzaufnahme|Screenshot ersetzen|Aufnahmeplan|Dateiname/i);
    expect(container.textContent).not.toContain(image.todo);
    fireEvent.click(screen.getByRole("button", { name: /Abbildung vergrößern/ }));
    expect(screen.getByRole("dialog")).toBeVisible();
    expect(within(screen.getByRole("dialog")).getByText(image.caption)).toBeVisible();
    expect(screen.getByRole("dialog").textContent).not.toContain(image.todo);
  });
  it("gibt bei keinem Katalogbild interne Aufnahmetexte oder Statusbegriffe aus", () => {
    for (const item of contents) for (const image of item.screenshots) {
      const html = renderToStaticMarkup(<ReferenceImage image={image} />);
      expect(html, item.id).not.toMatch(/TODO|Ersatzaufnahme|Geplante Aufnahme|Screenshot ersetzen|Aufnahmeplan|Arbeitsauftrag|Dateiname/i);
      if (image.status === "todo" || image.bildAnzeigen === false) expect(html, item.id).toBe("");
      else expect(html, item.id).toContain("<img");
      if (image.todo) expect(html, item.id).not.toContain(image.todo);
    }
  });
  it("ordnet mehrere Bilder dem passenden Schritt vor Beispiel und Fehler zu", async () => {
    window.location.hash = "/wissen/beziehungen";
    render(<App />);
    const step = await screen.findByRole("region", { name: "Schritt 2" });
    const realStep = await screen.findByRole("region", { name: "Schritt 5" });
    expect(
      within(realStep).getByRole("button", { name: /Abbildung vergrößern/ }),
    ).toBeVisible();
    expect(
      within(realStep).queryByText("TODO: Echten Screenshot ergänzen"),
    ).not.toBeInTheDocument();
    expect(
      within(step).getAllByText("Schematische Darstellung")[0],
    ).toBeVisible();
    expect(
      within(step).getByRole("button", { name: /Abbildung vergrößern/ }),
    ).toBeVisible();
    expect(
      step.compareDocumentPosition(
        screen.getByRole("heading", { name: "Beispiel synthetisch" }),
      ) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
