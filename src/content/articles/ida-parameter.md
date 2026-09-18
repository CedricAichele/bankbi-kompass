---
{
  "id": "ida-parameter",
  "slug": "ida-parameter",
  "titel": "Parameter / Eingabeaufforderung planen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Parameter ist eine Eingabe mit festgelegtem Typ und Bedeutung. Er filtert erst, wenn die Auswertung ihn verwendet.",
  "ort": "IDA / Reporting: allgemeines Parameterkonzept; konkreter Anlagedialog TODO",
  "tags": [
    "Parameter / Eingabeaufforderung planen",
    "Reporting"
  ],
  "synonyme": [
    "parameter",
    "eingabeparameter"
  ],
  "verwandteThemen": [
    "ida-parameter-filter",
    "ida-parameter-typ"
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

Eine fachlich gleiche Liste soll für wechselnde Stichtage nutzbar sein.

## Voraussetzungen

Allgemeines Reportingprinzip. Konkrete IDA-Bedienung nicht öffentlich belegt; Menüpfade und ausführbare Syntax bleiben TODO.

## Schritte

1. Formuliere die gewünschte Ergebniszeile: Welche fachliche Einheit soll genau einmal erscheinen?
2. Übertrage das synthetische Mini-Beispiel in eine eigene Prüfliste. Notiere Zeilenzahl und Betrag vor der Änderung.
3. Formuliere die Regel zunächst unabhängig vom Werkzeug: Pseudologik: Daten.Stichtag entspricht Parameter Stichtag.
4. Lege die Regel in der öffentlich dokumentierten Reportingumgebung an. Für IDA gibt diese Seite bewusst keinen erfundenen Klickpfad vor.
5. Führe den Bericht zuerst für die kleine Prüfliste aus und vergleiche das konkrete erwartete Ergebnis.
6. Teste auch den beschriebenen Fehlerfall. Erst bei passender Kontrollsumme die Regel auf weitere synthetische Daten übertragen.

## Beispiel

| Parameter | Typ | Beispiel |
| --- | --- | --- |
| Stichtag | Datum | 31.03.2026 |

```text
Pseudologik: Daten.Stichtag entspricht Parameter Stichtag
```

## Ergebnis

Nur Zeilen des ausgewählten Tages, nicht alle Daten.

## Warum funktioniert das?

Ein Parameter ist ein Eingabewert. Erst seine Einbindung in eine Bedingung ändert die Ergebnismenge. Ein Prompt ist eine mögliche Eingabeoberfläche.

## Typischer Fehler

**Symptom/Ursache:** Ein sichtbarer Parameter ohne Filterbindung ändert das Ergebnis nicht. **Lösung:** Regel auf die gewünschte Zeilenebene zurückführen und den Schnelltest wiederholen.

## Plausibilitätscheck

Führe die Liste mit zwei Stichtagen aus und vergleiche die tatsächlich ausgegebenen Datumswerte.
