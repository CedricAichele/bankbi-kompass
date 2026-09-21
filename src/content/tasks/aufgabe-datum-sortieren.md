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
    "excel-datum",
    "dax-jahr-monat"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/year-function-dax",
    "https://learn.microsoft.com/en-us/dax/month-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

April steht vor Februar oder Jahre werden vermischt.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [YEAR und MONTH: Kalenderattribute-Anleitung](#/wissen/dax-jahr-monat). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Datum | Neugeschäft | Bestand |
| --- | --- | --- |
| 28.02.2025 | 9 | 90 |
| 31.01.2026 | 10 | 100 |
| 28.02.2026 | 15 | 120 |

### Aktion

Jahr, Monat und jahresübergreifenden Sortierschlüssel aus dem Datum ableiten.

```dax
Jahr = YEAR ( Demo_Datum[Date] )
MonatNr = MONTH ( Demo_Datum[Date] )
JahrMonatSort = YEAR ( Demo_Datum[Date] ) * 100 + MONTH ( Demo_Datum[Date] )
```

### Nachher · Beispielergebnis

28.02.2026 → Jahr 2026, Monat 2, Sortierschlüssel 202602.

## Typischer Fehler

Nur nach Monatsnamen sortieren oder Januar verschiedener Jahre zusammenfassen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Datum / Monat falsch sortiert](#/wissen/datum-sortieren) · [Visual nach Wert oder Kategorie sortieren](#/wissen/visual-sortieren) |
| Excel           | [Datumswerte korrigieren](#/wissen/excel-datum)                                                                                    |
| IDA / Reporting | [Liste sortieren](#/wissen/ida-sortieren); generisches Konzept                                                                     |

## Ergebnis

YEAR und MONTH leiten numerische Kalenderattribute aus einem Datum ab. Für eine Monatsachse brauchst du zusätzlich das Jahr.

## Warum funktioniert das?

Jahr × 100 + Monat hält Jahr und Monat in chronologischer Reihenfolge. Ein Monatsname allein unterscheidet keine Jahre.

## Plausibilitätscheck

28.02.2026 → Jahr 2026, Monat 2, Sortierschlüssel 202602. Prüfe außerdem einen Zeitraum ohne Daten.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
