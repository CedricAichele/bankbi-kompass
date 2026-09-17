---
{
  "id": "ida-zeitplanung",
  "slug": "ida-zeitplanung",
  "titel": "Zeitplanung fachlich vorbereiten",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berichtsbetrieb",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein geplanter Bericht braucht abgestimmte Laufzeit, Parameter und Datenverfügbarkeit. Konkrete Einrichtung und Berechtigungen sind systemspezifisch.",
  "ort": "Allgemeines Berichtsbetriebsprinzip; konkrete IDA-Menüs und Abläufe TODO",
  "tags": ["Zeitplanung fachlich vorbereiten"],
  "synonyme": ["zeitplanung", "bericht planen"],
  "verwandteThemen": ["ida-betrieb", "ida-ausfuehren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://www.ibm.com/docs/en/cognos-analytics/11.2.x?topic=activities-scheduling-report",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Monatsbericht soll regelmäßig nach Datenbereitstellung laufen.

## Schritte

1. Datenbereitstellung und erforderlichen Stichtag festlegen.
2. Zeitzone, Rhythmus und Parameterregel dokumentieren.
3. Ersten Lauf und Fehlerfall kontrollieren; konkrete IDA-Einrichtung bleibt TODO.

## Beispiel

Monatsbericht erst nach bestätigter Monatslieferung ausführen; kein unbelegter Datenstand vom Vortag.

## Typischer Fehler

Einen erfolgreichen Lauf mit vollständiger Datenlieferung gleichsetzen.
