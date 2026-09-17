---
{
  "id": "blank",
  "slug": "blank",
  "titel": "BLANK: Warum bleibt die Kennzahl leer?",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "BLANK kann fehlende Daten oder ein bewusst nicht berechenbares Ergebnis bedeuten.",
  "ort": "Power BI → Measure und Filterbereich",
  "tags": ["BLANK: Warum bleibt die Kennzahl leer?", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["divide", "selectedvalue", "filterkontext"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Karte oder Matrix zeigt keinen Wert.

## Schritte

1. Filter auf eine bekannte Übungszeile reduzieren.
2. COUNTROWS sowie Zähler und Nenner einzeln anzeigen.
3. Datumsbeziehung, fehlende Schlüssel und Auswahl prüfen.

## Beispiel

DIVIDE(80, 0) liefert standardmäßig BLANK. Das ist keine Planerreichung von 0 %.

## Typischer Fehler

BLANK pauschal durch 0 ersetzen und damit fehlende Daten verstecken.
