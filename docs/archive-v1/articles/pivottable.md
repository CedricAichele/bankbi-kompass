---
{
  "id": "pivottable",
  "slug": "pivottable",
  "titel": "PivotTables sinnvoll einsetzen",
  "bereich": "Excel",
  "kategorie": "PivotTables",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine PivotTable fasst Tabellen nach frei gewählten Zeilen, Spalten und Werten zusammen. Die Aggregation muss zur fachlichen Frage passen.",
  "tags": ["PivotTable", "Kreuztabelle", "Aggregieren"],
  "synonyme": ["PivotTable", "Kreuztabelle", "Aggregieren"],
  "verwandteThemen": ["reporting", "visualisierung", "granularitaet"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Eine PivotTable ist eine Auswertung über vorhandene Daten. Sie behebt keine falsche Zeilenebene und keine fehlerhaften Schlüssel.

## Einfaches Beispiel

Drei synthetische Kontobestände am selben Datum: Segment A mit 120 und 80 Euro, Segment B mit 50 Euro. Wähle Segment als Zeilenfeld und Bestand als Wertefeld mit Summe. Erwartung: A = 200, B = 50, Gesamt = 250.

## Praktischer Aufbau

1. Formatiere die Ausgangsdaten als Excel-Tabelle mit klaren Überschriften.
2. Erstelle die PivotTable aus dieser Tabelle.
3. Wähle die Felder und kontrolliere die Wertfeldeinstellung.
4. Filtere bei Beständen auf einen definierten Stichtag.
5. Aktualisiere die Pivot-Auswertung nach Änderungen der Quelle.

## Typischer Fehler

Excel verwendet Anzahl statt Summe, weil Werte als Text vorliegen. Ändere nicht nur die Wertfeldeinstellung, sondern bereinige auch den Datentyp.

## Wann brauche ich etwas anderes?

Eine gewöhnliche Anzahl zählt keine eindeutigen Personen. Die Möglichkeit einer eindeutigen Anzahl hängt unter anderem von der Verwendung des Datenmodells ab. Alternativ kannst du die eindeutigen Kennungen separat prüfen.

## Brücke zu Power BI

Eine Matrix mit zentral definierten Measures ist ähnlich aufgebaut. In Power BI bestimmen auch Beziehungen und Filterrichtung, welche Fakten in einer Zelle ankommen.
