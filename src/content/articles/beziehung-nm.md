---
{
  "id": "beziehung-nm",
  "slug": "beziehung-nm",
  "titel": "n:m-Beziehung fachlich modellieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bei einer echten Mehrfachzuordnung kann eine Brückentabelle helfen. Eine direkte n:m-Beziehung löst keine unklare Kennzahlzuordnung.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": [
    "n:m-Beziehung fachlich modellieren"
  ],
  "synonyme": [
    "viele zu viele",
    "n:m"
  ],
  "verwandteThemen": [
    "kardinalitaet",
    "filterrichtung",
    "summe-zu-hoch",
    "fakt-zu-fakt",
    "eins-zu-viele",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-many-to-many"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Mehrere Zuordnungen auf beiden Seiten bewusst modellieren.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Notiere die fachliche Mehrfachzuordnung, beispielsweise eine Person mit mehreren Konten und ein Gemeinschaftskonto mit mehreren Personen.
2. Erzeuge eindeutige Dimensionen für Personen und Konten sowie eine **Brückentabelle** mit eindeutigen Paaren Person/Konto.
3. Prüfe die benötigten Filterpfade; bei einer Brücke kann ein gezielt bidirektionaler Pfad nötig sein. Vermeide pauschal bidirektionale Beziehungen im ganzen Modell.
4. Prüfe Kennzahlen separat: Ein gemeinsames Konto darf in einer Gesamtsumme nicht unabsichtlich je Eigentümer vollständig addiert werden.
5. Nutze eine direkte n:m-Beziehung nur mit bewusst verstandener Semantik und geeigneten Kontrollen.

## Beispiel

### Vorher · Beispieldaten

**Personen**

| Person |
| --- |
| P001 |
| P002 |

**Konten**

| Konto | Bestand |
| --- | --- |
| K001 | 1000 |

**Zuordnung**

| Person | Konto |
| --- | --- |
| P001 | K001 |
| P002 | K001 |

### Aktion

Nenne die Tabellen **Personen**, **Konten** und **Zuordnung**. Erstelle diese aktiven Beziehungen:

- Personen[Person] (1) → Zuordnung[Person] (*), Filterrichtung **Einfach**.
- Konten[Konto] (1) → Zuordnung[Konto] (*), Filterrichtung **Beide**. Nur dieser gezielte Rückweg lässt die Personenauswahl über Zuordnung die Kontentabelle filtern.

Lege das Measure in Konten an:

```dax
Sichtbarer Bestand = SUM ( Konten[Bestand] )
```

Verwende Personen[Person] als Zeilenfeld und das Measure als Wert. In diesem kleinen Beispiel liegen die Bestände direkt in Konten; bei mehreren Stichtagen gehört der Bestand in eine eigene Faktentabelle mit geklärtem Zeitbezug. Prüfe zusätzliche Beziehungen auf mehrdeutige Filterwege.

### Nachher · Beispielergebnis

| Person | Konto | Sichtbarer Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P002 | K001 | 1000 |
| Gesamt eindeutig | K001 | 1000 |

## Ergebnis

Mehrfachzuordnungen werden explizit abgebildet und ihre Auswirkung auf Kennzahlen ist bekannt.

## Warum funktioniert das?

Dieselbe Faktzeile kann zu mehreren Gruppen gehören. Gruppenergebnisse sind dann nicht zwingend additiv; eine Verteilung auf Personen wäre eine eigene fachliche Regel.

## Typischer Fehler

Die Summe der Personenzeilen 2000 als tatsächlichen Kontenbestand ausweisen.

## Plausibilitätscheck

K001 hat zwei Zuordnungen, aber nur einen Bestand von 1000.
