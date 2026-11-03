---
{
  "id": "ida-ausgabe",
  "slug": "ida-ausgabe",
  "titel": "Liste, Kreuztabelle und Berichtsausgabe",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Details als Liste prüfen und verdichtete Vergleiche als Kreuztabelle darstellen. Ausgabeformat, Filter und Aggregation müssen dieselbe fachliche Aussage transportieren.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida liste",
    "ida kreuztabelle",
    "cross tab",
    "crosstab",
    "ida excel export",
    "ida csv"
  ],
  "verwandteThemen": [
    "ida-erste-auswertung",
    "ida-granularitaet",
    "ida-filter-praxis",
    "ida-prompts"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-11-03",
  "art": "artikel",
  "ebene": "Praxisartikel",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-using-relational-calculations",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=queries-layout",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationally-add-simple-summary"
  ]
}
---

## Wann brauche ich das?

Du willst eine Arbeitsliste für Detailprüfungen oder einen kompakten Vergleich nach Region und Produkt. Die Darstellung soll zur Frage passen; interaktive Visualisierung bleibt ein Schwerpunkt von Power BI.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Prüfe dieselbe Datenmenge zunächst als einfache Liste.
2. Für eine Kreuztabelle die Zeilen- und Spaltendimension festlegen.
3. Eine passende Kennzahl für die Zellen wählen, beispielsweise Betrag oder Kontoanzahl.
4. Gruppensummen, Gesamtergebnis und leere Kombinationen prüfen.
5. Das vorgesehene Ausgabeformat testen; Bildschirm- und Dateiausgabe sind nicht immer identisch aufgebaut.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

Liste: alle drei Konten mit Person und Betrag zeigen. Kreuztabelle: Region in Zeilen, Produkt in Spalten, total(Betrag) als Kennzahl.

| Region | Giro | Depot | Gesamt |
|---|---:|---:|---:|
| Nord | 300 | — | 300 |
| Süd | — | 50 | 50 |
| Gesamt | 300 | 50 | 350 |

Ein Strich kennzeichnet hier keine passende Kombination; er behauptet keinen bekannten Nullbetrag. In einer alternativen Zählung hätte Nord/Giro 2 Konten und Süd/Depot 1 Konto.

## Ergebnis

Liste und Kreuztabelle erklären denselben Gesamtbetrag 350. Die Liste besitzt drei Detailzeilen, die Kreuztabelle zwei Regionszeilen; eine andere Zeilenzahl ist hier gewollte Verdichtung.

## Warum funktioniert das?

Die Kreuztabelle berechnet Kennzahlen an Schnittpunkten von Dimensionen. Ohne geklärte Aggregation ist eine Zelle nicht aussagekräftig. Eine eindeutige Personenanzahl kann über mehrere Gruppen nicht additiv sein, wenn dieselbe Person in mehreren Gruppen vorkommt.

## Ausgabe und Weiterverarbeitung

Eine formatierte Berichtsausgabe und eine reine Datenliste haben unterschiedliche Zwecke. Nach Export prüfen: Überschriften, zusätzliche Summenzeilen, IDs als Text, Datumswerte und Dezimaltrennzeichen. Nicht jede Darstellungsfunktion ist in jedem Format identisch. Bei CSV mit allen Werten in einer Spalte hilft die gemeinsame [Excel-Anleitung zum CSV-Import](#/wissen/excel-csv-spalten); eine ID nicht durch automatisches Zahlenformat verändern.

## Typischer Fehler

Ein gruppiertes Layout mit einer bereits gruppierten Datenabfrage verwechseln oder die Gesamtsumme als Summe sichtbarer DISTINCTCOUNT-Zellen interpretieren.

## Plausibilitätscheck

Details 100+200+50 = 350. Nord hat 300 und 2 Konten, Süd 50 und 1 Konto. Ein Filter auf Nord muss in Liste und Kreuztabelle denselben Betrag 300 ergeben.
