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
    "if dax"
  ],
  "verwandteThemen": [
    "dax-coalesce",
    "dax-switch"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/if-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nHinweis = IF ( SUM ( Konten[Bestand_EUR] ) > 3000, \"Über 3.000\", \"Bis 3.000\" )\n```"
}
---

## Wann brauche ich das?

Du möchtest IF an einem überschaubaren Beispiel verstehen.

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
Hinweis = IF ( SUM ( Konten[Bestand_EUR] ) > 3000, "Über 3.000", "Bis 3.000" )
```

## Ergebnis

P003: Über 3.000; P001: Bis 3.000.

## Warum funktioniert das?

Argumente: Bedingung, Wert bei wahr, Wert bei falsch. Die Bedingung wird im aktuellen Filterkontext ausgewertet.

## Typischer Fehler

Ein Measure ist kein zeilenweise gespeichertes Merkmal für einen Slicer.

## Plausibilitätscheck

Prüfe Filter einzeln und gemeinsam. Die Ausgangssumme beträgt 9.000 und Einlagen allein 4.050.
