---
{
  "id": "wechseln-ersetzen",
  "slug": "wechseln-ersetzen",
  "titel": "WECHSELN oder ERSETZEN?",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Text",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WECHSELN tauscht gefundenen Text, ERSETZEN ersetzt Zeichen anhand ihrer Position.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "WECHSELN oder ERSETZEN?"
  ],
  "synonyme": [
    "wechseln",
    "ersetzen funktion"
  ],
  "verwandteThemen": [
    "excel-ersetzen",
    "glaetten",
    "saeubern"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/substitute-function",
    "https://support.microsoft.com/de-de/excel/text-functions-reference"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=WECHSELN(A2;\"_alt\";\"_neu\")\n```"
}
---

## Wann brauche ich das?

Bekannten Teiltext durch anderen Text ersetzen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = P001_alt**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein. Bei TEXTTEILEN auch I2 freihalten.
3. Bestätige mit Enter. Für Datumsergebnisse öffne **Start → Zahlenformat** und wähle ein passendes Datumformat.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = P001_alt |

### Aktion

```excel
=WECHSELN(A2;"_alt";"_neu")
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| P001_neu |

## Ergebnis

Bekannten Teiltext durch anderen Text ersetzen.

## Warum funktioniert das?

WECHSELN sucht Textvorkommen. ERSETZEN arbeitet dagegen positionsbezogen: ERSETZEN(A2;6;3;"neu") ergibt hier ebenfalls P001_neu.

## Typischer Fehler

Positionsersatz bei unterschiedlich langen Kennungen einsetzen.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **P001_neu** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
