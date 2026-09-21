---
{
  "id": "dax-switch",
  "slug": "dax-switch",
  "titel": "SWITCH: mehrere Fälle verständlich ordnen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SWITCH eignet sich für mehrere feste Werte oder geordnete Bedingungen. Der erste passende Fall bestimmt das Ergebnis.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "SWITCH: mehrere Fälle verständlich ordnen"
  ],
  "synonyme": [
    "switch",
    "ampel"
  ],
  "verwandteThemen": [
    "dax-if",
    "divide"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/switch-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nKlasse = SWITCH ( TRUE(), SUM ( Konten[Bestand_EUR] ) > 5000, \"Groß\", SUM ( Konten[Bestand_EUR] ) > 3000, \"Mittel\", \"Klein\" )\n```"
}
---

## Wann brauche ich das?

Du möchtest SWITCH an einem überschaubaren Beispiel verstehen.

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
Klasse = SWITCH ( TRUE(), SUM ( Konten[Bestand_EUR] ) > 5000, "Groß", SUM ( Konten[Bestand_EUR] ) > 3000, "Mittel", "Klein" )
```

### Nachher · Beispielergebnis

Gesamt 9.000 → Groß; P003 4.000 → Mittel; P001 2.000 → Klein.

## Ergebnis

SWITCH eignet sich für mehrere feste Werte oder geordnete Bedingungen. Der erste passende Fall bestimmt das Ergebnis.

## Warum funktioniert das?

TRUE() wird mit Bedingungen verglichen. Der erste wahre Zweig gewinnt; danach folgt der Standardwert.

## Typischer Fehler

Die Reihenfolge überlappender Bedingungen verändert das Ergebnis.

## Plausibilitätscheck

Prüfe Filter einzeln und gemeinsam. Die Ausgangssumme beträgt 9.000 und Einlagen allein 4.050.
