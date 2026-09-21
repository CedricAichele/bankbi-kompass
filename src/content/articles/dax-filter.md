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
  "synonyme": [],
  "verwandteThemen": [
    "calculate",
    "countrows",
    "calculate-filterwahl"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/filter-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nEinlagenzeilen = COUNTROWS ( FILTER ( Konten, Konten[Produktgruppe] = \"Einlagen\" ) )\n```"
}
---

## Wann brauche ich das?

Du möchtest FILTER an einem überschaubaren Beispiel verstehen.

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
