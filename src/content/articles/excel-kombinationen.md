---
{
  "id": "excel-kombinationen",
  "slug": "excel-kombinationen",
  "titel": "Eindeutige Kombinationen erzeugen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Filtern und Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "EINDEUTIG auf mehreren Spalten liefert unterschiedliche Zeilenkombinationen, nicht nur einzelne Werte.",
  "ort": "Excel Desktop → Datenliste / Formelzelle",
  "tags": [
    "Eindeutige Kombinationen erzeugen"
  ],
  "synonyme": [
    "eindeutige kombinationen"
  ],
  "verwandteThemen": [
    "und",
    "oder",
    "excel-mehrere-kriterien",
    "eindeutig",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/or-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=UND(ODER(A2=\"P001\";A2=\"P002\");B2=\"A\")\n```"
}
---

## Wann brauche ich das?

Alternative Schlüssel mit einer gemeinsamen Pflichtbedingung verbinden.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = P001; B2 = A; C2 = 1000**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein. Bei TEXTTEILEN auch I2 freihalten.
3. Bestätige mit Enter. Für Datumsergebnisse öffne **Start → Zahlenformat** und wähle ein passendes Datumformat.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = P001; B2 = A; C2 = 1000 |

### Aktion

```excel
=UND(ODER(A2="P001";A2="P002");B2="A")
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| WAHR |

## Ergebnis

Alternative Schlüssel mit einer gemeinsamen Pflichtbedingung verbinden.

## Warum funktioniert das?

Die innere ODER-Gruppe erlaubt zwei Kunden; UND verlangt zusätzlich Segment A. Die Klammerung legt diese fachliche Reihenfolge fest.

## Typischer Fehler

Segment A nur für einen der beiden Kunden prüfen.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **WAHR** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
