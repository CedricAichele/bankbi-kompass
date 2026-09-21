---
{
  "id": "excel-fehler",
  "slug": "excel-fehler",
  "titel": "WENN: zwischen zwei Ergebnissen wählen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WENN liefert je nach wahrer oder falscher Bedingung eines von zwei Ergebnissen.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "WENN: zwischen zwei Ergebnissen wählen",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "wenns",
    "und",
    "oder",
    "wennfehler"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/if-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=WENN(D2>1000;\"hoch\";\"niedrig\")\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Zwischen zwei Ergebnissen anhand einer Bedingung entscheiden.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **D2 = 1000**. Passe diese Bezüge für deine Liste an.
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

D2 = 1000

### Aktion

```excel
=WENN(D2>1000;"hoch";"niedrig")
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| niedrig |

## Ergebnis

Zwischen zwei Ergebnissen anhand einer Bedingung entscheiden.

## Warum funktioniert das?

Die Bedingung entscheidet zwischen zwei Zweigen. Genau 1000 erfüllt größer als 1000 nicht.

## Typischer Fehler

Fehlende Werte ungeprüft als niedrig bewerten.

## Plausibilitätscheck

Erwartete Ausgabe: **niedrig**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**D2>1000** ist die Prüfung, **"hoch"** der Dann-Wert, **"niedrig"** der Sonst-Wert.
