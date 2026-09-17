---
{
  "id": "filterkontext",
  "slug": "filterkontext",
  "titel": "Filterkontext verständlich erklärt",
  "bereich": "Power BI",
  "kategorie": "DAX",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Filterkontext legt fest, welche Daten ein Measure gerade auswertet. Er entsteht unter anderem durch Slicer, Visuals und Beziehungen.",
  "tags": ["Filter", "Tabellenfilter", "Filter funktioniert nicht"],
  "synonyme": ["Filter", "Tabellenfilter", "Filter funktioniert nicht"],
  "verwandteThemen": ["calculate", "beziehungen", "measure"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Stell dir vor, jede Zelle einer Matrix stellt eine eigene Frage an dasselbe Measure. Die Zeile „Segment A“ fragt nach Segment A, die Gesamtzeile nach allen im Kontext enthaltenen Segmenten.

## Einfaches Beispiel

Am selben Stichtag gibt es in Demo_Bestand 120 Euro für Segment A und 80 Euro für Segment B. Ein Slicer auf Segment A begrenzt den Bestand auf 120 Euro. Entfernst du den Slicer, ergeben sich 200 Euro.

## Woher kommen Filter?

Slicer, Seitenfilter, Berichtsfilter sowie Zeilen und Spalten eines Visuals können gemeinsam wirken. Aktive Beziehungen übertragen Filter zwischen Tabellen. Auch DAX kann den Kontext verändern.

## Was passiert bei widersprüchlichen Filtern?

Ein Seitenfilter auf Segment A und ein weiterer Filter auf ausschließlich Segment B können eine leere Datenmenge erzeugen. Ein leeres Ergebnis ist dann kein Rechenfehler.

## Typischer Fehler

Zeilenkontext mit Filterkontext verwechseln: Eine berechnete Spalte kennt zunächst die aktuelle Zeile. Ein Measure wird dagegen für die aktuelle Auswahl ausgewertet. CALCULATE kann außerdem einen Zeilenkontext in Filterkontext überführen; das wird bei Iteratoren relevant.

## Wenn du aus Excel kommst

Eine PivotTable-Auswahl hilft beim Verständnis. Im Power-BI-Modell können Filter aber auch aus verbundenen Tabellen kommen. Kontrolliere bei einer unerwarteten Zahl immer zuerst alle wirksamen Filter.
