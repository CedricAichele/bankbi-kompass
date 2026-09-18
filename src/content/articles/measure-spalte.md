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
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": []
}
---


## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Measure**, wenn eine Kennzahl für die aktuelle Auswahl gebraucht wird.
3. Nimm **berechnete Spalte**, wenn du pro Datenzeile ein festes Merkmal für Achse, Gruppierung oder Slicer benötigst.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

Bestandssumme je Auswahl als Measure; feste Größenklasse pro Konto als Spalte.

## Typischer Fehler

Eine Spalte wird nicht bei jeder Slicerauswahl neu berechnet.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Measure | eine Kennzahl für die aktuelle Auswahl gebraucht wird |
| berechnete Spalte | du pro Datenzeile ein festes Merkmal für Achse, Gruppierung oder Slicer benötigst |

## Merksatz

Kennzahl für Auswahl: Measure. Merkmal je Zeile: Spalte.


## Ergebnis

Das Measure SUM(Konten[Bestand_EUR]) zeigt insgesamt 9.000 und bei Person P001 2.000. Eine berechnete Größenklasse je Konto bleibt bei einer Slicerauswahl unverändert; nur die sichtbaren Zeilen ändern sich.
