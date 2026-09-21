---
{
  "id": "ida-zeitplanung",
  "slug": "ida-zeitplanung",
  "titel": "Zeitplanung fachlich vorbereiten",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berichtsbetrieb",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein geplanter Bericht braucht abgestimmte Laufzeit, Parameter und Datenverfügbarkeit. Konkrete Einrichtung und Berechtigungen sind systemspezifisch.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Zeitplanung fachlich vorbereiten"
  ],
  "synonyme": [
    "zeitplanung",
    "bericht planen"
  ],
  "verwandteThemen": [
    "ida-betrieb",
    "ida-parameter",
    "ida-ausfuehren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=sa-scheduling-report"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Monatsbericht soll regelmäßig nach Datenbereitstellung laufen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Benötigten Datenstand, Zeitpunkt, Parameterwerte und Ausgabeziel festhalten.
2. Formuliere die gewünschte Regel: **Ausführung erst an eine fachlich bestätigte Bereitstellung knüpfen; Verantwortliche und Fehlerbehandlung festlegen**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Fehlende Lieferung und fehlgeschlagenen Lauf als getrennte Fälle prüfen; konkrete lokale Freigaben nicht erfinden.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Monatslieferung ist für März vorgesehen, aber noch nicht vollständig verfügbar. |

### Aktion

```text
Fachliche Regel: Ausführung erst an eine fachlich bestätigte Bereitstellung knüpfen; Verantwortliche und Fehlerbehandlung festlegen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Bericht mit bestätigtem März-Datenstand statt technisch erfolgreicher Ausgabe alter Daten. |

## Ergebnis

Ein geplanter Bericht braucht abgestimmte Laufzeit, Parameter und Datenverfügbarkeit. Konkrete Einrichtung und Berechtigungen sind systemspezifisch.

## Warum funktioniert das?

Ein Zeitplan startet Verarbeitung, garantiert aber keine vollständige Quelle. Laufberechtigung, Parameter und Datenbereitstellung sind getrennte Voraussetzungen.

## Typischer Fehler

Einen erfolgreichen Lauf mit vollständiger Datenlieferung gleichsetzen.

## Plausibilitätscheck

Bericht mit bestätigtem März-Datenstand statt technisch erfolgreicher Ausgabe alter Daten.
