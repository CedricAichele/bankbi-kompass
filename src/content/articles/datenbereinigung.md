---
{
  "id": "datenbereinigung",
  "slug": "datenbereinigung",
  "titel": "Datentypen fachlich richtig festlegen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kennungen sind meist Text, Beträge Zahlen und Datumsangaben echte Datumswerte. Der passende Typ erhält Informationen und ermöglicht Berechnungen, Sortierung und Beziehungen.",
  "ort": "Power Query → Typsymbol links am Spaltennamen",
  "tags": [
    "Datentyp ändern / Daten bereinigen",
    "Datenqualität"
  ],
  "synonyme": [
    "Datentyp",
    "führende nullen",
    "Datum falsch",
    "Typ ändern",
    "datum falsch",
    "Datentyp ändern / Daten bereinigen"
  ],
  "verwandteThemen": [
    "csv-import",
    "pq-profiling",
    "pq-fehler"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/data-types"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Datentyp ändern / Daten bereinigen",
      "caption": "Geplante Aufnahme: Power Query-Editor – Datentyp ändern / Daten bereinigen",
      "schritt": 5,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Datentypen fachlich richtig festlegen",
        "klickfolge": [
          "Automatisch eingefügte Schritte **Geänderter Typ** prüfen. Wurde eine Kennung bereits zur Zahl, gehe vor diesen Schritt zurück und verhindere die Umwandlung; nachträgliches Textformat stellt verlorene Nullen nicht wieder her.",
          "Kunden- und Kontonummern als **Text** setzen, wenn sie Identifikatoren und keine Rechengrößen sind. Einheitliche Typen auch in späteren Join- und Beziehungsspalten verwenden.",
          "Betrag als **Dezimalzahl** oder **Feste Dezimalzahl** wählen. Festkomma hat vier Nachkommastellen; für Geld geeignet, wenn diese Genauigkeit ausreicht. Nicht als bloße Anzeigeformatierung verstehen.",
          "Datum als **Datum**, Zeitstempel als **Datum/Uhrzeit** setzen. Falls Zeitzonen fachlich relevant sind, nicht unbeabsichtigt entfernen.",
          "Bei Textzahlen und Textdaten **Rechtsklick auf Spalte → Typ ändern → Mit Gebietsschema** verwenden, etwa Deutsch (Deutschland) für 1.250,50 und 31.01.2026.",
          "Spaltenqualität nach der Umwandlung prüfen. Fehlerzeilen mit Originalwerten vergleichen, bevor sie ersetzt oder ausgeschlossen werden."
        ],
        "daten": "### Vorher\n| Kennung (Text) | Betrag (Text) | Datum (Text) |\n| --- | --- | --- |\n| 00123 | 1.250,50 | 31.01.2026 |\n\n### Aktion\nKennung als Text behalten. Betrag und Datum mit deutschem Gebietsschema konvertieren.\n\n### Nachher\n| Kennung (Text) | Betrag (Festkomma) | Datum |\n| --- | --- | --- |\n| 00123 | 1250,50 | 31.01.2026 |\n\nDer Betrag ist jetzt summierbar. Das Datum lässt sich chronologisch sortieren. Die fünfstellige Kennung bleibt unverändert.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-datenbereinigung.webp",
        "zweck": "Kennungen sind meist Text, Beträge Zahlen und Datumsangaben echte Datumswerte. Der passende Typ erhält Informationen und ermöglicht Berechnungen, Sortierung und Beziehungen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    },
    {
      "src": "images/power-bi/pbi-datentyp.webp",
      "alt": "Datentyp über das Symbol am Spaltenkopf auswählen.",
      "caption": "Datentyp über das Symbol am Spaltenkopf auswählen.",
      "schritt": 5,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen.",
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Kennungen sind meist Text, Beträge Zahlen und Datumsangaben echte Datumswerte. Der passende Typ erhält Informationen und ermöglicht Berechnungen, Sortierung und Beziehungen.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Automatisch eingefügte Schritte **Geänderter Typ** prüfen. Wurde eine Kennung bereits zur Zahl, gehe vor diesen Schritt zurück und verhindere die Umwandlung; nachträgliches Textformat stellt verlorene Nullen nicht wieder her.
2. Kunden- und Kontonummern als **Text** setzen, wenn sie Identifikatoren und keine Rechengrößen sind. Einheitliche Typen auch in späteren Join- und Beziehungsspalten verwenden.
3. Betrag als **Dezimalzahl** oder **Feste Dezimalzahl** wählen. Festkomma hat vier Nachkommastellen; für Geld geeignet, wenn diese Genauigkeit ausreicht. Nicht als bloße Anzeigeformatierung verstehen.
4. Datum als **Datum**, Zeitstempel als **Datum/Uhrzeit** setzen. Falls Zeitzonen fachlich relevant sind, nicht unbeabsichtigt entfernen.
5. Bei Textzahlen und Textdaten **Rechtsklick auf Spalte → Typ ändern → Mit Gebietsschema** verwenden, etwa Deutsch (Deutschland) für 1.250,50 und 31.01.2026.
6. Spaltenqualität nach der Umwandlung prüfen. Fehlerzeilen mit Originalwerten vergleichen, bevor sie ersetzt oder ausgeschlossen werden.

## Beispiel

### Vorher
| Kennung (Text) | Betrag (Text) | Datum (Text) |
| --- | --- | --- |
| 00123 | 1.250,50 | 31.01.2026 |

### Aktion
Kennung als Text behalten. Betrag und Datum mit deutschem Gebietsschema konvertieren.

### Nachher
| Kennung (Text) | Betrag (Festkomma) | Datum |
| --- | --- | --- |
| 00123 | 1250,50 | 31.01.2026 |

Der Betrag ist jetzt summierbar. Das Datum lässt sich chronologisch sortieren. Die fünfstellige Kennung bleibt unverändert.

## Ergebnis

Kennung 00123 bleibt Text, der Betrag ist numerisch und das Datum als echtes Datum nutzbar.

## Warum funktioniert das?

Typumwandlung interpretiert Werte; ein Zahlenformat ändert nur die Anzeige. Falsche Typen können Ladefehler, unpassende Sortierung, erfolglose Zuordnungen und nicht nutzbare Datumsfunktionen verursachen.

## Typischer Fehler

Eine numerisch eingelesene 123 ohne Kenntnis der Ursprungslänge pauschal mit Nullen auffüllen.

## Plausibilitätscheck

Kennung hat weiterhin fünf Zeichen, Betrag beträgt 1250,50 und Datum ist der 31. Januar. Anzahl Fehler vor/nach Konvertierung vergleichen.
