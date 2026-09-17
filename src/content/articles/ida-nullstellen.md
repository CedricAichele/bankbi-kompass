---
{
  "id": "ida-nullstellen",
  "slug": "ida-nullstellen",
  "titel": "Führende Nullen beim Export erhalten",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kennungen sind Text, wenn führende Nullen fachlich relevant sind. Zahlenformate allein schützen CSV-Inhalte nicht zuverlässig.",
  "ort": "Allgemeiner Export-/Importvergleich; konkrete IDA-Exportoption TODO",
  "tags": ["Führende Nullen beim Export erhalten"],
  "synonyme": ["führende nullen"],
  "verwandteThemen": ["csv-import", "excel-zahl-text", "ida-csv"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/ida/export-datentypen.svg",
        "alt": "Berichtsliste: Kennung: 00042: Betrag: 1.250,00. Import bewusst festlegen: Kennung → Text: Betrag → Zahl, Gebietsschema. Weiterverarbeitung: 00042 bleibt 00042: Betrag ist berechenbar",
        "caption": "Kennungen beim Export als Text erhalten",
        "hinweis": "Ein Zahlenformat allein stellt verlorene führende Nullen nicht wieder her.",
        "schema": true,
        "status": "bereit",
        "schritt": 2,
      },
    ],
}
---

## Wann brauche ich das?

Personennummer 00123 wird nach dem Öffnen zu 123.

## Schritte

1. Kennung fachlich als Text einordnen.
2. Exportdatei kontrolliert importieren und Kennungsspalte als Text behandeln.
3. Original- und Zielwerte einschließlich Länge vergleichen.

## Beispiel

00123 muss nach CSV-Import weiterhin genau fünf Zeichen besitzen.

## Typischer Fehler

Nachträglich Nullen ergänzen, ohne die zulässige Schlüssellänge zu kennen.
