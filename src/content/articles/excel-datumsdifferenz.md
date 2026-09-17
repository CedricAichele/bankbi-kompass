---
{
  "id": "excel-datumsdifferenz",
  "slug": "excel-datumsdifferenz",
  "titel": "Differenz zwischen Datumswerten",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Datum",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Enddatum minus Startdatum ergibt bei echten Excel-Datumswerten die verstrichenen Kalendertage.",
  "ort": "Excel → Formelzelle",
  "tags": ["Differenz zwischen Datumswerten"],
  "synonyme": ["datumsdifferenz", "prozessdauer"],
  "verwandteThemen": ["excel-kalender", "ida-vorgang"],
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

Du prüfst die Dauer synthetischer Vorgänge.

## Schritte

1. Start- und Enddatum auf echte Datumswerte prüfen.
2. Enddatum minus Startdatum berechnen; Ergebnis als Zahl formatieren.
3. Offene Vorgänge, negative Dauer und Uhrzeitanteile prüfen.

## Beispiel

```excel
=WENN(ODER(A2="";B2="");"";B2-A2)
```

01.03. bis 04.03. → 3 verstrichene Tage.

## Typischer Fehler

Kalendertage als Arbeitstage ausweisen oder beide Grenztage mitzählen, ohne die Fachregel zu nennen.
