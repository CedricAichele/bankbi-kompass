---
{
  "id": "oder",
  "slug": "oder",
  "titel": "ODER: mindestens eine Bedingung erfüllen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ODER ist WAHR, sobald mindestens eine Bedingung WAHR ist.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "ODER: mindestens eine Bedingung erfüllen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "und",
    "excel-kombinationen",
    "excel-fehler"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/or-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=ODER(A2=F2;C2=G2)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Mindestens eine von mehreren Bedingungen zulassen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = P002; G2 = A**. Passe diese Bezüge für deine Liste an.
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

F2 = P002; G2 = A

### Aktion

```excel
=ODER(A2=F2;C2=G2)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| WAHR |

## Ergebnis

Mindestens eine von mehreren Bedingungen zulassen.

## Warum funktioniert das?

K001 gehört nicht zu P002, aber zu A; ein wahrer Teil reicht aus.

## Typischer Fehler

Zwei Treffer als doppelte Zeile zählen: ODER liefert pro Prüfung nur einen Wahrheitswert.

## Plausibilitätscheck

Erwartete Ausgabe: **WAHR**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

Jeder Vergleich ist ein möglicher Grund, die Zeile einzuschließen.
