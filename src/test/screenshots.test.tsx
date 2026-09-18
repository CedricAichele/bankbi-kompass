import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../App";
import { imageSchema, parseContent, stepsOf, sectionsOf } from "../content/schema";
import { byId } from "../content";
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
  it("zeigt TODOs ohne kaputte Bilder oder falsche Zoomaktion", () => {
    render(
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
    expect(screen.getByText("TODO: Echten Screenshot ergänzen")).toBeVisible();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("behandelt fehlgeschlagene Bildanforderungen verständlich", () => {
    render(<ReferenceImage image={picture} />);
    fireEvent.error(screen.getAllByAltText(picture.alt)[0]);
    expect(screen.getByText("Abbildung nicht verfügbar")).toBeVisible();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
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
