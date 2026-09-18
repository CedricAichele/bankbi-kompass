---
{
  "id": "pivotieren",
  "slug": "pivotieren",
  "titel": "Pivotieren: von lang nach breit",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Pivotieren macht Werte einer Spalte zu neuen Spaltenüberschriften.",
  "ort": "Power Query → Transformieren → Spalte pivotieren",
  "tags": [
    "Pivotieren: von lang nach breit",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "entpivotieren",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine lange Tabelle wieder in Monatsspalten umformen.

## Voraussetzungen

Power Query in Power BI Desktop oder Excel; nur synthetische Dateien verwenden.

## Schritte

1. Lade die drei Spalten Person, Monat und Betrag aus dem Beispiel in Power Query.
2. Prüfe Person und Monat auf Text, Betrag auf Zahl.
3. Gruppiere zur Kontrolle nach Person und Monat mit Zeilen zählen: jede Kombination soll einmal vorkommen.
4. Wähle Monat → Transformieren → Spalte pivotieren.
5. Wähle Betrag als Wertspalte. Unter Erweiterte Optionen verwende Nicht aggregieren, wenn jede Kombination eindeutig ist; sonst eine fachlich begründete Aggregation.
6. Kontrolliere zwei Monatsspalten und eine Personenzeile.
7. Lade das Ergebnis; notiere, dass neue Monate die Spaltenstruktur erweitern können.

## Beispiel

| Person | Monat | Betrag |
| --- | --- | --- |
| P001 | Januar | 10 |
| P001 | Februar | 20 |

## Ergebnis

P001 | Januar 10 | Februar 20; Gesamtsumme 30.

## Warum funktioniert das?

Attributwerte werden zu Spaltenüberschriften; andere Spalten bilden die verbleibende Zeilenebene.

## Typischer Fehler

**Symptom/Ursache:** Mehrere Werte pro Person und Monat benötigen eine fachliche Regel. Summe darf nicht nur gewählt werden, um einen Fehler zu unterdrücken. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Vorher 2 Werte mit Summe 30, nachher dieselben 2 Werte.
