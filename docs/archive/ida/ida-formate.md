---
{
  "id": "ida-formate",
  "slug": "ida-formate",
  "titel": "Datums- und Zahlenformate prüfen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kontrolliere nach dem Export die tatsächlichen Werte und Typen, nicht nur ihr Aussehen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Datums- und Zahlenformate prüfen",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "excel-datum",
    "datenbereinigung",
    "excel-zahl-text",
    "ida-csv"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=metadata-cleaning-data"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Beträge oder Stichtage werden in Excel falsch interpretiert.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Dezimal-/Tausenderzeichen und Datumsreihenfolge der Quelle feststellen.
2. Formuliere die gewünschte Regel: **Betrag mit deutscher Konvention interpretieren; Datumsreihenfolge vor der Umwandlung klären**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Ein Datum mit Tag größer als 12 und eine bekannte Betragssumme als Kontrollfall verwenden.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Betragstext 1.234,50; Datumstext 03/04/2026. |

### Aktion

```text
Fachliche Regel: Betrag mit deutscher Konvention interpretieren; Datumsreihenfolge vor der Umwandlung klären.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Betrag 1234,5 als Zahl; Datum erst nach bestätigter Quellkonvention. |

## Ergebnis

Kontrolliere nach dem Export die tatsächlichen Werte und Typen, nicht nur ihr Aussehen.

## Warum funktioniert das?

Darstellung und Wert sind getrennt. Ein Zahlenformat macht Text nicht automatisch zur Zahl, und ein mehrdeutiges Datum lässt sich nicht sicher erraten.

## Typischer Fehler

Formatieren mit Konvertieren verwechseln.

## Plausibilitätscheck

Betrag 1234,5 als Zahl; Datum erst nach bestätigter Quellkonvention.
