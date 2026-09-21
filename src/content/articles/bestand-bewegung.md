---
{
  "id": "bestand-bewegung",
  "slug": "bestand-bewegung",
  "titel": "Bestandskennzahl oder Bewegungskennzahl?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bestände sind Momentaufnahmen, Bewegungen beziehen sich auf Zeiträume. Bestände sind über Zeit meist nicht additiv.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": [
    "Bestandskennzahl oder Bewegungskennzahl?",
    "Grundbegriff"
  ],
  "synonyme": [
    "bestand über monate",
    "snapshot",
    "bewegungskennzahl"
  ],
  "verwandteThemen": [
    "stichtag",
    "ytd",
    "visual-gesamtsumme",
    "datumstabelle",
    "pq-datum",
    "vorjahr"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Neugeschäft",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du baust eine Monats- oder YTD-Auswertung.

## Schritte

1. Prüfe Datenzeitraum, Datumstyp und benötigte Zeilenebene. Kläre, ob eine Bewegung oder ein Bestand ausgewertet wird.
2. Kennzahl als Stichtagswert oder Periodenbewegung einordnen.
3. Bestände je Stichtag, Bewegungen über den gewünschten Zeitraum auswerten.
4. Gesamtsumme fachlich festlegen: letzter Bestand, Durchschnitt oder kumulierte Bewegung.
5. Vergleiche mit dem Beispiel: Januar + Februar: Neugeschäft 25; Bestand am 28.02. 120, nicht 220.

## Beispiel

### Vorher · Beispieldaten

| Datum | Neugeschäft | Bestand |
| --- | --- | --- |
| 28.02.2025 | 9 | 90 |
| 31.01.2026 | 10 | 100 |
| 28.02.2026 | 15 | 120 |

### Aktion

Bewegungen über den Zeitraum addieren; Bestand für einen ausdrücklich gewählten Stichtag zeigen.

Januarbestand 100 und Februarbestand 120 ergeben keinen Bestand von 220. Neugeschäft 10 plus 15 ergibt dagegen 25.

### Nachher · Beispielergebnis

Januar + Februar: Neugeschäft 25; Bestand am 28.02. 120, nicht 220.

## Typischer Fehler

Eine technisch korrekte SUM-Formel ohne Zeitregel als fachlich korrekte Kennzahl betrachten.

## Einfach erklärt

Bestand ist ein Zustand, Bewegung eine Veränderung oder Aktivität während eines Zeitraums. Neugeschäft benötigt eine ausdrücklich definierte Ereignisregel.

## Mini-Beispiel

Bestand 100 zu Beginn; Zugang 20 und Abgang 15 → 105, sofern keine weiteren Veränderungen existieren.

## Warum ist das wichtig?

Die Definition bestimmt, welche Zuordnung oder Berechnung fachlich zulässig ist. Neugeschäft automatisch als reine Bestandsdifferenz interpretieren.

## Wo taucht das auf?

Zeitreihen, YTD und Bestandsanalysen.

## Voraussetzungen

Ein vorhandenes Modell mit echten Datumswerten. Für klassische Zeitintelligenz eine vollständige, markierte Datumstabelle und aktive Beziehung zum Faktendatum verwenden.

## Ergebnis

Bestände sind Momentaufnahmen, Bewegungen beziehen sich auf Zeiträume. Bestände sind über Zeit meist nicht additiv.

## Warum funktioniert das?

Eine Bewegung beschreibt Veränderung im Intervall. Ein Bestand beschreibt einen Zustand und darf über verschiedene Tage nicht als Vermögenszuwachs summiert werden.

## Plausibilitätscheck

Januar + Februar: Neugeschäft 25; Bestand am 28.02. 120, nicht 220. Prüfe außerdem einen Zeitraum ohne Daten.
