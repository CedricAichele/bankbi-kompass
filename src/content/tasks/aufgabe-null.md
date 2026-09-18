---
{
  "id": "aufgabe-null",
  "slug": "aufgabe-null",
  "titel": "NULL und fehlende Werte behandeln",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Unterscheide unbekannt, nicht zutreffend und echte Null. Die Ersatzregel hängt von dieser Bedeutung ab.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "NULL und fehlende Werte behandeln"
  ],
  "synonyme": [
    "nullwerte",
    "null behandeln"
  ],
  "verwandteThemen": [
    "nullwerte",
    "dax-coalesce",
    "excel-leere-zellen",
    "ida-null"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Leere Werte erzeugen Lücken oder unklare Kennzahlen.

## Schritte

1. Fehlwertursache und Typ bestimmen.
2. Nur fachlich begründete Ersatzwerte verwenden.
3. Anzahl fehlender Werte vor und nach der Behandlung prüfen.
4. Öffne die [konkrete Nullwerte behandeln-Anleitung](#/wissen/nullwerte) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Zähle Fehlwerte getrennt und teste Filter auf leer, 0 und vorhandenen Betrag.

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

## Ergebnis

Fehlender Betrag bleibt als fehlend erkennbar; echte 0 bleibt ein Messwert.

## Warum funktioniert das?

Unbekannt und gemessen null tragen unterschiedliche Information.

## Plausibilitätscheck

Zähle Fehlwerte getrennt und teste Filter auf leer, 0 und vorhandenen Betrag.
