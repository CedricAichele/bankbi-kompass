---
{
  "id": "reporting",
  "slug": "reporting",
  "titel": "Liste erstellen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Baue eine flache Liste mit klarer Zeilenebene, Schlüsseln und nur den benötigten Feldern.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Liste erstellen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-datenelement",
    "ida-ebene",
    "ida-excel-liste"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Das Ergebnis soll kontrolliert oder in Excel weiterverarbeitet werden.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Zielzeile als ein Konto am betrachteten Stichtag definieren.
2. Formuliere die gewünschte Regel: **Eine Liste mit Person, Konto und Betrag auf Kontoebene definieren.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Nur benötigte Schlüssel, Merkmale und Messwerte aufnehmen; anschließend Zeilen und Summe prüfen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Konten: P001/K001/120, P001/K002/80, P002/K003/50. |

### Aktion

```text
Fachliche Regel: Eine Liste mit Person, Konto und Betrag auf Kontoebene definieren.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Drei Datenzeilen, Summe 250; P001 erscheint zweimal. |

## Ergebnis

Baue eine flache Liste mit klarer Zeilenebene, Schlüsseln und nur den benötigten Feldern.

## Warum funktioniert das?

Die ausgewählten Felder bestimmen die erkennbare Detailtiefe. Eine Kontenliste bleibt eine Kontenliste, auch wenn Person ganz links steht.

## Typischer Fehler

Eine scheinbare Personenliste enthält hier zwei Kontenzeilen. Die Überschrift muss die tatsächliche Ebene nennen.

## Plausibilitätscheck

Drei Datenzeilen, Summe 250; P001 erscheint zweimal.
