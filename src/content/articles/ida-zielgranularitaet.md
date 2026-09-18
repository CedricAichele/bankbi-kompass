---
{
  "id": "ida-zielgranularitaet",
  "slug": "ida-zielgranularitaet",
  "titel": "Zielgranularität vor dem Join festlegen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lege zuerst fest, was genau eine Ergebniszeile bedeutet. Daraus folgen Schlüssel, Aggregationen und erlaubte Detailfelder.",
  "ort": "Allgemeines Daten- und Joinprinzip; keine interne Implementierung",
  "tags": [
    "Zielgranularität vor dem Join festlegen"
  ],
  "synonyme": [
    "zielgranularität"
  ],
  "verwandteThemen": [
    "eine-zeile-je-person",
    "ida-mehrere-joins"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [
    {
      "src": "images/ida/zielgranularitaet.svg",
      "alt": "Detail: P001 · K001 · 1.250 €: P001 · K002 · 750 €. Aggregation: Gruppieren nach Person: SUMME des Bestands. Ziel: eine Zeile je Person: P001 · 2.000 €: Kontodetails entfallen",
      "caption": "Die Zeilenebene zuerst festlegen",
      "hinweis": "Aggregation verdichtet Daten; sie entfernt keine fachlich falschen Dubletten.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Person mit mehreren Konten soll genau einmal mit Gesamtbestand erscheinen.

## Voraussetzungen

Allgemeines Reportingprinzip. Konkrete IDA-Bedienung nicht öffentlich belegt; Menüpfade und ausführbare Syntax bleiben TODO.

## Schritte

1. Formuliere die gewünschte Ergebniszeile: Welche fachliche Einheit soll genau einmal erscheinen?
2. Übertrage das synthetische Mini-Beispiel in eine eigene Prüfliste. Notiere Zeilenzahl und Betrag vor der Änderung.
3. Formuliere die Regel zunächst unabhängig vom Werkzeug: Pseudologik: gruppiere nach Personennummer; summiere Bestand_EUR.
4. Lege die Regel in der öffentlich dokumentierten Reportingumgebung an. Für IDA gibt diese Seite bewusst keinen erfundenen Klickpfad vor.
5. Führe den Bericht zuerst für die kleine Prüfliste aus und vergleiche das konkrete erwartete Ergebnis.
6. Teste auch den beschriebenen Fehlerfall. Erst bei passender Kontrollsumme die Regel auf weitere synthetische Daten übertragen.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

```text
Pseudologik: gruppiere nach Personennummer; summiere Bestand_EUR
```

## Ergebnis

Vier Personen: 2.000 / 2.000 / 4.000 / 1.000.

## Warum funktioniert das?

Eine Gruppierung reduziert die Ebene. Kontonummer kann danach nicht als beliebiges Detail zusätzlich stehen bleiben.

## Typischer Fehler

**Symptom/Ursache:** DISTINCT über Person und Kontonummer behält mehrere Zeilen pro Person. **Lösung:** Regel auf die gewünschte Zeilenebene zurückführen und den Schnelltest wiederholen.

## Plausibilitätscheck

Vier Zeilen und weiterhin 9.000. Bei mehreren Stichtagen muss nach Person und Stichtag gruppiert werden.
