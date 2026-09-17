---
{
  "id": "power-query",
  "slug": "power-query",
  "titel": "Power Query: laden, verbinden, formen",
  "bereich": "Power BI",
  "kategorie": "Power Query",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Power Query bereitet Daten vor dem Laden auf. Zusammenführen ergänzt Spalten, Anhängen ergänzt Zeilen und Gruppieren verdichtet Daten.",
  "tags":
    [
      "Zusammenführen",
      "Anhängen",
      "Merge",
      "Append",
      "Tabellen verbinden",
      "Gruppieren",
      "Pivotieren",
      "Entpivotieren",
    ],
  "synonyme":
    [
      "Zusammenführen",
      "Anhängen",
      "Merge",
      "Append",
      "Tabellen verbinden",
      "Gruppieren",
      "Pivotieren",
      "Entpivotieren",
    ],
  "verwandteThemen": ["datenbereinigung", "beziehungen", "granularitaet"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Power Query speichert eine Folge von Transformationsschritten, die bei einer Aktualisierung erneut auf die Quelle angewendet werden. Ein Slicer führt diese Schritte nicht neu aus.

## Daten laden

Wähle eine synthetische Übungsquelle, öffne die Transformation und kontrolliere Überschriften, Datentypen und Zeilenanzahl. Lade erst danach ins Modell. Jeder Schritt soll eine fachlich nachvollziehbare Aufgabe haben.

## Zusammenführen oder Anhängen?

**Zusammenführen** sucht über einen Schlüssel passende Zeilen einer zweiten Tabelle. Beim Erweitern einer verschachtelten Tabelle entstehen bei mehreren Treffern mehrere Ergebniszeilen. Ein Left Outer Join behält alle linken Zeilen, garantiert aber nicht dieselbe Zeilenanzahl.

**Anhängen** setzt Tabellen untereinander. Spalten werden nach Namen zugeordnet, nicht nach Position. Fehlende Spalten ergeben null. Beispiel: Januar mit 3 Zeilen plus Februar mit 4 Zeilen ergibt 7 Zeilen.

## Gruppieren

Gruppieren nach PRODUKT_ID und STICHTAG erzeugt eine Zeile je Kombination. Eine Summe von BESTAND_EUR ist nur innerhalb desselben Stichtags sinnvoll. Gruppiere nicht zu früh, wenn du später Kontodetails brauchst.

## Pivotieren und Entpivotieren

Entpivotieren macht aus Monatsspalten eine Spalte Monat und eine Spalte Wert. Das erleichtert Zeitvergleiche. Pivotieren dreht Werte in Spalten; bei mehreren Werten je Zielzelle musst du eine fachlich passende Aggregation wählen.

## Codebeispiel

Die Abfrage Quelle ist eine selbst angelegte Übungstabelle.

```m
Table.TransformColumnTypes(
    Quelle,
    {{"STICHTAG", type date}, {"BESTAND_EUR", Currency.Type}}
)
```

## Typischer Fehler

Nach dem Zusammenführen einfach eine erhöhte Summe akzeptieren. Vergleiche Zeilenanzahl, fehlende Treffer und Summen vor und nach dem Schritt.

## Wenn du aus Excel kommst

Die Schritte ähneln wiederholbaren Bereinigungen. Sie ersetzen nicht die filterabhängige Kennzahlenlogik eines Measures.
