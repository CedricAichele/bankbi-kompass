---
{
  "id": "matrix",
  "slug": "matrix",
  "titel": "Matrix: nach Dimensionen auswerten",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Bericht",
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
    "pivottable"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-matrix.webp",
      "alt": "Matrix: Personennummer in Zeilen, Gesamtbestand in Werte.",
      "caption": "Matrix: Personennummer in Zeilen, Gesamtbestand in Werte.",
      "schritt": 4,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Kennzahlen nach Zeilen- und Spaltengruppen vergleichen.

## Voraussetzungen

Power BI Desktop; Beispieltabelle Konten über Start → Daten eingeben anlegen.

## Schritte

1. Lade Konten und erstelle Gesamtbestand = SUM(Konten[Bestand_EUR]).
2. Wähle eine freie Berichtsfläche und das Matrixvisual.
3. Ziehe Personennummer nach Zeilen, Produktgruppe nach Spalten und Gesamtbestand nach Werte.
4. Prüfe P001: Einlagen 1.250, Anlagen 750, Gesamt 2.000.
5. Prüfe P003: Einlagen 800, Kredite 3.200, Gesamt 4.000.
6. Aktiviere oder deaktiviere Zwischen- und Gesamtsummen bewusst im Formatbereich.
7. Ergänze einen Slicer und kontrolliere den Gesamtwert; Quoten und DISTINCTCOUNT dürfen in der Gesamtzeile andere Rechenlogik als eine Zeilensumme haben.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

## Ergebnis

Vier Personenzeilen, drei Produktgruppen und Gesamtsumme 9.000.

## Warum funktioniert das?

Jede Zelle besitzt den gemeinsamen Filter aus Zeilen- und Spaltengruppe. Measures werden darin neu ausgewertet.

## Typischer Fehler

**Symptom/Ursache:** Ein Durchschnitt der sichtbaren Prozentwerte ist nicht automatisch die Gesamtquote. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Gesamtbetrag und Personenwerte gegen die sechs Ausgangszeilen prüfen.
