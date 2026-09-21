---
{
  "id": "power-query-oder-dax",
  "slug": "power-query-oder-dax",
  "titel": "Power Query oder DAX?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Power Query bereitet Daten bei der Aktualisierung vor. DAX-Measures berechnen Kennzahlen im aktuellen Berichtsfilter.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": [
    "Power Query oder DAX?"
  ],
  "synonyme": [
    "power query oder dax"
  ],
  "verwandteThemen": [
    "power-query",
    "measure",
    "pq-benutzerdefiniert"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/power-query-ui",
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-measures",
    "https://learn.microsoft.com/en-us/dax/sum-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Power Query**, wenn du Daten vor dem Laden bereinigst, typisierst oder in eine andere Zeilenform bringst.
3. Nimm **DAX**, wenn das Ergebnis auf Slicer und Visualfilter reagieren soll.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Leerzeichen in Personennummer: Power Query. Anteil der gewählten Personen am Gesamtbestand: DAX.

| Alternative | Geeignet, wenn |
| --- | --- |
| Power Query | du Daten vor dem Laden bereinigst, typisierst oder in eine andere Zeilenform bringst. |
| DAX | das Ergebnis auf Slicer und Visualfilter reagieren soll. |

## Typischer Fehler

Eine DAX-Spalte repariert keine mangelhafte Importstruktur.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Power Query | du Daten vor dem Laden bereinigst, typisierst oder in eine andere Zeilenform bringst |
| DAX | das Ergebnis auf Slicer und Visualfilter reagieren soll |

## Merksatz

Vorbereiten beim Laden; auswerten im Bericht.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Power Query**, wenn du Daten vor dem Laden bereinigst, typisierst oder in eine andere Zeilenform bringst. Nimm **DAX**, wenn das Ergebnis auf Slicer und Visualfilter reagieren soll.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Eine DAX-Spalte repariert keine mangelhafte Importstruktur. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
