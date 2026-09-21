---
{
  "id": "xverweis-oder-query",
  "slug": "xverweis-oder-query",
  "titel": "XVERWEIS oder Power Query?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "XVERWEIS passt zu einem schnellen Zellnachschlag. Power Query eignet sich für wiederholbare Aufbereitung und kontrollierte Tabellenverknüpfung.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": [
    "XVERWEIS oder Power Query?"
  ],
  "synonyme": [
    "xverweis oder power query"
  ],
  "verwandteThemen": [
    "xverweis",
    "zusammenfuehren",
    "dateien-kombinieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/xlookup-function",
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview",
    "https://learn.microsoft.com/en-us/power-query/connectors/folder"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **XVERWEIS**, wenn wenige Werte interaktiv in einer Arbeitsmappe nachgeschlagen werden.
3. Nimm **Power Query**, wenn regelmäßige Zusammenführungen vieler Zeilen reproduzierbar beim Laden erfolgen sollen.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Ein Konto im Eingabefeld nachschlagen: XVERWEIS. Jeden Monat fünf Dateien harmonisieren: Power Query.

| Alternative | Geeignet, wenn |
| --- | --- |
| XVERWEIS | wenige Werte interaktiv in einer Arbeitsmappe nachgeschlagen werden. |
| Power Query | regelmäßige Zusammenführungen vieler Zeilen reproduzierbar beim Laden erfolgen sollen. |

## Typischer Fehler

Keine der Methoden klärt automatisch mehrdeutige Schlüssel.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| XVERWEIS | wenige Werte interaktiv in einer Arbeitsmappe nachgeschlagen werden |
| Power Query | regelmäßige Zusammenführungen vieler Zeilen reproduzierbar beim Laden erfolgen sollen |

## Merksatz

Zellantwort oder wiederholbarer Datenprozess?

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **XVERWEIS**, wenn wenige Werte interaktiv in einer Arbeitsmappe nachgeschlagen werden. Nimm **Power Query**, wenn regelmäßige Zusammenführungen vieler Zeilen reproduzierbar beim Laden erfolgen sollen.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Keine der Methoden klärt automatisch mehrdeutige Schlüssel. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
