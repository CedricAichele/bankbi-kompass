---
{
  "id": "aufgabe-ytd",
  "slug": "aufgabe-ytd",
  "titel": "YTD berechnen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kumuliere additive Bewegungen seit Jahresbeginn bis zu einem festgelegten Enddatum.",
  "ort": "Power BI: DATESYTD · Excel: Datumsintervall · IDA: Zeitraumfilter",
  "tags": [
    "YTD berechnen",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "YTD"
  ],
  "verwandteThemen": [
    "ytd",
    "stichtag",
    "plan-ist"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables",
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax",
    "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du brauchst bisheriges Neugeschäft oder einen vergleichbaren Plan-Ist-Zeitraum.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [YTD berechnen-Anleitung](#/wissen/ytd). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Datum | Betrag |
| --- | --- |
| 15.01.2025 | 8 |
| 15.02.2025 | 9 |
| 15.01.2026 | 10 |
| 15.02.2026 | 15 |
| 15.03.2026 | 12 |


### Aktion

```dax
Kalender = CALENDAR ( DATE ( 2025, 1, 1 ), DATE ( 2026, 12, 31 ) )
```

```dax
Neugeschaeft = SUM ( Bewegungen[Betrag] )
```

```dax
Neugeschaeft YTD = TOTALYTD ( [Neugeschaeft], Kalender[Date] )
```

### Nachher · Beispielergebnis

Februar 2026: 25 (10 + 15). März 2026: 37. Februar 2025: 17.

## Typischer Fehler

**Symptom:** leerer Vorjahreswert oder falsches YTD. **Ursache:** Kalender endet vor dem Vorjahr, inaktive Beziehung, Datum mit Uhrzeit oder Faktendatum als Slicer. **Lösung:** Datentyp, Zeitraum und Filterweg prüfen. Bestände niemals wie Bewegungen kumulieren.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                   |
| --------------- | ------------------------------------------------------------------------------------ |
| Power BI        | [YTD berechnen](#/wissen/ytd) · [DATESYTD oder TOTALYTD](#/wissen/datesytd-totalytd) |
| Excel           | [SUMMEWENNS](#/wissen/summewenns)                                                    |
| IDA / Reporting | [Filter vor oder nach Aggregation](#/wissen/ida-filterebene); generisches Konzept    |

## Ergebnis

Eine geeignete Kennzahl wird vom Jahresbeginn bis zum letzten Datum des aktuellen Kontexts ausgewertet.

## Warum funktioniert das?

TOTALYTD erhält zuerst das Basismeasure, dann die Datumsspalte. Es erweitert die Datumauswahl vom Jahresanfang bis zum letzten sichtbaren Datum.

## Plausibilitätscheck

Basis Februar 2026 = 15; Vorjahr Februar = 9; YTD Februar = 25. Prüfe jede Zahl einzeln, bevor du eine Abweichung berechnest.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
