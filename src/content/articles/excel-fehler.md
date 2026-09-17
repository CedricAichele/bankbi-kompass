---
{
  "id": "excel-fehler",
  "slug": "excel-fehler",
  "titel": "WENN: zwischen zwei Ergebnissen wählen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WENN liefert je nach wahrer oder falscher Bedingung eines von zwei Ergebnissen.",
  "ort": "Excel → Formelzelle",
  "tags": ["WENN: zwischen zwei Ergebnissen wählen", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["und", "oder", "wennfehler"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst eine klare Markierung pro Datenzeile.

## Schritte

1. Bedingung festlegen.
2. Ergebnis für WAHR und FALSCH angeben.
3. Grenzwert und fehlende Werte prüfen.

## Beispiel

```excel
=WENN(B2>0;"Positiv";"Nicht positiv")
```

## Typischer Fehler

„Nicht positiv“ bedeutet nicht automatisch „negativ“. Eine Null gehört ebenfalls dazu.
