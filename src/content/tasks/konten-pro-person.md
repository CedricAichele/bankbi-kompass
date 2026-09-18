---
{
  "id": "konten-pro-person",
  "slug": "konten-pro-person",
  "titel": "Mehrere Konten je Person auswerten",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
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
    "gruppieren",
    "ida-zielgranularitaet"
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

Eine Person besitzt mehrere Konten und soll nicht mehrfach als Person gezählt werden.

## Schritte

1. Personen- und Kontoebene unterscheiden; Stichtag festlegen.
2. Bestände je Person summieren, Personenkennungen eindeutig zählen.
3. Mehrfachzuordnungen und fehlende Schlüssel separat prüfen.
4. Öffne die [konkrete Gruppieren: Werte je Schlüssel zusammenfassen-Anleitung](#/wissen/gruppieren) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Vergleiche Kontenzahl und Bestand getrennt, bevor du die Personenzahl bildest.

## Beispiel

P001 mit K001 = 100 und K002 = 50 → 1 Person, 2 Konten, Bestand 150.

## Typischer Fehler

Personenanzahl und Kontenanzahl gleichsetzen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Power BI        | [1:n: Warum entstehen mehrere Zeilen?](#/wissen/eins-zu-viele) · [DISTINCTCOUNT: eindeutige Personen zählen](#/wissen/distinctcount) |
| Excel           | [PivotTable erstellen](#/wissen/pivottable)                                                                                          |
| IDA / Reporting | [Eine Zeile je Konto und Stichtag](#/wissen/ida-konto); generisches Konzept                                                          |

## Ergebnis

P001 hat 2 Konten und 2.000 Bestand; P003 hat 2 Konten und 4.000.

## Warum funktioniert das?

Ein Konto ist eine andere Einheit als eine Person.

## Plausibilitätscheck

Vergleiche Kontenzahl und Bestand getrennt, bevor du die Personenzahl bildest.
