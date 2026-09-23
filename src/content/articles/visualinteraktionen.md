---
{
  "id": "visualinteraktionen",
  "slug": "visualinteraktionen",
  "titel": "Visualinteraktionen einstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lege je Zielvisual fest, ob eine Auswahl filtern, hervorheben oder keinen Einfluss haben soll.",
  "ort": "Power BI Desktop → Quellvisual wählen → Format → Interaktionen bearbeiten",
  "tags": [
    "Visualinteraktionen einstellen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "slicer",
    "filter-fehler",
    "measure"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Steuern, welche Visuals eine Auswahl beeinflusst.

## Voraussetzungen

Ein vorhandener Datenbestand mit den genannten Feldern. Die Tabelle im Beispiel dient ausschließlich zur Veranschaulichung.

## Schritte

1. Prüfe die vorhandenen Quellfelder und Datentypen. Verwende bei Bedarf ein bereits angelegtes Gesamtbestand-Measure; die Erstellung erklärt der verlinkte Measure-Artikel.
2. Wähle den Slicer und aktiviere im Menü Format → Interaktionen bearbeiten.
3. Am Zielvisual erscheinen Symbole für die verfügbaren Interaktionen. Wähle für die Karte Filter statt Keine.
4. Wähle Einlagen und kontrolliere 4.050.
5. Setze testweise Keine an der Karte: Sie zeigt wieder 9.000, während die Tabelle weiterhin gefiltert sein kann.
6. Stelle die gewünschte Filterwirkung wieder her und beende Interaktionen bearbeiten.
7. Teste jedes Zielvisual; Filterung und Hervorhebung können je Visual unterschiedliche Darstellungen erzeugen.

## Beispiel

### Vorher · Beispieldaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

### Aktion

Die im Ablauf genannten Felder dem Visual zuweisen und die Auswahl prüfen.

### Nachher · Beispielergebnis

Aktive Filterinteraktion: 4.050 bei Einlagen; deaktiviert: 9.000.

## Ergebnis

Lege je Zielvisual fest, ob eine Auswahl filtern, hervorheben oder keinen Einfluss haben soll.

## Warum funktioniert das?

Die Beziehung bestimmt den möglichen Datenfilterweg; die Interaktion bestimmt zusätzlich, ob das Zielvisual diese Auswahl erhält.

## Typischer Fehler

**Symptom/Ursache:** Ein unverändertes Visual ist nicht automatisch ein Modellfehler. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Mit einfachen SUM-Measures prüfen, bevor komplexes DAX untersucht wird.
