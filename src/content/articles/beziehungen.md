---
{
  "id": "beziehungen",
  "slug": "beziehungen",
  "titel": "Beziehung erstellen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Beziehung verbindet Tabellen im Modell, damit eine Dimension die passenden Fakten filtert.",
  "ort": "Power BI Desktop → Modellansicht → Beziehungen verwalten",
  "tags": ["Beziehung erstellen", "Reporting"],
  "synonyme":
    [
      "zwei tabellen",
      "Werte aus anderer Tabelle holen",
      "zwei Tabellen verbinden",
    ],
  "verwandteThemen": ["eins-zu-viele", "filterrichtung", "beziehung-fehler"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/beziehung.svg",
        "alt": "Schema: Eine Produktzeile mit PR-A filtert zwei Bestandszeilen mit PR-A.",
        "hinweis": "1 steht für einen eindeutigen Produktschlüssel; n für mehrere passende Detailzeilen.",
        "caption": "Selbst erstelltes Schema mit synthetischen Kennungen. Keine Programmoberfläche.",
        "schema": true,
        "status": "bereit",
        "schritt": 2,
      },
      {
        "src": "images/power-bi/pbi-beziehungen.webp",
        "alt": "Aktive Beziehung: Personen auf der 1-Seite filtern Konten auf der *-Seite.",
        "caption": "Aktive Beziehung: Personen auf der 1-Seite filtern Konten auf der *-Seite.",
        "schritt": 3,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du möchtest nach einer Produktgruppe filtern, ohne ihre Beschreibung in jede Faktzeile zu kopieren.

## Schritte

1. Schlüssel auf beiden Seiten auf passenden Datentyp prüfen.
2. Eindeutige Dimension mit der Detailtabelle verbinden; meist 1:n.
3. Aktive Beziehung und Filterrichtung prüfen; mit einer kleinen Matrix testen.

## Beispiel

Demo_Produkt hat PR-A einmal. Demo_Bestand enthält PR-A für zwei Konten. Die Auswahl PR-A erreicht beide Bestände.

## Typischer Fehler

Doppelte Schlüssel auf der 1-Seite durch n:m-Kardinalität „reparieren“.
