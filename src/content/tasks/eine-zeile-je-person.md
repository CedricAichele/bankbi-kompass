---
{
  "id": "eine-zeile-je-person",
  "slug": "eine-zeile-je-person",
  "titel": "Eine Zeile je Person",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine reine Personenliste braucht eindeutige IDs. Für zusätzliche Messwerte musst du je Person fachlich passend aggregieren.",
  "ort": "Power Query: Gruppieren · Excel: EINDEUTIG / PivotTable · IDA: Gruppierungskonzept",
  "tags": [
    "Eine Zeile je Person",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "mehrere konten pro kunde",
    "eine Zeile je Person",
    "einzigartige Kunden",
    "kunde mehrfach"
  ],
  "verwandteThemen": [
    "granularitaet",
    "distinctcount",
    "eins-zu-viele",
    "dubletten",
    "gruppieren"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/group-by",
    "https://learn.microsoft.com/en-us/dax/distinctcount-function-dax",
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Mehrere Konten zu einer Personenübersicht verdichten.

## Voraussetzungen

Ein vorhandener Datenbestand mit passender Zeilenebene. Tabellen- und Feldnamen im Beispiel auf die eigene Quelle übertragen.

## Schritte

1. Lege fest: eine Zeile pro Person am selben Stichtag; Detailkonten werden im Ergebnis nicht angezeigt.
2. Öffne die Daten in Power Query. Prüfe Bestand_EUR auf Zahl und Personennummer auf Text.
3. Wähle Personennummer → Start → Gruppieren nach.
4. Wähle Summe von Bestand_EUR und nenne das Ergebnis Personenbestand.
5. Bei mehreren Stichtagen ergänze Stichtag als Gruppierungsschlüssel; sonst vermischen sich Snapshots.
6. Vergleiche vier Personenzeilen und 9.000 Gesamtsumme. Bewahre die Detailabfrage für spätere Prüfungen auf.

## Beispiel

### Vorher · Beispieldaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

Siehe sechs Ausgangszeilen oben.

### Aktion

Wähle Personennummer → Start → Gruppieren nach.
Wähle Summe von Bestand_EUR und nenne das Ergebnis Personenbestand.

### Nachher · Beispielergebnis

P001 2.000, P002 2.000, P003 4.000, P004 1.000.

## Ergebnis

Eine reine Personenliste braucht eindeutige IDs. Für zusätzliche Messwerte musst du je Person fachlich passend aggregieren.

## Warum funktioniert das?

Gruppieren fasst Kontenzeilen zusammen. DISTINCT über die gesamte Tabelle würde die zwei unterschiedlichen Konten von P001 nicht zusammenfassen.

## Typischer Fehler

**Ursache und Lösung:** Dubletten nach Person löschen verliert einen der beiden echten Kontobeträge.

## Plausibilitätscheck

Vorher 6 Konten; nachher 4 Personen; Summe vorher = nachher = 9.000.

## Vergleich

Excel: Pivot mit Person in Zeilen und Summe Bestand. Power BI: Matrix + Measure erhält die Details im Modell. IDA: allgemeine Gruppenaggregation.
