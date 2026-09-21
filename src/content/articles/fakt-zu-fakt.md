---
{
  "id": "fakt-zu-fakt",
  "slug": "fakt-zu-fakt",
  "titel": "Warum Fakt-zu-Fakt problematisch ist",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Unterschiedliche Faktentabellen sollten in der Regel über gemeinsame Dimensionen gefiltert werden, statt ihre Detailzeilen direkt zu verbinden.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": [
    "Warum Fakt-zu-Fakt problematisch ist"
  ],
  "synonyme": [
    "fakt zu fakt"
  ],
  "verwandteThemen": [
    "star-schema",
    "granularitaet",
    "beziehung-nm",
    "problem-merge-zeilen",
    "plan-ist"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-many-to-many"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Zwei Messwerttabellen mit unterschiedlichen Zeilenebenen gemeinsam auswerten.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Bestimme die Granularität jeder Faktentabelle, beispielsweise Bestand je Konto/Tag und Bewegung je Buchung.
2. Identifiziere gemeinsame Dimensionen wie Konto, Kunde oder Datum. Prüfe ihre Schlüssel auf Eindeutigkeit.
3. Verbinde die gemeinsamen Dimensionen jeweils per **1:*** mit beiden Fakten.
4. Vermeide einen direkten Join der Detailzeilen über einen mehrfach vorhandenen Schlüssel.
5. Vergleiche jede Kennzahl zunächst mit ihrer eigenen Quelle, dann beide im gemeinsamen Dimensionskontext.

## Beispiel

### Vorher · Beispieldaten

**Bestand:** P001/K001/100 und P001/K002/200.

**Buchungen:** P001/B001/10, P001/B002/20, P001/B003/30.

**DimKunde:** P001 genau einmal.

### Aktion

Zwei Bestandszeilen und drei Buchungen zu einem Kunden über eine gemeinsame Dimension auswerten.

### Nachher · Beispielergebnis

| Auswertung | Erwartung |
| --- | --- |
| Bestandszeilen | 2, nicht 2 × 3 |
| Buchungszeilen | 3, nicht 2 × 3 |
| Gemeinsamer Filter | DimKunde filtert beide Fakten separat |

## Ergebnis

Messwerte bleiben auf ihrer eigenen Ebene und lassen sich über gemeinsame Dimensionen vergleichen.

## Warum funktioniert das?

Ein direkter Join zweier Mehrfachseiten erzeugt alle passenden Kombinationen. Getrennte Fakten vermeiden diese Vervielfachung und bewahren die eigene Bedeutung jeder Messung.

## Typischer Fehler

Nach einem Detail-Join vervielfachte Beträge summieren und die Ursache erst im Visual suchen.

## Plausibilitätscheck

Die Zeilenzahl und Kontrollsumme jeder Faktentabelle bleiben unabhängig korrekt.
