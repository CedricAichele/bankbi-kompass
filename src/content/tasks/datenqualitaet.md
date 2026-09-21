---
{
  "id": "datenqualitaet",
  "slug": "datenqualitaet",
  "titel": "Daten bereinigen und prüfen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Beginne mit Schlüsseln und Typen; kontrolliere danach fehlende Werte, Dubletten und Summen.",
  "ort": "Power Query / Excel; IDA-Ergebnis vor Export kontrollieren",
  "tags": [
    "Daten bereinigen und prüfen",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "datenbereinigung",
    "dubletten",
    "ida-join-pruefen"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/data-types"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine neue Liste soll zuverlässig weiterverarbeitet werden.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Datentyp ändern / Daten bereinigen-Anleitung](#/wissen/datenbereinigung). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Kennung als Zahl | Betrag als Text | Datum als Text |
| --- | --- | --- |
| 123 | 1.250,50 | 31.01.2026 |

### Aktion

Ursprüngliche Kennung "00123" aus der Quelle als Text erhalten; Betrag und Datum passend interpretieren.

### Nachher · Beispielergebnis

| Kennung (Text) | Betrag (Zahl) | Datum |
| --- | --- | --- |
| 00123 | 1250,50 | 31.01.2026 |

## Typischer Fehler

Nachträgliches Formatieren mit Nullen repariert keine verlorene ursprüngliche Kennung. Falsches Gebietsschema kann Zahlen falsch lesen oder Fehler erzeugen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Datentyp ändern / Daten bereinigen](#/wissen/datenbereinigung) · [Fehlerhafte Werte prüfen](#/wissen/pq-fehler) |
| Excel           | [Excel-Liste für Auswertung vorbereiten](#/wissen/excel-liste-vorbereiten)                                       |
| IDA / Reporting | [Ergebnis vor / nach Join plausibilisieren](#/wissen/ida-join-pruefen); generisches Konzept                      |

## Ergebnis

Jede Spalte erhält einen Typ, der ihre fachliche Verwendung unterstützt.

## Warum funktioniert das?

Zahlentypen ermöglichen Rechnen, Datumstypen zeitliche Vergleiche und Texttypen erhalten Kennungen. Ein Format verändert nur die Anzeige; eine Typumwandlung interpretiert den Inhalt.

## Plausibilitätscheck

00123 enthält fünf Zeichen; der Betrag lässt sich summieren; das Datum nach Monaten sortieren.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
