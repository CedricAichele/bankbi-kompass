---
{
  "id": "fakt-zu-fakt",
  "slug": "fakt-zu-fakt",
  "titel": "Warum Fakt-zu-Fakt problematisch ist",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Unterschiedliche Faktentabellen sollten in der Regel über gemeinsame Dimensionen gefiltert werden, statt ihre Detailzeilen direkt zu verbinden.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": ["Warum Fakt-zu-Fakt problematisch ist"],
  "synonyme": ["fakt zu fakt"],
  "verwandteThemen": ["star-schema", "plan-ist", "beziehung-nm"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-many-to-many",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du vergleichst monatlichen Plan und einzelne Neugeschäftsvorgänge.

## Schritte

1. Zeilenebene beider Fakten dokumentieren.
2. Gemeinsame Datum-, Produkt- und Geschäftsstellendimensionen verwenden.
3. Plan nur auf seiner gültigen Ebene auswerten; Kontodetails nicht künstlich zuordnen.

## Beispiel

Monatsplan 100 und zwei Vorgänge mit 40 und 60 ergeben 100 % Erreichung, keinen verdoppelten Plan.

## Typischer Fehler

Monatsplan in jeden Vorgang hineinkopieren und anschließend summieren.
