---
{
  "id": "aufgabe-null",
  "slug": "aufgabe-null",
  "titel": "NULL und fehlende Werte behandeln",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Unterscheide unbekannt, nicht zutreffend und echte Null. Die Ersatzregel hängt von dieser Bedeutung ab.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "NULL und fehlende Werte behandeln"
  ],
  "synonyme": [
    "nullwerte",
    "null behandeln"
  ],
  "verwandteThemen": [
    "nullwerte",
    "dax-coalesce",
    "excel-leere-zellen",
    "ida-null"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/replace-values"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Leere Werte erzeugen Lücken oder unklare Kennzahlen.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Nullwerte behandeln-Anleitung](#/wissen/nullwerte). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Konto | Bestand | Kommentar |
| --- | --- | --- |
| K001 | null | unbekannt |
| K002 | 0 | gemessen |
| K003 | 500 | vorhanden |

### Aktion

Unbekannten Bestand bewusst erhalten; gemessene 0 bleibt 0.

### Nachher · Beispielergebnis

| Konto | Bestand |
| --- | --- |
| K001 | null |
| K002 | 0 |
| K003 | 500 |

## Typischer Fehler

Nullwerte blind ersetzen oder ganze Zeilen aufgrund eines optionalen Kommentars entfernen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Power BI        | [Nullwerte behandeln](#/wissen/nullwerte) · [COALESCE und ISBLANK: fehlende Ergebnisse behandeln](#/wissen/dax-coalesce) |
| Excel           | [Leere Zellen und Fehlerwerte prüfen](#/wissen/excel-leere-zellen)                                                       |
| IDA / Reporting | [NULL prüfen und behandeln](#/wissen/ida-null); generisches Konzept                                                      |

## Ergebnis

Fehlende Werte werden nach Bedeutung erhalten, ersetzt oder als ausgeschlossene Datensätze nachgewiesen.

## Warum funktioniert das?

NULL beschreibt Abwesenheit. Leerer Text ist ein vorhandener Text mit Länge null. Wird ein unbekannter Betrag durch 0 ersetzt, ändert sich etwa der Durchschnitt von 250 auf rund 166,67; die Daten sehen vollständiger aus, als sie sind.

## Plausibilitätscheck

Im Beispiel ein unbekannter Betrag, zwei vorhandene Zahlen, Summe 500. Das Ergebnis muss die fehlende Information weiterhin erkennen lassen.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
