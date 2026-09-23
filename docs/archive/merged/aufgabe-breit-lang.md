---
{
  "id": "aufgabe-breit-lang",
  "slug": "aufgabe-breit-lang",
  "titel": "Daten von breit nach lang",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entpivotieren macht wiederholte Wertspalten zu Kategorie-Wert-Zeilen. Das erleichtert Filter und Zeitachsen.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Daten von breit nach lang"
  ],
  "synonyme": [
    "breit nach lang"
  ],
  "verwandteThemen": [
    "entpivotieren",
    "power-query"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/unpivot-column"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Januar, Februar und März stehen als eigene Spalten in einem Export.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Entpivotieren: von breit nach lang-Anleitung](#/wissen/entpivotieren). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Jan | Feb |
| --- | --- | --- |
| P001 | 10 | 15 |
| P002 | 20 | 25 |

### Aktion

Jan und Feb in Monat/Betrag-Zeilen umformen.

### Nachher · Beispielergebnis

| Kunde | Monat | Betrag |
| --- | --- | --- |
| P001 | Jan | 10 |
| P001 | Feb | 15 |
| P002 | Jan | 20 |
| P002 | Feb | 25 |

## Typischer Fehler

Schlüsselspalten mit entpivotieren oder aus ausgebliebenen NULL-Zeilen einen Betrag von null ableiten.

## Vergleich

| Werkzeug | Passender Einstieg                                                                                 |
| -------- | -------------------------------------------------------------------------------------------------- |
| Power BI | [Entpivotieren: von breit nach lang](#/wissen/entpivotieren) · [Power Query](#/wissen/power-query) |
| Excel    | [Entpivotieren: von breit nach lang](#/wissen/entpivotieren)                                       |

## Ergebnis

Wertespalten werden zu Attribut-Wert-Paaren untereinander.

## Warum funktioniert das?

Eine bisher in der Überschrift gespeicherte Kategorie wird selbst zu einem Datenwert. Die neue Zeilenebene ist Kunde und Monat.

## Plausibilitätscheck

Zwei Kunden × zwei gefüllte Monatsspalten ergeben vier Zeilen; Summe 70.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
