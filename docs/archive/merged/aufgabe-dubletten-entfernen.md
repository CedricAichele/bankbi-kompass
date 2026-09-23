---
{
  "id": "aufgabe-dubletten-entfernen",
  "slug": "aufgabe-dubletten-entfernen",
  "titel": "Dubletten gezielt entfernen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entferne nur fachlich identische Duplikate. Für mehrere gültige Zeilen brauchst du eine Auswahl- oder Aggregationsregel.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Dubletten gezielt entfernen"
  ],
  "synonyme": [
    "duplikate entfernen"
  ],
  "verwandteThemen": [
    "dubletten",
    "excel-dubletten-entfernen",
    "ida-dubletten"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/working-with-duplicates"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Lieferung enthält versehentlich wiederholte Datensätze.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Dubletten prüfen und entfernen-Anleitung](#/wissen/dubletten). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Stichtag | Bestand |
| --- | --- | --- | --- |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K002 | 31.01.2026 | 2000 |

### Aktion

Identisches Duplikat nach Konto + Stichtag entfernen.

### Nachher · Beispielergebnis

| Kunde | Konto | Stichtag | Bestand |
| --- | --- | --- | --- |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K002 | 31.01.2026 | 2000 |

## Typischer Fehler

Eine vorherige Sortierung garantiert nicht allgemein, welcher Datensatz beim Entfernen erhalten bleibt. Unterschiedliche Versionen zuerst fachlich auflösen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Dubletten prüfen und entfernen](#/wissen/dubletten) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [Duplikate entfernen](#/wissen/excel-dubletten-entfernen)                                                               |
| IDA / Reporting | [Dubletten erkennen](#/wissen/ida-dubletten); generisches Konzept                                                       |

## Ergebnis

Pro gewählter Schlüsselkombination bleibt eine Zeile übrig.

## Warum funktioniert das?

Die markierten Spalten definieren Gleichheit. Kunde allein wäre zu grob: Eine Person kann mehrere gültige Konten besitzen. Das Entfernen ist keine fachliche Entscheidung über den neuesten Datensatz.

## Plausibilitätscheck

Drei Zeilen werden zwei; die um ein Duplikat erhöhte Summe 4.000 wird korrekt zu 3.000.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
