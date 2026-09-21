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
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
    "https://learn.microsoft.com/en-us/dax/filter-function-dax"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
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

### Ausgangslage und Entscheidung

Produktgruppe = Einlagen kann direkt in CALCULATE stehen. Komplexe Auswahl von Gruppen anhand einer Kennzahl benötigt eine passende gefilterte Tabelle.

| Alternative | Geeignet, wenn |
| --- | --- |
| direkter Spaltenfilter | eine einfache Bedingung auf Spalten einer Tabelle genügt. |
| FILTER | eine zeilenweise Tabellenbedingung, etwa mit einer Measure-Auswertung, gebraucht wird. |

## Typischer Fehler

FILTER über die gesamte Faktentabelle ist nicht automatisch nötig und kann unerwünschte Filterwirkung haben.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| direkter Spaltenfilter | eine einfache Bedingung auf Spalten einer Tabelle genügt |
| FILTER | eine zeilenweise Tabellenbedingung, etwa mit einer Measure-Auswertung, gebraucht wird |

## Merksatz

Die kleinste fachlich passende Filtermenge verwenden.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **direkter Spaltenfilter**, wenn eine einfache Bedingung auf Spalten einer Tabelle genügt. Nimm **FILTER**, wenn eine zeilenweise Tabellenbedingung, etwa mit einer Measure-Auswertung, gebraucht wird.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

FILTER über die gesamte Faktentabelle ist nicht automatisch nötig und kann unerwünschte Filterwirkung haben. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
