---
{
  "id": "glaetten",
  "slug": "glaetten",
  "titel": "Leerzeichen entfernen: GLÄTTEN",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "GLÄTTEN entfernt äußere normale Leerzeichen und reduziert mehrfache innere normale Leerzeichen.",
  "ort": "Excel → Hilfsspalte",
  "tags": [
    "Leerzeichen entfernen: GLÄTTEN",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "saeubern",
    "pq-text",
    "xverweis"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/trim-function",
    "https://support.microsoft.com/de-de/office/gl%C3%A4tten-funktion-410388fa-c5df-49c6-b16c-9e5630b479f9"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=GLÄTTEN(A2)\n```"
}
---

## Wann brauche ich das?

Führende und nachgestellte normale Leerzeichen entfernen; innere Folgen auf ein Leerzeichen reduzieren.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 enthält "  P001   Nord  "**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 enthält "  P001   Nord  " |

### Aktion

```excel
=GLÄTTEN(A2)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| P001 Nord |

## Ergebnis

Führende und nachgestellte normale Leerzeichen entfernen; innere Folgen auf ein Leerzeichen reduzieren.

## Warum funktioniert das?

GLÄTTEN normalisiert das normale Leerzeichen. Geschützte Leerzeichen aus Webseiten können einen zusätzlichen WECHSELN-Schritt benötigen.

## Typischer Fehler

Kennungen nicht durch ungeprüftes Entfernen fachlich bedeutsamer Leerzeichen verändern.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **P001 Nord** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
