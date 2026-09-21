---
{
  "id": "ida-datenelement",
  "slug": "ida-datenelement",
  "titel": "Datenelement hinzufügen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein zusätzliches Feld darf die beabsichtigte Zeilenebene nicht unbeabsichtigt verändern.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Datenelement hinzufügen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-ebene",
    "ida-gruppieren",
    "granularitaet",
    "eins-zu-viele"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-summarizing-data-relationally"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Liste braucht ein weiteres Merkmal für die Auswertung.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Die Zeilenebene des neuen Felds mit dem bisherigen Bericht vergleichen.
2. Formuliere die gewünschte Regel: **Konto als zusätzliches Detailfeld in die Abfrage aufnehmen**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Vorher zwei Personenzeilen und nachher drei Kontenzeilen gegenprüfen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Personenübersicht: P001/200; P002/50. Details: P001 hat K001/120 und K002/80. |

### Aktion

```text
Fachliche Regel: Konto als zusätzliches Detailfeld in die Abfrage aufnehmen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| P001/K001/120; P001/K002/80; P002/K003/50. |

## Ergebnis

Ein zusätzliches Feld darf die beabsichtigte Zeilenebene nicht unbeabsichtigt verändern.

## Warum funktioniert das?

Ein zusätzliches Detailfeld kann die Gruppierung verfeinern. Es verändert dann die Ergebnisgranularität und nicht nur die sichtbare Spaltenzahl.

## Typischer Fehler

Annehmen, dass ein neues Feld immer nur eine zusätzliche Spalte ohne neue Zeilen erzeugt.

## Plausibilitätscheck

P001/K001/120; P001/K002/80; P002/K003/50.
