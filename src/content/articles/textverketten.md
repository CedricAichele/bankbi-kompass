---
{
  "id": "textverketten",
  "slug": "textverketten",
  "titel": "TEXTVERKETTEN: Werte mit Trennzeichen verbinden",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Text",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "TEXTVERKETTEN verbindet Textwerte mit einem gemeinsamen Trennzeichen und kann leere Zellen auslassen.",
  "ort": "Excel → Formelzelle",
  "tags": ["TEXTVERKETTEN: Werte mit Trennzeichen verbinden"],
  "synonyme": ["verketten", "textverketten"],
  "verwandteThemen": ["eindeutig", "gruppieren"],
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

Mehrere Produktgruppen sollen in einer lesbaren Übersicht stehen.

## Schritte

1. Einen fachlich passenden Bereich auswählen.
2. Trennzeichen und Leerwertbehandlung festlegen.
3. Doppelte Werte bei Bedarf vorher mit EINDEUTIG entfernen.

## Beispiel

```excel
=TEXTVERKETTEN(", ";WAHR;B2:B4)
```

A, leere Zelle, B → A, B.

## Typischer Fehler

Eine verkettete Liste später als verlässlichen Beziehungsschlüssel verwenden.
