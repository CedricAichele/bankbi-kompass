---
{
  "id": "reporting",
  "slug": "reporting",
  "titel": "Liste erstellen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Baue eine flache Liste mit klarer Zeilenebene, Schlüsseln und nur den benötigten Feldern.",
  "ort": "IDA / Reporting: allgemeines Listenprinzip; konkrete Menüpfade noch TODO",
  "tags": ["Liste erstellen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-datenelement", "ida-ebene", "ida-excel-liste"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Das Ergebnis soll kontrolliert oder in Excel weiterverarbeitet werden.

## Schritte

1. Festlegen: eine Zeile je Person, Konto oder Vorgang.
2. Schlüssel, benötigte Attribute und Messwerte auswählen.
3. Filter, Zeilenanzahl und Kontrollsumme prüfen.

## Beispiel

| PERSON_ID | KONTO_ID | BESTAND_EUR |
| --------- | -------- | ----------: |
| P001      | K-A      |         120 |
| P001      | K-B      |          80 |

## Typischer Fehler

Eine scheinbare Personenliste enthält hier zwei Kontenzeilen. Die Überschrift muss die tatsächliche Ebene nennen.
