---
{
  "id": "diagrammtitel",
  "slug": "diagrammtitel",
  "titel": "Diagrammtitel mit Kontext",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Titel sollte Kennzahl, Einheit und Zeitraum eindeutig machen. Dynamische Titel müssen Mehrfachauswahl berücksichtigen.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": ["Diagrammtitel mit Kontext"],
  "synonyme": [],
  "verwandteThemen": ["selectedvalue", "tooltips"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-titel.webp",
        "alt": "Allgemein → Titel: Text, Schrift und Ausrichtung einstellen.",
        "caption": "Allgemein → Titel: Text, Schrift und Ausrichtung einstellen.",
        "schritt": 1,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Eine exportierte Grafik ist ohne Slicer nicht verständlich.

## Schritte

1. Titel im Formatbereich aktivieren und Kennzahl plus Einheit nennen.
2. Bei Bedarf ein Textmeasure über die bedingte Titelsteuerung zuweisen.
3. Einzel-, Mehrfach- und leere Auswahl testen.

## Beispiel

```dax
Titel = "Bestand EUR · " &
 SELECTEDVALUE ( Demo_Personen[Segment], "Mehrere Segmente" )
```

## Typischer Fehler

Bei mehreren Segmenten einen einzelnen Segmentnamen im Titel behaupten.
