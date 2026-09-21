---
{
  "id": "ida-parameter-optional",
  "slug": "ida-parameter-optional",
  "titel": "Optionaler Parameter",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein optionaler Parameter braucht eine definierte Bedeutung für „keine Auswahl“. Das ist nicht automatisch „alle Werte“.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Optionaler Parameter"
  ],
  "synonyme": [
    "optionaler parameter"
  ],
  "verwandteThemen": [
    "ida-parameter-mehrfach",
    "ida-filter",
    "ida-prompt",
    "ida-parameter-filter"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page",
    "https://www.ibm.com/docs/en/cognos-analytics/11.2.x?topic=data-create-detail-summary-filter"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Segmentfilter soll wahlweise entfallen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Bedeutung der leeren Auswahl schriftlich festlegen und von einem leeren Segmentwert unterscheiden.
2. Formuliere die gewünschte Regel: **Den zusätzlichen Segmentfilter bei fehlender Auswahl gemäß Fachregel auslassen.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Leerfall und Einzelwertfall testen; ein optionales Eingabefeld allein macht keinen Pflichtfilter optional.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| P001/A und P002/B. Keine Segmentauswahl. |

### Aktion

```text
Fachliche Regel: Den zusätzlichen Segmentfilter bei fehlender Auswahl gemäß Fachregel auslassen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Keine Auswahl → beide Zeilen; A → nur P001. |

## Ergebnis

Ein optionaler Parameter braucht eine definierte Bedeutung für „keine Auswahl“. Das ist nicht automatisch „alle Werte“.

## Warum funktioniert das?

Optionalität muss in Eingabe und Filter zusammenpassen. Andere fachliche und berechtigungsbedingte Einschränkungen bleiben weiterhin gültig.

## Typischer Fehler

Nur die Eingabe optional machen, während der Filter weiterhin einen Wert verlangt.

## Plausibilitätscheck

Keine Auswahl → beide Zeilen; A → nur P001.
