---
{
  "id": "summewenn",
  "slug": "summewenn",
  "titel": "SUMMEWENN: ein Kriterium",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SUMMEWENN summiert Werte für genau ein Kriterium. Für mehrere Bedingungen verwende SUMMEWENNS.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "SUMMEWENN: ein Kriterium"
  ],
  "synonyme": [
    "summe wenn"
  ],
  "verwandteThemen": [
    "summewenns",
    "zaehlenwenn"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/sumif-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=SUMMEWENN(C2:C4;F2;D2:D4)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ],
  "formelreferenz": {
    "funktion": "SUMMEWENN",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. F2=A.",
    "anpassen": "C2:C4 ist der Kriterienbereich, F2 die Auswahl, D2:D4 der Summenbereich. Bereichsgrößen und Zeilen müssen passen.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Beträge zu genau einem Kriterium summieren.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. Die hier verwendete klassische Funktion ist in Excel 2016/2019/2021/2024 und Microsoft 365 verfügbar.

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
=SUMMEWENN(C2:C4;F2;D2:D4)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 1500 |

## Ergebnis

Für F2=A ergibt H2 1500 aus den Beständen 1000 und 500.

## Warum funktioniert das?

Jede passende Kriterienzeile schaltet den Betrag an derselben Position frei. 1000 und 500 gehören zu Segment A.

## Typischer Fehler

SUMMEWENN und SUMMEWENNS haben eine andere Argumentreihenfolge.

## Plausibilitätscheck

Erwartete Ausgabe: **1500**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**C2:C4** wird mit **F2** verglichen; **D2:D4** liefert die zu summierenden Zahlen.
