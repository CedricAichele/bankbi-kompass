---
{
  "id": "aufgabe-vorjahr",
  "slug": "aufgabe-vorjahr",
  "titel": "Vorjahr berechnen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche dieselbe Kennzahl für fachlich gleichartige Zeiträume oder Stichtage.",
  "ort": "Power BI: Zeitmeasure · Excel: Datumskriterien · IDA: Vergleichsauswahl",
  "tags": [
    "Vorjahr berechnen",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "Vorjahr"
  ],
  "verwandteThemen": [
    "vorjahr",
    "datumstabelle",
    "summewenns"
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

Eine Entwicklung soll gegenüber dem Vorjahr eingeordnet werden.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Vorjahr berechnen-Anleitung](#/wissen/vorjahr). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
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
Neugeschaeft Vorjahr = CALCULATE ( [Neugeschaeft], SAMEPERIODLASTYEAR ( Kalender[Date] ) )
```

### Nachher · Beispielergebnis

Februar 2026: 9. Januar bis Februar 2026 gemeinsam: 17. März 2026: BLANK, weil es keine Märzbewegung 2025 gibt.

## Typischer Fehler

**Symptom:** leerer Vorjahreswert oder falsches YTD. **Ursache:** Kalender endet vor dem Vorjahr, inaktive Beziehung, Datum mit Uhrzeit oder Faktendatum als Slicer. **Lösung:** Datentyp, Zeitraum und Filterweg prüfen. Bestände niemals wie Bewegungen kumulieren.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ |
| Power BI        | [Vorjahr berechnen](#/wissen/vorjahr) · [DATEADD und SAMEPERIODLASTYEAR](#/wissen/dateadd) |
| Excel           | [SUMMEWENNS](#/wissen/summewenns)                                                          |
| IDA / Reporting | [Text-, Zahlen- und Datumsfilter](#/wissen/ida-filtertypen); generisches Konzept           |

## Ergebnis

Die Kennzahl wird für einen entsprechend verschobenen Zeitraum des Vorjahres ausgewertet.

## Warum funktioniert das?

SAMEPERIODLASTYEAR liefert die verschobene Datumsmenge. CALCULATE wertet das Basismeasure unter dieser Datumauswahl aus. Verglichen werden gleiche Zeiträume.

## Plausibilitätscheck

Basis Februar 2026 = 15; Vorjahr Februar = 9; YTD Februar = 25. Prüfe jede Zahl einzeln, bevor du eine Abweichung berechnest.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
