---
{
  "id": "sum-oder-sumx",
  "slug": "sum-oder-sumx",
  "titel": "SUM oder SUMX?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Spalte addieren oder je Zeile rechnen? SUM und SUMX lösen unterschiedliche Anforderungen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "SUM oder SUMX?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "sum",
    "sumx"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/sum-function-dax"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **SUM**, wenn eine vorhandene numerische Spalte addiert werden soll.
3. Nimm **SUMX**, wenn pro Zeile erst ein Ausdruck wie Menge × Preis berechnet werden muss.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Vorhandener Bestand_EUR: SUM. Zwei Positionen 2×10 und 3×20: SUMX ergibt 80.

| Alternative | Geeignet, wenn |
| --- | --- |
| SUM | eine vorhandene numerische Spalte addiert werden soll. |
| SUMX | pro Zeile erst ein Ausdruck wie Menge × Preis berechnet werden muss. |

## Typischer Fehler

SUM(Menge) × SUM(Preis) ergibt hier 150 statt 80.

## Merksatz

Eine Spalte addieren oder je Zeile rechnen?

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **SUM**, wenn eine vorhandene numerische Spalte addiert werden soll. Nimm **SUMX**, wenn pro Zeile erst ein Ausdruck wie Menge × Preis berechnet werden muss.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

SUM(Menge) × SUM(Preis) ergibt hier 150 statt 80. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
