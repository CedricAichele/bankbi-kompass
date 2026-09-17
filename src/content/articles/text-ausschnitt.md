---
{
  "id": "text-ausschnitt",
  "slug": "text-ausschnitt",
  "titel": "LINKS, RECHTS und TEIL",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Text",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Diese Funktionen schneiden Text nach festen Zeichenpositionen aus. Bei variabler Länge eignen sich Trennzeichenfunktionen besser.",
  "ort": "Excel → Formelzelle",
  "tags": ["LINKS, RECHTS und TEIL"],
  "synonyme": ["links", "rechts", "teil"],
  "verwandteThemen": ["text-trennzeichen", "excel-text-teilen"],
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

Eine synthetische Kennung enthält einen festen Präfix.

## Schritte

1. Feste Länge oder Trennzeichenstruktur unterscheiden.
2. LINKS/RECHTS für Ränder, TEIL für Startposition und Länge verwenden.
3. Kurze und abweichende Kennungen testen.

## Beispiel

```excel
=LINKS(A2;2)
=RECHTS(A2;3)
=TEIL(A2;4;3)
```

A2 = AB-123 → AB, 123, 123.

## Typischer Fehler

Positionen hart setzen, obwohl die Kennungen unterschiedlich aufgebaut sind.
