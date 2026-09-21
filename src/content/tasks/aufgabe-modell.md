---
{
  "id": "aufgabe-modell",
  "slug": "aufgabe-modell",
  "titel": "Ein kleines Datenmodell aufbauen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Trenne Kontenfakten und eindeutige Personenattribute, bevor du Visuals baust.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Ein kleines Datenmodell aufbauen"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "beziehungen"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "aufgabe",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Ein kleines Datenmodell aufbauen.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Beziehung erstellen-Anleitung](#/wissen/beziehungen). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

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

DimKunde[Kunde] (1) → FaktKonten[Kunde] (*); Filter P001.

### Nachher · Beispielergebnis

| Konto | Bestand |
| --- | --- |
| K001 | 1000 |
| K002 | 2000 |

## Ergebnis

Eine aktive Beziehung überträgt Filter zwischen logisch verbundenen, physisch getrennten Tabellen.

## Typischer Fehler

Zwei nicht eindeutige Spalten verbinden und eine n:m-Beziehung als schnelle Reparatur akzeptieren.

## Vergleich

Power BI: Modellansicht. Excel: Datenmodell oder für einfache Ausgaben Power Query. Reporting: allgemeines Dimensionskonzept.

## Warum funktioniert das?

Der ausgewählte Dimensionsschlüssel grenzt die passenden Faktzeilen ein. Die Beziehung kopiert weder Segment in die Kontentabelle noch führt sie die Tabellen wie ein Merge zusammen.

## Plausibilitätscheck

P001 zeigt zwei Konten und 3000; ohne Filter drei Konten und 3500.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
