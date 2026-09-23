---
{
  "id": "ida-filter-pruefen",
  "slug": "ida-filter-pruefen",
  "titel": "Filterlogik prüfen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe jeden Filter mit einer kleinen Wahrheitstabelle und bekannten Grenzfällen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Filterlogik prüfen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-filter",
    "ida-null",
    "ida-bedingungen"
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

Das Ergebnis enthält unerwartete oder zu wenige Zeilen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Lege für jede Testzeile vorab die erwartete Entscheidung fest.
2. Vergleiche die tatsächliche Ausgabe und ändere immer nur eine Bedingung gleichzeitig.
3. Notiere die fachliche Regel: **Betrag > 0; fehlende Werte separat ausweisen**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Betrag |
| --- |
| -1 |
| 0 |
| 1 |
| NULL |

### Aktion

```text
Pseudologik: Betrag > 0; fehlende Werte separat ausweisen.
```

### Nachher · Beispielergebnis

| Betrag | Ergebnis |
| --- | --- |
| -1 | Nein |
| 0 | Nein |
| 1 | Ja |
| NULL | Separat prüfen |

## Ergebnis

Prüfe jeden Filter mit einer kleinen Wahrheitstabelle und bekannten Grenzfällen.

## Warum funktioniert das?

Ein Test muss Unterschiede zwischen Grenzwert, positiver Bedingung und unbekannter Information sichtbar machen. Nur passende Daten zu testen kann einen falschen Filter nicht entlarven.

## Typischer Fehler

Nur positive Beispieldaten testen und Grenzfälle auslassen.

## Plausibilitätscheck

Nur Betrag 1 erfüllt den positiven Zahlenfilter.
