---
{
  "id": "und",
  "slug": "und",
  "titel": "UND: alle Bedingungen erfüllen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "UND ist nur WAHR, wenn jede Bedingung WAHR ist.",
  "ort": "Excel → Formelzelle",
  "tags": ["UND: alle Bedingungen erfüllen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["oder", "excel-fehler"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Markierung soll nur bei passendem Segment und positivem Betrag erscheinen.

## Schritte

1. Einzelbedingungen getrennt prüfen.
2. Mit UND verbinden.
3. Optional in WENN verwenden.

## Beispiel

```excel
=WENN(UND(B2="Segment A";C2>0);"Prüfen";"")
```

## Typischer Fehler

UND verwenden, obwohl eine von mehreren Alternativen genügen soll.
