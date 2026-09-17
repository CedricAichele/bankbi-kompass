---
{
  "id": "aufgabe-join",
  "slug": "aufgabe-join",
  "titel": "Daten nach einem Join plausibilisieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Join muss zur erwarteten Trefferzahl passen. Miss Zeilenanzahl, nicht zugeordnete Schlüssel und Kontrollsummen.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": ["Daten nach einem Join plausibilisieren"],
  "synonyme": ["join prüfen"],
  "verwandteThemen":
    ["zusammenfuehren", "ida-join-pruefen", "ida-mehrere-joins"],
  "kontexte": ["Reporting", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Nach einer Verknüpfung wächst die Tabelle unerwartet.

## Schritte

1. Vor dem Join Zeilenanzahl, Schlüsselhäufigkeit und Summe notieren.
2. Join-Art und Kardinalität prüfen; kleine Mehrfachfälle nachvollziehen.
3. Nach dem Join dieselben Kontrollen ausführen und Unterschiede erklären.

## Beispiel

Eine eindeutige Segmentzuordnung darf die sechs Kontenzeilen nicht verdoppeln.

## Typischer Fehler

Nur die Zeilenzahl prüfen, obwohl Zeilen verloren und andere vervielfacht wurden.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Tabellen zusammenführen](#/wissen/zusammenfuehren) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [XVERWEIS](#/wissen/xverweis)                                                                                          |
| IDA / Reporting | [Ergebnis vor / nach Join plausibilisieren](#/wissen/ida-join-pruefen); generisches Konzept                            |
