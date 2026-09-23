---
{
  "id": "related",
  "slug": "related",
  "titel": "RELATED: Wert aus einer Beziehung holen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "RELATED holt in einem Zeilenkontext einen passenden Wert von der eindeutigen Seite einer geeigneten Beziehung.",
  "ort": "Power BI → Neue Spalte; aktive n:1-Beziehung erforderlich",
  "tags": [
    "RELATED: Wert aus einer Beziehung holen",
    "Reporting"
  ],
  "synonyme": [
    "wert aus anderer tabelle"
  ],
  "verwandteThemen": [
    "beziehungen",
    "berechnete-spalte",
    "xverweis"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/related-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nSegment = RELATED ( Personen[Segment] )\n```"
}
---

## Wann brauche ich das?

Du möchtest RELATED an einem überschaubaren Beispiel verstehen.

## Voraussetzungen

Lade die beiden Beispieltabellen **Konten** und **Personen** ins Modell. Personennummer ist in beiden Tabellen Text und in Personen eindeutig. Erstelle eine aktive reguläre 1:n-Beziehung von Personen[Personennummer] zu Konten[Personennummer]. Für dieses Beispiel ist kein Measure erforderlich.

## Schritte

1. Lege die beiden Tabellen aus dem Beispiel an und prüfe die oben beschriebene Beziehung in der Modellansicht.
2. Wähle in Konten Modellierung → Neue Spalte.
3. Gib die Formel aus dem Beispiel ein und bestätige mit Enter.
4. Füge ein Tabellenvisual mit Kontonummer, Personennummer und Segment aus Konten hinzu.
5. Prüfe zunächst alle sechs Konten und filtere anschließend auf Person P003: Beide Konten müssen Segment A zeigen.
6. Vergleiche den Wert mit dem erwarteten Ergebnis und untersuche den beschriebenen Fehlerfall.

## Beispiel

### Vorher · Beispieldaten

**Konten**

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

**Personen** – eine Zeile je Person

| Personennummer | Segment |
| --- | --- |
| P001 | A |
| P002 | B |
| P003 | A |
| P004 | B |

### Aktion

```dax
Segment = RELATED ( Personen[Segment] )
```

### Nachher · Beispielergebnis

K001, K002, K004 und K005 erhalten A; K003 und K006 erhalten B. Die Kontentabelle behält ihre sechs Zeilen.

## Ergebnis

RELATED holt in einem Zeilenkontext einen passenden Wert von der eindeutigen Seite einer geeigneten Beziehung.

## Warum funktioniert das?

RELATED benötigt Zeilenkontext und eine geeignete Beziehung zur eindeutigen Seite. Diese Formel gehört als neue Spalte in Konten.

## Typischer Fehler

Ein Measure ohne passenden Zeilenkontext kann nicht einfach jeden Kontenwert zuordnen. Doppelte Personennummern in Personen verhindern die geforderte eindeutige Beziehungsseite. Ein Kontenschlüssel ohne passenden Personeneintrag liefert bei dieser Zuordnung BLANK; solche fehlenden Zuordnungen gesondert prüfen.

## Plausibilitätscheck

Alle sechs Konten haben im vollständigen Beispiel ein Segment. Für P003 tragen K004 und K005 jeweils A. Die neue Spalte verändert weder Zeilenzahl noch Bestände; die Bestandssumme bleibt 9.000.
