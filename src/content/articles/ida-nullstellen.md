---
{
  "id": "ida-nullstellen",
  "slug": "ida-nullstellen",
  "titel": "Führende Nullen beim Export erhalten",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kennungen sind Text, wenn führende Nullen fachlich relevant sind. Zahlenformate allein schützen CSV-Inhalte nicht zuverlässig.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Führende Nullen beim Export erhalten"
  ],
  "synonyme": [
    "führende nullen"
  ],
  "verwandteThemen": [
    "ida-csv",
    "excel-zahl-text",
    "csv-import"
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
  "screenshots": [
    {
      "src": "images/ida/export-datentypen.svg",
      "alt": "Berichtsliste: Kennung: 00042: Betrag: 1.250,00. Import bewusst festlegen: Kennung → Text: Betrag → Zahl, Gebietsschema. Weiterverarbeitung: 00042 bleibt 00042: Betrag ist berechenbar",
      "caption": "Kennungen beim Export als Text erhalten",
      "hinweis": "Ein Zahlenformat allein stellt verlorene führende Nullen nicht wieder her.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Personennummer 00123 wird nach dem Öffnen zu 123.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Die Kennung schon vor dem Export als Text prüfen.
2. Formuliere die gewünschte Regel: **Export und Import mit Datentyp Text durchführen.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Nach dem Import Zeichenlänge und exakten Wert gegen die Quelle vergleichen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Quellkennung als Text: 00123. |

### Aktion

```text
Fachliche Regel: Export und Import mit Datentyp Text durchführen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| 00123 bleibt fünf Zeichen lang. |

## Ergebnis

Kennungen sind Text, wenn führende Nullen fachlich relevant sind. Zahlenformate allein schützen CSV-Inhalte nicht zuverlässig.

## Warum funktioniert das?

Eine führende Null gehört zur Kennung. Eine spätere Anzeigeformatierung einer Zahl 123 stellt die ursprüngliche Identität nicht verlässlich wieder her.

## Typischer Fehler

Nachträglich Nullen ergänzen, ohne die zulässige Schlüssellänge zu kennen.

## Plausibilitätscheck

00123 bleibt fünf Zeichen lang.
