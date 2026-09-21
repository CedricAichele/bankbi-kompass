---
{
  "id": "zaehlenwenns",
  "slug": "zaehlenwenns",
  "titel": "ZÄHLENWENNS",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ZÄHLENWENNS zählt Zeilen, die alle Kriterien erfüllen.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "ZÄHLENWENNS",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "summewenns",
    "und",
    "oder",
    "eindeutig",
    "distinctcount"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/countifs-function"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-zaehlenwenns.webp",
      "alt": "ZÄHLENWENNS zählt für P001 zwei Kontenzeilen.",
      "caption": "Ersatzaufnahme: Excel – ZÄHLENWENNS",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Zeigt nur ein Kriterium statt zwei gleichzeitiger Kriterien. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Zeigt nur ein Kriterium statt zwei gleichzeitiger Kriterien.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – ZÄHLENWENNS",
        "klickfolge": [
          "Beispieltabelle in A1:D4 eintragen.",
          "F2 = P001; G2 = A",
          "Zelle H2 auswählen und =ZÄHLENWENNS(A2:A4;F2;C2:C4;G2) eingeben."
        ],
        "daten": "| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |\n| --- | --- | --- | --- | --- |\n| 1 | Kunde | Konto | Segment | Bestand |\n| 2 | P001 | K001 | A | 1000 |\n| 3 | P001 | K002 | B | 2000 |\n| 4 | P002 | K003 | A | 500 |\nF2 = P001; G2 = A",
        "sichtbar": [
          "Quelltabelle A1:D4",
          "Kriterienzellen F2/G2 soweit genutzt",
          "Formelleiste und Ausgabe ab H2"
        ],
        "ausschnitt": "Excel – ZÄHLENWENNS mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "excel-zaehlenwenns.webp",
        "zweck": "Zusammenhang zwischen Eingabezellen, Formelargumenten und Ergebnis zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true,
  "kurzformel": "```excel\n=ZÄHLENWENNS(A2:A4;F2;C2:C4;G2)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Zeilen zählen, die mehrere Bedingungen gleichzeitig erfüllen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = P001; G2 = A**. Passe diese Bezüge für deine Liste an.
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

F2 = P001; G2 = A

### Aktion

```excel
=ZÄHLENWENNS(A2:A4;F2;C2:C4;G2)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 1 |

## Ergebnis

Zeilen zählen, die mehrere Bedingungen gleichzeitig erfüllen.

## Warum funktioniert das?

Nur dieselbe Zeile muss alle Kriterien erfüllen; getrennte Treffer in verschiedenen Zeilen zählen nicht.

## Typischer Fehler

Ergebnisse einzelner ZÄHLENWENN-Aufrufe addieren und dadurch eine UND-Bedingung verlieren.

## Plausibilitätscheck

Erwartete Ausgabe: **1**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

Die Paare **A2:A4/F2** und **C2:C4/G2** beschreiben Kunden- und Segmentkriterium.
