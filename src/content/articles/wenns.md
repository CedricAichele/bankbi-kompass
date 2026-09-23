---
{
  "id": "wenns",
  "slug": "wenns",
  "titel": "WENNS: geordnete Regeln",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Logik & Fehlerbehandlung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WENNS gibt das Ergebnis der ersten wahren Bedingung zurück. Ein abschließender WAHR-Fall kann den Rest abdecken.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "WENNS: geordnete Regeln"
  ],
  "synonyme": [
    "wenns"
  ],
  "verwandteThemen": [
    "excel-fehler",
    "und"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/ifs-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=WENNS(D2>2000;\"sehr hoch\";D2>1000;\"hoch\";WAHR;\"niedrig\")\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Mehrere geordnete Bedingungen ohne tiefe WENN-Verschachtelung prüfen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **D2 = 1000**. Passe diese Bezüge für deine Liste an.
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
=WENNS(D2>2000;"sehr hoch";D2>1000;"hoch";WAHR;"niedrig")
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| niedrig |

## Ergebnis

Mehrere geordnete Bedingungen ohne tiefe WENN-Verschachtelung prüfen.

## Warum funktioniert das?

Der erste wahre Test gewinnt. Deshalb stehen speziellere beziehungsweise höhere Schwellen zuerst.

## Typischer Fehler

Die Reihenfolge vertauschen und dadurch einen spezielleren Fall unerreichbar machen.

## Plausibilitätscheck

Erwartete Ausgabe: **niedrig**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

Die Argumente bilden Bedingung/Ergebnis-Paare; **WAHR** ist die Auffangbedingung.
