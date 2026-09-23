---
{
  "id": "spalten-entfernen",
  "slug": "spalten-entfernen",
  "titel": "Benötigte Spalten bewusst auswählen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Reduziere eine breite Tabelle auf relevante Felder, ohne Schlüssel, Zeitbezug oder später benötigte Prüfwerte zu verlieren.",
  "ort": "Power Query → Spalten markieren → Spalten entfernen",
  "tags": [
    "Spalten entfernen",
    "Reporting"
  ],
  "synonyme": [
    "Spalten entfernen"
  ],
  "verwandteThemen": [
    "pq-workflow",
    "schluessel"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/choose-remove-columns"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Spalten entfernen",
      "caption": "Geplante Aufnahme: Power Query – Spalten entfernen",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Spalten entfernen zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Benötigte Spalten bewusst auswählen",
        "klickfolge": [
          "Auswertungsziel festlegen und benötigte Schlüssel, Merkmale, Messgrößen und Zeitspalten auswählen.",
          "**Spalten entfernen** löscht markierte Spalten. Geeignet, wenn wenige eindeutig unnötige Spalten entfallen sollen.",
          "**Andere Spalten entfernen** behält ausschließlich markierte Spalten. Geeignet für sehr breite Quellen, wenn nur wenige Felder gebraucht werden.",
          "Schemaänderungen bedenken: Bei einer Auswahl bleiben neue Quellspalten außen vor. Fehlt eine erwartete Spalte oder wird sie umbenannt, kann die Aktualisierung fehlschlagen. Eine reine Löschliste kann neue, unerwünschte Spalten mitladen.",
          "Spaltennamen und letzte Abfrageschritte prüfen; bei einer Quellenänderung bewusst entscheiden, ob die Auswahl angepasst werden muss."
        ],
        "daten": "### Vorher\n| Konto | Stichtag | Bestand | Importnotiz |\n| --- | --- | --- | --- |\n| A | 31.01.2026 | 100 | Datei 1 |\n\n### Aktion\nKonto, Stichtag und Bestand markieren → Andere Spalten entfernen.\n\n### Nachher\n| Konto | Stichtag | Bestand |\n| --- | --- | --- |\n| A | 31.01.2026 | 100 |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-spalten-entfernen.webp",
        "zweck": "Reduziere eine breite Tabelle auf relevante Felder, ohne Schlüssel, Zeitbezug oder später benötigte Prüfwerte zu verlieren.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Reduziere eine breite Tabelle auf relevante Felder, ohne Schlüssel, Zeitbezug oder später benötigte Prüfwerte zu verlieren.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Auswertungsziel festlegen und benötigte Schlüssel, Merkmale, Messgrößen und Zeitspalten auswählen.
2. **Spalten entfernen** löscht markierte Spalten. Geeignet, wenn wenige eindeutig unnötige Spalten entfallen sollen.
3. **Andere Spalten entfernen** behält ausschließlich markierte Spalten. Geeignet für sehr breite Quellen, wenn nur wenige Felder gebraucht werden.
4. Schemaänderungen bedenken: Bei einer Auswahl bleiben neue Quellspalten außen vor. Fehlt eine erwartete Spalte oder wird sie umbenannt, kann die Aktualisierung fehlschlagen. Eine reine Löschliste kann neue, unerwünschte Spalten mitladen.
5. Spaltennamen und letzte Abfrageschritte prüfen; bei einer Quellenänderung bewusst entscheiden, ob die Auswahl angepasst werden muss.

## Beispiel

### Vorher
| Konto | Stichtag | Bestand | Importnotiz |
| --- | --- | --- | --- |
| A | 31.01.2026 | 100 | Datei 1 |

### Aktion
Konto, Stichtag und Bestand markieren → Andere Spalten entfernen.

### Nachher
| Konto | Stichtag | Bestand |
| --- | --- | --- |
| A | 31.01.2026 | 100 |

## Ergebnis

Das Ergebnis enthält nur Konto, Stichtag und Bestand. Die unnötige Importnotiz ist entfernt.

## Warum funktioniert das?

Eine explizite Spaltenauswahl definiert den erwarteten Aufbau des Ergebnisses. Sie ersetzt keine Prüfung auf Änderungen des Quellschemas.

## Typischer Fehler

Stichtag entfernen, obwohl dieselben Konten monatlich wiederkehren.

## Plausibilitätscheck

Zeilenzahl und Bestandssumme bleiben identisch, der fachliche Schlüssel ist vollständig.
