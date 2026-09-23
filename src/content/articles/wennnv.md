---
{
  "id": "wennnv",
  "slug": "wennnv",
  "titel": "WENNNV: fehlende Treffer kennzeichnen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Logik & Fehlerbehandlung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WENNNV behandelt gezielt #NV und lässt andere Fehler sichtbar.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "WENNNV: fehlende Treffer kennzeichnen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "wennfehler",
    "xverweis"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/ifna-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=WENNNV(VERGLEICH(F2;B2:B4;0);\"Fehlt\")\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ],
  "formelreferenz": {
    "funktion": "WENNNV",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. F2=K999.",
    "anpassen": "F2 und Suchbereich B2:B4 anpassen. Nur #NV wird durch Fehlt ersetzt; andere Fehler bleiben sichtbar.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Nur einen fehlenden Suchtreffer abfangen und andere Fehler sichtbar lassen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. Die hier verwendete klassische Funktion ist in Excel 2016/2019/2021/2024 und Microsoft 365 verfügbar.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = K999**. Passe diese Bezüge für deine Liste an.
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

F2 = K999

### Aktion

```excel
=WENNNV(VERGLEICH(F2;B2:B4;0);"Fehlt")
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| Fehlt |

## Ergebnis

F2=K999 ergibt „Fehlt“, weil kein passender Kontoschlüssel vorhanden ist.

## Warum funktioniert das?

Fehlende Zuordnung und kaputte Formel sind verschiedene Probleme. Die engere Fehlerbehandlung erhält andere Fehlersignale.

## Typischer Fehler

WENNNV als Ersatz für eine Prüfung doppelter Schlüssel verwenden.

## Plausibilitätscheck

Erwartete Ausgabe: **Fehlt**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

VERGLEICH liefert bei keinem Treffer **#NV**; WENNNV ersetzt ausschließlich diesen Fehlertyp.
