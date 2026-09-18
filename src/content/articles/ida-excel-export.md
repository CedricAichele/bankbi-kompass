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
  "ort": "IDA / Reporting: allgemeiner Exportablauf; verfügbare Exportdialoge TODO",
  "tags": [
    "Excel-Export kontrollieren",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-excel-liste",
    "ida-formate",
    "ida-csv"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Bericht soll nach dem Export dieselben fachlichen Werte behalten.

## Voraussetzungen

Allgemeines Reportingprinzip. Konkrete IDA-Bedienung nicht öffentlich belegt; Menüpfade und ausführbare Syntax bleiben TODO.

## Schritte

1. Formuliere die gewünschte Ergebniszeile: Welche fachliche Einheit soll genau einmal erscheinen?
2. Übertrage das synthetische Mini-Beispiel in eine eigene Prüfliste. Notiere Zeilenzahl und Betrag vor der Änderung.
3. Formuliere die Regel zunächst unabhängig vom Werkzeug: Kennung als Text, Betrag als Dezimalzahl, Datum als Datum übernehmen.
4. Lege die Regel in der öffentlich dokumentierten Reportingumgebung an. Für IDA gibt diese Seite bewusst keinen erfundenen Klickpfad vor.
5. Führe den Bericht zuerst für die kleine Prüfliste aus und vergleiche das konkrete erwartete Ergebnis.
6. Teste auch den beschriebenen Fehlerfall. Erst bei passender Kontrollsumme die Regel auf weitere synthetische Daten übertragen.

## Beispiel

| Kennung | Betrag | Datum |
| --- | --- | --- |
| 00123 | 1250,50 | 31.03.2026 |

```text
Kennung als Text, Betrag als Dezimalzahl, Datum als Datum übernehmen
```

## Ergebnis

00123 bleibt fünfstellig; Betrag lässt sich summieren; Datum lässt sich zeitlich sortieren.

## Warum funktioniert das?

Exportformat und Importinterpretation sind getrennte Schritte. CSV enthält keine verlässlichen Excel-Datentypen.

## Typischer Fehler

**Symptom/Ursache:** Doppelklick auf CSV kann führende Nullen entfernen; eine formatierte Anzeige repariert den verlorenen Wert nicht. **Lösung:** Regel auf die gewünschte Zeilenebene zurückführen und den Schnelltest wiederholen.

## Plausibilitätscheck

Vor/nach Export: gleiche Zeilenzahl, Summe und Schlüsselmenge prüfen. CSV in Excel über Daten → Aus Text/CSV importieren.
