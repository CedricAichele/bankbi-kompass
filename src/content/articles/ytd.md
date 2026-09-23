---
{
  "id": "ytd",
  "slug": "ytd",
  "titel": "YTD berechnen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "YTD kumuliert eine Bewegungskennzahl seit Jahresbeginn bis zum letzten Datum der Auswahl.",
  "ort": "Power BI → Neues Measure; markierte Datumstabelle mit aktiver Beziehung",
  "tags": [
    "YTD berechnen",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "YTD"
  ],
  "verwandteThemen": [
    "datumstabelle",
    "stichtag",
    "vorjahr",
    "pq-datum"
  ],
  "kontexte": [
    "Neugeschäft",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax",
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nNeugeschaeft YTD = TOTALYTD ( [Neugeschaeft], Kalender[Date] )\n```"
}
---

## Wann brauche ich das?

Du willst Bewegungen nach Zeitraum filtern und Jahreswerte reproduzierbar vergleichen.

## Voraussetzungen

Eine vorhandene Faktentabelle mit Bewegungsbeträgen, ein additives Basismeasure und eine vollständige, markierte Datumstabelle mit aktiver 1:*-Beziehung zum Faktendatum. Die Einrichtung erklärt die verlinkte Datumstabellen-Anleitung.

## Schritte

1. Prüfe das Basismeasure zunächst für einen einzelnen Monat. Verwende Datumsfelder aus der Datumstabelle für Filter und Achsen.
2. Wähle **Modellierung → Neues Measure** und gib die TOTALYTD-Formel aus dem Beispiel ein. Passe Basismeasure und Datumsspalte an dein Modell an.
3. TOTALYTD erhält als erstes Argument die zu kumulierende Kennzahl, als zweites die Kalenderspalte. Prüfe die Jahresdefinition; das Beispiel verwendet das Kalenderjahr.
4. Zeige Basismeasure und Vergleichsmeasure gemeinsam. Wähle im Beispiel über **Kalender[Date]** den Zeitraum 01.02.2026 bis 28.02.2026.
5. Vergleiche das Ergebnis mit den unten angegebenen Kontrollwerten. Teste anschließend März sowie einen Zeitraum ohne Daten.

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
Neugeschaeft = SUM ( Bewegungen[Betrag] )
```

```dax
Neugeschaeft YTD = TOTALYTD ( [Neugeschaeft], Kalender[Date] )
```

### Nachher · Beispielergebnis

Februar 2026: 25 (10 + 15). März 2026: 37. Februar 2025: 17.

## Ergebnis

Eine geeignete Kennzahl wird vom Jahresbeginn bis zum letzten Datum des aktuellen Kontexts ausgewertet.

## Warum funktioniert das?

TOTALYTD erhält zuerst das Basismeasure, dann die Datumsspalte. Es erweitert die Datumauswahl vom Jahresanfang bis zum letzten sichtbaren Datum.

## Typischer Fehler

**Symptom:** leerer Vorjahreswert oder falsches YTD. **Ursache:** Kalender endet vor dem Vorjahr, inaktive Beziehung, Datum mit Uhrzeit oder Faktendatum als Slicer. **Lösung:** Datentyp, Zeitraum und Filterweg prüfen. Bestände niemals wie Bewegungen kumulieren.

## Plausibilitätscheck

Basis Februar 2026 = 15; Vorjahr Februar = 9; YTD Februar = 25. Prüfe jede Zahl einzeln, bevor du eine Abweichung berechnest.

## Argumente verstehen

| Argument | Bedeutung |
| --- | --- |
| Basiskennzahl | Sollte über die Zeit sinnvoll kumulierbar sein; Bestände sind es meist nicht. |
| Datumsspalte | Stammt bei klassischer Zeitintelligenz aus der vollständigen, markierten Datumstabelle. |
