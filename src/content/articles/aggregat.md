---
{
  "id": "aggregat",
  "slug": "aggregat",
  "titel": "AGGREGAT: Fehler gezielt auslassen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "AGGREGAT bietet Auswahlregeln für Fehler und ausgeblendete Zeilen. Dokumentiere, welche Werte ausgeschlossen werden.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "AGGREGAT: Fehler gezielt auslassen",
    "Grundbegriff"
  ],
  "synonyme": [
    "aggregat"
  ],
  "verwandteThemen": [
    "teilergebnis",
    "wennfehler"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/aggregate-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=AGGREGAT(9;7;D2:D4)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Eine Aggregation mit ausdrücklicher Behandlung ausgeblendeter Zeilen und Fehler steuern.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Filter in C nur A**. Passe diese Bezüge für deine Liste an.
3. Aktiviere **Daten → Filter**. Öffne den Filterpfeil von Segment und wähle nur **A**.
4. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Achte auf gleich große und gleich ausgerichtete Bereiche.
5. Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen.
6. Prüfe einen zweiten Fall und fehlende Werte. Bei wachsenden Listen verwende Excel-Tabellen mit strukturierten Bezügen oder erweitere alle zusammengehörenden Bereiche.

## Beispiel

### Vorher · Beispieldaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

Filter in C nur A

### Aktion

```excel
=AGGREGAT(9;7;D2:D4)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 1500 |

## Ergebnis

Eine Aggregation mit ausdrücklicher Behandlung ausgeblendeter Zeilen und Fehler steuern.

## Warum funktioniert das?

Die Optionen steuern, welche Werte in die Aggregation eingehen. Fehler werden dadurch nicht fachlich repariert, sondern lediglich von dieser Berechnung ausgeschlossen.

## Typischer Fehler

Die Optionen unverändert auf berechnete Array-Ausdrücke übertragen; deren Verhalten bei ausgeblendeten Zeilen kann abweichen.

## Plausibilitätscheck

Erwartete Ausgabe: **1500**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**9** steht für Summe, **7** ignoriert ausgeblendete Zeilen und Fehlerwerte. **D2:D4** ist ein direkter Bereichsbezug.
