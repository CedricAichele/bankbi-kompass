---
{
  "id": "dateien-kombinieren",
  "slug": "dateien-kombinieren",
  "titel": "Mehrere Dateien kombinieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Ordnerimport kombiniert gleich aufgebaute Dateien mit derselben Transformationsregel.",
  "ort": "Power Query → Daten abrufen → Aus Ordner",
  "tags": [
    "Mehrere Dateien kombinieren",
    "Reporting"
  ],
  "synonyme": [
    "mehrere Dateien zusammenführen"
  ],
  "verwandteThemen": [
    "anhaengen",
    "datenbereinigung"
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

Gleich aufgebaute Monatsdateien automatisch zusammenführen.

## Voraussetzungen

Power Query in Power BI Desktop oder Excel; nur synthetische Dateien verwenden.

## Schritte

1. Lege einen eigenen Demo-Ordner an, der nur zwei synthetische Dateien mit denselben Überschriften enthält.
2. Wähle Power BI → Daten abrufen → Ordner; in Excel Daten → Daten abrufen → Aus Datei → Aus Ordner.
3. Wähle Daten transformieren, um zuerst die Dateiliste zu sehen. Filtere Dateiendung und schließe temporäre Dateien aus.
4. Wähle in der Content-Spalte Dateien kombinieren. Wähle eine repräsentative Beispieldatei und bei Excel die passende Tabelle beziehungsweise das passende Blatt.
5. Prüfe die erzeugte Beispieltransformation. Typkorrekturen müssen für jede Datei gelten; die Spaltennamen müssen passen.
6. Behalte die Herkunftsspalte mit dem Dateinamen. Gruppiere testweise nach Dateiname und zähle die Zeilen.
7. Lade das Ergebnis und ergänze eine dritte gleichartige Demodatei. Aktualisiere und kontrolliere deren zusätzliche Zeilen.

## Beispiel

| Datei | Zeilen | Summe |
| --- | --- | --- |
| Januar | 2 | 200 |
| Februar | 3 | 300 |

## Ergebnis

5 Zeilen und 500. Mit einer dritten Datei mit 1 Zeile und 50: 6 Zeilen und 550.

## Warum funktioniert das?

Eine gemeinsame Transformation wird auf die Dateien angewandt und deren Ergebnisse werden angefügt.

## Typischer Fehler

**Symptom/Ursache:** Die Beispieldatei muss den gemeinsamen Aufbau abbilden. Zusätzliche Unterordner oder Dateien können unbeabsichtigt mitgeladen werden. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Zeilenzahl und Summe pro Quelldatei kontrollieren.
