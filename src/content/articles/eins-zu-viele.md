---
{
  "id": "eins-zu-viele",
  "slug": "eins-zu-viele",
  "titel": "1:n: Warum entstehen mehrere Zeilen?",
  "bereich": "Datenanalyse",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Schlüssel kann auf der Detailseite mehrfach vorkommen. Das ist bei mehreren Konten je Person oft korrekt.",
  "ort": "Datenmodell / Schlüsselprüfung vor dem Verknüpfen",
  "tags":
    ["1:n: Warum entstehen mehrere Zeilen?", "Kundenanalyse", "Datenqualität"],
  "synonyme": ["mehrere konten pro kunde", "falsche summe", "mehrere Zeilen"],
  "verwandteThemen": ["granularitaet", "distinctcount", "dubletten"],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du siehst mehrere Konten pro Kunde oder zusätzliche Zeilen nach einem Join.

## Schritte

1. Aufschreiben, was eine Zeile auf jeder Seite bedeutet.
2. Treffer je Schlüssel zählen.
3. Prüfen, ob Detailzeilen erhalten bleiben oder vorher aggregiert werden müssen.

## Beispiel

Eine Personenzeile P001 trifft auf K-A und K-B: zwei Ergebniszeilen, aber weiterhin eine Person.

## Typischer Fehler

Personenanzahl mit Kontenzeilen verwechseln oder wiederholte Beträge ungeprüft summieren.
