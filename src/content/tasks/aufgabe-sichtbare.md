---
{
  "id": "aufgabe-sichtbare",
  "slug": "aufgabe-sichtbare",
  "titel": "Nur sichtbare Zeilen auswerten",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nutze TEILERGEBNIS(109;Bereich), wenn gefilterte und manuell ausgeblendete Beträge ausgeschlossen werden sollen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Nur sichtbare Zeilen auswerten"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "teilergebnis"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "aufgabe",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/subtotal-function",
    "https://support.microsoft.com/de-DE/Excel/functions/subtotal-function"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Nur sichtbare Zeilen auswerten.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [TEILERGEBNIS: gefilterte Zeilen auswerten-Anleitung](#/wissen/teilergebnis). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
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

Filter in Spalte C nur A

### Aktion

```excel
=TEILERGEBNIS(109;D2:D4)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 1500 |

## Ergebnis

Eine Summe für die nach Filterung sichtbaren Zeilen anzeigen.

## Typischer Fehler

Eine normale SUMME verwenden und erwarten, dass Filter die Berechnung einschränken.

## Vergleich

Excel: TEILERGEBNIS. Power BI: Measure im Filterkontext. Reporting: Filter vor Aggregation.

## Warum funktioniert das?

AutoFilter blendet K002 aus. Nur 1000 und 500 gehen in die sichtbare Summe ein.

## Plausibilitätscheck

Erwartete Ausgabe: **1500**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
