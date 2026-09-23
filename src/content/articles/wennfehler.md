---
{
  "id": "wennfehler",
  "slug": "wennfehler",
  "titel": "WENNFEHLER: Fehler bewusst abfangen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Logik & Fehlerbehandlung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WENNFEHLER ersetzt Formelfehler durch ein definiertes Ergebnis. Erst die Ursache prüfen, dann den Ersatz festlegen.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "WENNFEHLER: Fehler bewusst abfangen",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "wennnv",
    "excel-fehlende-treffer",
    "divide"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/iferror-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=WENNFEHLER(D2/0;\"Prüfen\")\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ],
  "formelreferenz": {
    "funktion": "WENNFEHLER",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. Die Division D2/0 ist hier absichtlich fehlerhaft.",
    "anpassen": "Erstes Argument durch die zu prüfende Berechnung ersetzen; zweites Argument ist der fachlich gewählte Fehlerhinweis. Ursache separat untersuchen.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Eine bewusst abgefangene Fehlermeldung durch eine verständliche Ausgabe ersetzen.

## Voraussetzungen

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
=WENNFEHLER(D2/0;"Prüfen")
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| Prüfen |

## Ergebnis

Für D2=1000 und Division durch 0 zeigt H2 „Prüfen“. Die fehlerhafte Division bleibt fachlich zu klären.

## Warum funktioniert das?

Der Fehlerzweig wird verwendet, weil Division durch 0 kein numerisches Ergebnis liefert. Die Ursache bleibt dennoch vorhanden.

## Typischer Fehler

Alle Fehler mit 0 verdecken; dadurch wirken fehlerhafte Ergebnisse wie echte Messwerte.

## Plausibilitätscheck

Für D2=1000 und Division durch 0 zeigt H2 „Prüfen“. Die fehlerhafte Division bleibt fachlich zu klären. Als Gegenprobe ergibt =WENNFEHLER(D2/2;"Prüfen") den Wert 500.

## Argumente verstehen

Erstes Argument ist die Berechnung; zweites Argument die Ausgabe bei beliebigem Excel-Fehler.
