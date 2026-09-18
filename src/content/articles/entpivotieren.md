---
{
  "id": "entpivotieren",
  "slug": "entpivotieren",
  "titel": "Entpivotieren: von breit nach lang",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entpivotieren wandelt viele gleichartige Wertspalten in eine Kategorie- und eine Wertspalte um.",
  "ort": "Power Query → Transformieren → Spalten entpivotieren",
  "tags": [
    "Entpivotieren: von breit nach lang",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pivotieren",
    "datumstabelle"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/unpivot-column"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Monate stehen als Spalten, sollen aber eine filterbare Zeitdimension werden.

## Voraussetzungen

Synthetische Daten; Power Query in Power BI Desktop oder Excel. Die Menübezeichnung kann je Version leicht abweichen.

## Schritte

1. Öffne in Power BI **Start → Daten transformieren**. In Excel: Quelldaten als Tabelle formatieren und **Daten → Aus Tabelle/Bereich** wählen. Die folgenden Aktionen erfolgen im Power-Query-Editor.
2. Erstelle die Beispieltabelle mit Person, Januar und Februar. Prüfe die beiden Wertspalten auf Zahl.
3. Markiere ausschließlich Person als unveränderliche Kennung.
4. Wähle Transformieren → Spalten entpivotieren → Andere Spalten entpivotieren.
5. Benenne Attribut in Monat und Wert in Betrag um. Prüfe Monat auf Text und Betrag auf Zahl.
6. Kontrolliere vier Zeilen. P001 kommt nun zweimal vor; das ist auf der neuen Ebene Person und Monat richtig.
7. Ergänze künftig nur echte Wertspalten. Zusätzliche Stammdaten müssen in der Auswahl der ID-Spalten bleiben.
8. Prüfe im rechten Bereich Angewendete Schritte die Vorschau vor und nach der Aktion. In Power BI abschließend Schließen & übernehmen, in Excel Schließen & laden wählen.

## Beispiel

| Person | Januar | Februar |
| --- | --- | --- |
| P001 | 10 | 20 |
| P002 | 30 | 40 |

## Ergebnis

P001/Januar/10, P001/Februar/20, P002/Januar/30, P002/Februar/40. Summe 100.

## Warum funktioniert das?

Spaltenüberschriften werden Werte einer Attributspalte. Dadurch können Slicer und Visuals alle Monate über dieselbe Spalte erreichen. Nullwerte können beim Entpivotieren wegfallen.

## Typischer Fehler

**Symptom:** Segment steht als Monat in den Daten. **Ursache:** Stammdatenspalte mit entpivotiert. **Lösung:** alle Kennungs- und Stammdatenspalten vor Andere Spalten entpivotieren auswählen.

## Plausibilitätscheck

Ohne null: 2 Personen × 2 Monate = 4 Zeilen; Summe vor und nach dem Umbau = 100.
