---
{
  "id": "excel-kalender",
  "slug": "excel-kalender",
  "titel": "JAHR, MONAT, TAG und DATUM",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Datum",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kalenderfunktionen zerlegen echte Datumswerte oder bauen ein Datum aus Jahr, Monat und Tag auf.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "JAHR, MONAT, TAG und DATUM"
  ],
  "synonyme": [
    "jahr",
    "monat",
    "tag",
    "datum"
  ],
  "verwandteThemen": [
    "excel-datum",
    "excel-monatsende"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/date-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=DATUM(A2;B2;C2)\n```"
}
---

## Wann brauche ich das?

Ein echtes Datum aus getrenntem Jahr, Monat und Tag erzeugen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = 2026; B2 = 2; C2 = 1**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein. Bei TEXTTEILEN auch I2 freihalten.
3. Bestätige mit Enter. Für Datumsergebnisse öffne **Start → Zahlenformat** und wähle ein passendes Datumformat.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = 2026; B2 = 2; C2 = 1 |

### Aktion

```excel
=DATUM(A2;B2;C2)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| 01.02.2026 |

## Ergebnis

Ein echtes Datum aus getrenntem Jahr, Monat und Tag erzeugen.

## Warum funktioniert das?

DATUM baut den Wert aus Zahlen auf. Unzulässig wirkende Monats- oder Tageszahlen können in andere Monate normalisiert werden; deshalb Eingaben zusätzlich prüfen.

## Typischer Fehler

Ein Datum durch Textverkettung erzeugen und dann numerische Vergleiche erwarten.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **01.02.2026** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
