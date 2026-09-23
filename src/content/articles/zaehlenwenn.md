---
{
  "id": "zaehlenwenn",
  "slug": "zaehlenwenn",
  "titel": "ZÄHLENWENN: Treffer zählen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ZÄHLENWENN zählt Zellen, die eine Bedingung erfüllen. Das ist keine eindeutige Personenanzahl.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "ZÄHLENWENN: Treffer zählen"
  ],
  "synonyme": [
    "zählen wenn"
  ],
  "verwandteThemen": [
    "zaehlenwenns",
    "eindeutig",
    "excel-dubletten-finden"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/use-the-countif-function-in-microsoft-excel"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=ZÄHLENWENN(A2:A4;F2)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ],
  "formelreferenz": {
    "funktion": "ZÄHLENWENN",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. F2=P001.",
    "anpassen": "A2:A4 und F2 anpassen. Die Funktion zählt passende Zeilen, keine eindeutigen Kunden.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Passende Zeilen zu einem Kriterium zählen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. Die hier verwendete klassische Funktion ist in Excel 2016/2019/2021/2024 und Microsoft 365 verfügbar.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = P001**. Passe diese Bezüge für deine Liste an.
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

F2 = P001

### Aktion

```excel
=ZÄHLENWENN(A2:A4;F2)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 2 |

## Ergebnis

Für F2=P001 ergibt H2 2 passende Zeilen; das ist ein Kunde mit zwei Konten.

## Warum funktioniert das?

Jede passende Zelle zählt einmal. Zwei Kontenzeilen von P001 ergeben zwei Treffer, nicht zwei unterschiedliche Personen.

## Typischer Fehler

Zeilenzahl mit eindeutiger Kundenanzahl verwechseln.

## Plausibilitätscheck

Erwartete Ausgabe: **2**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**A2:A4** ist der Prüfbereich; **F2** der Vergleichswert.
