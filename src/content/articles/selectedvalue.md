---
{
  "id": "selectedvalue",
  "slug": "selectedvalue",
  "titel": "SELECTEDVALUE: eindeutige Auswahl lesen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SELECTEDVALUE gibt den einzigen unterschiedlichen Wert einer Spalte zurück; sonst den Ersatzwert.",
  "ort": "Power BI → Neues Measure",
  "tags": [
    "SELECTEDVALUE: eindeutige Auswahl lesen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "slicer",
    "blank"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/selectedvalue-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nAuswahl = SELECTEDVALUE ( Konten[Produktgruppe], \"Mehrere oder keine eindeutige Auswahl\" )\n```",
  "schnellschritte": [
    "Tabelle Konten mit synthetischen Daten laden.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---

## Wann brauche ich das?

Eine Überschrift soll genau eine ausgewählte Produktgruppe nennen.

## Voraussetzungen

Power BI Desktop im Importmodus. Die Tabelle wird im ersten Schritt angelegt; ein separates Modell ist für dieses Beispiel nicht nötig.

## Schritte

1. Lege in Power BI Desktop über **Start → Daten eingeben** die Tabelle `Konten` mit den sechs Zeilen aus dem Beispiel an. Alle Beträge beziehen sich auf denselben Stichtag. Setze Bestand_EUR auf Zahl und die Kennungen auf Text.
2. Wähle **Modellierung → Neues Measure**. Ersetze den gesamten Vorgabetext in der Formelleiste durch die Formel im Beispiel.
3. Bestätige mit Enter. Bei lokalisierter DAX-Trennzeicheneinstellung Kommas gegebenenfalls durch Semikolons ersetzen. Prüfe, ob das Measure ohne Fehlermeldung im Datenbereich erscheint.
4. Füge im Bericht ein Tabellenvisual hinzu. Ziehe `Personennummer` und das neue Measure in die Tabelle. Für die Gesamtprüfung verwende zusätzlich eine Karte mit nur dem Measure.
5. Füge einen Datenschnitt mit `Konten[Produktgruppe]` hinzu. Wähle zunächst Einlagen und vergleiche mit den erwarteten Zahlen.
6. Entferne die Auswahl über das Radierersymbol des Datenschnitts. Teste anschließend den beschriebenen Personenfilter und kontrolliere den Unterschied.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

```dax
Auswahl = SELECTEDVALUE ( Konten[Produktgruppe], "Mehrere oder keine eindeutige Auswahl" )
```

## Ergebnis

Bei Slicer Einlagen: Einlagen. Bei Einlagen und Kredite: der Ersatztext.

## Warum funktioniert das?

Die Spalte ist das erste Argument, der Ersatztext das zweite. Entscheidend ist ein einziger verschiedener Wert im Kontext, nicht die Anzahl angeklickter Slicerfelder.

## Typischer Fehler

**Symptom:** Ersatztext ohne Slicerauswahl. **Ursache:** Mehrere Produkte sind sichtbar. **Lösung:** Der Ersatztext muss auch diesen Zustand sinnvoll beschreiben.

## Plausibilitätscheck

Prüfe ohne Auswahl, mit einer Gruppe und mit zwei Gruppen.
