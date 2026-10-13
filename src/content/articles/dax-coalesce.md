---
{
  "id": "dax-coalesce",
  "slug": "dax-coalesce",
  "titel": "COALESCE und ISBLANK: fehlende Ergebnisse behandeln",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ISBLANK prüft auf ein leeres Ergebnis. COALESCE liefert den ersten nichtleeren Ausdruck. Ersetze BLANK nur mit fachlicher Begründung.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "COALESCE und ISBLANK: fehlende Ergebnisse behandeln"
  ],
  "synonyme": [
    "coalesce",
    "isblank",
    "nullwerte dax"
  ],
  "verwandteThemen": [
    "blank",
    "dax-if",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/coalesce-function-dax",
    "https://learn.microsoft.com/en-us/dax/isblank-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nAnzeige = COALESCE ( SUM ( Konten[Bestand_EUR] ), 0 )\n```",
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Eine Kennzahl ist in bestimmten Ausschnitten leer. Du willst BLANK erkennen und nur dann einen Ersatz anzeigen, wenn er fachlich sinnvoll ist.

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
Anzeige = COALESCE ( SUM ( Konten[Bestand_EUR] ), 0 )
```

### Nachher · Beispielergebnis

Ohne Filter 9.000. Bei einer Filterung ohne Treffer: 0 statt BLANK.

## Ergebnis

ISBLANK prüft auf ein leeres Ergebnis. COALESCE liefert den ersten nichtleeren Ausdruck. Ersetze BLANK nur mit fachlicher Begründung.

## Warum funktioniert das?

COALESCE liefert das erste nichtleere Argument. Der Ersatz 0 ist hier eine bewusste Darstellungsregel.

## Typischer Fehler

Die Ersatzanzeige behebt keine fehlende Datenlieferung.

## Plausibilitätscheck

Prüfe Filter einzeln und gemeinsam. Die Ausgangssumme beträgt 9.000 und Einlagen allein 4.050.


## ISBLANK: fehlendes Ergebnis ausdrücklich erkennen
**Neues Measure**:
```dax
Lieferstatus = IF(ISBLANK(SUM(Konten[Bestand_EUR])), "Kein Betrag im Kontext", "Betrag vorhanden")
```
Ohne Filter ergibt das **Betrag vorhanden**. Bei einer Auswahl ohne Treffer ergibt es **Kein Betrag im Kontext**. Ein echter Gesamtbetrag 0 gilt weiterhin als vorhanden. Ersetze Tabelle, Betragsspalte und Texte. Diese Prüfung sagt noch nicht, ob eine erwartete Lieferung vollständig ist; dafür Zeilen, Stichtage und erwartete Quellen zusätzlich vergleichen. COALESCE(..., 0) eignet sich nur, wenn 0 als Darstellungsersatz fachlich stimmt. Behalte zur Kontrolle das ursprüngliche Measure neben der Ersatzanzeige.


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
