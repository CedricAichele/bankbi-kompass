---
{
  "id": "reporting",
  "slug": "reporting",
  "titel": "IDA / Reporting: Liste oder Kreuztabelle?",
  "bereich": "IDA / Reporting",
  "kategorie": "Reporting-Grundlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Listen zeigen Details, Kreuztabellen verdichten Werte nach Dimensionen. Dieser Bereich beschreibt ausschließlich allgemeine Reportingprinzipien.",
  "tags":
    [
      "Liste",
      "Kreuztabelle",
      "Parameter",
      "Berichtsparameter",
      "Nullwerte",
      "Gruppierung",
    ],
  "synonyme":
    [
      "Liste",
      "Kreuztabelle",
      "Parameter",
      "Berichtsparameter",
      "Nullwerte",
      "Gruppierung",
    ],
  "verwandteThemen": ["granularitaet", "pivottable", "filterkontext"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Eine Liste zeigt Zeilen auf einer gewählten Detailstufe. Eine Kreuztabelle ordnet Kennzahlen nach Zeilen- und Spaltendimensionen an. Keine der beiden Darstellungen korrigiert eine ungeeignete Datenbasis.

## Synthetisches Beispiel

Eine Liste zeigt drei Konten am selben Stichtag. Eine Kreuztabelle fasst dieselben 250 Euro nach zwei Produktgruppen zusammen. Die Anzahl sichtbarer Zeilen sinkt, obwohl die Datenbasis gleich bleibt.

## Filter und Parameter

Ein Filter begrenzt die Datenmenge. Ein Parameter ist eine Eingabe, die je nach Umsetzung zum Filtern oder zur Steuerung der Auswertung verwendet werden kann. Ein gesetzter Parameter wirkt nicht automatisch, wenn die Auswertung ihn nicht verwendet.

## Typische Fehler

Mehrfachzeilen werden erst in der Kreuztabelle unsichtbar. Eine Summe kann dabei weiter falsch sein. Prüfe Details, Schlüssel und Aggregationsebene, bevor du dich auf die verdichtete Sicht verlässt. Null ist nicht automatisch 0.

## Brücke zu Power BI und Excel

Matrix und PivotTable sind vergleichbare Darstellungen. Das zugrunde liegende Datenmodell und seine Filterregeln sind jedoch eigenständig zu prüfen.

## Klare Inhaltsgrenze

Hier werden keine produktspezifischen IDA-Funktionen, internen Feldnamen, Selektionsregeln oder Systeme beschrieben. Systemspezifische Erweiterungen bleiben TODO, solange öffentlich dokumentierbare Grundlagen nicht eindeutig belegt sind.
