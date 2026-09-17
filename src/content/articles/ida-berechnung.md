---
{
  "id": "ida-berechnung",
  "slug": "ida-berechnung",
  "titel": "Berechnetes Datenelement",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kläre, ob eine Formel je Detailzeile oder auf bereits aggregierten Werten rechnen soll.",
  "ort": "IDA / Reporting: allgemeines Berechnungsprinzip; Syntax TODO",
  "tags": ["Berechnetes Datenelement", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-quote", "ida-aggregation"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Liste benötigt eine abgeleitete Kennzahl.

## Schritte

1. Zielebene bestimmen.
2. Eingangswerte, Einheiten und NULL-Behandlung klären.
3. Zwei Detailzeilen und die Gesamtzeile getrennt prüfen.

## Beispiel

Quote über alle Fälle = Gesamtzahl erfüllter Fälle / Gesamtzahl Fälle. Sie ist nicht die Summe einzelner Quoten.

## Typischer Fehler

Zeilen- und Gruppenberechnung vermischen.
