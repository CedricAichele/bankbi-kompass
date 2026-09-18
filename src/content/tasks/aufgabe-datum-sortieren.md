---
{
  "id": "aufgabe-datum-sortieren",
  "slug": "aufgabe-datum-sortieren",
  "titel": "Datum korrekt sortieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Sorge für echte Datumswerte und einen chronologischen Sortierschlüssel. Monatsnamen allein genügen nicht.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Datum korrekt sortieren"
  ],
  "synonyme": [
    "datum sortieren"
  ],
  "verwandteThemen": [
    "datum-sortieren",
    "visual-sortieren",
    "excel-datum"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

April steht vor Februar oder Jahre werden vermischt.

## Schritte

1. Datumstyp beziehungsweise Textwerte prüfen.
2. Jahr-Monat-Schlüssel bilden.
3. Anzeige nach dem Schlüssel sortieren und Jahreswechsel testen.
4. Öffne die [konkrete Datum / Monat falsch sortiert-Anleitung](#/wissen/datum-sortieren) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Prüfe zusätzlich Dezember 2025 vor Januar 2026.

## Beispiel

Dezember 2025 steht vor Januar 2026; nicht umgekehrt.

## Typischer Fehler

Nur Monatsnummer oder Monatsname verwenden.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Datum / Monat falsch sortiert](#/wissen/datum-sortieren) · [Visual nach Wert oder Kategorie sortieren](#/wissen/visual-sortieren) |
| Excel           | [Datumswerte korrigieren](#/wissen/excel-datum)                                                                                    |
| IDA / Reporting | [Liste sortieren](#/wissen/ida-sortieren); generisches Konzept                                                                     |

## Ergebnis

Januar, Februar, März werden über 1, 2, 3 sortiert.

## Warum funktioniert das?

Textsortierung ist keine Zeitordnung.

## Plausibilitätscheck

Prüfe zusätzlich Dezember 2025 vor Januar 2026.
