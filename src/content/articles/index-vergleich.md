---
{
  "id": "index-vergleich",
  "slug": "index-vergleich",
  "titel": "INDEX / VERGLEICH",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen & Zuordnen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "VERGLEICH findet eine Position; INDEX liefert den Wert an dieser Position.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "INDEX / VERGLEICH",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "xverweis",
    "wennnv"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/index-function",
    "https://support.microsoft.com/en-us/excel/functions/match-function"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-index-vergleich.webp",
      "alt": "INDEX und VERGLEICH liefern für K004 den Bestand 3.200.",
      "caption": "Ersatzaufnahme: Excel – INDEX / VERGLEICH",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Suchwert hart codiert und Quellbereiche auf anderem Blatt; neues Beispiel nutzt F2 und sichtbare Bereiche. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Suchwert hart codiert und Quellbereiche auf anderem Blatt; neues Beispiel nutzt F2 und sichtbare Bereiche.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – INDEX / VERGLEICH",
        "klickfolge": [
          "Beispieltabelle in A1:D4 eintragen.",
          "F2 = K002",
          "Zelle H2 auswählen und =INDEX(D2:D4;VERGLEICH(F2;B2:B4;0)) eingeben."
        ],
        "daten": "| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |\n| --- | --- | --- | --- | --- |\n| 1 | Kunde | Konto | Segment | Bestand |\n| 2 | P001 | K001 | A | 1000 |\n| 3 | P001 | K002 | B | 2000 |\n| 4 | P002 | K003 | A | 500 |\nF2 = K002",
        "sichtbar": [
          "Quelltabelle A1:D4",
          "Kriterienzellen F2/G2 soweit genutzt",
          "Formelleiste und Ausgabe ab H2"
        ],
        "ausschnitt": "Excel – INDEX / VERGLEICH mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "excel-index-vergleich.webp",
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
  "kurzformel": "```excel\n=INDEX(D2:D4;VERGLEICH(F2;B2:B4;0))\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Einen exakten Nachschlag auch mit klassischen Excel-Funktionen aufbauen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen.

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
=INDEX(D2:D4;VERGLEICH(F2;B2:B4;0))
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 2000 |

## Ergebnis

Einen exakten Nachschlag auch mit klassischen Excel-Funktionen aufbauen.

## Warum funktioniert das?

Suche und Rückgabe sind getrennt. Weil beide Bereiche bei derselben Datenzeile beginnen, verweist dieselbe Position auf das richtige Konto und seinen Betrag.

## Typischer Fehler

VERGLEICH ohne 0 verwenden oder unterschiedlich beginnende Bereiche kombinieren.

## Plausibilitätscheck

Erwartete Ausgabe: **2000**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**VERGLEICH** sucht F2 in B2:B4; **0** bedeutet exakt. Das Ergebnis 2 ist eine relative Position. **INDEX** nimmt die zweite Position aus D2:D4.
