---
{
  "id": "werte-holen",
  "slug": "werte-holen",
  "titel": "Werte aus anderer Tabelle holen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Für einen Zellwert: XVERWEIS. Für zusätzliche Spalten: Zusammenführen. Für Modellfilter: Beziehung.",
  "ort": "Excel / Power Query / Power-BI-Modell",
  "tags": [
    "Werte aus anderer Tabelle holen",
    "Reporting"
  ],
  "synonyme": [
    "Werte aus anderer Tabelle holen"
  ],
  "verwandteThemen": [
    "xverweis",
    "zusammenfuehren",
    "beziehungen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/xlookup-function"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Zu einer Kennung fehlt eine passende Beschreibung.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [XVERWEIS-Anleitung](#/wissen/xverweis). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

F2 = K002

### Aktion

```excel
=XVERWEIS(F2;B2:B4;D2:D4;"Fehlt";0)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| 2000 |

## Typischer Fehler

Ein nicht eindeutiger Schlüssel liefert nur einen Treffer. Prüfe mit ZÄHLENWENN, ob die Kontonummer genau einmal existiert.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Power BI        | [Beziehung erstellen](#/wissen/beziehungen) · [Tabellen zusammenführen](#/wissen/zusammenfuehren) |
| Excel           | [XVERWEIS](#/wissen/xverweis)                                                                     |

## Ergebnis

Einen Wert über einen eindeutigen Schlüssel nachschlagen.

## Warum funktioniert das?

Excel ermittelt die Position des passenden Kontos und übernimmt den Betrag derselben Position aus der Rückgabematrix. Standardmäßig wird der erste Treffer geliefert.

## Plausibilitätscheck

Erwartete Ausgabe: **2000**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
