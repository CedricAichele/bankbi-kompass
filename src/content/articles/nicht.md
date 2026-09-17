---
{
  "id": "nicht",
  "slug": "nicht",
  "titel": "NICHT: Bedingung umkehren",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "NICHT kehrt WAHR und FALSCH um. Formuliere Ausschlüsse so, dass fehlende Werte bewusst behandelt werden.",
  "ort": "Excel → Formelzelle",
  "tags": ["NICHT: Bedingung umkehren"],
  "synonyme": [],
  "verwandteThemen": ["und", "oder", "excel-leere-zellen"],
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

Alle Status außer „Erledigt“ sollen markiert werden.

## Schritte

1. Positive Bedingung formulieren.
2. Mit NICHT umkehren oder den Vergleich <> verwenden.
3. Leere Statuswerte separat testen.

## Beispiel

```excel
=NICHT(B2="Erledigt")
```

## Typischer Fehler

Eine leere Zelle als belegten offenen Status interpretieren.
