---
{
  "id": "text-ausschnitt",
  "slug": "text-ausschnitt",
  "titel": "LINKS, RECHTS und TEIL",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Text bearbeiten",
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
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/left-function",
    "https://support.microsoft.com/de-de/excel/text-functions-reference"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=LINKS(A2;4)\n```",
  "formelreferenz": {
    "funktion": "LINKS",
    "eingabe": "A2 enthält P001-K001. Formel in H2.",
    "anpassen": "A2 ist die Textzelle, 4 die Zahl der Zeichen vom Anfang. Für variable Längen Trennzeichen statt fester Position prüfen.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
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

H2 enthält P001. RECHTS(A2;4) und TEIL(A2;6;4) liefern für denselben Eingang P001-K001 jeweils K001.

## Warum funktioniert das?

LINKS zählt Zeichenpositionen. Für K001 wäre RECHTS(A2;4), für einen mittleren Abschnitt TEIL(A2;6;4) geeignet.

## Typischer Fehler

Feste Positionen auf Texte mit variabler Länge anwenden.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **P001** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
