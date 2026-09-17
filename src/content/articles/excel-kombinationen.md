---
{
  "id": "excel-kombinationen",
  "slug": "excel-kombinationen",
  "titel": "Eindeutige Kombinationen erzeugen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Filtern und Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "EINDEUTIG auf mehreren Spalten liefert unterschiedliche Zeilenkombinationen, nicht nur einzelne Werte.",
  "ort": "Excel Desktop → Datenliste / Formelzelle",
  "tags": ["Eindeutige Kombinationen erzeugen"],
  "synonyme": ["eindeutige kombinationen"],
  "verwandteThemen": ["eindeutig", "granularitaet"],
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

Du brauchst jede Kombination aus Person und Produktgruppe einmal.

## Schritte

1. Nur die fachlichen Schlüsselspalten auswählen.
2. EINDEUTIG auf die zusammenhängende Matrix anwenden.
3. Zeilenzahl mit der gewünschten Gruppierung vergleichen.

## Beispiel

```excel
=EINDEUTIG(A2:B9)
```

P001 / A zweimal und P001 / B einmal → zwei Kombinationen.

## Typischer Fehler

Betrag oder Status zusätzlich aufnehmen und sich über weitere Kombinationen wundern.
