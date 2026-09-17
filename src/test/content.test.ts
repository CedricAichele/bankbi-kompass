import { describe, it, expect } from "vitest";
import { contents, byId } from "../content";
import {
  schema,
  parseContent,
  validateLinks,
  sectionsOf,
  requiredSections,
} from "../content/schema";
import { toolsCatalog, frequent } from "../content/catalog";
import { legacyIds, migrateIds } from "../content/redirects";
import { decisions } from "../lib/decisions";
import { searchContent } from "../lib/search";
import { scanContent } from "../lib/content-safety";
describe("Kurze, vollständige Schnellreferenzen", () => {
  it("validiert Schema, Pflichtmodule und Wortgrenze aller Einträge", () => {
    expect(contents.length).toBeGreaterThan(30);
    expect(() => validateLinks(contents)).not.toThrow();
    for (const item of contents) {
      expect(schema.safeParse(item).success, item.id).toBe(true);
      const parts = sectionsOf(item.body);
      for (const section of requiredSections)
        expect(parts[section], item.id).toBeTruthy();
      expect(item.body.split(/\s+/).length, item.id).toBeLessThanOrEqual(250);
      expect(item.ort.length).toBeGreaterThan(5);
    }
  });
  it("alle Katalogziele, Querverweise, Altziele und Entscheidungshilfen existieren", () => {
    const targets = [
      ...frequent,
      ...toolsCatalog.flatMap((t) =>
        t.groups.flatMap((g) => g.items.map((x) => x.id)),
      ),
      ...Object.values(legacyIds),
      ...decisions.flatMap((x) => x.options.map((o) => o.link)),
    ];
    for (const id of targets) expect(byId(id), id).toBeDefined();
    for (const item of contents)
      for (const match of item.body.matchAll(/\]\(#\/wissen\/([^)]+)\)/g))
        expect(byId(match[1]), item.id).toBeDefined();
  });
  it("führt die Tätigkeitsgruppen für alle drei Werkzeuge", () => {
    expect(toolsCatalog.map((t) => t.name)).toEqual([
      "Power BI",
      "Excel",
      "IDA",
    ]);
    expect(toolsCatalog[0].groups.map((g) => g.title)).toEqual([
      "Daten vorbereiten",
      "Datenmodell",
      "DAX & Measures",
      "Zeitintelligenz",
      "Bericht",
      "Fehler",
    ]);
    expect(toolsCatalog[1].groups).toHaveLength(10);
    expect(toolsCatalog[2].groups).toHaveLength(7);
  });
  it("enthält 23 Aufgaben und keine veröffentlichten Prozessaufsätze", () => {
    const tasks = contents.filter((x) => x.art === "aufgabe");
    expect(tasks).toHaveLength(23);
    expect(tasks.every((x) => x.bereich === "Werkzeugübergreifend")).toBe(true);
    expect(contents.some((x) => x.id === "kundenstruktur")).toBe(false);
  });
  it("IDA erklärt nur generische Prinzipien und markiert offene Bedienhinweise", () => {
    const ida = contents.filter((x) => x.bereich === "IDA");
    expect(ida.length).toBeGreaterThan(20);
    for (const item of ida) {
      expect(item.body).not.toMatch(/~~~(?:sql|dax|m)\n/);
      expect(item.screenshots.every((x) => x.schema)).toBe(true);
    }
  });
  it("weist fehlende Module, ungültige Quellentypen und tote Verweise zurück", () => {
    expect(() => parseContent("Kein Frontmatter")).toThrow();
    const raw =
      "---\n" +
      JSON.stringify(contents[0]) +
      "\n---\n## Beispiel\nUnvollständig";
    expect(() => parseContent(raw)).toThrow(/Abschnitt/);
    expect(
      schema.safeParse({ ...contents[0], quelleTyp: "internes-wissen" })
        .success,
    ).toBe(false);
    expect(() =>
      validateLinks([{ ...contents[0], verwandteThemen: ["fehlt"] }]),
    ).toThrow();
  });
  it("migriert Favoriten auf passende neue Einträge ohne Duplikate", () => {
    expect(
      migrateIds(
        ["kundenstruktur", "eine-zeile-je-person", "weg"],
        new Set(contents.map((x) => x.id)),
      ),
    ).toEqual(["eine-zeile-je-person"]);
  });
});
describe("Aufgabensuche", () => {
  it.each([
    [
      "mehrere konten pro kunde",
      [
        "eine-zeile-je-person",
        "distinctcount",
        "granularitaet",
        "eins-zu-viele",
        "dubletten",
      ],
    ],
    [
      "zwei tabellen",
      ["zusammenfuehren", "anhaengen", "beziehungen", "xverweis"],
    ],
    [
      "falsche summe",
      [
        "granularitaet",
        "eins-zu-viele",
        "dubletten",
        "filterkontext",
        "ida-aggregation",
      ],
    ],
    [
      "Werte aus anderer Tabelle holen",
      ["xverweis", "beziehungen", "zusammenfuehren"],
    ],
    [
      "eine Liste ohne doppelte Werte",
      ["eindeutig", "distinctcount", "dubletten"],
    ],
    ["mehrere Dateien zusammenführen", ["dateien-kombinieren", "power-query"]],
    [
      "eine Zeile je Person",
      ["gruppieren", "pivottable", "granularitaet", "distinctcount"],
    ],
  ])("priorisiert die passenden Ziele für %s", (q, ids) => {
    const result = searchContent(contents, q)
      .slice(0, 8)
      .map((x) => x.id);
    for (const id of ids) expect(result).toContain(id);
  });
  it("priorisiert ein exaktes Synonym vor beiläufigen Texttreffern", () => {
    const primary = {
      ...byId("calculate")!,
      synonyme: ["ungewöhnliche aufgabe"],
    };
    const secondary = {
      ...byId("measure")!,
      synonyme: [],
      body: "ungewöhnliche aufgabe",
    };
    expect(
      searchContent([secondary, primary], "ungewöhnliche aufgabe")[0].id,
    ).toBe(primary.id);
  });
  it.each([
    ["CALCULTAE", "calculate"],
    ["EINDEUTG", "eindeutig"],
    ["BESTAND ADDIEREN", "stichtag"],
  ])("verträgt Tippfehler und Großschreibung: %s", (q, id) => {
    expect(searchContent(contents, q).map((x) => x.id)).toContain(id);
  });
  it("filtert Werkzeug, Niveau, Tätigkeit und Kontext gemeinsam", () => {
    const result = searchContent(contents, "", {
      bereich: "Power BI",
      kategorie: "DAX & Measures",
      schwierigkeit: "Fortgeschritten",
      kontext: "Bestandsanalyse",
    });
    expect(result.length).toBeGreaterThan(0);
    expect(
      result.every(
        (x) =>
          x.kategorie === "DAX & Measures" &&
          x.schwierigkeit === "Fortgeschritten" &&
          x.kontexte.includes("Bestandsanalyse"),
      ),
    ).toBe(true);
  });
  it("findet geteilte Power-Query-Hilfe auch unter Excel", () => {
    expect(
      searchContent(contents, "", { bereich: "Excel" }).map((x) => x.id),
    ).toContain("zusammenfuehren");
  });
  it("behandelt Leerraum, leere Treffer und Aufgabenfilter", () => {
    expect(searchContent(contents, "   ")).toHaveLength(contents.length);
    expect(searchContent(contents, "zxqvvvxyz123")).toEqual([]);
    expect(searchContent(contents, "", { art: "aufgabe" })).toHaveLength(23);
  });
});
describe("Bild- und Inhaltsschutz", () => {
  const image = {
    src: "images/excel/beispiel.png",
    alt: "Synthetische Tabelle mit drei Beispielzeilen",
    caption: "Frei erfundenes Beispiel",
    schema: false,
    status: "bereit" as const,
  };
  it("erfordert Alt-Text und lokale, eingeschränkte Bildpfade", () => {
    expect(
      schema.safeParse({ ...byId("xverweis"), screenshots: [image] }).success,
    ).toBe(true);
    for (const invalid of [
      { ...image, alt: "" },
      { ...image, src: "https://intern.example/image.png" },
      { ...image, src: "images/../secret.png" },
    ])
      expect(
        schema.safeParse({ ...byId("xverweis"), screenshots: [invalid] })
          .success,
      ).toBe(false);
  });
  it("verweigert IDA-Screenshots, akzeptiert aber deklarierte Mock-ups", () => {
    expect(
      schema.safeParse({ ...byId("reporting"), screenshots: [image] }).success,
    ).toBe(false);
    expect(
      schema.safeParse({
        ...byId("reporting"),
        screenshots: [{ ...image, src: "images/ida/liste.svg", schema: true }],
      }).success,
    ).toBe(true);
  });
  it("erkennt verdächtige Muster, ohne den Wert auszugeben", () => {
    const flags = scanContent(
      "Frau Erika Musterperson test@example.invalid https://intern.example.invalid passwort=abcdefgh TEST-12345",
    );
    expect(flags.length).toBeGreaterThanOrEqual(5);
    expect(flags.join()).not.toContain("abcdefgh");
  });
  it("prüft Metadaten und Text aller veröffentlichten Einträge", () => {
    for (const item of contents)
      expect(scanContent(JSON.stringify(item)), item.id).toEqual([]);
  });
});
