---
{
  "id": "pq-fehler",
  "slug": "pq-fehler",
  "titel": "Fehlerhafte Werte prüfen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Konvertierungsfehler ist ein Hinweis auf unpassende Daten oder Typen. Untersuche die Ursache, bevor du Werte ersetzt.",
  "ort": "Power Query → Fehlerzelle / Spaltenkontextmenü",
  "tags": ["Fehlerhafte Werte prüfen"],
  "synonyme": ["error power query", "fehlerhafte werte"],
  "verwandteThemen": ["datenbereinigung", "nullwerte"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Betragsspalte enthält nach einer Typänderung Error.

## Schritte

1. Den fehlerhaften Schritt und die betroffene Spalte ermitteln.
2. Fehlerdetails prüfen; Gebietsschema und ursprünglichen Wert vergleichen.
3. Ursache korrigieren; nur mit fachlicher Regel Fehler ersetzen oder Zeilen entfernen.

## Beispiel

1.250,50 wird mit deutschem Gebietsschema zur Zahl; „unbekannt“ braucht eine ausdrückliche Fehlwertregel.

## Typischer Fehler

Fehler pauschal durch 0 ersetzen und dadurch fehlende Bestände als echte Nullwerte ausweisen.
