---
{
  "id": "filter-fehler",
  "slug": "filter-fehler",
  "titel": "Ein Filter funktioniert nicht",
  "bereich": "Power BI",
  "kategorie": "Fehlerbehebung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Auswahl im Slicer verändert ein Visual nicht wie erwartet oder die Beziehung lässt sich nicht erstellen.",
  "tags": ["Problemlösung"],
  "synonyme": ["Ich kann keine Beziehung erstellen", "Slicer reagiert nicht"],
  "verwandteThemen":
    ["beziehungen", "filterkontext", "calculate", "dax-filter"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
}
---

## Symptom

Eine Auswahl im Slicer verändert ein Visual nicht wie erwartet oder die Beziehung lässt sich nicht erstellen.

## Mögliche Ursachen

Fehlende oder inaktive Beziehung; ungeeignete Filterrichtung; doppelte Schlüssel auf der 1-Seite; abgeschaltete Visualinteraktion; ein Measure ersetzt Filter.

## Kurze Erklärung

Ein Slicer kann nur über wirksame Filterwege die ausgewerteten Fakten erreichen. CALCULATE oder REMOVEFILTERS können den Kontext außerdem bewusst ändern.

## Prüfschritte

1. Zeige eine einfache SUM in einer Matrix mit dem Dimensionsmerkmal.
2. Prüfe passende Datentypen und eindeutige Schlüssel auf der 1-Seite.
3. Prüfe aktive Beziehung, Filterrichtung und fehlende Schlüsselzuordnungen.
4. Kontrolliere Visualinteraktionen sowie Seiten- und Berichtsfilter.
5. Lies das Measure auf CALCULATE und REMOVEFILTERS.

## Ein kleiner Kontrollfall

Nutze ausschließlich selbst angelegte Übungsdaten. Reduziere den Test auf wenige bekannte Zeilen, notiere das erwartete Ergebnis und vergleiche nach jedem Schritt. So trennst du Datenfehler von Modell- und Darstellungsfehlern.

## Passende Wissensartikel

- [Beziehungen und 1:n](#/wissen/beziehungen)
- [Filterkontext verständlich erklärt](#/wissen/filterkontext)
- [CALCULATE verstehen](#/wissen/calculate)
- [FILTER, REMOVEFILTERS und SELECTEDVALUE](#/wissen/dax-filter)
