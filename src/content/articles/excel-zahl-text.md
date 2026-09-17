---
{
  "id": "excel-zahl-text",
  "slug": "excel-zahl-text",
  "titel": "Zahlen als Text erkennen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Mit ISTZAHL prüfst du den Typ. Eine Zahlformatierung allein wandelt Text nicht in Zahlen um.",
  "ort": "Excel → Hilfsspalte; Fehlerindikator / ZAHLENWERT",
  "tags": ["Zahlen als Text erkennen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["datenbereinigung", "excel-datum"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

SUMME ignoriert Werte oder Sortierungen wirken falsch.

## Schritte

1. ISTZAHL auf verdächtige Zellen anwenden.
2. Dezimal- und Gruppentrennzeichen bestimmen.
3. Nur echte Messwerte umwandeln, keine Kennungen.

## Beispiel

```excel
=ISTZAHL(A2)
=ZAHLENWERT(A2;",";".")
```

„1.234,50“ wird zu 1234,5.

## Typischer Fehler

Konto- oder Produktkennungen als Zahl umwandeln und dabei führende Nullen entfernen.
