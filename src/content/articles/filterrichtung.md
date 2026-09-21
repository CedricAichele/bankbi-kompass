---
{
  "id": "filterrichtung",
  "slug": "filterrichtung",
  "titel": "Filterrichtung verstehen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Filterrichtung legt fest, ob eine Auswahl von einer Tabelle zur anderen weitergegeben wird.",
  "ort": "Power BI → Modellansicht → Beziehung bearbeiten",
  "tags": [
    "Filterrichtung verstehen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "beziehungen",
    "star-schema",
    "problem-werte-verschwinden",
    "filterkontext",
    "filter-fehler"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-bidirectional-filtering"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power BI – Filterrichtung verstehen",
      "caption": "Geplante Aufnahme: Power BI – Filterrichtung verstehen",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Die relevante Modellstruktur und Einstellung lesbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Filterrichtung verstehen",
        "klickfolge": [
          "Öffne die **Modellansicht** und doppelklicke auf die Beziehungslinie zwischen DimKunde und FaktKonten.",
          "Prüfe **Kreuzfilterrichtung: Einfach**. Bei 1:* läuft der Filter von der 1-Seite zur *-Seite.",
          "Teste im Bericht einen Datenschnitt aus DimKunde und eine Kontenliste aus FaktKonten."
        ],
        "daten": "**DimKunde**\n\n| Kunde | Segment |\n| --- | --- |\n| P001 | A |\n| P002 | B |\n\n**FaktKonten**\n\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Tabellennamen und Schlüssel",
          "1/* und Filterpfeil beziehungsweise Prüfdialog"
        ],
        "ausschnitt": "Power BI – Filterrichtung verstehen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-filterrichtung.webp",
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

Vorhersagen, welche Tabellen auf eine Auswahl reagieren.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Öffne die **Modellansicht** und doppelklicke auf die Beziehungslinie zwischen DimKunde und FaktKonten.
2. Prüfe **Kreuzfilterrichtung: Einfach**. Bei 1:* läuft der Filter von der 1-Seite zur *-Seite.
3. Teste im Bericht einen Datenschnitt aus DimKunde und eine Kontenliste aus FaktKonten.
4. Teste die Gegenrichtung bewusst: Ein Filter auf FaktKonten filtert bei dieser Einstellung nicht automatisch die Kundendimension zurück.
5. Wähle **Beide** nur bei einem begründeten Modellbedarf und prüfe sämtliche zusätzlichen Filterpfade und die Auswirkungen auf Ergebnisse.

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

DimKunde auf P001 einschränken.

### Nachher · Beispielergebnis

| Auswahl | Sichtbare Faktkonten |
| --- | --- |
| P001 | K001 und K002 |
| Keine | K001, K002 und K003 |

## Ergebnis

Die festgelegte Richtung steuert, wohin ein Filter weitergegeben wird.

## Warum funktioniert das?

Ein gerichteter Filterpfad macht Ergebnisse vorhersehbar. Bidirektionale Beziehungen können weitere Tabellen unerwartet einschränken oder mehrere konkurrierende Wege schaffen; mehr Richtungen bedeuten deshalb nicht automatisch bessere Auswertungen.

## Typischer Fehler

Einen Slicer aus der Faktentabelle nehmen und erwarten, dass alle Dimensionen zurückgefiltert werden.

## Plausibilitätscheck

Der Dimensionsfilter P001 zeigt zwei Konten. Ein Kontenfilter allein verändert die Dimension bei einfacher Richtung nicht.
