---
{
  "id": "ida-performance",
  "slug": "ida-performance",
  "titel": "Langsame Liste eingrenzen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berichtsbetrieb",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Begrenze unnötige Daten und prüfe Zeilenvermehrung, bevor du Berechnungen optimierst.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Langsame Liste eingrenzen"
  ],
  "synonyme": [
    "performance",
    "bericht langsam"
  ],
  "verwandteThemen": [
    "ida-mehrere-joins",
    "ida-filterebene"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationships-join-optimization"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Bericht wird nach einer zusätzlichen Verknüpfung langsam.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Laufzeit und Ergebnis vor jeder Änderung notieren.
2. Formuliere die gewünschte Regel: **Zuerst Zeilenvervielfachung und unnötige Felder untersuchen; Filter fachlich korrekt platzieren.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Jeweils nur einen Join oder Filter ändern und Ergebnisgleichheit beziehungsweise begründete Korrektur prüfen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| P001 mit zwei Konten und drei Vorgängen; direkter Detailjoin ergibt sechs Kombinationen. |

### Aktion

```text
Fachliche Regel: Zuerst Zeilenvervielfachung und unnötige Felder untersuchen; Filter fachlich korrekt platzieren.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Nach getrennter Voraggregation eine Personenzeile mit Kontenanzahl 2 und Vorgangsanzahl 3. |

## Ergebnis

Begrenze unnötige Daten und prüfe Zeilenvermehrung, bevor du Berechnungen optimierst.

## Warum funktioniert das?

Unnötig große Zwischenergebnisse verursachen zusätzliche Arbeit. Frühe Filter sind nur dann korrekt, wenn sie die beabsichtigte Aggregationslogik nicht verändern.

## Typischer Fehler

Für Geschwindigkeit benötigte Daten oder Prüfschritte entfernen.

## Plausibilitätscheck

Nach getrennter Voraggregation eine Personenzeile mit Kontenanzahl 2 und Vorgangsanzahl 3.
