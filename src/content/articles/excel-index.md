---
{
  "id": "excel-index",
  "slug": "excel-index",
  "titel": "INDEX und VERGLEICH einzeln verstehen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Nachschlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "VERGLEICH findet eine Position; INDEX liefert den Wert an einer Position. Zusammen ersetzen sie ein starres Nachschlagen.",
  "ort": "Excel → Formelzelle",
  "tags": ["INDEX und VERGLEICH einzeln verstehen"],
  "synonyme": ["index", "vergleich"],
  "verwandteThemen": ["index-vergleich", "xverweis"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-DE/Excel/excel-functions-alphabetical"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du willst einen Rückgabewert unabhängig von der Spaltenrichtung finden.

## Schritte

1. Mit VERGLEICH und Vergleichstyp 0 die genaue Position suchen.
2. Mit INDEX den Wert an dieser Position zurückgeben.
3. Such- und Rückgabebereich auf gleiche Länge prüfen.

## Beispiel

```excel
=VERGLEICH("P002";A2:A4;0)
=INDEX(B2:B4;2)
```

P002 steht an zweiter Position; INDEX liefert den zweiten Segmentwert.

## Typischer Fehler

Den Vergleichstyp 0 weglassen: Eine ungefähre Suche verlangt passende Sortierung.
