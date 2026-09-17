---
{
  "id": "pq-datum",
  "slug": "pq-datum",
  "titel": "Datum in Power Query transformieren",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Leite Jahr, Monat oder Monatsende aus einer echten Datumsspalte ab. Erhalte das Originaldatum.",
  "ort": "Power Query → Spalte hinzufügen → Datum",
  "tags": ["Datum in Power Query transformieren"],
  "synonyme": ["datum transformieren"],
  "verwandteThemen": ["datum-sortieren", "excel-datum"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst einen Monatsschlüssel für eine Neugeschäftsliste.

## Schritte

1. Quellspalte als Datum typisieren; bei Text das Gebietsschema prüfen.
2. Über Spalte hinzufügen → Datum die gewünschte Eigenschaft erzeugen.
3. Jahr und Monat gemeinsam als Periodenschlüssel verwenden.

## Beispiel

17.03.2026 → Jahr 2026, Monat 3, Monatsende 31.03.2026.

## Typischer Fehler

Nur die Monatsnummer verwenden und dadurch verschiedene Jahre vermischen.
