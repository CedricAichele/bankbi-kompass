---
{
  "id": "aufgabe-join",
  "slug": "aufgabe-join",
  "titel": "Daten nach einem Join plausibilisieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Join muss zur erwarteten Trefferzahl passen. Miss Zeilenanzahl, nicht zugeordnete Schlüssel und Kontrollsummen.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Daten nach einem Join plausibilisieren"
  ],
  "synonyme": [
    "join prüfen"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "ida-join-pruefen",
    "ida-mehrere-joins"
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

Nach einer Verknüpfung wächst die Tabelle unerwartet.

## Schritte

1. Vor dem Join Zeilenanzahl, Schlüsselhäufigkeit und Summe notieren.
2. Join-Art und Kardinalität prüfen; kleine Mehrfachfälle nachvollziehen.
3. Nach dem Join dieselben Kontrollen ausführen und Unterschiede erklären.
4. Öffne die [konkrete Ergebnis vor / nach Join plausibilisieren-Anleitung](#/wissen/ida-join-pruefen) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Prüfe die Anzahl rechter Treffer je Schlüssel vor dem Join.

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

## Ergebnis

Links 2 Zeilen / 200; rechts P001 zweimal → 3 Zeilen / 320.

## Warum funktioniert das?

Ein Join bildet Trefferkombinationen; er garantiert keine Erhaltung der Zeilenzahl.

## Plausibilitätscheck

Prüfe die Anzahl rechter Treffer je Schlüssel vor dem Join.
