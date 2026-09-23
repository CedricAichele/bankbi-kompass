---
{
  "id": "textverketten",
  "slug": "textverketten",
  "titel": "TEXTVERKETTEN: Werte mit Trennzeichen verbinden",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "TEXTVERKETTEN verbindet Textwerte mit einem gemeinsamen Trennzeichen und kann leere Zellen auslassen.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "TEXTVERKETTEN: Werte mit Trennzeichen verbinden"
  ],
  "synonyme": [
    "verketten",
    "textverketten"
  ],
  "verwandteThemen": [
    "schluessel",
    "textteilen",
    "eindeutig",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/textjoin-function",
    "https://support.microsoft.com/de-de/excel/text-functions-reference"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=TEXTVERKETTEN(\"-\";WAHR;A2:B2)\n```"
}
---

## Wann brauche ich das?

Mehrere Textwerte mit einem festgelegten Trennzeichen verbinden.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = P001; B2 = K001**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = P001; B2 = K001 |

### Aktion

```excel
=TEXTVERKETTEN("-";WAHR;A2:B2)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| P001-K001 |

## Ergebnis

Mehrere Textwerte mit einem festgelegten Trennzeichen verbinden.

## Warum funktioniert das?

Das erste Argument trennt die Werte, WAHR überspringt leere Zellen und der Bereich liefert die Bestandteile.

## Typischer Fehler

Eine Verkettung ohne Trennregel als eindeutigen Schlüssel nutzen: AB+C und A+BC könnten zusammenfallen.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **P001-K001** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
