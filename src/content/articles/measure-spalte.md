---
{
  "id": "measure-spalte",
  "slug": "measure-spalte",
  "titel": "Measure oder Spalte?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Dynamische Kennzahl: Measure. Festes Merkmal je Zeile: Power Query oder berechnete Spalte.",
  "ort": "Vor der Umsetzung: Ergebnis und Einsatzort bestimmen",
  "tags": [
    "Measure oder Spalte?",
    "Reporting"
  ],
  "synonyme": [
    "spalte oder measure"
  ],
  "verwandteThemen": [
    "measure",
    "berechnete-spalte",
    "pq-bedingt",
    "filterkontext",
    "power-query",
    "power-query-oder-dax"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculations-options"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Voraussetzungen

Eine vorhandene Tabelle und eine klar formulierte Frage: dynamische Kennzahl oder dauerhaftes Merkmal je Zeile?

## Schritte

1. Entscheide zuerst, ob das Ergebnis auf die aktuelle Berichtsauswahl reagieren muss. Für eine Bestandssumme je ausgewähltem Kunden ist ein **Measure** passend.
2. Prüfe, ob das Ergebnis als Kategorienachse, Gruppierung oder Slicer dienen soll. Eine feste Größenklasse je Konto benötigt eine **Spalte**.
3. Wähle den Berechnungsort: Datenbereinigung beim Laden in **Power Query**; dynamische Modellkennzahlen in **DAX**.
4. Nutze anschließend die passende verlinkte Anleitung und teste die Reaktion auf einen Kundenfilter.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

Gesamtbestand als Measure; Kategorie hoch bei Bestand >1000 als berechnete Spalte.

### Nachher · Beispielergebnis

| Konto | Gespeicherte Kategorie |
| --- | --- |
| K001 | niedrig |
| K002 | hoch |
| K003 | niedrig |

Measure ohne Filter: 3500; mit Kunde P001: 3000. Die gespeicherten Kategorien bleiben unverändert.

## Ergebnis

Die Umsetzung passt zum benötigten Verhalten: dynamische Kennzahl oder pro Zeile nutzbares Merkmal.

## Warum funktioniert das?

Eine Spalte beschreibt einzelne Zeilen und ist im Importmodell nach der Aktualisierung gespeichert. Ein Measure berechnet im jeweiligen Filterkontext. Die Entscheidung hängt deshalb vom benötigten Verhalten ab, nicht von der Länge der Formel.

## Typischer Fehler

Eine Spalte wird nicht bei jeder Slicerauswahl neu berechnet.

## Plausibilitätscheck

Der Kundenfilter ändert den Measurewert von 3500 auf 3000, aber nicht die Kategorie von K001.

## Entscheidung an einem Beispiel

| Bedarf | Passende Form | Begründung |
| --- | --- | --- |
| Bestandssumme für aktuelle Kundenauswahl | Measure | Ergebnis muss auf Filter reagieren |
| Kategorie hoch/niedrig je Konto | Spalte | Merkmal muss als Achse oder Filter auswählbar sein |
| Textbereinigung vor dem Laden | Power Query | Aufbereitung geschieht vor dem Modell |
