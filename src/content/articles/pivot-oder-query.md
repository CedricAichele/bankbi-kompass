---
{
  "id": "pivot-oder-query",
  "slug": "pivot-oder-query",
  "titel": "PivotTable oder Power Query?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine PivotTable wertet vorhandene Daten flexibel aus. Power Query verändert und bereinigt die Datenbasis.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": [
    "PivotTable oder Power Query?"
  ],
  "synonyme": [
    "pivot oder power query"
  ],
  "verwandteThemen": [
    "pivottable",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **PivotTable**, wenn saubere Detaildaten flexibel zusammengefasst werden sollen.
3. Nimm **Power Query**, wenn Rohdaten vor der Auswertung bereinigt oder umgeformt werden müssen.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Dateien erst in Power Query anfügen, danach in einer PivotTable nach Person auswerten.

| Alternative | Geeignet, wenn |
| --- | --- |
| PivotTable | saubere Detaildaten flexibel zusammengefasst werden sollen. |
| Power Query | Rohdaten vor der Auswertung bereinigt oder umgeformt werden müssen. |

## Typischer Fehler

Pivot kann falsche Datentypen nicht fachlich reparieren.

## Merksatz

Die Werkzeuge ergänzen sich häufig.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **PivotTable**, wenn saubere Detaildaten flexibel zusammengefasst werden sollen. Nimm **Power Query**, wenn Rohdaten vor der Auswertung bereinigt oder umgeformt werden müssen.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Pivot kann falsche Datentypen nicht fachlich reparieren. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
