---
{
  "id": "excel-kalender",
  "slug": "excel-kalender",
  "titel": "JAHR, MONAT, TAG und DATUM",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Datum",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kalenderfunktionen zerlegen echte Datumswerte oder bauen ein Datum aus Jahr, Monat und Tag auf.",
  "ort": "Excel → Formelzelle",
  "tags": ["JAHR, MONAT, TAG und DATUM"],
  "synonyme": ["jahr", "monat", "tag", "datum"],
  "verwandteThemen": ["excel-datum", "excel-monatsende"],
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

Du brauchst einen Jahres-Monats-Schlüssel.

## Schritte

1. Mit ISTZAHL prüfen, ob ein echter Datumswert vorliegt.
2. JAHR/MONAT/TAG ableiten oder DATUM zum Zusammensetzen verwenden.
3. Ergebnis als Datum beziehungsweise Zahl formatieren.

## Beispiel

```excel
=JAHR(A2)
=MONAT(A2)
=TAG(A2)
=DATUM(2026;3;31)
```

## Typischer Fehler

DATUM validiert Eingaben nicht streng: Überzählige Tage und Monate werden weitergerechnet.
