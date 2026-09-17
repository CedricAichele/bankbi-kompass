---
{
  "id": "fakt-dimension",
  "slug": "fakt-dimension",
  "titel": "Fakt- und Dimensionstabelle",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Fakten enthalten Messwerte auf einer festen Ebene. Dimensionen liefern eindeutige beschreibende Merkmale.",
  "ort": "Power BI → Modellansicht; Struktur vor dem Verknüpfen festlegen",
  "tags": ["Fakt- und Dimensionstabelle", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["star-schema", "granularitaet"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-dimension.webp",
        "alt": "Demo-Dimension: DISTINCT erzeugt vier eindeutige Personennummern aus sechs Kontenzeilen.",
        "caption": "Demo-Dimension: DISTINCT erzeugt vier eindeutige Personennummern aus sechs Kontenzeilen.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du musst Tabellen im Modell sinnvoll aufteilen.

## Schritte

1. Fachliche Ebene der Messwerte definieren.
2. Beschreibungen mit eindeutigen Schlüsseln als Dimension aufbauen.
3. Dimensionen über 1:n mit Fakten verbinden.

## Beispiel

Fakt: Konto, Stichtag, Produkt-ID, Betrag. Dimension: Produkt-ID und Produktgruppe, je ID einmal.

## Typischer Fehler

Monatsplan und tägliche Kontobestände in einer einzigen Tabelle vermischen.
