---
{
  "id": "kardinalitaet",
  "slug": "kardinalitaet",
  "titel": "Kardinalität prüfen: 1:1, 1:n oder n:m",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kardinalität beschreibt, ob ein Schlüssel auf jeder Seite einmal oder mehrfach vorkommt. Sie ist keine Einstellung zum Verbergen von Dubletten.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": [
    "Kardinalität prüfen: 1:1, 1:n oder n:m",
    "Grundbegriff"
  ],
  "synonyme": [
    "mehr zeilen nach join"
  ],
  "verwandteThemen": [
    "beziehungen",
    "schluessel",
    "dubletten",
    "problem-merge-zeilen",
    "eins-zu-viele",
    "beziehung-eins-eins",
    "beziehung-nm",
    "granularitaet",
    "zusammenfuehren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power BI – Kardinalität prüfen: 1:1, 1:n oder n:m",
      "caption": "Geplante Aufnahme: Power BI – Kardinalität prüfen: 1:1, 1:n oder n:m",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Die relevante Modellstruktur und Einstellung lesbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Kardinalität prüfen: 1:1, 1:n oder n:m",
        "klickfolge": [
          "Öffne die betroffenen Abfragen im **Power Query-Editor**.",
          "Prüfe jeden Beziehungsschlüssel auf NULL, leere Texte und normalisierte Schreibweise.",
          "Erzeuge für die Prüfung einen Verweis auf jede Abfrage und wähle **Start → Gruppieren nach** mit dem Schlüssel und **Anzahl Zeilen**."
        ],
        "daten": "**DimKunde**\n\n| Kunde | Segment |\n| --- | --- |\n| P001 | A |\n| P002 | B |\n\n**FaktKonten**\n\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Tabellennamen und Schlüssel",
          "1/* und Filterpfeil beziehungsweise Prüfdialog"
        ],
        "ausschnitt": "Power BI – Kardinalität prüfen: 1:1, 1:n oder n:m mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-kardinalitaet.webp",
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

Vor einer Beziehung prüfen, ob Schlüssel eindeutig oder mehrfach vorhanden sind.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Öffne die betroffenen Abfragen im **Power Query-Editor**.
2. Prüfe jeden Beziehungsschlüssel auf NULL, leere Texte und normalisierte Schreibweise.
3. Erzeuge für die Prüfung einen Verweis auf jede Abfrage und wähle **Start → Gruppieren nach** mit dem Schlüssel und **Anzahl Zeilen**.
4. Filtere die Anzahl auf größer als 1. Für die geplante 1-Seite darf kein ungeklärter Treffer bleiben.
5. Öffne im Modell den Beziehungsdialog und vergleiche die eingestellte Kardinalität mit dieser Prüfung. Behebe die Ursache statt die Einstellung auf n:m zu lockern.

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

Vorkommen von Kunde pro Tabelle zählen.

### Nachher · Beispielergebnis

| Tabelle | Kunde | Anzahl |
| --- | --- | --- |
| DimKunde | P001 | 1 |
| DimKunde | P002 | 1 |
| FaktKonten | P001 | 2 |
| FaktKonten | P002 | 1 |

## Ergebnis

Die Beziehungseinstellung entspricht der tatsächlichen Eindeutigkeit der Schlüssel.

## Warum funktioniert das?

Kardinalität ist eine Aussage über mögliche Zuordnungen, keine gewünschte Darstellungsform. Auch heute zufällig eindeutige Fakten können morgen mehrere gültige Zeilen je Kunde enthalten.

## Typischer Fehler

Nur den aktuellen Ausschnitt prüfen und daraus eine dauerhaft gültige 1:1-Beziehung ableiten.

## Plausibilitätscheck

Die Dimension ist eindeutig, die Fakten sind mehrfach; 1:* ist für dieses Modell passend.
