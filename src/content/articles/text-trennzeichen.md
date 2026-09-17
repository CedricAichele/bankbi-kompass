---
{
  "id": "text-trennzeichen",
  "slug": "text-trennzeichen",
  "titel": "TEXTVOR und TEXTNACH",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Text",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "TEXTVOR und TEXTNACH extrahieren Text vor oder nach einem Trennzeichen. Verfügbar in Microsoft 365 und Excel 2024.",
  "ort": "Excel → Formelzelle",
  "tags": ["TEXTVOR und TEXTNACH"],
  "synonyme": ["textvor", "textnach"],
  "verwandteThemen": ["text-ausschnitt", "textteilen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-de/excel/text-functions-reference"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine kombinierte Kennung soll am Bindestrich geteilt werden.

## Schritte

1. Trennzeichen und gewünschtes Vorkommen bestimmen.
2. TEXTVOR beziehungsweise TEXTNACH verwenden.
3. Fehlendes Trennzeichen und mehrere Vorkommen prüfen.

## Beispiel

```excel
=TEXTVOR(A2;"-")
=TEXTNACH(A2;"-")
```

AB-123 → AB und 123.

## Typischer Fehler

Die Funktion in einer nicht unterstützten Excel-Version voraussetzen.
