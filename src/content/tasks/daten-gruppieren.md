---
{
  "id": "daten-gruppieren",
  "slug": "daten-gruppieren",
  "titel": "Daten gruppieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entscheide zwischen einer verdichteten Ergebnistabelle und einer flexibel aggregierten Ansicht mit erhaltenen Details.",
  "ort": "Power Query: Gruppieren · Excel: PivotTable · Power BI: Matrix · IDA: Aggregation",
  "tags": [
    "Daten gruppieren",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "gruppieren",
    "pivottable",
    "matrix",
    "ida-aggregation"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du brauchst Summen oder Anzahlen je Person, Produkt oder Vorgang.

## Schritte

1. Zielschlüssel und gewünschte Kennzahl bestimmen.
2. Bei dauerhaft verdichteter Ausgabe Gruppieren verwenden.
3. Bei weiterhin benötigten Details PivotTable oder Matrix bevorzugen.
4. Öffne die [konkrete Gruppieren: Werte je Schlüssel zusammenfassen-Anleitung](#/wissen/gruppieren) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Die Summe muss unverändert bleiben; Detailspalten verschwinden bewusst.

## Beispiel

P001 mit 120 und 80 Euro → Gruppensumme 200 Euro am selben Stichtag.

[Gruppieren](#/wissen/gruppieren) · [PivotTable](#/wissen/pivottable) · [Matrix](#/wissen/matrix) · [IDA](#/wissen/ida-aggregation)

## Typischer Fehler

Detailinformationen verwerfen, die später noch zum Filtern oder Prüfen gebraucht werden.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Gruppieren: Werte je Schlüssel zusammenfassen](#/wissen/gruppieren) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [PivotTable erstellen](#/wissen/pivottable)                                                                                             |
| IDA / Reporting | [Liste gruppieren](#/wissen/ida-gruppieren); generisches Konzept                                                                        |

## Ergebnis

P001: 120 + 80 = 200; P002: 50. Zwei Gruppen, Gesamtsumme 250.

## Warum funktioniert das?

Die Gruppierung reduziert Zeilen, das Aggregat fasst deren Werte zusammen.

## Plausibilitätscheck

Die Summe muss unverändert bleiben; Detailspalten verschwinden bewusst.
