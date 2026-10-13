---
{
  "id": "visualwahl",
  "slug": "visualwahl",
  "titel": "Welches Power-BI-Visual brauche ich?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wähle das Visual nach der Frage: Kennzahl, Kategorienvergleich, Zeitverlauf, Detailprüfung oder Kreuzanalyse. Die gemeinsame Anleitung erklärt Felder, Grenzen und Kontrollen.",
  "ort": "Power BI Desktop → Berichtsansicht → Visual auswählen und Felder zuordnen",
  "tags": [],
  "synonyme": [
    "karte",
    "tabelle",
    "matrix",
    "balken",
    "balkendiagramm",
    "säulen",
    "linie",
    "liniendiagramm",
    "anteile",
    "welches visual",
    "visualisierung"
  ],
  "verwandteThemen": [
    "visual-formatierung",
    "slicer",
    "drillthrough",
    "tooltips",
    "visualinteraktionen",
    "bestand-bewegung"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "ebene": "Kernwissen",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a"
  ]
}
---

## Wann brauche ich das?
Du hast eine geprüfte Kennzahl und möchtest sie verständlich darstellen. Beginne mit der fachlichen Frage, nicht mit dem Aussehen des Diagramms.
## Schritte
1. Kläre Zielgruppe, Frage, Zeitraum und Datenebene. Prüfe das Measure zunächst in einer Tabelle.
2. Wähle ein Visual anhand der Vergleichstabelle und ordne die Felder zu.
3. Stelle Sortierung, Einheiten, Titel und Datumsachse passend ein.
4. Teste die Darstellung mit Slicern sowie einer Auswahl ohne Treffer.
5. Vergleiche jeden sichtbaren Wert mit dem Tabellenvisual und prüfe die Gesamtsumme.
## Beispiel
Synthetische Monatsbestände am 30.09.2026: Produkt A = 30, B = 5; Gesamtbestand = 35. Bestände der Folgemonate bilden eigene Stichtage. Ein neues Measure Bestand gesamt = SUM(Konten[Bestand]) verwendet hier nur einen gewählten Stichtag.

| Fragestellung | Visual und Feldbelegung | Beispiel | Wann nicht geeignet? |
|---|---|---|---|
| Wie groß ist eine Kennzahl? | Karte: Measure als Wert | 35 am 30.09.2026 | Ohne Zeit-/Filterkontext kann die Zahl missverständlich sein |
| Welche Kategorie ist größer? | Balken: Produkt auf Kategorieachse, Measure auf Wertachse | A 30, B 5 | Hunderte Kategorien oder lange Zeitreihen |
| Wie vergleiche ich wenige kurze Kategorien? | Säulen: Produkt auf X-Achse, Measure auf Y-Achse | A 30, B 5 | Lange Beschriftungen; dafür eher Balken |
| Wie entwickelt sich ein Wert? | Linie: Kalenderdatum chronologisch auf X-Achse, Measure auf Y-Achse | Monatsstände 35, 37, 36 | Ungeordnete Kategorien ohne zeitlichen Zusammenhang |
| Welche Details muss ich prüfen? | Tabelle: Konto, Produkt, Stichtag und Measure | Einzelkonten als Kontrollbasis | Ein Trend lässt sich hier schwer überblicken |
| Wie vergleichen sich zwei Dimensionen? | Matrix: Produkt in Zeilen, Monat in Spalten, Measure als Wert | Produkt × Stichtag | Sehr viele Spalten oder erwartete reine Zeilensumme bei nichtadditiven Measures |
| Wie verteilen sich Anteile? | 100-%-gestapelte Balken: Kategorie, Gruppe und nichtnegative Werte | A 85,7 %, B 14,3 % von 35 | Absolute Größen bleiben verborgen; negative Werte oder unklare Nenner |

Im Bericht ein freies Feld anklicken, Visualtyp auswählen und die passenden Felder in die jeweiligen Feldbereiche ziehen. Die Bezeichnungen können je Version abweichen. Die Linie setzt eine chronologisch sortierte Datumsspalte voraus; reine Monatsnamen vermischen sonst Jahre.
## Ergebnis
Das Visual zeigt dieselbe geprüfte Kennzahl mit einer zur Frage passenden Struktur. Tabelle und Matrix sind auch Kontrollwerkzeuge, nicht nur Darstellungsalternativen.
## Warum funktioniert das?
Achsen, Zeilen und Spalten erzeugen Filterkontext für das Measure. Eine Karte berechnet im gesamten aktuellen Kontext; die Matrix berechnet jede Zelle und den Gesamtwert erneut. Eine Prozentdarstellung braucht einen definierten Nenner. Mehrere Monatsbestände als Jahressumme zusammenzufassen verändert die fachliche Aussage.
## Formatierung und Bedienung
[Einheiten, Beschriftung, Titel, Prozent und Sortierung](#/wissen/visual-formatierung) sind in einer gemeinsamen Anleitung gebündelt. [Slicer](#/wissen/slicer) begrenzen die Auswahl. Für echte Detailnavigation nutze [Drillthrough](#/wissen/drillthrough); für Zusatzinformationen [Tooltips](#/wissen/tooltips). [Visualinteraktionen](#/wissen/visualinteraktionen) legen fest, ob ein Klick andere Visuals filtert oder hervorhebt.
## Typischer Fehler
Ein hübsches Visual als Nachweis korrekter Daten ansehen. Ein kartierter Wert kann trotz guter Darstellung durch doppelte Schlüssel, falsche Filterrichtung oder mehrere Stichtage falsch sein. Eine verkürzte Achse kann Größenverhältnisse verzerren; Achsenwahl bewusst begründen.
## Plausibilitätscheck
Bei A/B müssen 30 und 5 erscheinen, beim ausgewählten Stichtag insgesamt 35. Nach Auswahl A zeigt die Karte 30; nach Zurücksetzen wieder 35. Kontrolliere BLANK, negative Werte, mehrjährige Monatsachsen, abgeschnittene Beschriftungen und die Lesbarkeit auf kleinen Bildschirmen.
