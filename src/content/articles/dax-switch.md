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
    "divide",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/switch-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nKlasse = SWITCH ( TRUE(), SUM ( Konten[Bestand_EUR] ) > 5000, \"Groß\", SUM ( Konten[Bestand_EUR] ) > 3000, \"Mittel\", \"Klein\" )\n```",
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Du ordnest eine Kennzahl mehreren Größenklassen zu. Die Bedingungen überschneiden sich; deshalb bestimmen Reihenfolge und Grenzwerte das Ergebnis.

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


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.

## Reihenfolge und Grenzen prüfen

SWITCH(TRUE(), ...) prüft Bedingungen von oben nach unten. Bei den Grenzen 5000 und 3000 gilt: 5000 → Mittel, 5001 → Groß, 3000 → Klein, 3001 → Mittel. Stünde > 3000 zuerst, würde auch 9000 schon „Mittel“ ergeben. Ein Kontext ohne Betrag darf nicht unbemerkt als „Klein“ gelten; füge bei Bedarf vor den Größenvergleichen ISBLANK als eigenen Fall hinzu. Alle Ergebnistexte besitzen hier denselben Datentyp.
