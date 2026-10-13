---
{
  "id": "dax-filter",
  "slug": "dax-filter",
  "titel": "FILTER: eine Teilmenge bilden",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "FILTER liefert eine Tabelle mit den Zeilen, die eine Bedingung erfüllen.",
  "ort": "Power BI → DAX-Formel im Measure",
  "tags": [
    "FILTER: eine Teilmenge bilden",
    "Reporting"
  ],
  "synonyme": [
    "filter"
  ],
  "verwandteThemen": [
    "calculate",
    "countrows",
    "calculate-filterwahl",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/filter-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nEinlagenzeilen = COUNTROWS ( FILTER ( Konten, Konten[Produktgruppe] = \"Einlagen\" ) )\n```",
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Du brauchst eine Teilmenge mit einer Bedingung, die pro Datenzeile geprüft wird. FILTER liefert dafür eine Tabelle; COUNTROWS, SUMX oder CALCULATE wertet sie anschließend aus.

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
Einlagenzeilen = COUNTROWS ( FILTER ( Konten, Konten[Produktgruppe] = "Einlagen" ) )
```

### Nachher · Beispielergebnis

3

## Ergebnis

FILTER liefert eine Tabelle mit den Zeilen, die eine Bedingung erfüllen.

## Warum funktioniert das?

FILTER bekommt eine Tabelle und eine zeilenweise Bedingung. Es liefert eine Tabelle; COUNTROWS macht daraus eine skalare Anzahl.

## Typischer Fehler

FILTER allein kann nicht als einzelner Zahlenwert in einer Karte angezeigt werden.

## Plausibilitätscheck

Ohne Auswahl zählt das Measure drei Einlagenzeilen. Mit Person P003 bleibt eine Zeile; mit Produktgruppe Kredite bleibt keine Zeile und COUNTROWS liefert BLANK. Prüfe die Zeilenanzahl, nicht die Bestandssumme.

## Argumente verstehen

| Argument | Bedeutung |
| --- | --- |
| Tabelle | Ausgangsmenge der zu prüfenden Zeilen. |
| Bedingung | Wird je Zeile geprüft. FILTER liefert eine Tabelle, keinen fertigen Summenwert. |


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
