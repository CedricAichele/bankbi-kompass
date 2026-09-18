---
{
  "id": "aufgabe-quote",
  "slug": "aufgabe-quote",
  "titel": "Prozent und Quote korrekt berechnen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Berechne die Quote aus passendem Gesamtzähler und Gesamtnenner und formatiere sie als Prozent.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Prozent und Quote korrekt berechnen"
  ],
  "synonyme": [
    "prozent",
    "quote"
  ],
  "verwandteThemen": [
    "divide",
    "prozentformat",
    "ida-quote"
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

Du brauchst Planerreichung oder den Anteil einer Produktgruppe.

## Schritte

1. Zähler, Nenner, Zeitraum und Ebene festlegen.
2. Beide Größen aggregieren und dann dividieren.
3. Nenner 0 und fehlende Werte behandeln; Prozentformat setzen.
4. Öffne die [konkrete DIVIDE: Quote berechnen-Anleitung](#/wissen/divide) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Zeige Zähler und Nenner neben der Quote; prüfe auch Nenner 0.

## Beispiel

Ist 95, Plan 100 → 95 %. Zwei Einzelquoten werden nicht einfach addiert.

## Typischer Fehler

Ungewichtete Durchschnittsquoten als Gesamtquote ausgeben.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                            |
| --------------- | --------------------------------------------------------------------------------------------- |
| Power BI        | [DIVIDE: Quote berechnen](#/wissen/divide) · [0,95 als 95 % anzeigen](#/wissen/prozentformat) |
| Excel           | [SUMMEWENNS](#/wissen/summewenns)                                                             |
| IDA / Reporting | [Quote berechnen](#/wissen/ida-quote); generisches Konzept                                    |

## Ergebnis

1/2 und 9/10 ergeben insgesamt 10/12 = 83,33 %.

## Warum funktioniert das?

Ein Quotient benötigt fachlich passende Größen und gleiche Filter.

## Plausibilitätscheck

Zeige Zähler und Nenner neben der Quote; prüfe auch Nenner 0.
