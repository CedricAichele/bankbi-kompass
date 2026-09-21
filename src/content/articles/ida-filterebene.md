---
{
  "id": "ida-filterebene",
  "slug": "ida-filterebene",
  "titel": "Filter vor oder nach Aggregation",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Filter auf Detailwerte beantwortet eine andere Frage als ein Filter auf Gruppensummen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Filter vor oder nach Aggregation"
  ],
  "synonyme": [
    "filterreihenfolge",
    "filter granularität"
  ],
  "verwandteThemen": [
    "ida-aggregation",
    "ida-filtertypen",
    "ida-filter-pruefen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter",
    "https://www.ibm.com/docs/en/cognos-analytics/11.2.x?topic=data-create-detail-summary-filter"
  ],
  "screenshots": [
    {
      "src": "images/ida/filterebene.svg",
      "alt": "Quelldaten: P001 · Konto A · 60 €: P001 · Konto B · 50 €. Detailwert > 100 €: Keine Zeile erfüllt den Filter: Ergebnis: keine Konten. Personensumme > 100 €: 60 € + 50 € = 110 €: Ergebnis: Person P001",
      "caption": "Detailfilter und Summenfilter unterscheiden",
      "hinweis": "Die beiden Filter beantworten unterschiedliche fachliche Fragen.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Gesucht sind Personen mit insgesamt mehr als 100 Euro Bestand.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Definiere das Ziel als Personen mit Gesamtbetrag über 100.
2. Wähle einen Summenfilter auf der Personenebene; kontrolliere bei Detailfiltern außerdem deren Anwendung vor oder nach Aggregation.
3. Notiere die fachliche Regel: **Je Person summieren, danach Gruppenbetrag > 100 filtern**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Person | Konto | Betrag |
| --- | --- | --- |
| P001 | K001 | 60 |
| P001 | K002 | 50 |
| P002 | K003 | 90 |

### Aktion

```text
Pseudologik: Je Person summieren, danach Gruppenbetrag > 100 filtern.
```

### Nachher · Beispielergebnis

| Person | Gruppenbetrag |
| --- | --- |
| P001 | 110 |

## Ergebnis

Ein Filter auf Detailwerte beantwortet eine andere Frage als ein Filter auf Gruppensummen.

## Warum funktioniert das?

Ein Detailfilter vor dem Summieren bewertet einzelne Konten. Ein Summenfilter bewertet die bereits gebildete Gruppe. Das sind unterschiedliche fachliche Fragen.

## Typischer Fehler

Detail- und Summenfilter vertauschen. Cognos dokumentiert unterschiedliche Filterebenen; die konkrete Konfiguration hängt von der eingesetzten Umgebung ab.

## Plausibilitätscheck

P001 bleibt mit 110. Ein vorgezogener Kontofilter >100 würde alle Beispielzeilen entfernen.
