---
{
  "id": "summewenns",
  "slug": "summewenns",
  "titel": "SUMMEWENNS: nach Geschäftsstelle und Produkt auswerten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wie hoch ist der Einlagenbestand der Geschäftsstelle Nord? Summiere nur Zeilen, die beide Kriterien erfüllen.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "SUMMEWENNS",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "SUMME",
    "SUMMEWENNS"
  ],
  "verwandteThemen": [
    "pivottable",
    "excel-mehrere-kriterien",
    "zaehlenwenns"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/sumifs-function"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-summewenns.webp",
      "alt": "SUMMEWENNS summiert die zwei Konten von P001 zu 2.000.",
      "caption": "Ersatzaufnahme: Excel – SUMMEWENNS",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Zeigt nur ein Kriterium statt Kunde und Segment; Formel und Beispieldaten anpassen. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Zeigt nur ein Kriterium statt Kunde und Segment; Formel und Beispieldaten anpassen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "SUMMEWENNS: nach Geschäftsstelle und Produkt auswerten",
        "klickfolge": [
          "Quelle mit einer Kopfzeile in A1:C5 prüfen. Eine Zeile steht im Beispiel für einen Datensatz zu einem gemeinsamen Stichtag; Bestand muss numerisch sein.",
          "Außerhalb der Liste E2 = Nord und F2 = Einlagen als Kriterien setzen.",
          "In G2 die Formel =SUMMEWENNS(C2:C5;A2:A5;E2;B2:B5;F2) eingeben. Alle Kriterienbereiche müssen dieselben Zeilen abdecken.",
          "Ergebnis gegen die zwei passenden Quellzeilen kontrollieren. E2 testweise auf Süd ändern und erneut vergleichen.",
          "Für wachsende Listen Excel-Tabellen mit strukturierten Bezügen nutzen. Bei einem Zeitverlauf ein Stichtagskriterium ergänzen."
        ],
        "daten": "### Vorher · A1:C5\n| Geschäftsstelle | Produkt | Bestand |\n| --- | --- | --- |\n| Nord | Einlagen | 100 |\n| Nord | Einlagen | 200 |\n| Nord | Kredit | 500 |\n| Süd | Einlagen | 400 |\n\nE2 = Nord; F2 = Einlagen.\n\n### Aktion · G2\n~~~excel\n=SUMMEWENNS(C2:C5;A2:A5;E2;B2:B5;F2)\n~~~\n\n### Nachher\nG2 = **300**. Die passende Teilmenge besteht aus den ersten beiden Datenzeilen mit Bestand 100 und 200.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "excel-summewenns.webp",
        "zweck": "Wie hoch ist der Einlagenbestand der Geschäftsstelle Nord? Summiere nur Zeilen, die beide Kriterien erfüllen.",
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

Wie hoch ist der Einlagenbestand der Geschäftsstelle Nord? Summiere nur Zeilen, die beide Kriterien erfüllen.

## Voraussetzungen

Eine vorhandene Tabelle mit bekannten Spalten und geklärter Zeilenebene. Die Formeln verwenden deutsches Excel und Semikolon.

## Schritte

1. Quelle mit einer Kopfzeile in A1:C5 prüfen. Eine Zeile steht im Beispiel für einen Datensatz zu einem gemeinsamen Stichtag; Bestand muss numerisch sein.
2. Außerhalb der Liste E2 = Nord und F2 = Einlagen als Kriterien setzen.
3. In G2 die Formel =SUMMEWENNS(C2:C5;A2:A5;E2;B2:B5;F2) eingeben. Alle Kriterienbereiche müssen dieselben Zeilen abdecken.
4. Ergebnis gegen die zwei passenden Quellzeilen kontrollieren. E2 testweise auf Süd ändern und erneut vergleichen.
5. Für wachsende Listen Excel-Tabellen mit strukturierten Bezügen nutzen. Bei einem Zeitverlauf ein Stichtagskriterium ergänzen.

## Beispiel

### Vorher · A1:C5
| Geschäftsstelle | Produkt | Bestand |
| --- | --- | --- |
| Nord | Einlagen | 100 |
| Nord | Einlagen | 200 |
| Nord | Kredit | 500 |
| Süd | Einlagen | 400 |

E2 = Nord; F2 = Einlagen.

### Aktion · G2
~~~excel
=SUMMEWENNS(C2:C5;A2:A5;E2;B2:B5;F2)
~~~

### Nachher
G2 = **300**. Die passende Teilmenge besteht aus den ersten beiden Datenzeilen mit Bestand 100 und 200.

## Ergebnis

Für Nord und Einlagen ergibt die Formel einen Bestand von 300.

## Warum funktioniert das?

Der erste Bereich C2:C5 enthält die Beträge. Die Paare A2:A5/E2 und B2:B5/F2 filtern Geschäftsstelle und Produkt. Nur Zeilen, die beide Bedingungen erfüllen, tragen zur Summe bei.

## Typischer Fehler

Kriterien als ODER lesen, versetzte Bereiche nutzen oder mehrere Stichtage unbemerkt gemeinsam auswerten.

## Plausibilitätscheck

Nord/Einlagen: 300. Süd/Einlagen: 400. Alle vier Quellzeilen zusammen haben Bestand 1200.
