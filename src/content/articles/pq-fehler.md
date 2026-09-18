---
{
  "id": "pq-fehler",
  "slug": "pq-fehler",
  "titel": "Fehlerhafte Werte prüfen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Konvertierungsfehler ist ein Hinweis auf unpassende Daten oder Typen. Untersuche die Ursache, bevor du Werte ersetzt.",
  "ort": "Power Query → Fehlerzelle / Spaltenkontextmenü",
  "tags": [
    "Fehlerhafte Werte prüfen"
  ],
  "synonyme": [
    "error power query",
    "fehlerhafte werte"
  ],
  "verwandteThemen": [
    "datenbereinigung",
    "nullwerte"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Fehlerwerte finden und ihre Ursache statt nur ihr Symptom beheben.

## Voraussetzungen

Power Query in Power BI Desktop oder Excel; nur synthetische Dateien verwenden.

## Schritte

1. Öffne die Abfrage im Power-Query-Editor und aktiviere Ansicht → Spaltenqualität.
2. Wähle im Schrittbereich den ersten Schritt, ab dem Fehler entstehen.
3. Klicke einen Error-Wert an und lies die Details; notiere betroffene Spalte und Umwandlung.
4. Prüfe den Wert im vorherigen Schritt. Häufig sind Text, Gebietsschema oder ein fehlender Spaltenname die Ursache.
5. Korrigiere die Umwandlung. Für dokumentierte Ausnahmen kann Fehler ersetzen sinnvoll sein; Fehlwerte separat zählen.
6. Prüfe sowohl die ursprünglichen Fehlerzeilen als auch eine zuvor korrekte Zeile.
7. Lade erst, wenn unerwartete Fehler geklärt sind.

## Beispiel

| Rohwert | Gewünschte Behandlung |
| --- | --- |
| 1.250,50 | Zahl mit deutschem Gebietsschema |
| unbekannt | Fehlwert nach dokumentierter Regel |

## Ergebnis

1250,50 wird numerisch; unbekannt bleibt als fehlend gekennzeichnet, nicht stillschweigend 0.

## Warum funktioniert das?

Fehler enthält eine Information über eine fehlgeschlagene Operation. Seine Ursache liegt oft einen Schritt früher.

## Typischer Fehler

**Symptom/Ursache:** Fehler entfernen löscht ganze Zeilen und kann dadurch Summen unbemerkt verändern. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Anzahl fehlerhafter Zeilen vorher/nachher und erhaltene Zeilenzahl dokumentieren.
