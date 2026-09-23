---
{
  "id": "excel-datum",
  "slug": "excel-datum",
  "titel": "Datumswerte korrigieren",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Datum muss als echter Datumswert vorliegen; mehrdeutige Textformate brauchen eine bekannte Herkunft.",
  "ort": "Excel → Daten → Text in Spalten / Power Query → Datentyp mit Gebietsschema",
  "tags": [
    "Datumswerte korrigieren",
    "Reporting"
  ],
  "synonyme": [
    "datum falsch"
  ],
  "verwandteThemen": [
    "excel-monatsende",
    "excel-datumsdifferenz",
    "pq-datum",
    "datum-sortieren",
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/datevalue-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=DATWERT(A2)\n```"
}
---

## Wann brauche ich das?

Einen eindeutig interpretierten Datumstext in ein Excel-Datum umwandeln.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 enthält den Text "31.01.2026"; deutsches Gebietsschema**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter. Für Datumsergebnisse öffne **Start → Zahlenformat** und wähle ein passendes Datumformat.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 enthält den Text "31.01.2026"; deutsches Gebietsschema |

### Aktion

```excel
=DATWERT(A2)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| 31.01.2026 nach Datumsformatierung |

## Ergebnis

Einen eindeutig interpretierten Datumstext in ein Excel-Datum umwandeln.

## Warum funktioniert das?

Excel speichert Datumswerte als fortlaufende Zahlen. DATWERT interpretiert einen passenden Datumstext; das Zellformat macht den Wert als Datum lesbar.

## Typischer Fehler

03/04/2026 bei unbekannter Quellkonvention raten. Bei Importen mit abweichendem Gebietsschema Power Query verwenden.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **31.01.2026 nach Datumsformatierung** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
