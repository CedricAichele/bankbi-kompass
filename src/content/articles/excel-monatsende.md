---
{
  "id": "excel-monatsende",
  "slug": "excel-monatsende",
  "titel": "MONATSENDE und HEUTE",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Datum & Datentypen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bestimme das Monatsende eines expliziten Stichtags oder des aktuellen Datums. HEUTE ist ein Berechnungsdatum und kein Nachweis des fachlichen Datenstands.",
  "ort": "Excel → freie Formelzelle H2; Datumsformat wählen",
  "tags": [
    "MONATSENDE und HEUTE"
  ],
  "synonyme": [
    "monatsende",
    "heute"
  ],
  "verwandteThemen": [
    "excel-datum",
    "excel-kalender",
    "monatsultimo",
    "aktueller-stichtag"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/eomonth-function",
    "https://support.microsoft.com/de-de/excel/functions/today-function",
    "https://support.microsoft.com/de-de/excel/functions/eomonth-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=MONATSENDE(A2;0)\n```",
  "formelreferenz": {
    "funktion": "MONATSENDE",
    "eingabe": "A2 ist das echte Datum 15.02.2026. Formel in H2, als Datum formatieren.",
    "anpassen": "A2 und Monatsversatz 0 anpassen. 1 bedeutet Folgemonat, -1 Vormonat. HEUTE-basierte Alternative im Artikel ist dynamisch.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Bestimme das Monatsende eines expliziten Stichtags oder des aktuellen Datums. HEUTE ist ein Berechnungsdatum und kein Nachweis des fachlichen Datenstands.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Trage in A2 das echte Datum 15.02.2026 ein, wenn der Bericht reproduzierbar bleiben soll.
2. Berechne in H2 =MONATSENDE(A2;0) und formatiere die Ausgabe als Datum.
3. Für eine bewusst laufende Tagesübersicht verwende stattdessen =HEUTE() oder =MONATSENDE(HEUTE();0).
4. Prüfe, ob der feste Berichtsstichtag oder das Datum bei Neuberechnung fachlich gemeint ist.

## Beispiel

| Eingabe / Zweck | Formel in separater Ergebniszelle | Ergebnis |
| --- | --- | --- |
| A2 = 15.02.2026 | `=MONATSENDE(A2;0)` | 28.02.2026 |
| A2 = 15.02.2026, Folgemonat | `=MONATSENDE(A2;1)` | 31.03.2026 |
| Laufende Tagesübersicht | `=HEUTE()` | Aktuelles Datum bei Neuberechnung |
| Monatsende zum Berechnungsdatum | `=MONATSENDE(HEUTE();0)` | Ende des Monats, in dem neu berechnet wird |

Wird beispielsweise am 23.09.2026 neu berechnet, ergeben die letzten beiden Formeln 23.09.2026 und 30.09.2026; an anderen Tagen können die Ergebnisse anders sein. A2 und den Monatsversatz 0 anpassen. Bei manueller Berechnung aktualisiert sich HEUTE erst mit einer Neuberechnung.

## Ergebnis

Mit dem festen A2 = 15.02.2026 liefert H2 reproduzierbar 28.02.2026. HEUTE-basierte Ausgaben bleiben ausdrücklich dynamisch.

## Warum funktioniert das?

MONATSENDE berücksichtigt Monatslängen. HEUTE bezieht sich auf den Berechnungszeitpunkt, nicht auf die letzte Datenlieferung.

## Typischer Fehler

Einen historischen Stichtagsbericht mit HEUTE unbemerkt in den aktuellen Monat verschieben.

## Plausibilitätscheck

Für Februar 2026 wird Tag 28 erwartet; für Februar 2028 Tag 29. Prüfe bei dynamischen Ausgaben zusätzlich den tatsächlichen Datenstand.
