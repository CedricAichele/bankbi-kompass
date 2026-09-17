---
{
  "id": "mittelwertwenn",
  "slug": "mittelwertwenn",
  "titel": "MITTELWERTWENN: bedingt mitteln",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MITTELWERTWENN bildet den Mittelwert passender numerischer Zellen; Zeilenebene und Nullwerte beeinflussen das Ergebnis.",
  "ort": "Excel → Formelzelle",
  "tags": ["MITTELWERTWENN: bedingt mitteln"],
  "synonyme": [],
  "verwandteThemen": ["mittelwertwenns", "granularitaet"],
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

Du suchst den durchschnittlichen Kontobestand eines Segments.

## Schritte

1. Kriterienbereich und Segment bestimmen.
2. Numerischen Mittelwertbereich einsetzen.
3. Konten- und Personenebene sowie fehlende Treffer prüfen.

## Beispiel

```excel
=MITTELWERTWENN(B2:B9;"Segment A";C2:C9)
```

## Typischer Fehler

Einen Kontodurchschnitt als durchschnittliches Personenvolumen beschriften.
