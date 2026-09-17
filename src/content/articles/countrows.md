---
{
  "id": "countrows",
  "slug": "countrows",
  "titel": "COUNTROWS: Zeilen zählen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "COUNTROWS zählt Zeilen einer Tabelle im gültigen Kontext. Das ist nicht automatisch die Anzahl eindeutiger Personen.",
  "ort": "Power BI → Neues Measure",
  "tags": ["COUNTROWS: Zeilen zählen", "Reporting"],
  "synonyme": ["COUNT vs DISTINCTCOUNT"],
  "verwandteThemen": ["distinctcount", "granularitaet"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du prüfst Detailmengen oder eine unerwartete Vervielfachung.

## Schritte

1. Fachliche Zeilenebene klären.
2. COUNTROWS auf die Zieltabelle anwenden.
3. Bei Personenzählung zusätzlich DISTINCTCOUNT vergleichen.

## Beispiel

```dax
Zeilen = COUNTROWS ( Demo_Konto )
```

P001 mit zwei Konten → zwei Zeilen. Bei leerer Ergebnistabelle kann COUNTROWS BLANK liefern.

## Typischer Fehler

COUNT auf einer Spalte zählt deren nichtleere unterstützte Werte und beantwortet eine andere Frage.
