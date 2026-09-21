---
{
  "id": "aufgabe-kriterien",
  "slug": "aufgabe-kriterien",
  "titel": "Mehrere Kriterien gleichzeitig anwenden",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Formuliere jede Bedingung und entscheide bewusst zwischen UND und ODER.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Mehrere Kriterien gleichzeitig anwenden"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "zaehlenwenns",
    "summewenns"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "aufgabe",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/sumifs-function"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Mehrere Kriterien gleichzeitig anwenden.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [SUMMEWENNS-Anleitung](#/wissen/summewenns). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

F2 = P001; G2 = A

### Aktion

```excel
=SUMMEWENNS(D2:D4;A2:A4;F2;C2:C4;G2)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 1000 |

## Ergebnis

Beträge summieren, deren Zeilen alle Bedingungen erfüllen.

## Typischer Fehler

Zwei Bedingungen als ODER interpretieren oder die Bereiche um eine Zeile verschieben.

## Vergleich

Excel: ZÄHLENWENNS/SUMMEWENNS. Power Query: verknüpfte Zeilenfilter. Reporting: explizite Klammern.

## Warum funktioniert das?

Die Kriterien wirken als UND. Nur K001 gehört zugleich zu P001 und Segment A.

## Plausibilitätscheck

Erwartete Ausgabe: **1000**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
