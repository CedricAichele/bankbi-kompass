---
{
  "id": "mittelwertwenns",
  "slug": "mittelwertwenns",
  "titel": "MITTELWERTWENNS",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MITTELWERTWENNS bildet den Durchschnitt passender Zahlenwerte.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "MITTELWERTWENNS",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "mittelwertwenn",
    "summewenns",
    "wennfehler",
    "median"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/averageifs-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=MITTELWERTWENNS(D2:D4;A2:A4;F2;C2:C4;G2)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Einen Mittelwert unter mehreren Bedingungen berechnen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = P001; G2 = A**. Passe diese Bezüge für deine Liste an.
3. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Achte auf gleich große und gleich ausgerichtete Bereiche.
4. Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen.
5. Prüfe einen zweiten Fall und fehlende Werte. Bei wachsenden Listen verwende Excel-Tabellen mit strukturierten Bezügen oder erweitere alle zusammengehörenden Bereiche.

## Beispiel

### Vorher · Beispieldaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

F2 = P001; G2 = A

### Aktion

```excel
=MITTELWERTWENNS(D2:D4;A2:A4;F2;C2:C4;G2)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 1000 |

## Ergebnis

Einen Mittelwert unter mehreren Bedingungen berechnen.

## Warum funktioniert das?

Im Beispiel erfüllt nur K001 beide Bedingungen; der Durchschnitt dieser einen Beobachtung ist 1000.

## Typischer Fehler

Keine Treffer mit einem Mittelwert 0 gleichsetzen: Ohne passende Zahlen entsteht ein Fehler.

## Plausibilitätscheck

Erwartete Ausgabe: **1000**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

Der Mittelwertbereich steht zuerst, danach Kriterienbereich/Kriterium-Paare mit UND-Verknüpfung.
