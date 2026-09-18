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
    "filter entfernen"
  ],
  "verwandteThemen": [
    "removefilters",
    "calculate"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/all-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nAlle Produktarten = COUNTROWS ( ALL ( Konten[Produktgruppe] ) )\n```"
}
---

## Wann brauche ich das?

Du möchtest ALL an einem überschaubaren Beispiel verstehen.

## Voraussetzungen

Tabelle Konten mit den sechs Beispielzeilen. Für RELATED zusätzlich Personen mit P001/A, P002/B, P003/A, P004/B und aktive 1:n-Beziehung zu Konten.

## Schritte

1. Lege die synthetischen Tabellen an und prüfe Textschlüssel sowie numerische Beträge.
2. Wähle Modellierung → Neues Measure.
3. Gib die Formel aus dem Beispiel ein und bestätige mit Enter.
4. Füge ein Tabellenvisual mit Personennummer und dem berechneten Ergebnis hinzu.
5. Teste ungefiltert, dann mit Person P003 und Produktgruppe Einlagen.
6. Vergleiche den Wert mit dem erwarteten Ergebnis und untersuche den beschriebenen Fehlerfall.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

```dax
Alle Produktarten = COUNTROWS ( ALL ( Konten[Produktgruppe] ) )
```

## Ergebnis

3, auch wenn nur Einlagen ausgewählt ist.

## Warum funktioniert das?

ALL kann eine Tabelle unterschiedlicher Spaltenwerte zurückgeben und als Filtermodifikator dienen. Hier zählt COUNTROWS die Produktwerte.

## Typischer Fehler

ALL(gesamte Tabelle) ist oft breiter als die eigentlich zu entfernende Auswahl.

## Plausibilitätscheck

Prüfe Filter einzeln und gemeinsam. Die Ausgangssumme beträgt 9.000 und Einlagen allein 4.050.
