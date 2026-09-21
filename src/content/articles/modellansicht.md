---
{
  "id": "modellansicht",
  "slug": "modellansicht",
  "titel": "Modellansicht lesen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Modellansicht zeigt Tabellen, Beziehungslinien und deren Filterwege. Prüfe zuerst Schlüssel und Zeilenebene.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": [
    "Modellansicht lesen"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "beziehungen",
    "aktive-beziehung",
    "filterrichtung",
    "star-schema",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-modeling-view",
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power BI – Modellansicht lesen",
      "caption": "Geplante Aufnahme: Power BI – Modellansicht lesen",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Die relevante Modellstruktur und Einstellung lesbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Modellansicht lesen",
        "klickfolge": [
          "Öffne in Power BI Desktop links die **Modellansicht**.",
          "Suche die beteiligten Tabellenkarten und ihre Schlüsselspalten. Klappe die Karten bei Bedarf auf.",
          "Lies die Zeichen an der Beziehung: **1** kennzeichnet eindeutige Schlüssel, ***** die Mehrfachseite."
        ],
        "daten": "**DimKunde**\n\n| Kunde | Segment |\n| --- | --- |\n| P001 | A |\n| P002 | B |\n\n**FaktKonten**\n\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Tabellennamen und Schlüssel",
          "1/* und Filterpfeil beziehungsweise Prüfdialog"
        ],
        "ausschnitt": "Power BI – Modellansicht lesen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-modellansicht.webp",
        "zweck": "Die relevante Modellstruktur und Einstellung lesbar zeigen.",
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

Tabellen, Schlüssel und Filterpfade eines bestehenden Modells lesen.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Öffne in Power BI Desktop links die **Modellansicht**.
2. Suche die beteiligten Tabellenkarten und ihre Schlüsselspalten. Klappe die Karten bei Bedarf auf.
3. Lies die Zeichen an der Beziehung: **1** kennzeichnet eindeutige Schlüssel, ***** die Mehrfachseite.
4. Prüfe Linie und Pfeil: durchgezogen aktiv, gestrichelt inaktiv; Pfeile zeigen die Filterrichtung.
5. Doppelklicke auf eine Linie, um die tatsächlich verknüpften Spalten, Kardinalität und Filterrichtung zu prüfen.
6. Verfolge einen Dimensionsfilter bis zu den Fakten und teste ihn anschließend im Bericht.

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

DimKunde → FaktKonten in der Modellansicht lesen.

### Nachher · Beispielergebnis

| Sichtbares Zeichen | Bedeutung im Beispiel |
| --- | --- |
| 1 bei DimKunde | Kunde eindeutig |
| * bei FaktKonten | Mehrere Konten je Kunde |
| Durchgezogene Linie | Aktiver Filterpfad |
| Einfacher Pfeil | Dimension filtert Fakten |

## Ergebnis

Die Modellgrafik zeigt, wie Tabellen logisch zusammenhängen und Filter weitergegeben werden.

## Warum funktioniert das?

Die Lage der Tabellen auf der Zeichenfläche ist nur Darstellung. Die Spaltenverknüpfungen und Beziehungseigenschaften bestimmen das Verhalten.

## Typischer Fehler

Aus räumlicher Nähe eine Beziehung ableiten oder eine gestrichelte Linie für einen Darstellungsfehler halten.

## Plausibilitätscheck

P001 erreicht K001 und K002 über genau den beabsichtigten aktiven Pfad.
