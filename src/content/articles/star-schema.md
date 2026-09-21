---
{
  "id": "star-schema",
  "slug": "star-schema",
  "titel": "Star Schema aufbauen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ordne eindeutige Dimensionen um getrennte Faktentabellen an. Jede Faktentabelle hat eine klar definierte Datenebene.",
  "ort": "Power BI → Modellansicht",
  "tags": [
    "Star Schema aufbauen",
    "Reporting",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "fakt-dimension",
    "datumstabelle",
    "filterrichtung",
    "fakt-zu-fakt",
    "bestand-bewegung",
    "beziehungen",
    "eins-zu-viele"
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
      "alt": "Bedienort: Power BI – Sternschema",
      "caption": "Geplante Aufnahme: Power BI – Sternschema",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Dimensionen und zentrale Fakten in einer lesbaren Modellansicht zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Sternschema",
        "klickfolge": [
          "DimKunde mit P001/A und P002/B laden.",
          "DimDatum mit jedem Datum vom 01.01. bis 31.12.2026 laden.",
          "FaktBestand: P001/K001/31.01.2026/1000; P001/K002/31.01.2026/2000; P002/K003/31.01.2026/500 laden.",
          "Modellansicht: DimKunde[Kunde] → FaktBestand[Kunde] und DimDatum[Datum] → FaktBestand[Datum] als aktive 1:*-Beziehungen mit einfacher Richtung anlegen."
        ],
        "daten": "DimKunde: Kunde/Segment = P001/A, P002/B. DimDatum: lückenloser Kalender 2026. FaktBestand: Kunde/Konto/Datum/Bestand wie oben.",
        "sichtbar": [
          "Alle drei Tabellen",
          "Beziehungslinien",
          "Schlüssel und 1/*",
          "Filterpfeile"
        ],
        "ausschnitt": "Power BI – Sternschema mit Alle drei Tabellen, Beziehungslinien, Schlüssel und 1/*, Filterpfeile. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-star-schema.webp",
        "zweck": "Dimensionen und zentrale Fakten in einer lesbaren Modellansicht zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Ein nachvollziehbares Modell für wiederkehrende Auswertungen entwerfen.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Definiere die zentrale Faktentabelle: beispielsweise **FaktBestand**, eine Zeile je Konto und Stichtag.
2. Lege Dimensionen für die benötigten Analyseachsen fest: **DimKunde**, **DimDatum**, gegebenenfalls **DimProdukt**. Jede Dimension braucht einen eindeutigen Schlüssel.
3. Öffne die **Modellansicht** und ordne die Dimensionen um die Faktentabelle an.
4. Erstelle je Dimension eine aktive **1:***-Beziehung mit einfacher Filterrichtung zur Faktentabelle.
5. Verwende Segment aus DimKunde und Monat/Jahr aus DimDatum im Bericht; prüfe einen Kunden und einen Tag gegen die Faktzeilen.
6. Bei mehreren Faktentabellen verbinde sie über gemeinsame Dimensionen statt ihre Detailzeilen direkt miteinander zu verknüpfen.

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

Modellbeispiel: DimKunde[Kunde] → FaktBestand[Kunde]; DimDatum[Datum] → FaktBestand[Datum].

### Nachher · Beispielergebnis

| Tabelle | Beispielschlüssel | Rolle |
| --- | --- | --- |
| DimKunde | P001, P002 jeweils einmal | Kunde und Segment filtern |
| DimDatum | Jeder Kalendertag einmal | Datum, Monat, Jahr filtern |
| FaktBestand | Konto + Datum | Bestand je Konto und Tag |

## Ergebnis

Ein zentraler Messwertbestand wird durch eindeutige, wiederverwendbare Dimensionen gefiltert.

## Warum funktioniert das?

Der Stern trennt Analyseachsen von Messungen. Dadurch bleibt erkennbar, welche Zeilen eine Auswahl erreicht. Er verhindert aber nicht automatisch falsche Kennzahlen: Tagesbestände sind beispielsweise nicht über mehrere Tage additiv.

## Typischer Fehler

Fakten direkt verbinden oder für jeden Bericht eine breite Tabelle mit wiederholten Stammdaten und unklarer Zeilenebene erzeugen.

## Plausibilitätscheck

Jede Dimension hat eindeutige Schlüssel; ein Kunde und ein Tag liefern exakt die erwarteten Konten.
