---
{
  "id": "xverweis",
  "slug": "xverweis",
  "titel": "XVERWEIS: Segment aus Stammdaten holen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen & Zuordnen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ergänze zu einer Kundennummer das passende Segment. XVERWEIS vergleicht standardmäßig exakt und liefert bei Mehrfachtreffern den ersten Treffer.",
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
    "wert aus anderer tabelle",
    "XVERWEIS"
  ],
  "verwandteThemen": [
    "excel-fehlende-treffer",
    "index-vergleich",
    "zaehlenwenn",
    "zusammenfuehren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
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
        "oberflaeche": "XVERWEIS: Segment aus Stammdaten holen",
        "klickfolge": [
          "Suchschlüssel in beiden Tabellen auf gleichen Datentyp und störende Leerzeichen prüfen. Stammdaten sollten pro Kundennummer genau ein gültiges Segment enthalten.",
          "Im Auswertungsblatt die Ergebniszelle C2 wählen. A2 enthält die Kundennummer, B2 den Bestand.",
          "=XVERWEIS(A2;Stammdaten!A:A;Stammdaten!B:B;\"nicht gefunden\") eingeben. Die Bereiche liegen auf dem Blatt Stammdaten; für große Listen besser benannte Tabellen oder begrenzte Bereiche verwenden.",
          "Ergebnis mit der Stammdatenzeile vergleichen und Formel nach unten kopieren. Fehlende Zuordnungen gezielt prüfen.",
          "Mehrfachtreffer zum Beispiel mit ZÄHLENWENN auf der Suchspalte kontrollieren. XVERWEIS summiert sie nicht und liefert nicht automatisch den neuesten Datensatz."
        ],
        "daten": "### Vorher · Blatt Stammdaten, A1:B4\n| Kundennummer | Segment |\n| --- | --- |\n| 1001 | Privat |\n| 1002 | Gewerbe |\n| 1003 | Privat |\n\n**Blatt Auswertung, A1:C2**\n| Kundennummer | Bestand | Segment |\n| --- | --- | --- |\n| 1002 | 500 | ? |\n\n### Aktion · in C2\n~~~excel\n=XVERWEIS(A2;Stammdaten!A:A;Stammdaten!B:B;\"nicht gefunden\")\n~~~\n\n### Nachher\n| Kundennummer | Bestand | Segment |\n| --- | --- | --- |\n| 1002 | 500 | Gewerbe |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "excel-xverweis.webp",
        "zweck": "Ergänze zu einer Kundennummer das passende Segment. XVERWEIS vergleicht standardmäßig exakt und liefert bei Mehrfachtreffern den ersten Treffer.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Ergänze zu einer Kundennummer das passende Segment. XVERWEIS vergleicht standardmäßig exakt und liefert bei Mehrfachtreffern den ersten Treffer.

## Voraussetzungen

Eine vorhandene Tabelle mit bekannten Spalten und geklärter Zeilenebene. Die Formeln verwenden deutsches Excel und Semikolon.

## Schritte

1. Suchschlüssel in beiden Tabellen auf gleichen Datentyp und störende Leerzeichen prüfen. Stammdaten sollten pro Kundennummer genau ein gültiges Segment enthalten.
2. Im Auswertungsblatt die Ergebniszelle C2 wählen. A2 enthält die Kundennummer, B2 den Bestand.
3. =XVERWEIS(A2;Stammdaten!A:A;Stammdaten!B:B;"nicht gefunden") eingeben. Die Bereiche liegen auf dem Blatt Stammdaten; für große Listen besser benannte Tabellen oder begrenzte Bereiche verwenden.
4. Ergebnis mit der Stammdatenzeile vergleichen und Formel nach unten kopieren. Fehlende Zuordnungen gezielt prüfen.
5. Mehrfachtreffer zum Beispiel mit ZÄHLENWENN auf der Suchspalte kontrollieren. XVERWEIS summiert sie nicht und liefert nicht automatisch den neuesten Datensatz.

## Beispiel

### Vorher · Blatt Stammdaten, A1:B4
| Kundennummer | Segment |
| --- | --- |
| 1001 | Privat |
| 1002 | Gewerbe |
| 1003 | Privat |

**Blatt Auswertung, A1:C2**
| Kundennummer | Bestand | Segment |
| --- | --- | --- |
| 1002 | 500 | ? |

### Aktion · in C2
~~~excel
=XVERWEIS(A2;Stammdaten!A:A;Stammdaten!B:B;"nicht gefunden")
~~~

### Nachher
| Kundennummer | Bestand | Segment |
| --- | --- | --- |
| 1002 | 500 | Gewerbe |

## Ergebnis

Die Auswertung enthält für Kundennummer 1002 das Segment Gewerbe neben dem unveränderten Bestand 500.

## Warum funktioniert das?

A2 ist der Suchwert, Stammdaten!A:A die Suchmatrix und Stammdaten!B:B die positionsgleiche Rückgabematrix. „nicht gefunden“ behandelt fehlende Treffer. Ohne weitere Argumente gelten exakter Vergleich und Suche von oben nach unten.

## Typischer Fehler

Doppelte Kundennummern ungeprüft akzeptieren oder Such- und Rückgabebereich gegeneinander verschieben.

## Plausibilitätscheck

1002 → Gewerbe; 1003 → Privat; eine nicht vorhandene Nummer → nicht gefunden. Bestand 500 bleibt unverändert.

## Version

XVERWEIS benötigt eine unterstützte Excel-Version, etwa Microsoft 365 oder Excel 2021/2024. Für ältere Versionen eignet sich INDEX/VERGLEICH.
