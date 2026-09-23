---
{
  "id": "zaehlenwenns",
  "slug": "zaehlenwenns",
  "titel": "ZÄHLENWENNS: nach Geschäftsstelle und Produkt auswerten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wie viele Datenzeilen gehören zu Einlagen in Nord? Zähle passende Zeilen und unterscheide diese Zahl von eindeutigen Kunden.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "ZÄHLENWENNS",
    "Reporting"
  ],
  "synonyme": [
    "ZÄHLENWENNS"
  ],
  "verwandteThemen": [
    "pivottable",
    "excel-mehrere-kriterien",
    "summewenns"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
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
        "oberflaeche": "ZÄHLENWENNS: nach Geschäftsstelle und Produkt auswerten",
        "klickfolge": [
          "Quelle mit einer Kopfzeile in A1:C5 prüfen. Eine Zeile steht im Beispiel für einen Datensatz zu einem gemeinsamen Stichtag; Bestand muss numerisch sein.",
          "Außerhalb der Liste E2 = Nord und F2 = Einlagen als Kriterien setzen.",
          "In G2 die Formel =ZÄHLENWENNS(A2:A5;E2;B2:B5;F2) eingeben. Alle Kriterienbereiche müssen dieselben Zeilen abdecken.",
          "Ergebnis gegen die zwei passenden Quellzeilen kontrollieren. E2 testweise auf Süd ändern und erneut vergleichen.",
          "Für wachsende Listen Excel-Tabellen mit strukturierten Bezügen nutzen. Bei einem Zeitverlauf ein Stichtagskriterium ergänzen."
        ],
        "daten": "### Vorher · A1:C5\n| Geschäftsstelle | Produkt | Bestand |\n| --- | --- | --- |\n| Nord | Einlagen | 100 |\n| Nord | Einlagen | 200 |\n| Nord | Kredit | 500 |\n| Süd | Einlagen | 400 |\n\nE2 = Nord; F2 = Einlagen.\n\n### Aktion · G2\n~~~excel\n=ZÄHLENWENNS(A2:A5;E2;B2:B5;F2)\n~~~\n\n### Nachher\nG2 = **2**. Die passende Teilmenge besteht aus den ersten beiden Datenzeilen mit Bestand 100 und 200.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "excel-zaehlenwenns.webp",
        "zweck": "Wie viele Datenzeilen gehören zu Einlagen in Nord? Zähle passende Zeilen und unterscheide diese Zahl von eindeutigen Kunden.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true,
  "formelreferenz": {
    "funktion": "ZÄHLENWENNS",
    "eingabe": "A1:C5: Geschäftsstelle/Produkt/Bestand: Nord/Einlagen/100, Nord/Einlagen/200, Nord/Kredit/500, Süd/Einlagen/400. E2=Nord, F2=Einlagen; Ergebnis G2.",
    "anpassen": "Die Paare A2:A5/E2 und B2:B5/F2 durch deine gleich großen Kriterienbereiche und Auswahlzellen ersetzen.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Wie viele Datenzeilen gehören zu Einlagen in Nord? Zähle passende Zeilen und unterscheide diese Zahl von eindeutigen Kunden.

## Voraussetzungen

Eine vorhandene Tabelle mit bekannten Spalten und geklärter Zeilenebene. Die Formeln verwenden deutsches Excel und Semikolon.

## Schritte

1. Quelle mit einer Kopfzeile in A1:C5 prüfen. Eine Zeile steht im Beispiel für einen Datensatz zu einem gemeinsamen Stichtag; Bestand muss numerisch sein.
2. Außerhalb der Liste E2 = Nord und F2 = Einlagen als Kriterien setzen.
3. In G2 die Formel =ZÄHLENWENNS(A2:A5;E2;B2:B5;F2) eingeben. Alle Kriterienbereiche müssen dieselben Zeilen abdecken.
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
=ZÄHLENWENNS(A2:A5;E2;B2:B5;F2)
~~~

### Nachher
G2 = **2**. Die passende Teilmenge besteht aus den ersten beiden Datenzeilen mit Bestand 100 und 200.

## Ergebnis

Für Nord und Einlagen zählt die Formel zwei passende Datenzeilen.

## Warum funktioniert das?

Die Kriterienpaare filtern Geschäftsstelle und Produkt als UND. Gezählt werden passende Zeilen, nicht automatisch unterschiedliche Kunden oder Konten.

## Typischer Fehler

Kriterien als ODER lesen, versetzte Bereiche nutzen oder mehrere Stichtage unbemerkt gemeinsam auswerten.

## Plausibilitätscheck

Nord/Einlagen: 2. Süd/Einlagen: 1. Alle vier Quellzeilen zusammen haben Bestand 1200.
