---
{
  "id": "text-ausschnitt",
  "slug": "text-ausschnitt",
  "titel": "LINKS, RECHTS und TEIL",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Diese Funktionen schneiden Text nach festen Zeichenpositionen aus. Bei variabler Länge eignen sich Trennzeichenfunktionen besser.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "LINKS, RECHTS und TEIL"
  ],
  "synonyme": [
    "links",
    "rechts",
    "teil"
  ],
  "verwandteThemen": [
    "text-trennzeichen",
    "textteilen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/left-function",
    "https://support.microsoft.com/de-de/excel/text-functions-reference"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=LINKS(A2;4)\n```"
}
---

## Wann brauche ich das?

Eine feste Anzahl Zeichen vom Textanfang entnehmen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = P001-K001**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = P001-K001 |

### Aktion

```excel
=LINKS(A2;4)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| P001 |

## Ergebnis

Eine feste Anzahl Zeichen vom Textanfang entnehmen.

## Warum funktioniert das?

LINKS zählt Zeichenpositionen. Für K001 wäre RECHTS(A2;4), für einen mittleren Abschnitt TEIL(A2;6;4) geeignet.

## Typischer Fehler

Feste Positionen auf Texte mit variabler Länge anwenden.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **P001** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
