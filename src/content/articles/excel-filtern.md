---
{
  "id": "excel-filtern",
  "slug": "excel-filtern",
  "titel": "FILTER: passende Zeilen ausgeben",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Filtern und Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "FILTER gibt alle Zeilen aus, die eine Bedingung erfüllen.",
  "ort": "Excel → freie Formelzelle außerhalb einer Tabelle; dynamische Arrays erforderlich",
  "tags": [
    "FILTER: passende Zeilen ausgeben",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "eindeutig",
    "sortieren",
    "problem-filter-kalk"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/filter-function"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-filter.webp",
      "alt": "FILTER gibt beide Konten von P001 als dynamischen Bereich zurück.",
      "caption": "Ersatzaufnahme: Excel – FILTER: passende Zeilen ausgeben",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Filterbedingung und Zellbereiche weichen vom überarbeiteten Beispiel ab. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Filterbedingung und Zellbereiche weichen vom überarbeiteten Beispiel ab.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – FILTER: passende Zeilen ausgeben",
        "klickfolge": [
          "Beispieltabelle in A1:D4 eintragen.",
          "F2 = A",
          "Zelle H2 auswählen und =FILTER(A2:D4;C2:C4=F2;\"Keine Treffer\") eingeben."
        ],
        "daten": "| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |\n| --- | --- | --- | --- | --- |\n| 1 | Kunde | Konto | Segment | Bestand |\n| 2 | P001 | K001 | A | 1000 |\n| 3 | P001 | K002 | B | 2000 |\n| 4 | P002 | K003 | A | 500 |\nF2 = A",
        "sichtbar": [
          "Quelltabelle A1:D4",
          "Kriterienzellen F2/G2 soweit genutzt",
          "Formelleiste und Ausgabe ab H2"
        ],
        "ausschnitt": "Excel – FILTER: passende Zeilen ausgeben mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "excel-excel-filtern.webp",
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
  "kurzformel": "```excel\n=FILTER(A2:D4;C2:C4=F2;\"Keine Treffer\")\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Alle passenden Detailzeilen als dynamische Ergebnisliste ausgeben.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = A**. Passe diese Bezüge für deine Liste an.
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

F2 = A

### Aktion

```excel
=FILTER(A2:D4;C2:C4=F2;"Keine Treffer")
```

### Nachher · Beispielergebnis

| H: Kunde | I: Konto | J: Segment | K: Bestand |
| --- | --- | --- | --- |
| P001 | K001 | A | 1000 |
| P002 | K003 | A | 500 |

## Ergebnis

Alle passenden Detailzeilen als dynamische Ergebnisliste ausgeben.

## Warum funktioniert das?

Eine Wahrheitsliste entscheidet für jede Ausgangszeile, ob sie in die Ausgabe gelangt. Mehrere Treffer bleiben als mehrere Zeilen erhalten.

## Typischer Fehler

Den Überlaufbereich mit anderen Inhalten blockieren oder FILTER innerhalb einer Excel-Tabelle als überlaufende Ausgabe erwarten.

## Plausibilitätscheck

Erwartete Ausgabe: **P001 | K001 | A | 1000; P002 | K003 | A | 500**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

**A2:D4** ist die Rückgabematrix, **C2:C4=F2** die zeilenweise Einschlussbedingung, **"Keine Treffer"** die Ausgabe bei leerem Ergebnis.
