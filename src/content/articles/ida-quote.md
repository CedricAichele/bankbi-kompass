---
{
  "id": "ida-quote",
  "slug": "ida-quote",
  "titel": "Quote berechnen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Gesamtquote entsteht aus Gesamtzähler geteilt durch Gesamtnenner.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Quote berechnen",
    "Marktsteuerung",
    "Neugeschäft"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "divide",
    "ida-berechnung",
    "ida-anzahl",
    "ida-aggregation"
  ],
  "kontexte": [
    "Marktsteuerung",
    "Neugeschäft"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-summarizing-data-relationally"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du möchtest den Anteil einer fachlich definierten Teilmenge bestimmen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Zähler und Nenner mit demselben Zeitraum und derselben Zähleinheit definieren.
2. Nenner 0 oder fehlend ausdrücklich behandeln und eine leere beziehungsweise gekennzeichnete Ausgabe festlegen.
3. Notiere die fachliche Regel: **Erfüllte Fälle und alle Fälle summieren; anschließend dividieren**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Gruppe | Erfüllt | Alle |
| --- | --- | --- |
| A | 8 | 10 |
| B | 1 | 2 |

### Aktion

```text
Pseudologik: Erfüllte Fälle und alle Fälle summieren; anschließend dividieren.
```

### Nachher · Beispielergebnis

| Ebene | Quote |
| --- | --- |
| A | 80 % |
| B | 50 % |
| Gesamt | 9 / 12 = 75 % |

## Ergebnis

Eine Gesamtquote entsteht aus Gesamtzähler geteilt durch Gesamtnenner.

## Warum funktioniert das?

Die Gesamtquote gewichtet nach den Fallzahlen. Ein einfacher Mittelwert der Gruppenquoten würde kleinen und großen Gruppen dasselbe Gewicht geben.

## Typischer Fehler

80 % und 50 % ungewichtet mitteln: 65 % ist hier nicht die Gesamtquote.

## Plausibilitätscheck

75 %, nicht (80 % + 50 %) / 2 = 65 %.
