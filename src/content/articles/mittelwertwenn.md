---
{
  "id": "mittelwertwenn",
  "slug": "mittelwertwenn",
  "titel": "MITTELWERTWENN: bedingt mitteln",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MITTELWERTWENN bildet den Mittelwert passender numerischer Zellen; Zeilenebene und Nullwerte beeinflussen das Ergebnis.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "MITTELWERTWENN: bedingt mitteln"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "mittelwertwenns",
    "nullwerte",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/averageif-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=MITTELWERTWENN(C2:C4;F2;D2:D4)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Den Durchschnitt für eine ausgewählte Gruppe berechnen.

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
=MITTELWERTWENN(C2:C4;F2;D2:D4)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 750 |

## Ergebnis

Den Durchschnitt für eine ausgewählte Gruppe berechnen.

## Warum funktioniert das?

1000 + 500 wird durch zwei vorhandene Zahlen geteilt. Fehlende Werte sind nicht automatisch nullwertige Beobachtungen.

## Typischer Fehler

Den Durchschnitt von Gruppen ohne Gewichtung erneut mitteln.

## Plausibilitätscheck

Erwartete Ausgabe: **750**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**C2:C4/F2** bestimmt die Gruppe; **D2:D4** liefert die Zahlen.
