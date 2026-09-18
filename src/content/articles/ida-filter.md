---
{
  "id": "ida-filter",
  "slug": "ida-filter",
  "titel": "Filter erstellen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Filter begrenzt die ausgewerteten Zeilen anhand einer ausdrücklich formulierten Bedingung.",
  "ort": "IDA / Reporting: allgemeines Filterkonzept; Ausdruckssyntax TODO",
  "tags": [
    "Filter erstellen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-bedingungen",
    "ida-null",
    "ida-filter-pruefen"
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

Eine Liste soll nur Segment A am gewählten Stichtag enthalten.

## Voraussetzungen

Allgemeines Reportingprinzip. Konkrete IDA-Bedienung nicht öffentlich belegt; Menüpfade und ausführbare Syntax bleiben TODO.

## Schritte

1. Formuliere die gewünschte Ergebniszeile: Welche fachliche Einheit soll genau einmal erscheinen?
2. Übertrage das synthetische Mini-Beispiel in eine eigene Prüfliste. Notiere Zeilenzahl und Betrag vor der Änderung.
3. Formuliere die Regel zunächst unabhängig vom Werkzeug: Pseudologik: Segment = A UND Stichtag = 31.03.2026.
4. Lege die Regel in der öffentlich dokumentierten Reportingumgebung an. Für IDA gibt diese Seite bewusst keinen erfundenen Klickpfad vor.
5. Führe den Bericht zuerst für die kleine Prüfliste aus und vergleiche das konkrete erwartete Ergebnis.
6. Teste auch den beschriebenen Fehlerfall. Erst bei passender Kontrollsumme die Regel auf weitere synthetische Daten übertragen.

## Beispiel

| Person | Segment | Stichtag | Betrag |
| --- | --- | --- | --- |
| P001 | A | 31.03.2026 | 120 |
| P002 | B | 31.03.2026 | 80 |
| P003 | A | 28.02.2026 | 50 |

```text
Pseudologik: Segment = A UND Stichtag = 31.03.2026
```

## Ergebnis

Nur P001, Betrag 120.

## Warum funktioniert das?

UND verlangt beide Bedingungen. Ein Datumsvergleich benötigt einen Datumswert; ein angezeigtes Format genügt nicht.

## Typischer Fehler

**Symptom/Ursache:** ODER würde zusätzlich P002 und P003 zulassen. **Lösung:** Regel auf die gewünschte Zeilenebene zurückführen und den Schnelltest wiederholen.

## Plausibilitätscheck

Prüfe einen Treffer sowie je eine Zeile, die an genau einer der beiden Bedingungen scheitert.
