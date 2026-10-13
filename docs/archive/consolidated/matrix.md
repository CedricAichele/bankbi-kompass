---
{
  "id": "matrix",
  "slug": "matrix",
  "titel": "Matrix: nach Dimensionen auswerten",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Matrix gliedert Measures nach Zeilen- und Spaltendimensionen.",
  "ort": "Power BI → Berichtsansicht → Matrixvisual",
  "tags": [
    "Matrix: nach Dimensionen auswerten",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "distinctcount",
    "divide",
    "pivottable",
    "measure"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-matrix-visual"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-matrix.webp",
      "alt": "Matrix: Personennummer in Zeilen, Gesamtbestand in Werte.",
      "caption": "Ersatzaufnahme: Power BI – Matrix: nach Dimensionen auswerten",
      "schritt": 4,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Sehr kleine Aufnahme ohne Produktgruppe als Spaltendimension; damit fehlt das zentrale Matrixprinzip. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Sehr kleine Aufnahme ohne Produktgruppe als Spaltendimension; damit fehlt das zentrale Matrixprinzip.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Matrix: nach Dimensionen auswerten",
        "klickfolge": [
          "Prüfe die vorhandenen Quellfelder und Datentypen. Verwende bei Bedarf ein bereits angelegtes Gesamtbestand-Measure; die Erstellung erklärt der verlinkte Measure-Artikel.",
          "Wähle eine freie Berichtsfläche und das Matrixvisual.",
          "Ziehe Personennummer nach Zeilen, Produktgruppe nach Spalten und Gesamtbestand nach Werte.",
          "Prüfe P001: Einlagen 1.250, Anlagen 750, Gesamt 2.000."
        ],
        "daten": "| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |\n| --- | --- | --- | --- |\n| K001 | P001 | Einlagen | 1250 |\n| K002 | P001 | Anlagen | 750 |\n| K003 | P002 | Einlagen | 2000 |\n| K004 | P003 | Kredite | 3200 |\n| K005 | P003 | Einlagen | 800 |\n| K006 | P004 | Kredite | 1000 |",
        "sichtbar": [
          "Matrix: nach Dimensionen auswerten",
          "Gewähltes Feld oder vollständige Formel",
          "Ergebnis passend zu den Beispieldaten"
        ],
        "ausschnitt": "Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.",
        "dateiname": "pbi-matrix.webp",
        "zweck": "Sehr kleine Aufnahme ohne Produktgruppe als Spaltendimension; damit fehlt das zentrale Matrixprinzip.",
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
  "praxis": true
}
---

## Wann brauche ich das?

Kennzahlen nach Zeilen- und Spaltengruppen vergleichen.

## Voraussetzungen

Ein vorhandener Datenbestand mit den genannten Feldern. Die Tabelle im Beispiel dient ausschließlich zur Veranschaulichung.

## Schritte

1. Prüfe die vorhandenen Quellfelder und Datentypen. Verwende bei Bedarf ein bereits angelegtes Gesamtbestand-Measure; die Erstellung erklärt der verlinkte Measure-Artikel.
2. Wähle eine freie Berichtsfläche und das Matrixvisual.
3. Ziehe Personennummer nach Zeilen, Produktgruppe nach Spalten und Gesamtbestand nach Werte.
4. Prüfe P001: Einlagen 1.250, Anlagen 750, Gesamt 2.000.
5. Prüfe P003: Einlagen 800, Kredite 3.200, Gesamt 4.000.
6. Aktiviere oder deaktiviere Zwischen- und Gesamtsummen bewusst im Formatbereich.
7. Ergänze einen Slicer und kontrolliere den Gesamtwert; Quoten und DISTINCTCOUNT dürfen in der Gesamtzeile andere Rechenlogik als eine Zeilensumme haben.

## Beispiel

### Vorher · Beispieldaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

### Aktion

Die im Ablauf genannten Felder dem Visual zuweisen und die Auswahl prüfen.

### Nachher · Beispielergebnis

Vier Personenzeilen, drei Produktgruppen und Gesamtsumme 9.000.

## Ergebnis

Eine Matrix gliedert Measures nach Zeilen- und Spaltendimensionen.

## Warum funktioniert das?

Jede Zelle besitzt den gemeinsamen Filter aus Zeilen- und Spaltengruppe. Measures werden darin neu ausgewertet.

## Typischer Fehler

**Symptom/Ursache:** Ein Durchschnitt der sichtbaren Prozentwerte ist nicht automatisch die Gesamtquote. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Gesamtbetrag und Personenwerte gegen die sechs Ausgangszeilen prüfen.
