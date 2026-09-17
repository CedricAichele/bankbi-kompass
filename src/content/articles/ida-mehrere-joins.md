---
{
  "id": "ida-mehrere-joins",
  "slug": "ida-mehrere-joins",
  "titel": "Mehrere 1:n-Joins plausibilisieren",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zwei unabhängige Detailverknüpfungen können sich gegenseitig vervielfachen. Prüfe jede Erweiterung separat.",
  "ort": "Allgemeines Daten- und Joinprinzip; keine interne Implementierung",
  "tags": ["Mehrere 1:n-Joins plausibilisieren"],
  "synonyme": ["mehrere joins", "zeilen vervielfachen"],
  "verwandteThemen":
    ["ida-join-pruefen", "ida-join-aggregation", "granularitaet"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/ida/mehrere-joins.svg",
        "alt": "Konten: P001 · K001: P001 · K002. Vorgänge: P001 · V001 / V002 / V003: 3 Vorgänge. Gemeinsamer Detailjoin: 2 × 3 = 6 Zeilen: Beträge werden wiederholt",
        "caption": "Zwei unabhängige Detailzweige",
        "hinweis": "Vor dem Verbinden beide Detailzweige auf die Zielgranularität bringen.",
        "schema": true,
        "status": "bereit",
        "schritt": 2,
      },
    ],
}
---

## Wann brauche ich das?

Personen mit Konten und Vorgängen erzeugen zu viele Zeilen.

## Schritte

1. Je Detailtabelle Anzahl pro Person ermitteln.
2. Konten und Vorgänge zunächst getrennt auf die gewünschte Ebene aggregieren.
3. Erst passende Ergebnisse verbinden; Summen vor und nach jedem Join vergleichen.

## Beispiel

P001 mit 2 Konten und 3 Vorgängen kann nach zwei Detailjoins 6 Zeilen erzeugen.

## Typischer Fehler

Die vervielfachten Beträge am Ende mit DISTINCT reparieren wollen.
