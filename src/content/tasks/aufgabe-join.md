---
{
  "id": "aufgabe-join",
  "slug": "aufgabe-join",
  "titel": "Daten nach einem Join plausibilisieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Join muss zur erwarteten Trefferzahl passen. Miss Zeilenanzahl, nicht zugeordnete Schlüssel und Kontrollsummen.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Daten nach einem Join plausibilisieren"
  ],
  "synonyme": [
    "join prüfen"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "ida-join-pruefen",
    "ida-mehrere-joins"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Nach einer Verknüpfung wächst die Tabelle unerwartet.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Tabellen zusammenführen-Anleitung](#/wissen/zusammenfuehren). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Beispieldaten

**Konten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Kunden**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

### Aktion

Konten mit Kunden über Kunde verbinden; Segment erweitern.

### Nachher · Beispielergebnis

| Kunde | Konto | Bestand | Segment |
| --- | --- | --- | --- |
| P001 | K001 | 1000 | A |
| P001 | K002 | 2000 | A |
| P002 | K003 | 500 | B |

## Typischer Fehler

Mehrfachtreffer mit Duplikate entfernen nachträglich verstecken oder inneren Join wählen und fehlende Schlüssel unbemerkt verlieren.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Tabellen zusammenführen](#/wissen/zusammenfuehren) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [XVERWEIS](#/wissen/xverweis)                                                                                          |
| IDA / Reporting | [Ergebnis vor / nach Join plausibilisieren](#/wissen/ida-join-pruefen); generisches Konzept                            |

## Ergebnis

Passende Datensätze werden per Schlüssel zugeordnet; ausgewählte Felder der zweiten Tabelle ergänzen die erste.

## Warum funktioniert das?

Ein Join findet alle passenden Zeilen, nicht automatisch genau eine. Zwei Kundentreffer würden jede betroffene Kontenzeile beim Erweitern verdoppeln. Die Join-Art bestimmt zusätzlich, welche nicht passenden Zeilen erhalten bleiben.

## Plausibilitätscheck

Drei Konten bleiben drei Zeilen und Summe 3500. Für P001 zweimal Segment A, für P002 B.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
