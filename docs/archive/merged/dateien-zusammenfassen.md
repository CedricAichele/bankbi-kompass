---
{
  "id": "dateien-zusammenfassen",
  "slug": "dateien-zusammenfassen",
  "titel": "Mehrere Dateien kombinieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nutze einen wiederholbaren Ordnerimport für Dateien mit gleichem Aufbau.",
  "ort": "Power BI und Excel → Power Query → Aus Ordner",
  "tags": [
    "Mehrere Dateien kombinieren",
    "Reporting"
  ],
  "synonyme": [
    "mehrere Dateien zusammenführen"
  ],
  "verwandteThemen": [
    "dateien-kombinieren",
    "anhaengen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/connectors/folder"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Monatliche Dateien sollen ohne manuelles Kopieren gemeinsam ausgewertet werden.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Mehrere Dateien kombinieren-Anleitung](#/wissen/dateien-kombinieren). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

Januar.csv: Konto/Betrag mit K001/10 und K002/20. Februar.csv: dieselben Spalten mit K001/15.

### Aktion

Alle passenden CSV-Dateien mit derselben Transformation lesen und anfügen.

### Nachher · Beispielergebnis

| Quelldatei | Konto | Betrag |
| --- | --- | --- |
| Januar.csv | K001 | 10 |
| Januar.csv | K002 | 20 |
| Februar.csv | K001 | 15 |

## Typischer Fehler

Eine zufällige Beispieldatei wählen und Strukturabweichungen mit Fehler entfernen verbergen.

## Vergleich

| Werkzeug | Passender Einstieg                                                                                    |
| -------- | ----------------------------------------------------------------------------------------------------- |
| Power BI | [Mehrere Dateien kombinieren](#/wissen/dateien-kombinieren) · [Tabellen anhängen](#/wissen/anhaengen) |
| Excel    | [Mehrere Dateien kombinieren](#/wissen/dateien-kombinieren)                                           |

## Ergebnis

Eine gemeinsame Abfrage enthält die Zeilen aller ausgewählten, kompatiblen Dateien.

## Warum funktioniert das?

Die Transformation wird anhand einer Datei definiert und für jede gefilterte Datei wiederverwendet. Deshalb ist ein einheitlicher Aufbau entscheidend; Append sammelt anschließend die Ergebnisse.

## Plausibilitätscheck

2 + 1 = 3 Zeilen und Summe 45. Jede Quelldatei ist im Ergebnis nachvollziehbar.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
