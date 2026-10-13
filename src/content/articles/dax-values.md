---
{
  "id": "dax-values",
  "slug": "dax-values",
  "titel": "VALUES und HASONEVALUE: Auswahl prüfen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "VALUES liefert unterschiedliche Werte im Filterkontext. HASONEVALUE prüft, ob genau ein unterschiedlicher Wert vorliegt.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "VALUES und HASONEVALUE: Auswahl prüfen"
  ],
  "synonyme": [
    "values",
    "hasonevalue"
  ],
  "verwandteThemen": [
    "selectedvalue",
    "filterkontext",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/values-function-dax",
    "https://learn.microsoft.com/en-us/dax/hasonevalue-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nSichtbare Produktarten = COUNTROWS ( VALUES ( Konten[Produktgruppe] ) )\n```",
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Du möchtest prüfen, welche unterschiedlichen Werte die aktuelle Auswahl enthält und ob daraus ein eindeutiger Anzeigetext abgeleitet werden kann.

## Voraussetzungen

Ein vorhandenes Power-BI-Modell mit den im Ausdruck verwendeten Tabellen, Spalten und gegebenenfalls Basismeasures.

## Schritte

1. Prüfe die benötigten Tabellen, Textschlüssel und numerischen Beträge im vorhandenen Modell. Die Tabellen im Beispiel illustrieren den Aufbau.
2. Wähle Modellierung → Neues Measure.
3. Gib die Formel aus dem Beispiel ein und bestätige mit Enter.
4. Füge ein Tabellenvisual mit Personennummer und dem berechneten Ergebnis hinzu.
5. Teste ungefiltert, dann mit Person P003 und Produktgruppe Einlagen.
6. Vergleiche den Wert mit dem erwarteten Ergebnis und untersuche den beschriebenen Fehlerfall.

## Beispiel

### Vorher · Beispieldaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |


### Aktion

```dax
Sichtbare Produktarten = COUNTROWS ( VALUES ( Konten[Produktgruppe] ) )
```

### Nachher · Beispielergebnis

Ohne Filter 3; nur Einlagen ausgewählt 1.

## Ergebnis

VALUES liefert unterschiedliche Werte im Filterkontext. HASONEVALUE prüft, ob genau ein unterschiedlicher Wert vorliegt.

## Warum funktioniert das?

VALUES liefert unterschiedliche sichtbare Werte einer Spalte. COUNTROWS zählt diese Menge. Bei ungültigen Beziehungen kann eine zusätzliche unbekannte Leerzeile relevant werden.

## Typischer Fehler

VALUES ist eine Tabelle, nicht automatisch ein einzelner Textwert.

## Plausibilitätscheck

Prüfe Filter einzeln und gemeinsam. Die Ausgangssumme beträgt 9.000 und Einlagen allein 4.050.


## HASONEVALUE als skalare Prüfung
**Neues Measure**:
```dax
Genau eine Produktart = HASONEVALUE(Konten[Produktgruppe])
```
Ohne Filter: **FALSE** (3 Produktarten). Nur Einlagen: **TRUE**. Ein Filter ohne sichtbaren Wert: **FALSE**. Ersetze die Spalte, deren aktuelle Wertemenge du prüfen willst. HASONEVALUE prüft nicht, ob eine Visualzeile gerade diese Dimension gruppiert; dafür kann ISINSCOPE passender sein.

VALUES liefert eine Tabelle. Erst COUNTROWS, CONCATENATEX oder eine andere skalare Auswertung macht sie zum Measure-Ergebnis. Ein BLANK-Wert zählt zur Wertemenge; eine unbekannte Leerzeile kann bei fehlenden Beziehungsschlüsseln hinzukommen. [DISTINCT und weitere Tabellenmuster](#/wissen/dax-tabellen) erklären den Unterschied.


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
