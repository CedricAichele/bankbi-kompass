---
{
  "id": "teilergebnis",
  "slug": "teilergebnis",
  "titel": "TEILERGEBNIS: gefilterte Zeilen auswerten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "TEILERGEBNIS berücksichtigt Filter. Funktionsnummer 109 summiert zusätzlich ohne manuell ausgeblendete Zeilen.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "TEILERGEBNIS: gefilterte Zeilen auswerten"
  ],
  "synonyme": [
    "nur sichtbare summe",
    "gefilterte summe"
  ],
  "verwandteThemen": [
    "excel-sichtbare",
    "aggregat"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/subtotal-function",
    "https://support.microsoft.com/de-DE/Excel/functions/subtotal-function"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-teilergebnis.webp",
      "alt": "TEILERGEBNIS mit 109: zunächst ungefiltert ergibt die Summe 9.000.",
      "caption": "Ersatzaufnahme: Excel – TEILERGEBNIS: gefilterte Zeilen auswerten",
      "schritt": 5,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Zeigt nur die ungefilterte Summe; der didaktisch wichtige gefilterte Zustand fehlt. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Zeigt nur die ungefilterte Summe; der didaktisch wichtige gefilterte Zustand fehlt.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – TEILERGEBNIS: gefilterte Zeilen auswerten",
        "klickfolge": [
          "Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.",
          "Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Filter in Spalte C nur A**. Passe diese Bezüge für deine Liste an.",
          "Aktiviere **Daten → Filter**. Öffne den Filterpfeil von Segment und wähle nur **A**.",
          "Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Achte auf gleich große und gleich ausgerichtete Bereiche.",
          "Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen."
        ],
        "daten": "| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |\n| --- | --- | --- | --- | --- |\n| 1 | Kunde | Konto | Segment | Bestand |\n| 2 | P001 | K001 | A | 1000 |\n| 3 | P001 | K002 | B | 2000 |\n| 4 | P002 | K003 | A | 500 |\n\nFilter in Spalte C nur A",
        "sichtbar": [
          "TEILERGEBNIS: gefilterte Zeilen auswerten",
          "Gewähltes Feld oder vollständige Formel",
          "Ergebnis passend zu den Beispieldaten"
        ],
        "ausschnitt": "Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.",
        "dateiname": "excel-teilergebnis.webp",
        "zweck": "Zeigt nur die ungefilterte Summe; der didaktisch wichtige gefilterte Zustand fehlt.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmensdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true,
  "kurzformel": "```excel\n=TEILERGEBNIS(109;D2:D4)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ],
  "formelreferenz": {
    "funktion": "TEILERGEBNIS",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. AutoFilter in C auf A setzen.",
    "anpassen": "109 summiert sichtbare Werte ohne manuell ausgeblendete Zeilen. D2:D4 ist ein direkter Wertebereich, kein Kriterium.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Eine Summe für die nach Filterung sichtbaren Zeilen anzeigen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. Die hier verwendete klassische Funktion ist in Excel 2016/2019/2021/2024 und Microsoft 365 verfügbar.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Die Auswahl erfolgt über den AutoFilter der Segmentspalte C, nicht über eine Kriterienzelle.
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

Filter in Spalte C nur A

### Aktion

```excel
=TEILERGEBNIS(109;D2:D4)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 1500 |

## Ergebnis

Mit Segmentfilter A ergibt H2 1500 aus 1000 + 500. Nach Aufheben des Filters ergibt sich 3500.

## Warum funktioniert das?

AutoFilter blendet K002 aus. Nur 1000 und 500 gehen in die sichtbare Summe ein.

## Typischer Fehler

Eine normale SUMME verwenden und erwarten, dass Filter die Berechnung einschränken.

## Plausibilitätscheck

Erwartete Ausgabe: **1500**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**109** bedeutet Summe ohne manuell ausgeblendete Zeilen; **D2:D4** ist der Wertebereich. Gefilterte Zeilen werden auch bei Funktionsnummer 9 ignoriert.
