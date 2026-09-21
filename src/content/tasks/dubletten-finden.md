---
{
  "id": "dubletten-finden",
  "slug": "dubletten-finden",
  "titel": "Dubletten finden",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Definiere zuerst die Kombination, die eindeutig sein muss. Dann markiere Mehrfachvorkommen und untersuche sie.",
  "ort": "Power Query: Gruppieren / Duplikate · Excel: ZÄHLENWENNS · IDA: Schlüsselprüfung",
  "tags": [
    "Dubletten finden",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "Dubletten"
  ],
  "verwandteThemen": [
    "dubletten",
    "excel-dubletten-finden",
    "ida-dubletten"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/find-and-remove-duplicates"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Wiederholungen sollen vor dem Weiterverarbeiten sichtbar werden.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Duplikate finden-Anleitung](#/wissen/excel-dubletten-finden). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

Kundenspalte auf doppelte Werte markieren.

### Nachher · Beispielergebnis

| Beispielergebnis |
| --- |
| P001 in beiden Zeilen markiert; P002 nicht markiert. |

## Typischer Fehler

Markierte Kundenzeilen ungeprüft löschen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Dubletten prüfen und entfernen](#/wissen/dubletten) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [Duplikate finden](#/wissen/excel-dubletten-finden)                                                                     |
| IDA / Reporting | [Dubletten erkennen](#/wissen/ida-dubletten); generisches Konzept                                                       |

## Ergebnis

Gleiche Zellwerte werden hervorgehoben; die Datensätze bleiben unverändert.

## Warum funktioniert das?

Die Prüfung betrachtet die markierte Spalte. Sie beantwortet nicht automatisch, ob komplette Datensätze doppelt sind.

## Plausibilitätscheck

Zwei Markierungen zeigen einen zweimal vorkommenden Kunden, nicht zwei fehlerhafte Konten.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
