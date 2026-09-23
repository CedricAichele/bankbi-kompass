---
{
  "id": "saeubern",
  "slug": "saeubern",
  "titel": "Text bereinigen: SÄUBERN",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SÄUBERN entfernt bestimmte nicht druckbare Steuerzeichen aus Texten.",
  "ort": "Excel → Hilfsspalte",
  "tags": [
    "Text bereinigen: SÄUBERN",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "glaetten",
    "wechseln-ersetzen",
    "excel-ersetzen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/clean-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=SÄUBERN(A2)\n```"
}
---

## Wann brauche ich das?

Nicht druckbare Steuerzeichen aus einem Text entfernen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 wird mit ="P001"&ZEICHEN(10) erzeugt**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 wird mit ="P001"&ZEICHEN(10) erzeugt |

### Aktion

```excel
=SÄUBERN(A2)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| P001 |

## Ergebnis

Nicht druckbare Steuerzeichen aus einem Text entfernen.

## Warum funktioniert das?

ZEICHEN(10) fügt einen Zeilenumbruch hinzu. SÄUBERN entfernt die unterstützten Steuerzeichen, aber nicht pauschal alle Unicode-Sonderzeichen.

## Typischer Fehler

SÄUBERN entfernt keine normalen Rand-Leerzeichen; dafür GLÄTTEN ergänzen.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **P001** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
