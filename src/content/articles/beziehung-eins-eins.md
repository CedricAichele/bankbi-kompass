---
{
  "id": "beziehung-eins-eins",
  "slug": "beziehung-eins-eins",
  "titel": "1:1-Beziehung richtig einordnen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bei 1:1 ist der Schlüssel in beiden Tabellen eindeutig. Prüfe, ob beide Tabellen fachlich eine gemeinsame Dimension bilden sollten.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": [
    "1:1-Beziehung richtig einordnen"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "kardinalitaet",
    "fakt-dimension",
    "beziehung-oder-merge",
    "zusammenfuehren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-one-to-one"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Zwei Tabellen mit genau einer Zeile pro demselben Schlüssel beurteilen.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Prüfe die fachliche Zeilenebene beider Tabellen und zähle Schlüsselvorkommen auf beiden Seiten.
2. Prüfe, ob beide Tabellen sinnvoll zu einer einzigen Dimension zusammengefasst werden können.
3. Falls eine getrennte Modellierung erforderlich ist, wähle im Beziehungsdialog die passenden Schlüssel und **Eins-zu-Eins (1:1)**.
4. Berücksichtige die bei 1:1 verwendete bidirektionale Filterweitergabe und prüfe leere Gegenstücke sowie weitere Modellpfade.

## Beispiel

### Vorher · Beispieldaten

**Kunden**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**Zusatzmerkmale**

| Kunde | Klasse |
| --- | --- |
| P001 | X |
| P002 | Y |

### Aktion

Eine eindeutige Kundentabelle mit einer eindeutigen Zusatzmerkmalstabelle verbinden.

### Nachher · Beispielergebnis

| Kunde | Dimensionzeilen | Zusatzzeilen |
| --- | --- | --- |
| P001 | 1 | 1 |
| P002 | 1 | 1 |

## Ergebnis

Pro Schlüssel steht auf beiden Seiten höchstens eine zugehörige Zeile.

## Warum funktioniert das?

Eindeutigkeit auf beiden Seiten unterscheidet 1:1 von 1:n. Das ist nur sinnvoll, wenn die fachliche Struktur diese Eindeutigkeit auch künftig garantiert.

## Typischer Fehler

Ein aktuell einzelnes Konto pro Kunde als dauerhaftes 1:1-Modell deuten.

## Plausibilitätscheck

Beide Tabellen haben keine doppelten Schlüssel; fehlende Zusatzzeilen sind fachlich geklärt.
