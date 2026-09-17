---
{
  "id": "ida-not-null",
  "slug": "ida-not-null",
  "titel": "NULL und NOT NULL unterscheiden",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "NULL bedeutet fehlend oder unbekannt. Es ist weder automatisch 0 noch ein leerer Text.",
  "ort": "Allgemeines Filterprinzip; konkrete IDA-Ausdruckssyntax TODO",
  "tags": ["NULL und NOT NULL unterscheiden"],
  "synonyme": ["not null", "ist nicht leer"],
  "verwandteThemen": ["ida-null", "ida-filtertypen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Nur Vorgänge mit vorhandenem Abschlussdatum sollen erscheinen.

## Schritte

1. Fachliche Bedeutung des fehlenden Werts klären.
2. Einen dokumentierten Leerwerttest beziehungsweise dessen Negation verwenden.
3. Echte Nullbeträge, leere Texte und fehlende Werte getrennt testen.

## Beispiel

Vorgang A ohne Enddatum bleibt offen; Vorgang B mit Enddatum wird berücksichtigt.

## Typischer Fehler

NULL wie einen normalen Wert mit Gleichheit vergleichen; konkrete Ausdruckssyntax bleibt TODO.
