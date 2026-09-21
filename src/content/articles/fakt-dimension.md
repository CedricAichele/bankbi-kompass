---
{
  "id": "fakt-dimension",
  "slug": "fakt-dimension",
  "titel": "Fakt- und Dimensionstabelle",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Fakten enthalten Messwerte auf einer festen Ebene. Dimensionen liefern eindeutige beschreibende Merkmale.",
  "ort": "Power BI → Modellansicht; Struktur vor dem Verknüpfen festlegen",
  "tags": [
    "Fakt- und Dimensionstabelle",
    "Reporting",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "star-schema",
    "eins-zu-viele",
    "granularitaet",
    "schluessel"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-dimension.webp",
      "alt": "Demo-Dimension: DISTINCT erzeugt vier eindeutige Personennummern aus sechs Kontenzeilen.",
      "caption": "Ersatzaufnahme: Power BI – Fakt- und Dimensionstabelle",
      "schritt": 2,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Zeigt nur DISTINCT in der Tabellenansicht statt Dimension mit Merkmalen und Beziehung zur Faktentabelle. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Zeigt nur DISTINCT in der Tabellenansicht statt Dimension mit Merkmalen und Beziehung zur Faktentabelle.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Fakt- und Dimensionstabelle",
        "klickfolge": [
          "Notiere die fachliche Zeilenebene jeder Quelle. Bei einem Bestand ist etwa Konto und Stichtag erforderlich.",
          "Ordne beschreibende Merkmale wie Kundensegment einer **Dimension** zu. Ihr Schlüssel identifiziert jeweils genau eine Dimensionszeile."
        ],
        "daten": "**DimKunde**\n\n| Kunde | Segment |\n| --- | --- |\n| P001 | A |\n| P002 | B |\n\n**FaktKonten**\n\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Fakt- und Dimensionstabelle",
          "Gewähltes Feld oder vollständige Formel",
          "Ergebnis passend zu den Beispieldaten"
        ],
        "ausschnitt": "Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.",
        "dateiname": "pbi-dimension.webp",
        "zweck": "Zeigt nur DISTINCT in der Tabellenansicht statt Dimension mit Merkmalen und Beziehung zur Faktentabelle.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmensdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Daten nach beschreibenden Merkmalen und messbaren Vorgängen strukturieren.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Notiere die fachliche Zeilenebene jeder Quelle. Bei einem Bestand ist etwa Konto und Stichtag erforderlich.
2. Ordne beschreibende Merkmale wie Kundensegment einer **Dimension** zu. Ihr Schlüssel identifiziert jeweils genau eine Dimensionszeile.
3. Ordne messbare Werte wie Bestand einer **Faktentabelle** zu. Sie enthält die passenden Fremdschlüssel und genau die festgelegte Detailtiefe.
4. Verbinde die Dimension über eine 1:*-Beziehung mit den Fakten. Verwende Dimensionsmerkmale für Filter und Gruppen.

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

Kundenmerkmale und Kontenbestände getrennt modellieren.

### Nachher · Beispielergebnis

| Tabelle | Zeilenebene | Typische Felder |
| --- | --- | --- |
| DimKunde | Ein Kunde | Kunde, Segment |
| FaktKonten | Ein Konto am betrachteten Stichtag | Konto, Kunde, Bestand |

## Ergebnis

Dimensionen beschreiben die Analyseachsen; Fakten speichern Ereignisse oder Messwerte in definierter Detailtiefe.

## Warum funktioniert das?

Merkmale werden an einer eindeutigen Stelle gepflegt und filtern über Schlüssel die Messwerte. Mehrere Faktzeilen je Kunde sind normal. Mit mehreren Stichtagen muss die Faktengranularität ausdrücklich erweitert werden.

## Typischer Fehler

Jede Tabelle mit Zahlen zur Faktentabelle erklären oder einen monatlichen Bestand ohne Datum modellieren.

## Plausibilitätscheck

P001 steht einmal mit Segment A in der Dimension und zweimal mit je einem Konto in den Fakten.
