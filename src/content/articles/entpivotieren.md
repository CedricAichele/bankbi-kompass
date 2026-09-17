---
{
  "id": "entpivotieren",
  "slug": "entpivotieren",
  "titel": "Entpivotieren: von breit nach lang",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entpivotieren wandelt viele gleichartige Wertspalten in eine Kategorie- und eine Wertspalte um.",
  "ort": "Power Query → Transformieren → Spalten entpivotieren",
  "tags": ["Entpivotieren: von breit nach lang", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["pivotieren", "datumstabelle"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Monate stehen in eigenen Spalten, sollen aber gemeinsam gefiltert oder gezeichnet werden.

## Schritte

1. ID-Spalten wählen.
2. „Andere Spalten entpivotieren“ nutzen, wenn neue Monatsspalten später mitkommen sollen.
3. Attribut und Wert passend benennen und Typen setzen.

## Beispiel

P001 / Januar = 10 / Februar = 20 → zwei Zeilen: P001, Januar, 10 und P001, Februar, 20.

## Typischer Fehler

Stammdaten mit entpivotieren oder null-Werte übersehen, die im Ergebnis nicht als reguläre Wertzeilen erscheinen.
