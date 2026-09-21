---
{
  "id": "nicht",
  "slug": "nicht",
  "titel": "NICHT: Bedingung umkehren",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "NICHT kehrt WAHR und FALSCH um. Formuliere Ausschlüsse so, dass fehlende Werte bewusst behandelt werden.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "NICHT: Bedingung umkehren"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "und",
    "oder",
    "excel-leere-zellen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/not-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=NICHT(C2=F2)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Eine logische Bedingung umkehren.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = A**. Passe diese Bezüge für deine Liste an.
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

F2 = A

### Aktion

```excel
=NICHT(C2=F2)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| FALSCH |

## Ergebnis

Eine logische Bedingung umkehren.

## Warum funktioniert das?

Die Negation betrifft die gesamte geklammerte Aussage. Bei mehreren Bedingungen ist die Klammerung fachlich entscheidend.

## Typischer Fehler

NICHT(A UND B) mit NICHT(A) UND NICHT(B) gleichsetzen.

## Plausibilitätscheck

Erwartete Ausgabe: **FALSCH**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

Der Vergleich C2=F2 ist WAHR; NICHT kehrt ihn um.
