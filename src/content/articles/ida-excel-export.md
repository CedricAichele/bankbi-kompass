---
{
  "id": "ida-excel-export",
  "slug": "ida-excel-export",
  "titel": "Excel-Export kontrollieren",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Export muss Datenebene und Werte erhalten, nicht nur die Bildschirmdarstellung nachahmen.",
  "ort": "IDA / Reporting: allgemeiner Exportablauf; verfügbare Exportdialoge TODO",
  "tags": ["Excel-Export kontrollieren", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-excel-liste", "ida-formate", "ida-csv"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Liste wird in Excel weiterverarbeitet.

## Schritte

1. Benötigte Felder und Filter vor Export prüfen.
2. Geeignetes verfügbares Tabellenformat verwenden.
3. In Excel Zeilenanzahl, Schlüsseltypen und Kontrollsumme vergleichen.

## Beispiel

Kennung „0012“ muss auch nach dem Export als Text mit führenden Nullen vorliegen.

## Typischer Fehler

Annehmen, dass Formate, Zwischensummen oder vollständige Zeilenmengen immer unverändert exportiert werden.
