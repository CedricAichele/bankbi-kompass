---
{
  "id": "blank",
  "slug": "blank",
  "titel": "Ein Measure liefert BLANK",
  "bereich": "Power BI",
  "kategorie": "Fehlerbehebung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Karte oder Matrix bleibt leer, obwohl du einen Wert erwartest.",
  "tags": ["Problemlösung"],
  "synonyme": ["leeres Measure", "keine Werte"],
  "verwandteThemen": ["measure", "dax-filter", "datumstabelle", "vorjahr"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
}
---

## Symptom

Eine Karte oder Matrix bleibt leer, obwohl du einen Wert erwartest.

## Mögliche Ursachen

Keine passenden Zeilen; fehlende Schlüsselzuordnung; leeres Vorjahr; DIVIDE mit null oder leerem Nenner; SELECTEDVALUE ohne eindeutigen Wert.

## Kurze Erklärung

BLANK kann ein beabsichtigtes Ergebnis sein. Es unterscheidet sich fachlich oft von einer echten Null.

## Prüfschritte

1. Reduziere die Filter auf eine bekannte Übungszeile.
2. Kontrolliere Datumsbereich und Beziehung zur Datumstabelle.
3. Zeige Zähler und Nenner einer Quote einzeln an.
4. Prüfe mit COUNTROWS, ob überhaupt passende Fakten vorliegen.
5. Ersetze BLANK erst dann durch null, wenn die fachliche Bedeutung geklärt ist.

## Ein kleiner Kontrollfall

Nutze ausschließlich selbst angelegte Übungsdaten. Reduziere den Test auf wenige bekannte Zeilen, notiere das erwartete Ergebnis und vergleiche nach jedem Schritt. So trennst du Datenfehler von Modell- und Darstellungsfehlern.

## Passende Wissensartikel

- [Measures: dein erstes SUM und DIVIDE](#/wissen/measure)
- [FILTER, REMOVEFILTERS und SELECTEDVALUE](#/wissen/dax-filter)
- [Eine verlässliche Datumstabelle](#/wissen/datumstabelle)
- [Vorjahresvergleich mit SAMEPERIODLASTYEAR](#/wissen/vorjahr)
