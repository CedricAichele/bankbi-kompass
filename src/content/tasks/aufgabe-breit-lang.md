---
{
  "id": "aufgabe-breit-lang",
  "slug": "aufgabe-breit-lang",
  "titel": "Daten von breit nach lang",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entpivotieren macht wiederholte Wertspalten zu Kategorie-Wert-Zeilen. Das erleichtert Filter und Zeitachsen.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Daten von breit nach lang"
  ],
  "synonyme": [
    "breit nach lang"
  ],
  "verwandteThemen": [
    "entpivotieren",
    "power-query"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Januar, Februar und März stehen als eigene Spalten in einem Export.

## Schritte

1. Identifikationsspalten auswählen.
2. Andere Spalten entpivotieren; Attribut und Wert sinnvoll benennen.
3. Typen, Nullwerte und Summe prüfen.
4. Öffne die [konkrete Entpivotieren: von breit nach lang-Anleitung](#/wissen/entpivotieren) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Vergleiche Anzahl befüllter Monatszellen mit erzeugten Wertzeilen.

## Beispiel

P001 mit Jan=10, Feb=20 → zwei Zeilen mit Monat und Betrag.

## Typischer Fehler

Künftige Monatsspalten bei einer starren Spaltenauswahl übersehen.

## Vergleich

| Werkzeug | Passender Einstieg                                                                                 |
| -------- | -------------------------------------------------------------------------------------------------- |
| Power BI | [Entpivotieren: von breit nach lang](#/wissen/entpivotieren) · [Power Query](#/wissen/power-query) |
| Excel    | [Entpivotieren: von breit nach lang](#/wissen/entpivotieren)                                       |

## Ergebnis

P001 mit Januar 10 und Februar 20 ergibt zwei Zeilen und unverändert 30.

## Warum funktioniert das?

Die Monatsspalten werden zu Werten einer gemeinsamen Attributspalte.

## Plausibilitätscheck

Vergleiche Anzahl befüllter Monatszellen mit erzeugten Wertzeilen.
