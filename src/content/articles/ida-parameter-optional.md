---
{
  "id": "ida-parameter-optional",
  "slug": "ida-parameter-optional",
  "titel": "Optionaler Parameter",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein optionaler Parameter braucht eine definierte Bedeutung für „keine Auswahl“. Das ist nicht automatisch „alle Werte“.",
  "ort": "Öffentlich dokumentiertes Cognos-Prinzip; IDA-Menüweg TODO",
  "tags": ["Optionaler Parameter"],
  "synonyme": ["optionaler parameter"],
  "verwandteThemen": ["ida-prompt", "ida-parameter-filter"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://www.ibm.com/docs/en/cognos-analytics/11.2.x?topic=data-create-detail-summary-filter",
      "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reporting-adding-prompts-filter-data",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Segmentfilter soll wahlweise entfallen.

## Schritte

1. Festlegen, ob keine Auswahl alle zulässigen Werte oder eine definierte Teilmenge bedeutet.
2. Eingabe und Filter auf Optionalität abstimmen.
3. Ohne Auswahl und mit Auswahl getrennt ausführen; Ergebnisumfang kontrollieren.

## Beispiel

Keine Auswahl → alle fachlich zulässigen Segmente; Auswahl A → nur Segment A.

## Typischer Fehler

Nur die Eingabe optional machen, während der Filter weiterhin einen Wert verlangt.
