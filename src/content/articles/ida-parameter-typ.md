---
{
  "id": "ida-parameter-typ",
  "slug": "ida-parameter-typ",
  "titel": "Parameter-Datentyp festlegen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Parameter und Vergleichsfeld müssen kompatible Datentypen haben.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Parameter-Datentyp festlegen",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-nullstellen",
    "ida-filtertypen",
    "datenbereinigung",
    "ida-formate"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-syntax-prompt-expressions"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine scheinbar passende Eingabe liefert keine Treffer.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Feldtyp und Parameterwert vor dem Vergleich kontrollieren.
2. Formuliere die gewünschte Regel: **Parameter als Text definieren und 0012 unverändert übergeben.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Auch eine Kennung mit führender Null und einen echten Datumswert prüfen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Kennung in den Daten: Text 0012; Eingabe als Zahl: 12. |

### Aktion

```text
Fachliche Regel: Parameter als Text definieren und 0012 unverändert übergeben.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Exakter Treffer für 0012; vier Zeichen bleiben erhalten. |

## Ergebnis

Parameter und Vergleichsfeld müssen kompatible Datentypen haben.

## Warum funktioniert das?

Kennungen sind Identitäten, keine Rechenwerte. Eine Zahlenkonvertierung verliert die führenden Nullen und kann Zuordnungen verändern.

## Typischer Fehler

Einen Stichtag als mehrdeutigen Text vergleichen.

## Plausibilitätscheck

Exakter Treffer für 0012; vier Zeichen bleiben erhalten.
