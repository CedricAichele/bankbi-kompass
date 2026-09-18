---
{
  "id": "count-oder-distinctcount",
  "slug": "count-oder-distinctcount",
  "titel": "COUNT, COUNTROWS oder DISTINCTCOUNT?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "COUNT zählt nichtleere Spaltenwerte, COUNTROWS Zeilen und DISTINCTCOUNT unterschiedliche Schlüssel.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": [
    "COUNT, COUNTROWS oder DISTINCTCOUNT?"
  ],
  "synonyme": [
    "count oder distinctcount",
    "einzigartige kunden"
  ],
  "verwandteThemen": [
    "count",
    "countrows",
    "distinctcount"
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
2. Nimm **COUNTROWS / COUNT**, wenn du Zeilen zählen willst (COUNTROWS) oder befüllte Werte einer Spalte (COUNT).
3. Nimm **DISTINCTCOUNT**, wenn unterschiedliche Personen oder Objekte gezählt werden sollen.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

P001, P001, P002: drei Zeilen, zwei unterschiedliche Personen. Ein leeres Enddatum wird von COUNT übersprungen.

## Typischer Fehler

Eine Gesamtzahl verschiedener Personen ist nicht additiv über überlappende Gruppen.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| COUNTROWS / COUNT | du Zeilen zählen willst (COUNTROWS) oder befüllte Werte einer Spalte (COUNT) |
| DISTINCTCOUNT | unterschiedliche Personen oder Objekte gezählt werden sollen |

## Merksatz

Erst die Zähleinheit benennen, dann die Funktion wählen.
