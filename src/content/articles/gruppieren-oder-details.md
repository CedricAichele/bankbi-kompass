---
{
  "id": "gruppieren-oder-details",
  "slug": "gruppieren-oder-details",
  "titel": "Gruppieren oder Zeilen behalten?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Verdichte nur, wenn das Ziel keine Details mehr braucht. Sonst behalte die Quelle und aggregiere in der Ansicht.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": [
    "Gruppieren oder Zeilen behalten?"
  ],
  "synonyme": [
    "gruppieren oder zeilen behalten"
  ],
  "verwandteThemen": [
    "gruppieren",
    "granularitaet",
    "matrix"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/group-by",
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-matrix-visual"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Gruppieren**, wenn eine Zeile je Gruppe mit zusammengefassten Werten gebraucht wird.
3. Nimm **berechnete Spalte**, wenn jede Originalzeile erhalten bleiben und ein Merkmal bekommen soll.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Sechs Konten zu vier Personenbeständen: Gruppieren. Jedes Konto als klein/groß markieren: Spalte.

| Alternative | Geeignet, wenn |
| --- | --- |
| Gruppieren | eine Zeile je Gruppe mit zusammengefassten Werten gebraucht wird. |
| berechnete Spalte | jede Originalzeile erhalten bleiben und ein Merkmal bekommen soll. |

## Typischer Fehler

Gruppieren entfernt Detailinformation aus dem Ergebnis.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Gruppieren | eine Zeile je Gruppe mit zusammengefassten Werten gebraucht wird |
| berechnete Spalte | jede Originalzeile erhalten bleiben und ein Merkmal bekommen soll |

## Merksatz

Weniger Zeilen oder mehr Merkmale?

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Gruppieren**, wenn eine Zeile je Gruppe mit zusammengefassten Werten gebraucht wird. Nimm **berechnete Spalte**, wenn jede Originalzeile erhalten bleiben und ein Merkmal bekommen soll.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Gruppieren entfernt Detailinformation aus dem Ergebnis. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
