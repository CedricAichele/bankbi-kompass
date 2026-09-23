---
{
  "id": "konten-pro-person",
  "slug": "konten-pro-person",
  "titel": "Mehrere Konten je Person auswerten",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Behalte Kontodetails für flexible Auswertungen; verdichte nur, wenn eine feste Personenliste benötigt wird.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Mehrere Konten je Person auswerten"
  ],
  "synonyme": [
    "mehrere konten",
    "mehrere konten pro kunde",
    "kunde mehrfach"
  ],
  "verwandteThemen": [
    "eins-zu-viele",
    "distinctcount",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Person besitzt mehrere Konten und soll nicht mehrfach als Person gezählt werden.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Gruppieren: Werte je Schlüssel zusammenfassen-Anleitung](#/wissen/gruppieren). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
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

Nach Kunde gruppieren; Bestand summieren.

### Nachher · Beispielergebnis

| Kunde | Gesamtbestand |
| --- | --- |
| P001 | 3000 |
| P002 | 500 |

## Typischer Fehler

Nach zu vielen Spalten gruppieren oder Anzahl Zeilen mit Anzahl eindeutiger Kunden verwechseln.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Power BI        | [1:n: Warum entstehen mehrere Zeilen?](#/wissen/eins-zu-viele) · [DISTINCTCOUNT: eindeutige Personen zählen](#/wissen/distinctcount) |
| Excel           | [PivotTable erstellen](#/wissen/pivottable)                                                                                          |

## Ergebnis

Eine Zeile je Gruppenschlüsselkombination ersetzt die Detailzeilen.

## Warum funktioniert das?

Die Granularität wechselt hier von Konto zu Kunde. Die Aggregation bestimmt, wie die Bestände innerhalb jeder Gruppe zu einem Ergebnis werden. Summe erhält additive Gesamtbeträge; Durchschnitt teilt dagegen durch die Anzahl vorhandener Zahlen.

## Plausibilitätscheck

Drei Kontozeilen ergeben zwei Kundenzeilen. 3000 + 500 = 3500 bleibt die Gesamtsumme.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
