---
{
  "id": "excel-sichtbare",
  "slug": "excel-sichtbare",
  "titel": "Nur sichtbare Zeilen kopieren oder bearbeiten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Filtern & eindeutige Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wähle sichtbare Zellen ausdrücklich aus, wenn ausgeblendete Zeilen unverändert bleiben sollen.",
  "ort": "Excel Desktop → Datenliste / Formelzelle",
  "tags": [
    "Nur sichtbare Zeilen kopieren oder bearbeiten"
  ],
  "synonyme": [
    "gefilterte zeilen bearbeiten",
    "sichtbare zeilen"
  ],
  "verwandteThemen": [
    "teilergebnis",
    "xverweis",
    "excel-liste-vorbereiten"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/copy-visible-cells-only",
    "https://support.microsoft.com/de-de/office/ausschlie%C3%9Fliches-kopieren-sichtbarer-zellen-6e3a1f01-2884-4332-b262-8b814412847e"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine gefilterte Liste soll kopiert oder mit einem einheitlichen Prüfvermerk versehen werden.

## Voraussetzungen

Excel Desktop und eine vorhandene Liste mit aktiviertem AutoFilter.

## Schritte

1. Filtere die Segmentspalte auf **A**.
2. Markiere den gewünschten Datenbereich ohne Überschrift.
3. Wähle **Start → Suchen und Auswählen → Inhalte auswählen → Nur sichtbare Zellen**.
4. Kopiere die Auswahl in einen freien Bereich. Für einen identischen Vermerk in ausgewählten sichtbaren Zielzellen tippe den Text und bestätige mit **Strg+Enter**.
5. Hebe den Filter auf und kontrolliere, dass ausgeblendete Zeilen nicht verändert wurden. Füge keine mehrzeilige Fremdliste blind in gefilterte Zielbereiche ein.

## Beispiel

### Vorher · Beispieldaten

| Segment | Vermerk |
| --- | --- |
| A | leer |
| B | leer |
| A | leer |

### Aktion

Nur sichtbare Vermerkzellen in Segment A auswählen; geprüft mit Strg+Enter eintragen.

### Nachher · Beispielergebnis

| Segment | Vermerk |
| --- | --- |
| A | geprüft |
| B | leer |
| A | geprüft |

## Ergebnis

Nur die ausgewählten sichtbaren Zellen werden kopiert beziehungsweise mit einer gemeinsamen Eingabe befüllt.

## Warum funktioniert das?

Eine gefilterte Ansicht enthält weiterhin ausgeblendete Zeilen. Die explizite Auswahl sichtbarer Zellen grenzt die Zellmenge der Aktion ein.

## Typischer Fehler

Eine Reihenfolge externer Werte als passende Schlüsselzuordnung voraussetzen.

## Plausibilitätscheck

Zwei A-Zeilen geändert; B bleibt leer.
