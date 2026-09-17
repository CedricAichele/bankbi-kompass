---
{
  "id": "stichtag",
  "slug": "stichtag",
  "titel": "Bestand zum Stichtag",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Bestand ist eine Momentaufnahme. Wähle einen definierten Stichtag; addiere nicht mehrere Monatsbestände.",
  "ort": "Power BI: Stichtags-Slicer · Excel: Datumskriterium · IDA: Stichtagsfilter",
  "tags": ["Bestand zum Stichtag", "Bestandsanalyse", "Reporting"],
  "synonyme":
    ["Bestand addieren", "Snapshot", "aktueller monat", "bestand addieren"],
  "verwandteThemen": ["datumstabelle", "sum", "summewenns", "ida-filter"],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst den aktuellen oder einen historischen Bestand.

## Schritte

1. „Aktuell“ definieren: gewählter oder letzter vollständig verfügbarer Stichtag.
2. Vollständigkeit dieses Stichtags prüfen.
3. Nur dessen Bestandszeilen summieren.

## Beispiel

| Stichtag   | Bestand, synthetisch |
| ---------- | -------------------: |
| 31.01.2026 |        100 Mio. Euro |
| 28.02.2026 |        104 Mio. Euro |
| 31.03.2026 |        101 Mio. Euro |

Märzbestand: **101**, nicht 305 Mio. Euro. [SUMMEWENNS](#/wissen/summewenns) / [Slicer](#/wissen/slicer) / [IDA-Filter](#/wissen/ida-filter).

## Typischer Fehler

Je Produkt unterschiedliche letzte Lieferdaten vergleichen. Ein automatisches „aktuell“-Measure braucht eine explizite Regel.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                                            |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Letzten verfügbaren Stichtag bestimmen](#/wissen/aktueller-stichtag) · [Bestandskennzahl oder Bewegungskennzahl?](#/wissen/bestand-bewegung) |
| Excel           | [SUMMEWENNS](#/wissen/summewenns)                                                                                                             |
| IDA / Reporting | [Text-, Zahlen- und Datumsfilter](#/wissen/ida-filtertypen); generisches Konzept                                                              |
