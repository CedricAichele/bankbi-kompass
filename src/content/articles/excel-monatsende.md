---
{
  "id": "excel-monatsende",
  "slug": "excel-monatsende",
  "titel": "MONATSENDE und HEUTE",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Datum",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MONATSENDE bestimmt den letzten Kalendertag eines Monats. HEUTE liefert das aktuelle Systemdatum, keinen Datenstand.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "MONATSENDE und HEUTE"
  ],
  "synonyme": [
    "monatsende",
    "heute"
  ],
  "verwandteThemen": [
    "excel-datum",
    "excel-kalender",
    "monatsultimo",
    "aktueller-stichtag"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/eomonth-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=MONATSENDE(A2;0)\n```"
}
---

## Wann brauche ich das?

Den letzten Tag eines Monats bestimmen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = echtes Datum 15.02.2026**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter. Für Datumsergebnisse öffne **Start → Zahlenformat** und wähle ein passendes Datumformat.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = echtes Datum 15.02.2026 |

### Aktion

```excel
=MONATSENDE(A2;0)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| 28.02.2026 |

## Ergebnis

Den letzten Tag eines Monats bestimmen.

## Warum funktioniert das?

0 meint den Monat des Ausgangsdatums; 1 den Folgemonat und -1 den Vormonat. Die Funktion berücksichtigt unterschiedliche Monatslängen.

## Typischer Fehler

Pauschal 30 oder 31 Tage zum Ausgangsdatum addieren.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **28.02.2026** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
