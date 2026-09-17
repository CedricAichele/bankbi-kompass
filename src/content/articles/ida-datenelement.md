---
{
  "id": "ida-datenelement",
  "slug": "ida-datenelement",
  "titel": "Datenelement hinzufügen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein zusätzliches Feld darf die beabsichtigte Zeilenebene nicht unbeabsichtigt verändern.",
  "ort": "IDA / Reporting: allgemeine Feldwahl; systemspezifische Bedienung TODO",
  "tags": ["Datenelement hinzufügen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["granularitaet", "eins-zu-viele"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Liste braucht ein weiteres Merkmal für die Auswertung.

## Schritte

1. Bedeutung und Datentyp des Feldes klären.
2. Prüfen, ob je bestehendem Schlüssel genau ein Wert vorhanden ist.
3. Nach Ergänzung Zeilenanzahl und Summen vergleichen.

## Beispiel

Eine Personenliste erhält KONTO_ID: Bei zwei Konten je Person können jetzt zwei Zeilen entstehen.

## Typischer Fehler

Annehmen, dass ein neues Feld immer nur eine zusätzliche Spalte ohne neue Zeilen erzeugt.
