---
{
  "id": "star-schema",
  "slug": "star-schema",
  "titel": "Star Schema aufbauen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ordne eindeutige Dimensionen um getrennte Faktentabellen an. Jede Faktentabelle hat eine klar definierte Datenebene.",
  "ort": "Power BI → Modellansicht",
  "tags": ["Star Schema aufbauen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["fakt-dimension", "beziehungen", "datumstabelle"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst verständliche Filterwege über Produkt, Datum und Segment.

## Schritte

1. Fakten und Dimensionen trennen.
2. Je Dimension den eindeutigen Schlüssel prüfen.
3. Aktive 1:n-Beziehungen von den Dimensionen zu den Fakten erstellen.

## Beispiel

Demo_Datum und Demo_Produkt filtern Demo_Bestand. Ein Monatsplan bleibt eine eigene Faktentabelle mit passender Ebene.

## Typischer Fehler

Planwerte durch einen Join pro Konto wiederholen und danach aufsummieren.
