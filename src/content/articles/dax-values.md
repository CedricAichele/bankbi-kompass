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
    "filterkontext"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/values-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nSichtbare Produktarten = COUNTROWS ( VALUES ( Konten[Produktgruppe] ) )\n```"
}
---

## Wann brauche ich das?

Du möchtest VALUES an einem überschaubaren Beispiel verstehen.

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
