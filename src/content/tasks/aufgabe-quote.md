---
{
  "id": "aufgabe-quote",
  "slug": "aufgabe-quote",
  "titel": "Prozent und Quote korrekt berechnen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
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
    "prozentformat",
    "ida-quote"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-summarizing-data-relationally"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du brauchst Planerreichung oder den Anteil einer Produktgruppe.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Quote berechnen-Anleitung](#/wissen/ida-quote). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

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
| IDA / Reporting | [Quote berechnen](#/wissen/ida-quote); generisches Konzept                                    |

## Ergebnis

Eine Gesamtquote entsteht aus Gesamtzähler geteilt durch Gesamtnenner.

## Warum funktioniert das?

Die Gesamtquote gewichtet nach den Fallzahlen. Ein einfacher Mittelwert der Gruppenquoten würde kleinen und großen Gruppen dasselbe Gewicht geben.

## Plausibilitätscheck

75 %, nicht (80 % + 50 %) / 2 = 65 %.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
