---
{
  "id": "aufgabe-null",
  "slug": "aufgabe-null",
  "titel": "NULL und fehlende Werte behandeln",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Unterscheide unbekannt, nicht zutreffend und echte Null. Die Ersatzregel hängt von dieser Bedeutung ab.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": ["NULL und fehlende Werte behandeln"],
  "synonyme": ["nullwerte", "null behandeln"],
  "verwandteThemen":
    ["nullwerte", "dax-coalesce", "excel-leere-zellen", "ida-null"],
  "kontexte": ["Reporting", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Leere Werte erzeugen Lücken oder unklare Kennzahlen.

## Schritte

1. Fehlwertursache und Typ bestimmen.
2. Nur fachlich begründete Ersatzwerte verwenden.
3. Anzahl fehlender Werte vor und nach der Behandlung prüfen.

## Beispiel

Keine Buchung kann 0 bedeuten; unbekannter Bestand darf nicht ohne Weiteres 0 werden.

## Typischer Fehler

Alle leeren Felder global durch 0 ersetzen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Power BI        | [Nullwerte behandeln](#/wissen/nullwerte) · [COALESCE und ISBLANK: fehlende Ergebnisse behandeln](#/wissen/dax-coalesce) |
| Excel           | [Leere Zellen und Fehlerwerte prüfen](#/wissen/excel-leere-zellen)                                                       |
| IDA / Reporting | [NULL prüfen und behandeln](#/wissen/ida-null); generisches Konzept                                                      |
