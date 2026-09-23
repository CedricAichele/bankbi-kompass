---
{
  "id": "aufgabe-lang-breit",
  "slug": "aufgabe-lang-breit",
  "titel": "Daten von lang nach breit",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Pivotieren erzeugt Spalten aus Kategorien. Zuerst muss klar sein, welche übrigen Felder eine Ergebniszeile bestimmen.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Daten von lang nach breit"
  ],
  "synonyme": [
    "lang nach breit"
  ],
  "verwandteThemen": [
    "pivotieren",
    "pivottable",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/pivot-columns"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Person soll je Produktgruppe eine Betragsspalte erhalten.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Pivotieren: von lang nach breit-Anleitung](#/wissen/pivotieren). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Monat | Betrag |
| --- | --- | --- |
| P001 | Jan | 10 |
| P001 | Feb | 15 |
| P002 | Jan | 20 |
| P002 | Feb | 25 |

### Aktion

Monat pivotieren; Betrag als Wert verwenden.

### Nachher · Beispielergebnis

| Kunde | Jan | Feb |
| --- | --- | --- |
| P001 | 10 | 15 |
| P002 | 20 | 25 |

## Typischer Fehler

Eine zusätzliche Detailspalte unverändert behalten und sich über mehrere Zeilen je Kunde wundern.

## Vergleich

| Werkzeug | Passender Einstieg                                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Power BI | [Pivotieren: von lang nach breit](#/wissen/pivotieren) · [Gruppieren: Werte je Schlüssel zusammenfassen](#/wissen/gruppieren) |
| Excel    | [PivotTable erstellen](#/wissen/pivottable)                                                                                   |

## Ergebnis

Aus Kategorien in einer Spalte werden mehrere Wertespalten.

## Warum funktioniert das?

Die verbleibenden Spalten identifizieren eine Ergebniszeile. Ein Wert wird am Schnittpunkt aus diesem Schlüssel und der pivotierten Kategorie abgelegt.

## Plausibilitätscheck

Vier Betragswerte ergeben vier gefüllte Zellen in zwei Kundenzeilen; Summe 70.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
