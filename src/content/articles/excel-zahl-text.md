---
{
  "id": "excel-zahl-text",
  "slug": "excel-zahl-text",
  "titel": "Zahlen als Text erkennen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Mit ISTZAHL prüfst du den Typ. Eine Zahlformatierung allein wandelt Text nicht in Zahlen um.",
  "ort": "Excel → Hilfsspalte; Fehlerindikator / ZAHLENWERT",
  "tags": [
    "Zahlen als Text erkennen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "problem-zahl-text",
    "datenbereinigung",
    "excel-datum"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/numbervalue-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=ZAHLENWERT(A2;\",\";\".\")\n```"
}
---

## Wann brauche ich das?

Zahlentext mit bekannten Dezimal- und Gruppentrennzeichen konvertieren.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 enthält den Text "1250,50"**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 enthält den Text "1250,50" |

### Aktion

```excel
=ZAHLENWERT(A2;",";".")
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| 1250,50 als Zahl |

## Ergebnis

Zahlentext mit bekannten Dezimal- und Gruppentrennzeichen konvertieren.

## Warum funktioniert das?

Die Trennzeichen werden ausdrücklich vorgegeben. Die Darstellung als Zahl allein würde den zugrunde liegenden Text nicht umwandeln.

## Typischer Fehler

Kennungen wie 00123 in Zahlen umwandeln und damit ihre führenden Nullen verlieren.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **1250,50 als Zahl** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
