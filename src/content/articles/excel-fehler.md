---
{
  "id": "excel-fehler",
  "slug": "excel-fehler",
  "titel": "WENN: zwischen zwei Ergebnissen wählen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Logik & Fehlerbehandlung",
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
  "zuletztGeprueft": "2026-09-23",
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
  ],
  "formelreferenz": {
    "funktion": "WENN",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. D2:D4 sind vollständig und numerisch.",
    "anpassen": "D2 ist der zu prüfende Bestand; 1000 ist die Schwelle. Dann-/Sonst-Text anpassen. Fehlende Bestände vorab getrennt behandeln.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Zwischen zwei Ergebnissen anhand einer Bedingung entscheiden.

## Voraussetzungen

Bestand D2:D4 ist vollständig und numerisch. Fehlende oder unbekannte Bestände zuerst getrennt kennzeichnen; nicht automatisch als „niedrig“ klassifizieren.

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. Die hier verwendete klassische Funktion ist in Excel 2016/2019/2021/2024 und Microsoft 365 verfügbar.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. D2 ist Teil der Quelle und enthält den zu prüfenden Bestand 1000. Es ist keine zusätzliche Kriterienzelle.
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

Für D2=1000 ergibt H2 „niedrig“. D3=2000 ergibt nach Kopieren „hoch“, D4=500 „niedrig“.

## Warum funktioniert das?

Die Bedingung entscheidet zwischen zwei Zweigen. Genau 1000 erfüllt größer als 1000 nicht.

## Typischer Fehler

Fehlende Werte ungeprüft als niedrig bewerten.

## Plausibilitätscheck

Für D2=1000 ergibt H2 „niedrig“. D3=2000 ergibt nach Kopieren „hoch“, D4=500 „niedrig“. Prüfe insbesondere den Grenzwert: >1000 schließt genau 1000 aus.

## Argumente verstehen

**D2>1000** ist die Prüfung, **"hoch"** der Dann-Wert, **"niedrig"** der Sonst-Wert.
