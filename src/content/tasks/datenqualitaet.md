---
{
  "id": "datenqualitaet",
  "slug": "datenqualitaet",
  "titel": "Daten bereinigen und prüfen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Beginne mit Schlüsseln und Typen; kontrolliere danach fehlende Werte, Dubletten und Summen.",
  "ort": "Power Query / Excel; IDA-Ergebnis vor Export kontrollieren",
  "tags": [
    "Daten bereinigen und prüfen",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "datenbereinigung",
    "dubletten",
    "ida-join-pruefen"
  ],
  "kontexte": [
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

Eine neue Liste soll zuverlässig weiterverarbeitet werden.

## Schritte

1. Fachliche Zeilenebene und Schlüssel festlegen.
2. Datentypen, NULL, Leertext und Mehrfachkombinationen prüfen.
3. Zeilenanzahl und Kontrollsumme vor/nach jeder Änderung vergleichen.
4. Öffne die [konkrete Datentyp ändern / Daten bereinigen-Anleitung](#/wissen/datenbereinigung) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Nach Bereinigung dieselben Prüfgrößen wiederholen und begründete Differenzen notieren.

## Beispiel

[Power Query: Typen](#/wissen/datenbereinigung) · [Excel: GLÄTTEN](#/wissen/glaetten) · [IDA: Join-Prüfung](#/wissen/ida-join-pruefen).

Drei Ausgangszeilen werden nach Join zu fünf: Ursache untersuchen.

## Typischer Fehler

Pauschal 0 einsetzen oder Zeilen löschen, bis die Zahl plausibel aussieht.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Datentyp ändern / Daten bereinigen](#/wissen/datenbereinigung) · [Fehlerhafte Werte prüfen](#/wissen/pq-fehler) |
| Excel           | [Excel-Liste für Auswertung vorbereiten](#/wissen/excel-liste-vorbereiten)                                       |
| IDA / Reporting | [Ergebnis vor / nach Join plausibilisieren](#/wissen/ida-join-pruefen); generisches Konzept                      |

## Ergebnis

Konten-Beispiel: 6 gültige Konten, 4 Personen, 9.000 Bestand, 0 fehlende Kennungen.

## Warum funktioniert das?

Qualität umfasst Struktur, Vollständigkeit, Eindeutigkeit und fachliche Plausibilität.

## Plausibilitätscheck

Nach Bereinigung dieselben Prüfgrößen wiederholen und begründete Differenzen notieren.
