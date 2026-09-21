---
{
  "id": "ida-join-pruefen",
  "slug": "ida-join-pruefen",
  "titel": "Ergebnis vor / nach Join plausibilisieren",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche Zeilen, eindeutige Schlüssel, Kontrollsummen und fehlende Treffer vor und nach jeder Verknüpfung.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Ergebnis vor / nach Join plausibilisieren",
    "Datenqualität"
  ],
  "synonyme": [
    "mehr zeilen nach join"
  ],
  "verwandteThemen": [
    "ida-join-aggregation",
    "kardinalitaet",
    "problem-merge-zeilen",
    "eins-zu-viele",
    "zusammenfuehren"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationships-creating-relationship-manually"
  ],
  "screenshots": [
    {
      "src": "images/ida/eins-zu-viele.svg",
      "alt": "Vor dem Join: Person P001: 1 Personenzeile. Nach dem Join: P001 · Konto K001: P001 · Konto K002. Kontrolle: 2 Zeilen, 1 Person: Personen eindeutig zählen",
      "caption": "Eine Person, mehrere Konten",
      "hinweis": "Eine 1:n-Verknüpfung erzeugt mehrere Zeilen je Person.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Nach einer Zuordnung verändern sich Zeilenzahl und Summen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Konkreter IDA-Menüweg nicht öffentlich belegt. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Notiere vor dem Join zwei linke Zeilen und Summe 200.
2. Prüfe rechte Schlüssel auf Mehrfachtreffer und entscheide, ob diese fachlich gewünscht sind.
3. Notiere die fachliche Regel: **Linker Join über Person; rechte Merkmale ergänzen.**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Seite | Schlüssel | Wert |
| --- | --- | --- |
| Links | P001/K001 | 120 |
| Links | P002/K002 | 80 |
| Rechts | P001 | A |
| Rechts | P001 | B |
| Rechts | P002 | C |

### Aktion

```text
Pseudologik: Linker Join über Person; rechte Merkmale ergänzen.
```

### Nachher · Beispielergebnis

| Konto | Betrag | Merkmal |
| --- | --- | --- |
| K001 | 120 | A |
| K001 | 120 | B |
| K002 | 80 | C |

## Ergebnis

Vergleiche Zeilen, eindeutige Schlüssel, Kontrollsummen und fehlende Treffer vor und nach jeder Verknüpfung.

## Warum funktioniert das?

Jede linke Zeile wird mit allen passenden rechten Zeilen kombiniert. Eine 1:n-Zuordnung kann deshalb linke Beträge wiederholen.

## Typischer Fehler

**Symptom/Ursache:** Eine anschließende SUMME verdeckt den Fehler nicht, sondern zählt den vervielfachten Betrag.

## Plausibilitätscheck

Nachher drei Zeilen und scheinbare Summe 320: Die Erhöhung um 120 ist vollständig durch P001 erklärt.
