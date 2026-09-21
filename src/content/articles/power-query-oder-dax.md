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
3. Nimm **DAX-Measure**, wenn das Ergebnis auf Slicer und Visualfilter reagieren soll.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Power Query bereinigt „ P001 “ beim Laden zu „P001“. Ein DAX-Measure für den Bestand reagiert anschließend auf die Kundenauswahl: ohne Filter 3500, für P001 mit zwei Konten zu 1000 und 2000 insgesamt 3000. Beide Methoden ergänzen sich. DAX kann auch berechnete Spalten erzeugen; diese reagieren im Importmodell nicht dynamisch auf Slicer.

| Alternative | Geeignet, wenn |
| --- | --- |
| Power Query | du Daten vor dem Laden bereinigst, typisierst oder in eine andere Zeilenform bringst. |
| DAX | das Ergebnis auf Slicer und Visualfilter reagieren soll. |

## Typischer Fehler

Eine DAX-Spalte repariert keine mangelhafte Importstruktur.

## Merksatz

Vorbereiten beim Laden; auswerten im Bericht.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Power Query**, wenn du Daten vor dem Laden bereinigst, typisierst oder in eine andere Zeilenform bringst. Nimm **DAX-Measure**, wenn das Ergebnis auf Slicer und Visualfilter reagieren soll.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Eine DAX-Spalte repariert keine mangelhafte Importstruktur. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
