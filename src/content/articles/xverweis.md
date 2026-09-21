---
{
  "id": "xverweis",
  "slug": "xverweis",
  "titel": "XVERWEIS",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "XVERWEIS sucht einen Schlüssel und liefert den passenden Wert aus einem anderen Bereich. Standard ist exakte Übereinstimmung.",
  "ort": "Excel → Formelzelle; Microsoft 365 / Excel 2021 oder neuer",
  "tags": [
    "XVERWEIS",
    "Reporting"
  ],
  "synonyme": [
    "zwei tabellen",
    "Werte aus anderer Tabelle holen",
    "zwei Tabellen verbinden",
    "werte holen",
    "werte aus anderer tabelle",
    "zwei tabellen zusammen",
    "wert aus anderer tabelle"
  ],
  "verwandteThemen": [
    "excel-fehlende-treffer",
    "index-vergleich",
    "zaehlenwenn",
    "zusammenfuehren",
    "beziehungen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/xlookup-function"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-xverweis.webp",
      "alt": "XVERWEIS liefert für das synthetische Konto K003 den Bestand 2.000.",
      "caption": "Ersatzaufnahme: Excel – XVERWEIS",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Suchwert ist hart codiert; neuer Ablauf benötigt Kriterienzelle F2 und konsistente Quellbereiche im selben Blatt. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Suchwert ist hart codiert; neuer Ablauf benötigt Kriterienzelle F2 und konsistente Quellbereiche im selben Blatt.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – XVERWEIS",
        "klickfolge": [
          "Beispieltabelle in A1:D4 eintragen.",
          "F2 = K002",
          "Zelle H2 auswählen und =XVERWEIS(F2;B2:B4;D2:D4;\"Fehlt\";0) eingeben."
        ],
        "daten": "| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |\n| --- | --- | --- | --- | --- |\n| 1 | Kunde | Konto | Segment | Bestand |\n| 2 | P001 | K001 | A | 1000 |\n| 3 | P001 | K002 | B | 2000 |\n| 4 | P002 | K003 | A | 500 |\nF2 = K002",
        "sichtbar": [
          "Quelltabelle A1:D4",
          "Kriterienzellen F2/G2 soweit genutzt",
          "Formelleiste und Ausgabe ab H2"
        ],
        "ausschnitt": "Excel – XVERWEIS mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "excel-xverweis.webp",
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
  "kurzformel": "```excel\n=XVERWEIS(F2;B2:B4;D2:D4;\"Fehlt\";0)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Einen Wert über einen eindeutigen Schlüssel nachschlagen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = K002**. Passe diese Bezüge für deine Liste an.
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

F2 = K002

### Aktion

```excel
=XVERWEIS(F2;B2:B4;D2:D4;"Fehlt";0)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 2000 |

## Ergebnis

Einen Wert über einen eindeutigen Schlüssel nachschlagen.

## Warum funktioniert das?

Excel ermittelt die Position des passenden Kontos und übernimmt den Betrag derselben Position aus der Rückgabematrix. Standardmäßig wird der erste Treffer geliefert.

## Typischer Fehler

Ein nicht eindeutiger Schlüssel liefert nur einen Treffer. Prüfe mit ZÄHLENWENN, ob die Kontonummer genau einmal existiert.

## Plausibilitätscheck

Erwartete Ausgabe: **2000**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

Suchwert **F2** enthält die gewünschte Kennung. **B2:B4** ist die Suchmatrix; **D2:D4** die gleich lange Rückgabematrix. **"Fehlt"** ist Wenn_nicht_gefunden; **0** erzwingt einen exakten Vergleich.
