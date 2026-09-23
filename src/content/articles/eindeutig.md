---
{
  "id": "eindeutig",
  "slug": "eindeutig",
  "titel": "EINDEUTIG: Liste ohne Wiederholungen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Filtern & eindeutige Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "EINDEUTIG gibt unterschiedliche Werte oder Zeilenkombinationen als Liste aus.",
  "ort": "Excel → freie Formelzelle; Microsoft 365 / Excel 2021 oder neuer",
  "tags": [
    "EINDEUTIG: Liste ohne Wiederholungen",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "eine Liste ohne doppelte Werte",
    "nur eindeutige kunden"
  ],
  "verwandteThemen": [
    "zaehlenwenn",
    "excel-dubletten-finden",
    "distinctcount",
    "eine-zeile-je-person"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/unique-function"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-eindeutig.webp",
      "alt": "EINDEUTIG liefert vier unterschiedliche Personennummern.",
      "caption": "Ersatzaufnahme: Excel – EINDEUTIG: Liste ohne Wiederholungen",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Vier alte Personen statt zwei Kunden im neuen Beispiel; Zellbezüge anpassen. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Vier alte Personen statt zwei Kunden im neuen Beispiel; Zellbezüge anpassen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – EINDEUTIG: Liste ohne Wiederholungen",
        "klickfolge": [
          "Beispieltabelle in A1:D4 eintragen.",
          "Keine weitere Eingabezelle",
          "Zelle H2 auswählen und =EINDEUTIG(A2:A4) eingeben."
        ],
        "daten": "| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |\n| --- | --- | --- | --- | --- |\n| 1 | Kunde | Konto | Segment | Bestand |\n| 2 | P001 | K001 | A | 1000 |\n| 3 | P001 | K002 | B | 2000 |\n| 4 | P002 | K003 | A | 500 |\nKeine weitere Eingabezelle",
        "sichtbar": [
          "Quelltabelle A1:D4",
          "Kriterienzellen F2/G2 soweit genutzt",
          "Formelleiste und Ausgabe ab H2"
        ],
        "ausschnitt": "Excel – EINDEUTIG: Liste ohne Wiederholungen mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "excel-eindeutig.webp",
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
  "kurzformel": "```excel\n=EINDEUTIG(A2:A4)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ]
}
---

## Wann brauche ich das?

Eine Liste unterschiedlicher Werte erzeugen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. XVERWEIS und dynamische Arrayfunktionen benötigen eine unterstützte Version, zum Beispiel Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Wähle die Spalte, deren unterschiedliche Werte du benötigst; im Beispiel **A2:A4**. Eine Kriterienzelle ist nicht erforderlich.
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

Keine weitere Eingabezelle

### Aktion

```excel
=EINDEUTIG(A2:A4)
```

### Nachher · Beispielergebnis

| H: Kunde |
| --- |
| P001 |
| P002 |

## Ergebnis

Eine Liste unterschiedlicher Werte erzeugen.

## Warum funktioniert das?

Die zweimal vorhandene Kennung P001 wird einmal ausgegeben. Das löscht keine Zeilen aus der Quelle.

## Typischer Fehler

Das optionale Argument genau_einmal aktivieren: Dann erscheinen nur Werte mit genau einem Vorkommen, hier ausschließlich P002.

## Plausibilitätscheck

Erwartete Ausgabe: **P001; P002**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe die Liste nach Änderungen an der Quelle erneut.

## Argumente verstehen

**A2:A4** ist die Ausgangsmatrix. Ohne weitere Argumente werden unterschiedliche Zeilen zurückgegeben.


## Eindeutige Kombinationen

EINDEUTIG(A2:B4) betrachtet die gesamte Kombination aus beiden Spalten. Bei Kunde/Konto mit 1001/A, 1001/B und 1002/C bleiben drei Kombinationen erhalten. EINDEUTIG(A2:A4) liefert dagegen nur die zwei Kunden. Wähle den Bereich passend zum Ziel; eine Kontenliste und eine Kundenliste haben unterschiedliche Granularität.
