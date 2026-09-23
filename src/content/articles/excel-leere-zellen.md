---
{
  "id": "excel-leere-zellen",
  "slug": "excel-leere-zellen",
  "titel": "Leere Zellen und Fehlerwerte prüfen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Leer, 0 und ein Formelergebnis mit leerem Text sind verschiedene Zustände. Ersetze sie nicht pauschal.",
  "ort": "Excel → Datenbereich prüfen",
  "tags": [
    "Leere Zellen und Fehlerwerte prüfen"
  ],
  "synonyme": [
    "leere zellen",
    "fehlerwerte"
  ],
  "verwandteThemen": [
    "nullwerte",
    "wennfehler",
    "wennnv"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/is-functions"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=ISTLEER(A2)\n```"
}
---

## Wann brauche ich das?

Eine tatsächlich unbefüllte Zelle von einer optisch leeren Formelausgabe unterscheiden.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 ist wirklich leer; A3 enthält =""**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 ist wirklich leer; A3 enthält ="" |

### Aktion

```excel
=ISTLEER(A2)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| WAHR; ISTLEER(A3) ist FALSCH |

## Ergebnis

Eine tatsächlich unbefüllte Zelle von einer optisch leeren Formelausgabe unterscheiden.

## Warum funktioniert das?

Eine Formel mit leerem Text ist weiterhin Zellinhalt. Die Prüfung A3="" kann dagegen auch auf diese Ausgabe zutreffen.

## Typischer Fehler

Optisch leer automatisch als technisch leer oder als gemessene 0 interpretieren.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **WAHR; ISTLEER(A3) ist FALSCH** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
