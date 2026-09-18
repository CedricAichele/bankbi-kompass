---
{
  "id": "personen-zaehlen",
  "slug": "personen-zaehlen",
  "titel": "Eindeutige Personen zählen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zähle unterschiedliche Personenkennungen, nicht alle Kontenzeilen.",
  "ort": "Power BI: DISTINCTCOUNT · Excel: EINDEUTIG · IDA: eindeutiges Zählkonzept",
  "tags": [
    "Eindeutige Personen zählen",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "einzigartige Kunden"
  ],
  "verwandteThemen": [
    "distinctcount",
    "eindeutig",
    "ida-anzahl"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Personen eindeutig zählen, auch wenn mehrere Konten existieren.

## Voraussetzungen

Nur synthetische Ausgangsdaten. Die verwendeten Feldnamen im Beispiel exakt übernehmen.

## Schritte

1. Definiere Personennummer als Zählschlüssel, nicht Konto.
2. Prüfe fehlende Personenkennungen und vereinheitliche den Typ auf Text.
3. Erstelle in Power BI unter Modellierung → Neues Measure die angegebene Formel.
4. Erstelle als Vergleich Kontenzeilen = COUNTROWS(Konten).
5. Zeige beide Measures in Karten und filtere zunächst nicht.
6. Wähle P001 und prüfe anschließend beide Werte erneut.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

```dax
Personen = DISTINCTCOUNT ( Konten[Personennummer] )
```

## Ergebnis

Ungefiltert 4 Personen und 6 Zeilen. P001 ausgewählt: 1 Person und 2 Zeilen.

## Warum funktioniert das?

DISTINCTCOUNT zählt unterschiedliche Werte im aktuellen Kontext. BLANK kann einen zusätzlichen Wert bilden.

## Typischer Fehler

**Ursache und Lösung:** Die Summe unterschiedlicher Personen pro Produktgruppe überschätzt eine gruppenübergreifende Gesamtzahl.

## Plausibilitätscheck

Die manuelle Liste enthält P001, P002, P003, P004.

## Vergleich

Excel: EINDEUTIG über Personennummer und ZEILEN über die Ausgabeliste. Reporting: eindeutige Kennungen statt Detailzeilen zählen.
