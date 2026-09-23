---
{
  "id": "problem-filter-kalk",
  "slug": "problem-filter-kalk",
  "titel": "FILTER liefert #KALK!",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "FILTER liefert #KALK!, weil keine Zeile passt und das Argument für ein leeres Ergebnis fehlt.",
  "ort": "Excel → freie Formelzelle H2; Filterkriterium F2",
  "tags": [
    "FILTER liefert #KALK!"
  ],
  "synonyme": [
    "FILTER liefert #KALK!",
    "Eine FILTER-Formel scheitert bei leerer Auswahl."
  ],
  "verwandteThemen": [
    "excel-filtern",
    "excel-fehler"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/filter-function"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

FILTER liefert #KALK!, weil keine Zeile passt und das Argument für ein leeres Ergebnis fehlt.

## Voraussetzungen

FILTER benötigt Microsoft 365 oder Excel 2021/2024; die freie Ausgabe liegt außerhalb einer Excel-Tabelle.

## Schritte

1. Lege die drei Quellzeilen in A1:B4 an: Kunde und Bestand. Setze F2=P999.
2. Teste in H2 die ursprüngliche Formel ohne drittes Argument; sie liefert bei dieser leeren Auswahl #KALK!.
3. Ergänze „Keine Treffer“ als drittes Argument. Ein #ÜBERLAUF! ist ein anderes Problem: den Ausgabebereich freihalten.
4. Wechsle F2 auf P001 und prüfe, dass beide passenden Zeilen erscheinen. Siehe [FILTER](#/wissen/excel-filtern) für mehr Details.

## Beispiel

| Zeile | A: Kunde | B: Bestand |
| --- | --- | ---: |
| 2 | P001 | 100 |
| 3 | P001 | 200 |
| 4 | P002 | 500 |

### Vorher · Fehlerbild

F2=P999; H2 enthält:

```excel
=FILTER(A2:B4;A2:A4=F2)
```

Ergebnis: **#KALK!**, weil kein Kunde P999 existiert.

### Nachher

```excel
=FILTER(A2:B4;A2:A4=F2;"Keine Treffer")
```

Ergebnis: **Keine Treffer**. Ersetze Ausgabequelle A2:B4, Kriterienbereich A2:A4 und Auswahlzelle F2; beide Quellbereiche umfassen dieselben Zeilen.

## Ergebnis

P999 liefert „Keine Treffer“. P001 liefert zwei Zeilen mit Bestand 100 und 200.

## Warum funktioniert das?

Das dritte Argument definiert die Ausgabe bei leerer Ergebnismenge und verändert die Trefferbedingung nicht.

## Typischer Fehler

Den Fehler durch 0 verdecken oder eine blockierte Ausgabe mit einem fehlenden Treffer verwechseln.

## Plausibilitätscheck

Bei F2=P001 stehen in H2:I3 die Zeilen P001/100 und P001/200; die Bestandssumme ist 300.
