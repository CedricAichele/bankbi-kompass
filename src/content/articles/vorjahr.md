---
{
  "id": "vorjahr",
  "slug": "vorjahr",
  "titel": "Vorjahr berechnen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "Verschiebe den aktuellen Datumsbereich ins Vorjahr und werte dort dieselbe Kennzahl aus.",
  "ort": "Power BI → Neues Measure; markierte Datumstabelle mit aktiver Beziehung",
  "tags": [
    "Vorjahr berechnen",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "Vorjahr"
  ],
  "verwandteThemen": [
    "datumstabelle",
    "stichtag",
    "ytd",
    "pq-datum"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax",
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nNeugeschaeft Vorjahr = CALCULATE ( [Neugeschaeft], SAMEPERIODLASTYEAR ( Kalender[Date] ) )\n```"
}
---

## Wann brauche ich das?

Du willst Bewegungen nach Zeitraum filtern und Jahreswerte reproduzierbar vergleichen.

## Voraussetzungen

Eine vorhandene Faktentabelle mit Bewegungsbeträgen, ein additives Basismeasure und eine vollständige, markierte Datumstabelle mit aktiver 1:*-Beziehung zum Faktendatum. Die Einrichtung erklärt die verlinkte Datumstabellen-Anleitung.

## Schritte

1. Prüfe das Basismeasure zunächst für einen einzelnen Monat. Verwende Datumsfelder aus der Datumstabelle für Filter und Achsen.
2. Wähle **Modellierung → Neues Measure** und gib die CALCULATE/SAMEPERIODLASTYEAR-Formel aus dem Beispiel ein. Passe Basismeasure und Datumsspalte an dein Modell an.
3. CALCULATE erhält die Basiskennzahl und die von SAMEPERIODLASTYEAR verschobene Datumsmenge. Prüfe, ob für diesen Vorjahreszeitraum tatsächlich Daten vorliegen.
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
Neugeschaeft Vorjahr = CALCULATE ( [Neugeschaeft], SAMEPERIODLASTYEAR ( Kalender[Date] ) )
```

### Nachher · Beispielergebnis

Februar 2026: 9. Januar bis Februar 2026 gemeinsam: 17. März 2026: BLANK, weil es keine Märzbewegung 2025 gibt.

## Ergebnis

Die Kennzahl wird für einen entsprechend verschobenen Zeitraum des Vorjahres ausgewertet.

## Warum funktioniert das?

SAMEPERIODLASTYEAR liefert die verschobene Datumsmenge. CALCULATE wertet das Basismeasure unter dieser Datumauswahl aus. Verglichen werden gleiche Zeiträume.

## Typischer Fehler

**Symptom:** leerer Vorjahreswert oder falsches YTD. **Ursache:** Kalender endet vor dem Vorjahr, inaktive Beziehung, Datum mit Uhrzeit oder Faktendatum als Slicer. **Lösung:** Datentyp, Zeitraum und Filterweg prüfen. Bestände niemals wie Bewegungen kumulieren.

## Plausibilitätscheck

Basis Februar 2026 = 15; Vorjahr Februar = 9; YTD Februar = 25. Prüfe jede Zahl einzeln, bevor du eine Abweichung berechnest.

## Argumente verstehen

| Argument | Bedeutung |
| --- | --- |
| Basiskennzahl | Wird im verschobenen Datumsfilter erneut berechnet. |
| Datumsspalte | Der aktuelle Zeitraum wird über den Kalender in den Vergleichszeitraum übertragen. |
