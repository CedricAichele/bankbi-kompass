---
{
  "id": "konten-pro-person",
  "slug": "konten-pro-person",
  "titel": "Mehrere Konten je Person auswerten",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Behalte Kontodetails für flexible Auswertungen; verdichte nur, wenn eine feste Personenliste benötigt wird.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": ["Mehrere Konten je Person auswerten"],
  "synonyme": ["mehrere konten", "mehrere konten pro kunde"],
  "verwandteThemen":
    ["eins-zu-viele", "distinctcount", "gruppieren", "ida-zielgranularitaet"],
  "kontexte": ["Reporting", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Person besitzt mehrere Konten und soll nicht mehrfach als Person gezählt werden.

## Schritte

1. Personen- und Kontoebene unterscheiden; Stichtag festlegen.
2. Bestände je Person summieren, Personenkennungen eindeutig zählen.
3. Mehrfachzuordnungen und fehlende Schlüssel separat prüfen.

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
