---
{
  "id": "excel-ersetzen",
  "slug": "excel-ersetzen",
  "titel": "Werte gezielt ersetzen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nutze Ersetzen für eine kontrollierte Änderung oder WECHSELN für ein nachvollziehbares Formelergebnis.",
  "ort": "Excel → Start → Suchen und Auswählen → Ersetzen; alternativ Formel",
  "tags": [
    "Werte gezielt ersetzen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "wechseln-ersetzen",
    "text-ausschnitt",
    "werte-ersetzen",
    "glaetten"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/replace-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=ERSETZEN(A2;6;3;\"neu\")\n```"
}
---

## Wann brauche ich das?

Eine bekannte Zeichenposition gezielt überschreiben.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = K001-alt**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein. Bei TEXTTEILEN auch I2 freihalten.
3. Bestätige mit Enter. Für Datumsergebnisse öffne **Start → Zahlenformat** und wähle ein passendes Datumformat.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = K001-alt |

### Aktion

```excel
=ERSETZEN(A2;6;3;"neu")
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| K001-neu |

## Ergebnis

Eine bekannte Zeichenposition gezielt überschreiben.

## Warum funktioniert das?

A2 ist der Ausgangstext; ab Position 6 werden drei Zeichen durch neu ersetzt. Für die Suche nach dem Wort alt wäre WECHSELN geeigneter.

## Typischer Fehler

Position und Zeichenanzahl verwechseln oder eine unbekannte Textstruktur voraussetzen.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **K001-neu** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
