---
{
  "id": "pq-excel-oder-powerbi",
  "slug": "pq-excel-oder-powerbi",
  "titel": "Power Query in Excel oder Power BI?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Weiterverwendung bestimmt den Host. Power Query in Excel und Power Query in Power BI lösen unterschiedliche Anforderungen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Power Query in Excel oder Power BI?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "power-query",
    "pq-laden"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/power-query-ui",
    "https://learn.microsoft.com/en-us/power-query/queries-pane"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Power Query in Excel**, wenn das Ergebnis in einer Arbeitsmappe oder PivotTable weiterverwendet wird.
3. Nimm **Power Query in Power BI**, wenn die bereinigten Daten in ein Power-BI-Modell geladen werden.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Gleiche Merge-Regel, unterschiedliche Ladeziele: Blatt gegenüber Modell.

| Alternative | Geeignet, wenn |
| --- | --- |
| Power Query in Excel | das Ergebnis in einer Arbeitsmappe oder PivotTable weiterverwendet wird. |
| Power Query in Power BI | die bereinigten Daten in ein Power-BI-Modell geladen werden. |

## Typischer Fehler

Nicht alle Konnektoren und Ladeoptionen sind in beiden Hosts identisch.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Power Query in Excel | das Ergebnis in einer Arbeitsmappe oder PivotTable weiterverwendet wird |
| Power Query in Power BI | die bereinigten Daten in ein Power-BI-Modell geladen werden |

## Merksatz

Die Weiterverwendung bestimmt den Host.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Power Query in Excel**, wenn das Ergebnis in einer Arbeitsmappe oder PivotTable weiterverwendet wird. Nimm **Power Query in Power BI**, wenn die bereinigten Daten in ein Power-BI-Modell geladen werden.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Nicht alle Konnektoren und Ladeoptionen sind in beiden Hosts identisch. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
