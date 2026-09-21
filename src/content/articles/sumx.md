---
{
  "id": "sumx",
  "slug": "sumx",
  "titel": "SUMX: zeilenweise rechnen und summieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "SUMX berechnet einen Ausdruck für jede sichtbare Tabellenzeile und addiert die Ergebnisse.",
  "ort": "Power BI → Neues Measure",
  "tags": [
    "SUMX: zeilenweise rechnen und summieren",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "sum",
    "granularitaet"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
    "https://learn.microsoft.com/en-us/dax/sum-function-dax",
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nPositionswert = SUMX ( Positionen, Positionen[Menge] * Positionen[Preis] )\n```"
}
---

## Wann brauche ich das?

Ein Betrag muss zuerst je Zeile berechnet und anschließend summiert werden.

## Voraussetzungen

Ein vorhandenes Power-BI-Modell mit den im Ausdruck verwendeten Tabellen, Spalten und gegebenenfalls Basismeasures.

## Schritte

1. Erstelle Positionen mit den Spalten Vorgang, Menge und Preis aus dem Beispiel. Setze Menge und Preis auf Zahl.
2. Wähle Modellierung → Neues Measure und gib den vollständigen Ausdruck ein.
3. Bestätige mit Enter. Ziehe Vorgang und Positionswert in ein Tabellenvisual.
4. Kontrolliere die beiden Zeilen: V1 = 20, V2 = 60.
5. Schalte die Gesamtsumme ein beziehungsweise füge eine Karte hinzu: 80.
6. Filtere auf V1 und prüfe 20. Entferne danach den Filter.

## Beispiel

### Vorher · Beispieldaten

| Vorgang | Menge | Preis |
| --- | --- | --- |
| V1 | 2 | 10 |
| V2 | 3 | 20 |


### Aktion

```dax
Positionswert = SUMX ( Positionen, Positionen[Menge] * Positionen[Preis] )
```

### Nachher · Beispielergebnis

20 + 60 = 80. SUM(Menge) × SUM(Preis) wäre dagegen 5 × 30 = 150 und fachlich falsch.

## Ergebnis

Ein Ausdruck wird für jede sichtbare Tabellenzeile ausgewertet; anschließend werden die Einzelergebnisse addiert.

## Warum funktioniert das?

Argument 1 bestimmt die Zeilen. Argument 2 wird im Zeilenkontext jeder Zeile ausgewertet. SUMX addiert anschließend diese Einzelresultate.

## Typischer Fehler

**Symptom:** 150 statt 80. **Ursache:** Summen statt zusammengehöriger Zeilenwerte multipliziert. **Lösung:** SUMX oder vorberechnete Positionsspalte verwenden.

## Plausibilitätscheck

Multipliziere beide Zeilen von Hand und teste den Filter V1.

## Argumente verstehen

| Argument | Bedeutung |
| --- | --- |
| Tabelle | Legt die zu durchlaufenden Zeilen fest. |
| Ausdruck | Wird in jeder Zeile mit deren Werten berechnet. Der Zeilenkontext ist noch kein neuer Berichtsslicer. |
