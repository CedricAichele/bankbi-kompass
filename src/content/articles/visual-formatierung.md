---
{
  "id": "visual-formatierung",
  "slug": "visual-formatierung",
  "titel": "Visuals lesbar formatieren und sortieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Einheiten, Dezimalstellen, Titel, Prozentformat und Sortierung gehören zur Interpretation. Ein gemeinsamer Kontrollablauf verhindert irreführende Anzeigen.",
  "ort": "Power BI Desktop → Visual formatieren; Measuretools → Format; Visualmenü → Sortieren",
  "tags": [],
  "synonyme": [],
  "verwandteThemen": [
    "visualwahl",
    "divide",
    "datum-sortieren",
    "dax-jahr-monat",
    "blank"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "ebene": "Praxisartikel",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/service-getting-started-with-color-formatting-and-axis-properties",
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-customize-title-background-and-legend"
  ]
}
---

## Wann brauche ich das?
Die Zahl ist berechnet, aber Beschriftungen sind unklar, Prozentwerte wirken falsch oder Kategorien laufen in der falschen Reihenfolge.
## Schritte
1. Prüfe den unformatierten Wert im Tabellenvisual, bevor du seine Darstellung änderst.
2. Markiere das Measure und wähle in Measuretools das fachlich passende Zahlen- oder Prozentformat.
3. Markiere das Visual und öffne den Bereich Visual formatieren. Stelle Einheiten, Dezimalstellen, Datenbeschriftungen und Titel ein.
4. Öffne das Drei-Punkte-Menü des Visuals und kontrolliere Sortierfeld und Richtung.
5. Teste Slicer, BLANK und sehr kleine sowie große Werte. Vergleiche die Anzeige mit dem Ausgangswert.
## Beispiel
| Ausgangswert | Einstellung | Anzeige und Bedeutung |
|---|---|---|
| 1250000 | Anzeigeeinheit Millionen, 2 Dezimalstellen | 1,25 Mio.; zugrunde liegender Wert bleibt 1250000 |
| 0,95 | Measureformat Prozent, 0 Dezimalstellen | 95 % |
| 95 | Measureformat Prozent | 9500 %; Skalierung ist falsch, nicht das Format |
| A/30, B/5 | nach Measure absteigend sortieren | A vor B |
| 2026-01, 2025-12 | nach Jahr-Monat-Schlüssel aufsteigend | 2025-12 vor 2026-01 |

**Datenbeschriftungen:** Im Formatbereich aktivieren und Einheiten so wählen, dass mehrere Visuals vergleichbar bleiben. Tausender, Millionen und automatische Einheiten nicht unbemerkt mischen. Kleine Segmente benötigen ggf. Tooltips statt eng gedrängter Zahlen.

**Titel:** „Bestand in EUR – gewählter Stichtag“ beschreibt Kennzahl und Einheit. Ein statischer Titel mit „September“ ist falsch, wenn ein Slicer später Oktober wählt. Nutze einen neutralen Titel oder – wenn fachlich definiert – einen dynamischen Titel über bedingte Formatierung.

**Sortieren:** Ranglisten meist nach Measure absteigend, Zeitreihen chronologisch. Monatsnamen über [einen Jahr-Monat-Schlüssel](#/wissen/dax-jahr-monat) sortieren; die Visualsortierung ersetzt keine saubere Kalenderspalte.
## Ergebnis
Formatierung macht Größenordnung und Kontext sichtbar, ohne den berechneten Wert zu verändern. Das Prozentformat erwartet den Anteil 0 bis 1, wenn die Anzeige 0 bis 100 % ergeben soll.
## Warum funktioniert das?
Zahlenformat, Anzeigeeinheit und Sortierreihenfolge verändern die Darstellung. Sie beheben weder Modellfehler noch falsche Quotennenner. Ein BLANK bleibt fachlich etwas anderes als 0; die Anzeige darf eine ausgebliebene Datenlieferung nicht verdecken.
## Typischer Fehler
Den Wert mit 100 multiplizieren und anschließend als Prozent formatieren, automatische Einheiten zwischen Visuals mischen oder durch Rundung 0 anzeigen, obwohl ein kleiner positiver Wert vorliegt.
## Plausibilitätscheck
1250000 muss bei Millionen 1,25 Mio. ergeben; 0,95 muss 95 % ergeben. Prüfe den Tooltip oder eine Detailtabelle mit dem vollständigen Wert, Titel nach Slicerwechsel und Jahreswechsel in der Sortierung.
