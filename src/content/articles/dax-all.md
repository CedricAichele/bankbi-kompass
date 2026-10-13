---
{
  "id": "dax-all",
  "slug": "dax-all",
  "titel": "ALL oder REMOVEFILTERS?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "REMOVEFILTERS drückt das Aufheben von Filtern aus. ALL kann zusätzlich eine Tabelle für einen Tabellenausdruck liefern.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "ALL oder REMOVEFILTERS?"
  ],
  "synonyme": [
    "all",
    "filter entfernen",
    "allexcept"
  ],
  "verwandteThemen": [
    "removefilters",
    "calculate",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/all-function-dax",
    "https://learn.microsoft.com/en-us/dax/allexcept-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nAlle Produktarten = COUNTROWS ( ALL ( Konten[Produktgruppe] ) )\n```",
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Du vergleichst eine gefilterte Auswahl mit einem bewusst definierten Gesamtwert. Kläre zuerst, welche Filter bleiben sollen und welche entfernt werden dürfen.

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
Alle Produktarten = COUNTROWS ( ALL ( Konten[Produktgruppe] ) )
```

### Nachher · Beispielergebnis

3, auch wenn nur Einlagen ausgewählt ist.

## Ergebnis

REMOVEFILTERS drückt das Aufheben von Filtern aus. ALL kann zusätzlich eine Tabelle für einen Tabellenausdruck liefern.

## Warum funktioniert das?

ALL kann eine Tabelle unterschiedlicher Spaltenwerte zurückgeben und als Filtermodifikator dienen. Hier zählt COUNTROWS die Produktwerte.

## Typischer Fehler

ALL(gesamte Tabelle) ist oft breiter als die eigentlich zu entfernende Auswahl.

## Plausibilitätscheck

Prüfe Filter einzeln und gemeinsam. Die Ausgangssumme beträgt 9.000 und Einlagen allein 4.050.


## ALLEXCEPT: bestimmte Tabellenfilter behalten
Mit den oben gezeigten Konten als **neues Measure**:
```dax
Bestand ohne weitere Kontenfilter = CALCULATE(
    SUM(Konten[Bestand_EUR]),
    ALLEXCEPT(Konten, Konten[Produktgruppe])
)
```
Wähle Produktgruppe Einlagen und Person P001. Die normale Summe beträgt **1250**; die ALLEXCEPT-Variante ergibt **4050**, weil der Personenfilter entfernt und der vorhandene Produktgruppenfilter behalten wird.

Ersetze Tabelle, Betragsspalte und zu behaltende Spalten. ALLEXCEPT verlangt eine Basistabelle und Basisspalten. Seine Wirkung kann auch Filter aus der erweiterten Tabelle betreffen; in einem Sternschema deshalb alle Dimensionen prüfen. ALLEXCEPT erzeugt keinen nicht vorhandenen Produktfilter. REMOVEFILTERS auf einer einzelnen Dimension ist oft leichter zu begrenzen. Teste Produkt und Person einzeln sowie gemeinsam; verwende ALLEXCEPT nicht als pauschale Lösung für eine falsch gefilterte Summe.


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
