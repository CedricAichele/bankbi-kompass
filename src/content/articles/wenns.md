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
  "zuletztGeprueft": "2026-09-23",
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
  ],
  "formelreferenz": {
    "funktion": "WENNS",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. D2:D4 sind vollständig und numerisch.",
    "anpassen": "Schwellen, Reihenfolge und Ergebnistexte anpassen. WAHR am Ende ist der Auffangfall, nicht die Regel für unbekannte Bestände.",
    "version": "Microsoft 365 oder Excel 2019/2021/2024."
  }
}
---

## Wann brauche ich das?

Mehrere geordnete Bedingungen ohne tiefe WENN-Verschachtelung prüfen.

## Voraussetzungen

Bestand D2:D4 ist vollständig und numerisch. Fehlende oder unbekannte Bestände zuerst getrennt kennzeichnen; nicht automatisch als „niedrig“ klassifizieren.

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. WENNS: Microsoft 365 oder Excel 2019/2021/2024.

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
=WENNS(D2>2000;"sehr hoch";D2>1000;"hoch";WAHR;"niedrig")
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| niedrig |

## Ergebnis

D2=1000 ergibt „niedrig“. D3=2000 ergibt „hoch“, ein Wert 2500 ergibt „sehr hoch“.

## Warum funktioniert das?

Der erste wahre Test gewinnt. Deshalb stehen speziellere beziehungsweise höhere Schwellen zuerst.

## Typischer Fehler

Die Reihenfolge vertauschen und dadurch einen spezielleren Fall unerreichbar machen.

## Plausibilitätscheck

D2=1000 ergibt „niedrig“. D3=2000 ergibt „hoch“, ein Wert 2500 ergibt „sehr hoch“. Prüfe insbesondere den Grenzwert: >1000 schließt genau 1000 aus.

## Argumente verstehen

Die Argumente bilden Bedingung/Ergebnis-Paare; **WAHR** ist die Auffangbedingung.
