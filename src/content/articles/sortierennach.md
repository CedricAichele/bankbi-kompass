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
  "kurzbeschreibung": "SORTIERENNACH erzeugt eine dynamisch sortierte Ergebnisliste anhand separater Sortierbereiche.",
  "ort": "Excel Desktop → Datenliste / Formelzelle",
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
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/sortby-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=SORTIERENNACH(A2:D4;D2:D4;-1)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Eine Matrix über einen ausdrücklich benannten Sortierbereich ordnen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Keine weitere Eingabezelle**. Passe diese Bezüge für deine Liste an.
3. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Der benötigte Überlaufbereich ab H2 muss frei sein und außerhalb einer Excel-Tabelle liegen.
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
=SORTIERENNACH(A2:D4;D2:D4;-1)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| K002 vor K001 vor K003; vollständige Zeilen bleiben zusammen |

## Ergebnis

Eine Matrix über einen ausdrücklich benannten Sortierbereich ordnen.

## Warum funktioniert das?

Der Sortierbereich muss zur Höhe der Ausgabe passen. Er wird direkt referenziert, sodass kein fest codierter Spaltenindex nötig ist.

## Typischer Fehler

Sortierbereich mit anderer Zeilenanzahl verwenden.

## Plausibilitätscheck

Erwartete Ausgabe: **K002 vor K001 vor K003; vollständige Zeilen bleiben zusammen**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**A2:D4** ist die Ausgabe; **D2:D4** liefert die Sortierwerte; **-1** bedeutet absteigend.
