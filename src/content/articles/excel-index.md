---
{
  "id": "excel-index",
  "slug": "excel-index",
  "titel": "INDEX und VERGLEICH einzeln verstehen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "VERGLEICH findet eine Position; INDEX liefert den Wert an einer Position. Zusammen ersetzen sie ein starres Nachschlagen.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "INDEX und VERGLEICH einzeln verstehen"
  ],
  "synonyme": [
    "index",
    "vergleich"
  ],
  "verwandteThemen": [
    "index-vergleich",
    "xverweis"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/index-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=INDEX(D2:D4;2)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Einen Wert an einer bekannten relativen Position aus einem Bereich lesen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Keine weitere Eingabezelle**. Passe diese Bezüge für deine Liste an.
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

Keine weitere Eingabezelle

### Aktion

```excel
=INDEX(D2:D4;2)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 2000 |

## Ergebnis

Einen Wert an einer bekannten relativen Position aus einem Bereich lesen.

## Warum funktioniert das?

INDEX adressiert die Position innerhalb seiner Matrix. Es sucht nicht selbst nach einem Schlüssel.

## Typischer Fehler

Relative Position und absolute Blattzeile verwechseln.

## Plausibilitätscheck

Erwartete Ausgabe: **2000**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**D2:D4** ist der Rückgabebereich; **2** meint dessen zweite Zeile, also D3, nicht Arbeitsblattzeile 2.
