---
{
  "id": "eins-zu-viele",
  "slug": "eins-zu-viele",
  "titel": "1:n: Warum entstehen mehrere Zeilen?",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Schlüssel kann auf der Detailseite mehrfach vorkommen. Das ist bei mehreren Konten je Person oft korrekt.",
  "ort": "Datenmodell / Schlüsselprüfung vor dem Verknüpfen",
  "tags": [
    "1:n: Warum entstehen mehrere Zeilen?",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "mehrere konten pro kunde",
    "falsche summe",
    "mehrere Zeilen"
  ],
  "verwandteThemen": [
    "beziehungen",
    "fakt-dimension",
    "granularitaet",
    "dubletten",
    "distinctcount",
    "star-schema"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Verstehen, warum ein eindeutiger Kunde zu mehreren Konten passt.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Bestimme, was eine Zeile in jeder Tabelle bedeutet: Kunde in der Dimension, Konto in der Faktentabelle.
2. Zähle die Vorkommen von Kunde auf beiden Seiten. P001 darf in DimKunde nur einmal vorkommen, in FaktKonten aber zweimal.
3. Ordne **1** der eindeutigen Dimension und **n beziehungsweise *** den wiederholten Faktenschlüsseln zu.
4. Prüfe auch fehlende Gegenstücke: Jeder verwendete Faktenschlüssel soll zur passenden Dimension gehören.

## Beispiel

### Vorher · Beispieldaten

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

Kunden mit zugehörigen Konten vergleichen.

### Nachher · Beispielergebnis

| Kunde | Vorkommen Dimension | Vorkommen Fakt |
| --- | --- | --- |
| P001 | 1 | 2 |
| P002 | 1 | 1 |

## Ergebnis

Die Beziehung beschreibt einen eindeutigen Stammsatz mit beliebig vielen zugehörigen Detailzeilen.

## Warum funktioniert das?

Die Wiederholung auf der n-Seite ist beabsichtigt. Zwei Konten einer Person sind keine Dublette der Kontentabelle, weil ihre Konto-Schlüssel verschieden sind.

## Typischer Fehler

Die Faktentabelle nach Kunde deduplizieren und dadurch ein gültiges Konto verlieren.

## Plausibilitätscheck

Zwei Kunden, drei Konten; P001 hat genau zwei zugehörige Konten.
