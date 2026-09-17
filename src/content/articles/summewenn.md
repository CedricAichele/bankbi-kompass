---
{
  "id": "summewenn",
  "slug": "summewenn",
  "titel": "SUMMEWENN: ein Kriterium",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SUMMEWENN summiert Werte für genau ein Kriterium. Für mehrere Bedingungen verwende SUMMEWENNS.",
  "ort": "Excel → Formelzelle",
  "tags": ["SUMMEWENN: ein Kriterium"],
  "synonyme": ["summe wenn"],
  "verwandteThemen": ["summewenns", "zaehlenwenn"],
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

Du brauchst den Betrag einer Produktgruppe.

## Schritte

1. Kriterienbereich und Kriterium festlegen.
2. Passenden gleich langen Summenbereich angeben.
3. Mit wenigen bekannten Zeilen kontrollieren.

## Beispiel

```excel
=SUMMEWENN(B2:B9;"Gruppe A";C2:C9)
```

## Typischer Fehler

Kriterienbereich und Summenbereich um eine Zeile verschieben.
