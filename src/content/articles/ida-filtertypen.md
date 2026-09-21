---
{
  "id": "ida-filtertypen",
  "slug": "ida-filtertypen",
  "titel": "Text-, Zahlen- und Datumsfilter",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche Werte in ihrem tatsächlichen Datentyp. Eine formatierte Anzeige ist keine verlässliche Filterbasis.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Text-, Zahlen- und Datumsfilter"
  ],
  "synonyme": [
    "textfilter",
    "zahlenfilter",
    "datumsfilter"
  ],
  "verwandteThemen": [
    "ida-filterebene",
    "ida-parameter-typ",
    "ida-filter",
    "ida-null"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Datums- oder Betragsfilter liefert unerwartete Zeilen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Konkreter IDA-Menüweg nicht öffentlich belegt. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Prüfe Feldtypen: Kennung Text, Zeitpunkt Datum/Uhrzeit, Betrag Zahl.
2. Formuliere Monatsgrenzen als Beginn einschließlich und nächsten Monatsbeginn ausschließlich.
3. Notiere die fachliche Regel: **Zeitpunkt >= 01.03.2026 UND Zeitpunkt < 01.04.2026.**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Kennung | Zeitpunkt | Betrag |
| --- | --- | --- |
| 0012 | 31.03.2026 18:00 | 100 |
| 0013 | 01.04.2026 00:00 | 20 |

### Aktion

```text
Pseudologik: Zeitpunkt >= 01.03.2026 UND Zeitpunkt < 01.04.2026.
```

### Nachher · Beispielergebnis

| Kennung | Betrag |
| --- | --- |
| 0012 | 100 |

## Ergebnis

Vergleiche Werte in ihrem tatsächlichen Datentyp. Eine formatierte Anzeige ist keine verlässliche Filterbasis.

## Warum funktioniert das?

Ein halboffenes Zeitintervall schließt den gesamten letzten Tag ein, ohne eine maximale Uhrzeit erfinden zu müssen. Zahlen- und Textvergleiche folgen unterschiedlichen Ordnungen.

## Typischer Fehler

Text „100“ und „20“ lexikalisch statt numerisch vergleichen.

## Plausibilitätscheck

31.03. um 18 Uhr bleibt enthalten; 01.04. um Mitternacht nicht.
