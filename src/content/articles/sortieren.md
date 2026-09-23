---
{
  "id": "sortieren",
  "slug": "sortieren",
  "titel": "SORTIEREN: dynamische Liste ordnen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Filtern & eindeutige Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SORTIEREN gibt einen geordneten Ergebnisbereich aus, ohne die Quelltabelle umzubauen.",
  "ort": "Excel → freie Formelzelle; dynamische Arrays erforderlich",
  "tags": [
    "SORTIEREN: dynamische Liste ordnen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "sortierennach",
    "excel-filtern",
    "eindeutig",
    "excel-zahl-text"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/sort-function"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-sortieren.webp",
      "alt": "SORTIEREN ordnet die Konten nach Bestand absteigend.",
      "caption": "Ersatzaufnahme: Excel – SORTIEREN: dynamische Liste ordnen",
      "schritt": 5,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Ältere Quellwerte und Zellbezüge; Quelle, Formel und Ausgabe müssen das neue Beispiel zeigen. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Ältere Quellwerte und Zellbezüge; Quelle, Formel und Ausgabe müssen das neue Beispiel zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – SORTIEREN: dynamische Liste ordnen",
        "klickfolge": [
          "Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.",
          "Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Keine weitere Eingabezelle**. Passe diese Bezüge für deine Liste an.",
          "Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Der benötigte Überlaufbereich ab H2 muss frei sein und außerhalb einer Excel-Tabelle liegen.",
          "Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen.",
          "Prüfe einen zweiten Fall und fehlende Werte. Bei wachsenden Listen verwende Excel-Tabellen mit strukturierten Bezügen oder erweitere alle zusammengehörenden Bereiche."
        ],
        "daten": "| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |\n| --- | --- | --- | --- | --- |\n| 1 | Kunde | Konto | Segment | Bestand |\n| 2 | P001 | K001 | A | 1000 |\n| 3 | P001 | K002 | B | 2000 |\n| 4 | P002 | K003 | A | 500 |\n\nKeine weitere Eingabezelle",
        "sichtbar": [
          "SORTIEREN: dynamische Liste ordnen",
          "Gewähltes Feld oder vollständige Formel",
          "Ergebnis passend zu den Beispieldaten"
        ],
        "ausschnitt": "Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.",
        "dateiname": "excel-sortieren.webp",
        "zweck": "Ältere Quellwerte und Zellbezüge; Quelle, Formel und Ausgabe müssen das neue Beispiel zeigen.",
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
  "kurzformel": "```excel\n=SORTIEREN(A2:D4;4;-1)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ],
  "formelreferenz": {
    "funktion": "SORTIEREN",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. H2:K4 frei und außerhalb einer Excel-Tabelle.",
    "anpassen": "A2:D4 ist die Quelle; 4 ist der Sortierspaltenindex, -1 absteigend (1 aufsteigend).",
    "version": "Microsoft 365 oder Excel 2021/2024; nicht Excel 2016/2019."
  }
}
---

## Wann brauche ich das?

Eine vollständige Liste nach einer Spalte sortiert ausgeben.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. Diese Funktion benötigt Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Sortierrichtung fest; eine zusätzliche Eingabezelle ist nicht nötig.
3. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Der benötigte Überlaufbereich ab H2 muss frei sein und außerhalb einer Excel-Tabelle liegen.
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


### Aktion

```excel
=SORTIEREN(A2:D4;4;-1)
```

### Nachher · Beispielergebnis

| Kunde | Konto | Segment | Bestand |
| --- | --- | --- | --- |
| P001 | K002 | B | 2000 |
| P001 | K001 | A | 1000 |
| P002 | K003 | A | 500 |

## Ergebnis

H2:K4 enthält K002/2000 vor K001/1000 vor K003/500, jeweils mit den zugehörigen Kunden und Segmenten.

## Warum funktioniert das?

Die Zeilen werden als Einheit umgeordnet; dadurch bleiben Konto und Betrag zusammen.

## Typischer Fehler

Nur die Betragsspalte sortieren und die Verbindung zu den übrigen Feldern verlieren.

## Plausibilitätscheck

Erwartete Ausgabe: **P001 | K002 | B | 2000; P001 | K001 | A | 1000; P002 | K003 | A | 500**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**A2:D4** ist die ganze Tabelle ohne Überschrift, **4** die Betragsspalte, **-1** absteigend.
