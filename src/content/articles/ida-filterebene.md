---
{
  "id": "ida-filterebene",
  "slug": "ida-filterebene",
  "titel": "Filter vor oder nach Aggregation",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Filter auf Detailwerte beantwortet eine andere Frage als ein Filter auf Gruppensummen.",
  "ort": "Allgemeines Filterprinzip; konkrete IDA-Ausdruckssyntax TODO",
  "tags": ["Filter vor oder nach Aggregation"],
  "synonyme": ["filterreihenfolge", "filter granularität"],
  "verwandteThemen": ["ida-aggregation", "ida-filter-pruefen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://www.ibm.com/docs/en/cognos-analytics/11.2.x?topic=data-create-detail-summary-filter",
    ],
  "screenshots":
    [
      {
        "src": "images/ida/filterebene.svg",
        "alt": "Quelldaten: P001 · Konto A · 60 €: P001 · Konto B · 50 €. Detailwert > 100 €: Keine Zeile erfüllt den Filter: Ergebnis: keine Konten. Personensumme > 100 €: 60 € + 50 € = 110 €: Ergebnis: Person P001",
        "caption": "Detailfilter und Summenfilter unterscheiden",
        "hinweis": "Die beiden Filter beantworten unterschiedliche fachliche Fragen.",
        "schema": true,
        "status": "bereit",
        "schritt": 2,
      },
    ],
}
---

## Wann brauche ich das?

Gesucht sind Personen mit insgesamt mehr als 100 Euro Bestand.

## Schritte

1. Zielgruppe als Person und Kennzahl als Summe definieren.
2. Detailfilter nur für die einzubeziehenden Konten anwenden.
3. Die Grenze 100 auf die Personensumme anwenden und Gegenbeispiele prüfen.

## Beispiel

P001 mit zwei Konten 60 und 50 erreicht 110. Ein Detailfilter Konto > 100 würde beide Zeilen ausschließen.

## Typischer Fehler

Detail- und Summenfilter vertauschen. Cognos dokumentiert unterschiedliche Filterebenen; die konkrete IDA-Konfiguration bleibt TODO.
