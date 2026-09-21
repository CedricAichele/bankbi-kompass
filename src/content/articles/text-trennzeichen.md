---
{
  "id": "text-trennzeichen",
  "slug": "text-trennzeichen",
  "titel": "TEXTVOR und TEXTNACH",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Text",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "TEXTVOR und TEXTNACH extrahieren Text vor oder nach einem Trennzeichen. Verfügbar in Microsoft 365 und Excel 2024.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "TEXTVOR und TEXTNACH"
  ],
  "synonyme": [
    "textvor",
    "textnach"
  ],
  "verwandteThemen": [
    "textteilen",
    "text-ausschnitt"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/textbefore-function",
    "https://support.microsoft.com/de-de/excel/text-functions-reference"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=TEXTVOR(A2;\"-\")\n```"
}
---

## Wann brauche ich das?

Den Teil vor einem bekannten Trennzeichen entnehmen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = P001-K001**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein. Bei TEXTTEILEN auch I2 freihalten.
3. Bestätige mit Enter. Für Datumsergebnisse öffne **Start → Zahlenformat** und wähle ein passendes Datumformat.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = P001-K001 |

### Aktion

```excel
=TEXTVOR(A2;"-")
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| P001 |

## Ergebnis

Den Teil vor einem bekannten Trennzeichen entnehmen.

## Warum funktioniert das?

Das Trennzeichen bildet die Grenze unabhängig von der Länge des ersten Bestandteils. TEXTNACH(A2;"-") würde K001 liefern.

## Typischer Fehler

Fehlende oder mehrfach auftretende Trennzeichen nicht testen. TEXTVOR/TEXTNACH benötigen Microsoft 365 oder Excel 2024.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **P001** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
