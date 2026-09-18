---
{
  "id": "tabellen-verbinden",
  "slug": "tabellen-verbinden",
  "titel": "Zwei Tabellen verbinden",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wähle nach dem Ziel: Filterweg im Modell, Spalten über Schlüssel ergänzen oder gleichartige Zeilen untereinander setzen.",
  "ort": "Power BI / Excel / IDA: zuerst gewünschte Ergebnisform festlegen",
  "tags": [
    "Zwei Tabellen verbinden",
    "Reporting"
  ],
  "synonyme": [
    "zwei tabellen",
    "zwei Tabellen verbinden",
    "zwei tabellen zusammen"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "anhaengen",
    "beziehungen",
    "xverweis",
    "ida-join-pruefen"
  ],
  "kontexte": [
    "Reporting"
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

Zwei Tabellen verbinden, ohne Beträge zu vervielfachen.

## Voraussetzungen

Nur synthetische Ausgangsdaten. Die verwendeten Feldnamen im Beispiel exakt übernehmen.

## Schritte

1. Lege fest, ob du Zeilen stapeln, Spalten ergänzen oder Filter weitergeben willst.
2. Für Anreicherung lege Personen mit P001/A, P002/B, P003/A, P004/B als Personennummer/Segment an.
3. Prüfe den Personenschlüssel rechts auf genau einen Treffer je Person.
4. Öffne Power Query → Start → Abfragen als neu zusammenführen. Wähle Konten links und Personen rechts.
5. Markiere Personennummer auf beiden Seiten und wähle Links außen.
6. Erweitere nur Segment und kontrolliere Zeilenanzahl sowie Bestandssumme.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

Alle sechs Kontenzeilen erhalten eine passende Segmentzuordnung.

## Ergebnis

Sechs Ergebniszeilen, Summe 9.000.

## Warum funktioniert das?

Ein Merge reichert an; Append stapelt; eine Beziehung filtert im Modell. Diese Vorgänge sind nicht austauschbar.

## Typischer Fehler

**Ursache und Lösung:** Mehrere rechte Treffer führen beim Erweitern zu mehreren Ergebniszeilen.

## Plausibilitätscheck

K001 und K002 erhalten A; K003 erhält B. Sechs Zeilen bleiben sechs.

## Vergleich

Power BI: Beziehung für reine Filterweitergabe. Excel: XVERWEIS für eindeutige Einzelwerte. Reporting: Join-Grain vorher prüfen.
