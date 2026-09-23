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
  "ort": "Excel → Daten → Aus Tabelle/Bereich oder Daten abrufen → Power Query Editor",
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
2. Bei **Aus Tabelle/Bereich** öffnet sich der Editor direkt. Bei externen Quellen im jeweiligen Dialog **Daten transformieren** wählen; nur Quellen mit einer Objektauswahl zeigen einen Navigator. Im Editor anhand des [gemeinsamen Workflows](#/wissen/pq-workflow) Profiling, Typen, Schlüssel und fehlende Werte prüfen.
3. Gemeinsame Anleitungen für [Textbereinigung](#/wissen/pq-text), [Gruppieren](#/wissen/gruppieren), [Merge](#/wissen/zusammenfuehren) und [Append](#/wissen/anhaengen) verwenden. Sie müssen nicht für jedes Werkzeug neu gelernt werden.
4. **Start → Schließen & laden in…** legt das Ziel fest: Tabelle auf einem Blatt, nur Verbindung oder bei Bedarf Datenmodell. Hilfsabfragen benötigen keine eigene Arbeitsblatttabelle.
5. Später über **Daten → Alle aktualisieren** oder die einzelne Abfrage aktualisieren. In Power BI heißt der Abschluss dagegen **Schließen & übernehmen** und lädt ins Modell.
6. Die geladene Ergebnistabelle nicht von Hand korrigieren: Änderungen gehören in Quelle oder Abfrage, sonst gehen sie beim Aktualisieren verloren.

## Beispiel

| Ausgang | Aktion | Ergebnis |
| --- | --- | --- |
| Tabelle mit Kunde, Konto und Betrag: P001/K001/100, P001/K002/200, P002/K003/500 | Typen prüfen; nach vorhandener Spalte Kunde gruppieren, Betrag summieren | P001/300 und P002/500 im Arbeitsblatt |

Bei der nächsten Lieferung bleiben die Schritte bestehen. Prüfe Schema und Kontrollsumme nach jeder Aktualisierung.

## Ergebnis

Aus P001/K001/100, P001/K002/200 und P002/K003/500 entstehen die zwei Kundenzeilen P001/300 und P002/500.

## Warum funktioniert das?

Excel und Power BI nutzen dieselbe Power-Query-Transformationssprache. Einstieg, Ladeziel, Connectoren und Aktualisierungsumgebung unterscheiden sich.

## Typischer Fehler

Geladene Ergebniszellen als dauerhaft manuell pflegbare Quelldaten behandeln.

## Plausibilitätscheck

Drei Kontozeilen werden zu zwei Kundenzeilen. 100 + 200 + 500 = 300 + 500 = 800. Ändere in einer Testkopie den Betrag von K001 auf 150: Erst nach Aktualisierung ergibt P001 350, Gesamtsumme 850. Fehlt Kunde in einer realen Lieferung, muss eine fachlich passende Zuordnung vor der Gruppierung ergänzt werden.
