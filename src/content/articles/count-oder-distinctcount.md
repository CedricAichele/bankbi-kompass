---
{
  "id": "count-oder-distinctcount",
  "slug": "count-oder-distinctcount",
  "titel": "COUNT, COUNTROWS oder DISTINCTCOUNT?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "COUNT zählt nichtleere Spaltenwerte, COUNTROWS Zeilen und DISTINCTCOUNT unterschiedliche Schlüssel.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": ["COUNT, COUNTROWS oder DISTINCTCOUNT?"],
  "synonyme": ["count oder distinctcount", "einzigartige kunden"],
  "verwandteThemen": ["count", "countrows", "distinctcount"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst eine nachvollziehbare Anzahl.

## Schritte

1. Zähleinheit festlegen: vorhandener Wert, Kontozeile oder Person.
2. Passende Zählfunktion wählen.
3. Mehrfachzeilen und BLANK-Fälle testen.

## Beispiel

P001, P001, P002 → drei Zeilen, zwei eindeutige Personen.

## Typischer Fehler

DISTINCTCOUNT zählt BLANK als eigenen Wert; fehlende Schlüssel müssen bewusst behandelt werden.
