---
{
  "id": "problem-pivot-anzahl",
  "slug": "problem-pivot-anzahl",
  "titel": "Pivot zählt statt summiert",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Pivot zeigt für P001 die Anzahl 2 statt der Bestandssumme 2000.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Pivot zählt statt summiert"
  ],
  "synonyme": [
    "Pivot zählt statt summiert",
    "P001 zeigt 2 statt 2.000."
  ],
  "verwandteThemen": [
    "pivottable",
    "pivot-summe-anzahl",
    "excel-zahl-text"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/de-DE/Excel/get-started/create-a-pivottable-to-analyze-worksheet-data"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

Die Pivot zeigt für P001 die Anzahl 2 statt der Bestandssumme 2000.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Prüfe in der Quelle die zwei Zeilen P001/1250 und P001/750. Beide Beträge müssen echte Zahlen sein.
2. Korrigiere nötigenfalls Textzahlen und aktualisiere die PivotTable.
3. Öffne das Wertefeld → Wertfeldeinstellungen und wähle Summe statt Anzahl. Nur die Beschriftung zu ändern genügt nicht.
4. Prüfe P001 = 2000. [Pivot-Aggregation](#/wissen/pivot-summe-anzahl) erklärt die Bedienung an einem weiteren kleinen Beispiel.

## Beispiel

| Kunde | Bestand |
| --- | ---: |
| P001 | 1250 |
| P001 | 750 |

Vorher: Wertefeld Anzahl Bestand zeigt **2**. Nach Auswahl von Summe zeigt dieselbe Gruppe **2000**.

## Ergebnis

P001 zeigt 2000 als Summe der beiden Zahlen; die Anzahl bleibt als andere Kennzahl 2.

## Warum funktioniert das?

Anzahl zählt befüllte Werte, Summe addiert Zahlen. Zahlenformat und Feldbeschriftung ändern die Aggregationsart nicht.

## Typischer Fehler

Textbeträge durch Umbenennen des Wertefelds reparieren wollen.

## Plausibilitätscheck

1250 + 750 = 2000; zwei befüllte Bestandszellen. Das Beispiel enthält nur diesen einen Kunden.
