---
{
  "id": "ida-zielgranularitaet",
  "slug": "ida-zielgranularitaet",
  "titel": "Zielgranularität vor dem Join festlegen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lege zuerst fest, was genau eine Ergebniszeile bedeutet. Daraus folgen Schlüssel, Aggregationen und erlaubte Detailfelder.",
  "ort": "Allgemeines Daten- und Joinprinzip; keine interne Implementierung",
  "tags": ["Zielgranularität vor dem Join festlegen"],
  "synonyme": ["zielgranularität"],
  "verwandteThemen": ["eine-zeile-je-person", "ida-mehrere-joins"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/ida/zielgranularitaet.svg",
        "alt": "Detail: P001 · K001 · 1.250 €: P001 · K002 · 750 €. Aggregation: Gruppieren nach Person: SUMME des Bestands. Ziel: eine Zeile je Person: P001 · 2.000 €: Kontodetails entfallen",
        "caption": "Die Zeilenebene zuerst festlegen",
        "hinweis": "Aggregation verdichtet Daten; sie entfernt keine fachlich falschen Dubletten.",
        "schema": true,
        "status": "bereit",
        "schritt": 2,
      },
    ],
}
---

## Wann brauche ich das?

Eine Personenliste soll Beträge und Vorgangsanzahl enthalten.

## Schritte

1. Ergebniszeile als Person am Stichtag definieren.
2. Kontenbestände und Vorgangszahlen getrennt je Person bestimmen.
3. Die verdichteten Ergebnisse über eindeutige Schlüssel verbinden.

## Beispiel

P001 → Bestand 150, Vorgänge 3. Kontonummer gehört nicht in dieselbe Personenzeile.

## Typischer Fehler

Zusätzliche Detailfelder einblenden und weiterhin eine Zeile je Person erwarten.
