---
{
  "id": "calculate-filterwahl",
  "slug": "calculate-filterwahl",
  "titel": "Direkter Filter oder FILTER in CALCULATE?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die kleinste fachlich passende Filtermenge verwenden. direkter Spaltenfilter und FILTER lösen unterschiedliche Anforderungen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Direkter Filter oder FILTER in CALCULATE?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "calculate",
    "dax-filter"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [],
  "zuletztGeprueft": "2026-09-18"
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **direkter Spaltenfilter**, wenn eine einfache Bedingung auf Spalten einer Tabelle genügt.
3. Nimm **FILTER**, wenn eine zeilenweise Tabellenbedingung, etwa mit einer Measure-Auswertung, gebraucht wird.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

Produktgruppe = Einlagen kann direkt in CALCULATE stehen. Komplexe Auswahl von Gruppen anhand einer Kennzahl benötigt eine passende gefilterte Tabelle.

## Typischer Fehler

FILTER über die gesamte Faktentabelle ist nicht automatisch nötig und kann unerwünschte Filterwirkung haben.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| direkter Spaltenfilter | eine einfache Bedingung auf Spalten einer Tabelle genügt |
| FILTER | eine zeilenweise Tabellenbedingung, etwa mit einer Measure-Auswertung, gebraucht wird |

## Merksatz

Die kleinste fachlich passende Filtermenge verwenden.
