---
{
  "id": "excel-mehrere-kriterien",
  "slug": "excel-mehrere-kriterien",
  "titel": "Nachschlagen mit mehreren Kriterien",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen & Zuordnen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Suche einen Rückgabewert über zwei Merkmale in einer separaten Zuordnungstabelle. XVERWEIS liefert den ersten passenden Treffer; Mehrfachtreffer musst du fachlich klären.",
  "ort": "Excel → freie Ergebniszelle H2; Kriterien in F2:G2",
  "tags": [
    "Nachschlagen mit mehreren Kriterien"
  ],
  "synonyme": [
    "mehrere kriterien"
  ],
  "verwandteThemen": [
    "xverweis",
    "excel-filtern",
    "summewenns",
    "excel-fehlende-treffer"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/and-function",
    "https://support.microsoft.com/de-de/excel/functions/xlookup-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=XVERWEIS(1;(A2:A5=F2)*(B2:B5=G2);C2:C5;\"Kein Treffer\")\n```",
  "formelreferenz": {
    "funktion": "XVERWEIS mit mehreren Kriterien",
    "eingabe": "A2:C5: Kunde/Produkt/Bestand mit P001/A/1000, P001/B/2000, P002/A/500, P002/B/800. F2=P001, G2=B, Ergebnis H2.",
    "anpassen": "A/B sind die beiden Suchmerkmale, F2/G2 deren Kriterien; C ist die Rückgabe. Gleich große Bereiche und Eindeutigkeit prüfen.",
    "version": "Microsoft 365 oder Excel 2021/2024; nicht Excel 2016/2019."
  }
}
---

## Wann brauche ich das?

Suche einen Rückgabewert über zwei Merkmale in einer separaten Zuordnungstabelle. XVERWEIS liefert den ersten passenden Treffer; Mehrfachtreffer musst du fachlich klären.

## Voraussetzungen

Microsoft 365 oder Excel 2021/2024. Nicht in Excel 2016/2019 verfügbar.

## Schritte

1. Lege die Zuordnungstabelle in A1:C5 an; A enthält Kunde, B Produkt und C den Rückgabewert Bestand. Alle Werte gehören zum selben Stichtag.
2. Trage außerhalb der Quelle F2 = P001 und G2 = B ein. Das sind die beiden Suchkriterien.
3. Gib die Formel in H2 ein. Ersetze Quellbereiche, Kriterienzellen und Rückgabebereich passend zur eigenen Tabelle.
4. Prüfe H2 = 2000. Teste anschließend G2 = Z: erwartet wird „Kein Treffer“. Prüfe vor produktiver Nutzung die Eindeutigkeit von Kunde + Produkt.

## Beispiel

| Zeile | A: Kunde | B: Produkt | C: Bestand |
| --- | --- | --- | ---: |
| 2 | P001 | A | 1000 |
| 3 | P001 | B | 2000 |
| 4 | P002 | A | 500 |
| 5 | P002 | B | 800 |

F2 = P001, G2 = B; Formel in H2:

```excel
=XVERWEIS(1;(A2:A5=F2)*(B2:B5=G2);C2:C5;"Kein Treffer")
```

Die beiden Vergleiche erzeugen WAHR/FALSCH je Quellzeile. Die Multiplikation ergibt {0;1;0;0}. **1** ist der Suchwert für eine Zeile, in der beide Merkmale passen. **C2:C5** liefert den Bestand. **"Kein Treffer"** ist das vierte Argument für eine erfolglose Suche. Alle drei Quellbereiche müssen gleich viele und dieselben Zeilen umfassen.

## Ergebnis

H2 enthält 2000 für P001 und Produkt B. P002/B ergibt 800; P001/Z ergibt „Kein Treffer“.

## Warum funktioniert das?

Die Wahrheitsmatrix bildet eine UND-Verknüpfung über zwei Spalten der Zuordnungstabelle. Sie prüft nicht nur die einzelne Ergebniszeile.

## Typischer Fehler

Bei zwei Zeilen mit P001/B liefert XVERWEIS standardmäßig die erste. Das löst keinen Konflikt und summiert keine Werte. Für alle Treffer [FILTER](#/wissen/excel-filtern), für eine Summe [SUMMEWENNS](#/wissen/summewenns) verwenden.

## Plausibilitätscheck

Vier Quellzeilen, genau ein Treffer für P001/B. Die zugehörige Rückgabe 2000 muss mit C3 übereinstimmen.
