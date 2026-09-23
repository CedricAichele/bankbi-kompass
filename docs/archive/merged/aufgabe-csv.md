---
{
  "id": "aufgabe-csv",
  "slug": "aufgabe-csv",
  "titel": "CSV korrekt öffnen und kontrollieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Importiere CSV mit bewusst gewählten Typen statt über unkontrollierte automatische Erkennung.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "CSV korrekt öffnen und kontrollieren"
  ],
  "synonyme": [
    "csv"
  ],
  "verwandteThemen": [
    "csv-import",
    "ida-nullstellen",
    "excel-zahl-text"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/connectors/text-csv"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Kennungen, Umlaute oder Beträge ändern sich beim Öffnen.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [CSV korrekt importieren-Anleitung](#/wissen/csv-import). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

```text
Konto;Betrag;Datum
00123;1.250,50;31.01.2026
00124;20,00;01.02.2026
```

### Aktion

Semikolon lesen, Kennung als Text erhalten, deutsche Zahl und Datum umwandeln.

### Nachher · Beispielergebnis

| Konto (Text) | Betrag (Zahl) | Datum |
| --- | --- | --- |
| 00123 | 1250,50 | 31.01.2026 |
| 00124 | 20,00 | 01.02.2026 |

## Typischer Fehler

Die Vorschau mit einer einzigen langen Spalte akzeptieren oder 00123 erst nach einer Zahlenumwandlung auf Text setzen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Power BI        | [CSV korrekt importieren](#/wissen/csv-import) · [Datentyp ändern / Daten bereinigen](#/wissen/datenbereinigung) |
| Excel           | [CSV korrekt importieren](#/wissen/csv-import)                                                                   |
| IDA / Reporting | [CSV für die Weiterverarbeitung](#/wissen/ida-csv); generisches Konzept                                          |

## Ergebnis

Die Datei wird mit korrekt erkannten Spalten, Zeichen und Datentypen zur Tabelle.

## Warum funktioniert das?

CSV enthält Text und keine verlässlichen Excel-Zelltypen. Trennzeichen definieren Spalten, Codierung definiert Zeichen, Gebietsschema steuert die Interpretation von Zahl- und Datumstexten.

## Plausibilitätscheck

Zwei Datenzeilen, drei Spalten, beide Kennungen fünfstellig; Summe 1270,50.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
