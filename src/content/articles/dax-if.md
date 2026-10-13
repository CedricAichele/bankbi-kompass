---
{
  "id": "dax-if",
  "slug": "dax-if",
  "titel": "IF: zwei Ergebnisse unterscheiden",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "IF wählt abhängig von einer Bedingung zwischen zwei Ergebnissen. Leere Werte brauchen gegebenenfalls einen eigenen Fall.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "IF: zwei Ergebnisse unterscheiden"
  ],
  "synonyme": [
    "if dax",
    "if"
  ],
  "verwandteThemen": [
    "dax-coalesce",
    "dax-switch",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/if-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nHinweis = IF ( SUM ( Konten[Bestand_EUR] ) > 3000, \"Über 3.000\", \"Bis 3.000\" )\n```",
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Eine Kennzahl soll abhängig von einer Grenze einen Hinweis liefern. Entscheide, ob die Regel auf der aktuellen Auswahl als Measure oder dauerhaft je Zeile als Spalte gelten soll.

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
Hinweis = IF ( SUM ( Konten[Bestand_EUR] ) > 3000, "Über 3.000", "Bis 3.000" )
```

### Nachher · Beispielergebnis

P003: Über 3.000; P001: Bis 3.000.

## Ergebnis

IF wählt abhängig von einer Bedingung zwischen zwei Ergebnissen. Leere Werte brauchen gegebenenfalls einen eigenen Fall.

## Warum funktioniert das?

Argumente: Bedingung, Wert bei wahr, Wert bei falsch. Die Bedingung wird im aktuellen Filterkontext ausgewertet.

## Typischer Fehler

Ein Measure ist kein zeilenweise gespeichertes Merkmal für einen Slicer.

## Plausibilitätscheck

Prüfe Filter einzeln und gemeinsam. Die Ausgangssumme beträgt 9.000 und Einlagen allein 4.050.


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.

## Grenzen und fehlende Ergebnisse

Bei der gezeigten Regel ist genau 3000 noch „Bis 3.000“; erst ein größerer Wert ergibt „Über 3.000“. SUM ohne Treffer ergibt BLANK und kann im numerischen Vergleich wie 0 behandelt werden. Wenn fehlende Daten einen eigenen Hinweis benötigen, prüfe zuerst ISBLANK. Ein Text-Measure eignet sich zur Anzeige, nicht als gespeicherte Slicer-Spalte. Teste zusätzlich 3000, 3001 und einen Kontext ohne Zeilen.
