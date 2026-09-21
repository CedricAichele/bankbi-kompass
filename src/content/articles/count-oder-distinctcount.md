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
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/count-function-dax",
    "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
    "https://learn.microsoft.com/en-us/dax/distinctcount-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **COUNTROWS / COUNT**, wenn du Zeilen zählen willst (COUNTROWS) oder nicht leere Zahlen, Datums- oder Textwerte einer Spalte (COUNT; keine Wahrheitswerte).
3. Nimm **DISTINCTCOUNT**, wenn unterschiedliche Personen oder Objekte gezählt werden sollen.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

P001, P001, P002: drei Zeilen, zwei unterschiedliche Personen. Bei drei Zeilen mit zwei ausgefüllten Enddaten liefert COUNT(Enddatum) 2, COUNTROWS 3 und DISTINCTCOUNT(Person) 2. DISTINCTCOUNT zählt BLANK als eigenen Wert mit.

| Alternative | Geeignet, wenn |
| --- | --- |
| COUNTROWS / COUNT | du Zeilen zählen willst (COUNTROWS) oder nicht leere Zahlen, Datums- oder Textwerte einer Spalte (COUNT; keine Wahrheitswerte). |
| DISTINCTCOUNT | unterschiedliche Personen oder Objekte gezählt werden sollen. |

## Typischer Fehler

Eine Gesamtzahl verschiedener Personen ist nicht additiv über überlappende Gruppen.

## Merksatz

Erst die Zähleinheit benennen, dann die Funktion wählen.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **COUNTROWS / COUNT**, wenn du Zeilen zählen willst (COUNTROWS) oder nicht leere Zahlen, Datums- oder Textwerte einer Spalte (COUNT; keine Wahrheitswerte). Nimm **DISTINCTCOUNT**, wenn unterschiedliche Personen oder Objekte gezählt werden sollen.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Eine Gesamtzahl verschiedener Personen ist nicht additiv über überlappende Gruppen. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
