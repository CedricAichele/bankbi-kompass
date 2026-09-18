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
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Person soll je Produktgruppe eine Betragsspalte erhalten.

## Schritte

1. Zielzeile und Kategorie festlegen.
2. Überzählige Detailfelder entfernen; Werte fachlich aggregieren.
3. Pivotieren und Gesamtsumme gegen die Quelle prüfen.
4. Öffne die [konkrete Pivotieren: von lang nach breit-Anleitung](#/wissen/pivotieren) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Jede Person-Monat-Kombination muss eindeutig sein oder eine explizite Aggregationsregel besitzen.

## Beispiel

P001/A/10 und P001/B/20 → P001 mit A=10, B=20.

## Typischer Fehler

Konto-ID stehen lassen und damit eine Personenverdichtung verhindern.

## Vergleich

| Werkzeug | Passender Einstieg                                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Power BI | [Pivotieren: von lang nach breit](#/wissen/pivotieren) · [Gruppieren: Werte je Schlüssel zusammenfassen](#/wissen/gruppieren) |
| Excel    | [PivotTable erstellen](#/wissen/pivottable)                                                                                   |

## Ergebnis

P001/Januar/10 und P001/Februar/20 werden zu einer Personenzeile mit zwei Monatsspalten.

## Warum funktioniert das?

Pivotieren bildet Attributwerte auf Spalten ab.

## Plausibilitätscheck

Jede Person-Monat-Kombination muss eindeutig sein oder eine explizite Aggregationsregel besitzen.
