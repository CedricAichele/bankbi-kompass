---
{
  "id": "ida-excel-export",
  "slug": "ida-excel-export",
  "titel": "Excel-Export kontrollieren",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Export muss Datenebene und Werte erhalten, nicht nur die Bildschirmdarstellung nachahmen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Excel-Export kontrollieren",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-csv",
    "ida-excel-liste",
    "ida-formate"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Bericht soll nach dem Export dieselben fachlichen Werte behalten.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Vor Export Zeilenzahl, Betragssumme und einen Schlüssel mit führender Null notieren.
2. Formuliere die gewünschte Regel: **Tabellarische Ausgabe wählen und Datentypen sowie Kontrollsummen nach dem Import prüfen**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Nach Öffnen dieselben Kontrollen durchführen und zusätzliche Kopf-/Summenzeilen ausschließen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Kennung 00123, Betrag 1250,50, Datum 31.03.2026. |

### Aktion

```text
Fachliche Regel: Tabellarische Ausgabe wählen und Datentypen sowie Kontrollsummen nach dem Import prüfen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| 00123 bleibt Text; 1250,50 lässt sich summieren; 31.03.2026 lässt sich zeitlich sortieren. |

## Ergebnis

Ein Export muss Datenebene und Werte erhalten, nicht nur die Bildschirmdarstellung nachahmen.

## Warum funktioniert das?

Die korrekte Bildschirmdarstellung garantiert keinen korrekten Export. Ausgabeformat und spätere Interpretation sind getrennte Verarbeitungsschritte.

## Typischer Fehler

**Symptom/Ursache:** Doppelklick auf CSV kann führende Nullen entfernen; eine formatierte Anzeige repariert den verlorenen Wert nicht.

## Plausibilitätscheck

00123 bleibt Text; 1250,50 lässt sich summieren; 31.03.2026 lässt sich zeitlich sortieren.
