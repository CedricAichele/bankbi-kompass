---
{
  "id": "excel-power-query",
  "slug": "excel-power-query",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Excel Power Query",
  "schwierigkeit": "Grundlage",
  "ort": "Power Query-Editor",
  "tags": [],
  "synonyme": [],
  "verwandteThemen": [
    "pq-workflow",
    "power-query",
    "pq-laden",
    "excel-liste-vorbereiten"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-transform-data"
  ],
  "screenshots": [],
  "titel": "Power Query in Excel verwenden",
  "kurzbeschreibung": "Bereite wiederkehrende Listen mit Power Query auf und lade das Ergebnis als Excel-Tabelle oder ins Datenmodell. Die Transformationslogik ist dieselbe wie in Power BI.",
  "praxis": true,
  "zuletztGeprueft": "2026-09-23"
}
---

## Wann brauche ich das?

Bereite wiederkehrende Listen mit Power Query auf und lade das Ergebnis als Excel-Tabelle oder ins Datenmodell. Die Transformationslogik ist dieselbe wie in Power BI.

## Voraussetzungen

Excel mit verfügbarem Power Query und Zugriff auf die gewünschte Quelle. Der Funktionsumfang hängt von Version und Plattform ab.

## Schritte

1. Für Daten im geöffneten Blatt den Bereich als Tabelle anlegen und **Daten → Aus Tabelle/Bereich** wählen. Für externe Quellen **Daten → Daten abrufen** verwenden; verfügbare Connectoren hängen von Version und Plattform ab.
2. Im Navigator **Daten transformieren** wählen. Im Editor anhand des [gemeinsamen Workflows](#/wissen/pq-workflow) Profiling, Typen, Schlüssel und fehlende Werte prüfen.
3. Gemeinsame Anleitungen für [Textbereinigung](#/wissen/pq-text), [Gruppieren](#/wissen/gruppieren), [Merge](#/wissen/zusammenfuehren) und [Append](#/wissen/anhaengen) verwenden. Sie müssen nicht für jedes Werkzeug neu gelernt werden.
4. **Start → Schließen & laden in…** legt das Ziel fest: Tabelle auf einem Blatt, nur Verbindung oder bei Bedarf Datenmodell. Hilfsabfragen benötigen keine eigene Arbeitsblatttabelle.
5. Später über **Daten → Alle aktualisieren** oder die einzelne Abfrage aktualisieren. In Power BI heißt der Abschluss dagegen **Schließen & übernehmen** und lädt ins Modell.
6. Die geladene Ergebnistabelle nicht von Hand korrigieren: Änderungen gehören in Quelle oder Abfrage, sonst gehen sie beim Aktualisieren verloren.

## Beispiel

| Ausgang | Aktion | Ergebnis |
| --- | --- | --- |
| Monatliche Liste mit Konto und Betrag | Datentypen prüfen, Text standardisieren, nach Kunde gruppieren | Aktualisierbare Kundenübersicht im Arbeitsblatt |

Bei der nächsten Lieferung bleiben die Schritte bestehen. Prüfe Schema und Kontrollsumme nach jeder Aktualisierung.

## Ergebnis

Eine aktualisierbare Excel-Ausgabe entsteht aus gespeicherten Transformationsschritten. Die Quelle bleibt von der Ergebnistabelle getrennt.

## Warum funktioniert das?

Excel und Power BI nutzen dieselbe Power-Query-Transformationssprache. Einstieg, Ladeziel, Connectoren und Aktualisierungsumgebung unterscheiden sich.

## Typischer Fehler

Geladene Ergebniszellen als dauerhaft manuell pflegbare Quelldaten behandeln.

## Plausibilitätscheck

Ergebnisumfang stimmt mit den Abfrageschritten überein. Eine Quellenänderung wird nach Aktualisierung sichtbar.
