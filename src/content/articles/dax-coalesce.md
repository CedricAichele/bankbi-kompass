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
    "dax-if"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/coalesce-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nAnzeige = COALESCE ( SUM ( Konten[Bestand_EUR] ), 0 )\n```"
}
---

## Wann brauche ich das?

Du möchtest COALESCE an einem überschaubaren Beispiel verstehen.

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
