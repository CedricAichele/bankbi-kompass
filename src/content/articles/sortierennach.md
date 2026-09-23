---
{
  "id": "sortierennach",
  "slug": "sortierennach",
  "titel": "SORTIERENNACH: nach mehreren Feldern sortieren",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Filtern & eindeutige Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Sortiere vollständige Zeilen nach Segment aufsteigend und innerhalb jedes Segments nach Bestand absteigend.",
  "ort": "Excel → freie Formelzelle H2 außerhalb einer Excel-Tabelle",
  "tags": [
    "SORTIERENNACH: nach mehreren Feldern sortieren"
  ],
  "synonyme": [
    "sortierennach"
  ],
  "verwandteThemen": [
    "sortieren",
    "excel-filtern"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/sortby-function",
    "https://support.microsoft.com/de-de/excel/functions/sortby-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=SORTIERENNACH(A2:C5;B2:B5;1;C2:C5;-1)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ],
  "formelreferenz": {
    "funktion": "SORTIERENNACH",
    "eingabe": "A2:C5: Konto/Segment/Bestand, K001/B/1000, K002/A/500, K003/A/2000, K004/B/1500. Ausgabe H2:J5 frei außerhalb einer Excel-Tabelle.",
    "anpassen": "A2:C5 als Ausgabequelle, B2:B5 als erstes Sortierfeld (1 aufsteigend), C2:C5 als zweites (-1 absteigend) anpassen.",
    "version": "Microsoft 365 oder Excel 2021/2024; nicht Excel 2016/2019."
  }
}
---

## Wann brauche ich das?

Sortiere vollständige Zeilen nach Segment aufsteigend und innerhalb jedes Segments nach Bestand absteigend.

## Voraussetzungen

Microsoft 365 oder Excel 2021/2024. Nicht in Excel 2016/2019 verfügbar.

## Schritte

1. Lege die vier Quellzeilen in A1:C5 mit Konto, Segment und Bestand an.
2. Halte H2:J5 frei und außerhalb einer Excel-Tabelle. Es gibt keine separate Kriterienzelle.
3. Gib =SORTIERENNACH(A2:C5;B2:B5;1;C2:C5;-1) in H2 ein.
4. Prüfe zuerst die Segmentreihenfolge A vor B, dann innerhalb jedes Segments den absteigenden Bestand.

## Beispiel

### Vorher · A1:C5

| Konto | Segment | Bestand |
| --- | --- | ---: |
| K001 | B | 1000 |
| K002 | A | 500 |
| K003 | A | 2000 |
| K004 | B | 1500 |

```excel
=SORTIERENNACH(A2:C5;B2:B5;1;C2:C5;-1)
```

### Nachher · H2:J5

| Konto | Segment | Bestand |
| --- | --- | ---: |
| K003 | A | 2000 |
| K002 | A | 500 |
| K004 | B | 1500 |
| K001 | B | 1000 |

**A2:C5** ist die Ausgabequelle. **B2:B5;1** sortiert zuerst aufsteigend nach Segment, **C2:C5;-1** danach absteigend nach Bestand. Ersetze die Bereiche und Richtungen; jeder Sortierbereich muss dieselben vier Zeilen umfassen. SORTIEREN verwendet im einfachen Fall einen Spaltenindex innerhalb der Ausgabematrix; SORTIERENNACH benennt Sortierbereiche ausdrücklich.

## Ergebnis

Vier Zeilen in der Reihenfolge K003, K002, K004, K001. A und B sind jeweils intern nach Bestand absteigend sortiert.

## Warum funktioniert das?

Das zweite Sortiermerkmal entscheidet bei gleichen Werten im ersten. Die ganzen Zeilen bleiben zusammen.

## Typischer Fehler

Ungleich große Bereiche oder belegte Zellen im Überlaufbereich. Bei gleichen Werten in beiden Kriterien ist für eine fachlich eindeutige Reihenfolge ein weiteres Merkmal nötig.

## Plausibilitätscheck

Vorher und nachher vier Zeilen und Summe 5000. Im Segment A kommt 2000 vor 500, im Segment B 1500 vor 1000.
