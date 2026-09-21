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
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Parameter / Eingabeaufforderung planen",
    "Reporting"
  ],
  "synonyme": [
    "parameter",
    "eingabeparameter"
  ],
  "verwandteThemen": [
    "ida-prompt",
    "ida-parameter-filter",
    "ida-parameter-typ"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine fachlich gleiche Liste soll für wechselnde Stichtage nutzbar sein.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Datentyp Datum, zulässigen Zeitraum und Pflichtangabe festlegen.
2. Formuliere die gewünschte Regel: **Parameter AuswahlDatum als Datum anlegen und im Stichtagsfilter verwenden.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Mit beiden Stichtagen prüfen, ob sich die Ausgabe passend ändert.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Stichtag 31.01.2026: K001/100; Stichtag 28.02.2026: K001/120. |

### Aktion

```text
Fachliche Regel: Parameter AuswahlDatum als Datum anlegen und im Stichtagsfilter verwenden.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Auswahl 28.02.2026 → K001/120. |

## Ergebnis

Ein Parameter ist eine Eingabe mit festgelegtem Typ und Bedeutung. Er filtert erst, wenn die Auswertung ihn verwendet.

## Warum funktioniert das?

Parameter speichern Eingabewerte. Erst ihre Verwendung in einer Bedingung begrenzt Daten. Ein Prompt ist die Oberfläche für die Eingabe, nicht der Filter selbst.

## Typischer Fehler

**Symptom/Ursache:** Ein sichtbarer Parameter ohne Filterbindung ändert das Ergebnis nicht.

## Plausibilitätscheck

Auswahl 28.02.2026 → K001/120.
