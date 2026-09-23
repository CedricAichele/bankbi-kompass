---
{
  "id": "aufgabe-quote",
  "slug": "aufgabe-quote",
  "titel": "Prozent und Quote korrekt berechnen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Berechne die Quote aus passendem Gesamtzähler und Gesamtnenner und formatiere sie als Prozent.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Prozent und Quote korrekt berechnen"
  ],
  "synonyme": [
    "prozent",
    "quote"
  ],
  "verwandteThemen": [
    "divide",
    "prozentformat"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/divide-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du brauchst Planerreichung oder den Anteil einer Produktgruppe.

## Schritte

1. Definiere Zähler und Nenner auf derselben Grundgesamtheit und demselben Zeitraum.
2. Summiere erfüllte Fälle und alle Fälle getrennt.
3. Berechne Gesamtzähler geteilt durch Gesamtnenner, etwa mit [DIVIDE](#/wissen/divide). Bei Nenner 0 eine fachliche Regel für ein fehlendes Ergebnis festlegen.
4. Formatiere die Ergebniszahl als Prozent; nicht zusätzlich mit 100 multiplizieren.
5. Prüfe Gruppen und Gesamtquote separat. Gruppenquoten nicht ungewichtet mitteln.

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

## Typischer Fehler

80 % und 50 % ungewichtet mitteln: 65 % ist hier nicht die Gesamtquote.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                            |
| --------------- | --------------------------------------------------------------------------------------------- |
| Power BI        | [DIVIDE: Quote berechnen](#/wissen/divide) · [0,95 als 95 % anzeigen](#/wissen/prozentformat) |
| Excel           | [SUMMEWENNS](#/wissen/summewenns)                                                             |

## Ergebnis

Eine Gesamtquote entsteht aus Gesamtzähler geteilt durch Gesamtnenner.

## Warum funktioniert das?

Die Gesamtquote gewichtet nach den Fallzahlen. Ein einfacher Mittelwert der Gruppenquoten würde kleinen und großen Gruppen dasselbe Gewicht geben.

## Plausibilitätscheck

75 %, nicht (80 % + 50 %) / 2 = 65 %.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
