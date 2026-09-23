---
{
  "id": "excel-datumsdifferenz",
  "slug": "excel-datumsdifferenz",
  "titel": "Differenz zwischen Datumswerten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Datum & Datentypen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Enddatum minus Startdatum ergibt bei echten Excel-Datumswerten die verstrichenen Kalendertage.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "Differenz zwischen Datumswerten"
  ],
  "synonyme": [
    "datumsdifferenz",
    "prozessdauer"
  ],
  "verwandteThemen": [
    "excel-datum",
    "excel-kalender"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/days-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=B2-A2\n```"
}
---

## Wann brauche ich das?

Die verstrichenen Kalendertage zwischen zwei Daten bestimmen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = echtes Datum 01.02.2026; B2 = 05.02.2026**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = echtes Datum 01.02.2026; B2 = 05.02.2026 |

### Aktion

```excel
=B2-A2
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| 4 |

## Ergebnis

Bei A2=01.02.2026 und B2=05.02.2026 ergibt H2 4 verstrichene Kalendertage.

## Warum funktioniert das?

Die Differenz der fortlaufenden Tageswerte zählt die Tagesabstände. Bei beidseitig eingeschlossener fachlicher Zählung wären es fünf Tage; das ist eine andere Definition.

## Typischer Fehler

Kalendertage mit Arbeitstagen gleichsetzen oder Endpunkte ungeklärt mitzählen.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **4** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
