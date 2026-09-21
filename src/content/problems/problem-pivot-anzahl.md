---
{
  "id": "problem-pivot-anzahl",
  "slug": "problem-pivot-anzahl",
  "titel": "Pivot zählt statt summiert",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "P001 zeigt 2 statt 2.000. Wertefeld steht auf Anzahl, oft wegen Textbeträgen.",
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
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

P001 zeigt 2 statt 2.000.

## Symptom

P001 zeigt 2 statt 2.000.

## Mögliche Ursachen

Wertefeld steht auf Anzahl, oft wegen Textbeträgen.

## Schnelltest

Prüfe ISTZAHL in der Quelle und öffne Wertfeldeinstellungen.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Prüfe ISTZAHL in der Quelle und öffne Wertfeldeinstellungen.
3. Korrigiere zuerst die Datentypen; aktualisiere die PivotTable. Wähle im Wertefeld Summe.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Pivot zeigt Anzahl statt Summe](#/wissen/pivot-summe-anzahl). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| P001 mit 1250 und 750 → Summe 2000, Anzahl 2. |

### Aktion

Korrigiere zuerst die Datentypen; aktualisiere die PivotTable. Wähle im Wertefeld Summe.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Summe über alle Personen = 9.000. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Summe über alle Personen = 9.000.

## Warum funktioniert das?

Prüfe zuerst den Quelldatentyp, dann die Zusammenfassung des Wertfelds.
