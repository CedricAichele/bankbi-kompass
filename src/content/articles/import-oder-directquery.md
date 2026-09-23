---
{
  "id": "import-oder-directquery",
  "slug": "import-oder-directquery",
  "titel": "Import oder DirectQuery?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "Ordne den Speichermodus einer unterstützten Datenquelle ein. Für die Excel-, CSV- und Ordnerfälle dieses Projekts ist Import der passende Ausgangspunkt.",
  "ort": "Power BI Desktop → Verbindung zu einer unterstützten Datenquelle",
  "tags": [
    "Import oder DirectQuery?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "daten-laden",
    "star-schema"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources",
    "https://learn.microsoft.com/en-us/power-query/connectors/excel",
    "https://learn.microsoft.com/en-us/power-query/connectors/text-csv"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

Ordne den Speichermodus einer unterstützten Datenquelle ein. Für die Excel-, CSV- und Ordnerfälle dieses Projekts ist Import der passende Ausgangspunkt.

## Voraussetzungen

Die Quelle und ihre unterstützten Verbindungsarten sind bekannt. Nicht jeder Connector bietet DirectQuery.

## Schritte

1. Prüfe zuerst die verfügbaren Modi der konkreten Quelle. Excel-, CSV- und lokale Ordnerdateien werden in den hier beschriebenen Workflows importiert.
2. Kläre Aktualitätsbedarf, Datenmenge und Berechtigungen. Beim Import wird eine Kopie im semantischen Modell gespeichert und durch Datenaktualisierung erneuert.
3. Bei einer unterstützten DirectQuery-Quelle teste Antwortzeiten und Einschränkungen der benötigten Abfragen und Modellfunktionen.
4. Vergleiche mit einer bekannten Quellzahl und einem dokumentierten Stichtag. Entscheide anhand der Anforderungen; dieser Artikel ist eine Entscheidungshilfe, kein nachzubauender Verbindungsversuch.

## Beispiel

| Fall | Einordnung |
| --- | --- |
| Monatliche XLSX-Dateien im Ordner | Import; neue Datei ablegen und danach aktualisieren. |
| Unterstützte Datenbankquelle mit verbindlichem Aktualitätsbedarf | DirectQuery kann geprüft werden; Quelle, Abfragen, Berechtigungen und Leistung gemeinsam testen. |

## Ergebnis

Die dateibasierten Beispiele verwenden Import. Für andere unterstützte Quellen bleibt DirectQuery eine bewusst zu prüfende Option.

## Warum funktioniert das?

Import speichert Daten im Modell; DirectQuery fragt bei Bedarf die unterstützte Quelle ab. Abfrageverhalten und Caches beeinflussen die sichtbare Aktualität.

## Typischer Fehler

DirectQuery pauschal mit Echtzeit gleichsetzen. Quelle, Cache, Berichtsausführung und Infrastruktur müssen zum Aktualitätsbedarf passen.

## Plausibilitätscheck

Beim Import eine bekannte Quelländerung erst nach Datenaktualisierung erwarten. Bei DirectQuery Aktualität und Antwortzeit mit der konkreten Quelle messen; keine allgemeine feste Sekundenangabe zusagen.
