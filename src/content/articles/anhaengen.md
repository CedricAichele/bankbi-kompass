---
{
  "id": "anhaengen",
  "slug": "anhaengen",
  "titel": "Tabellen anhängen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Anhängen setzt gleichartige Tabellen untereinander. Die Zuordnung erfolgt über Spaltennamen.",
  "ort": "Power Query → Start → Abfragen anfügen / anhängen",
  "tags": [
    "Tabellen anhängen",
    "Reporting"
  ],
  "synonyme": [
    "zwei tabellen",
    "untereinander"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "dateien-kombinieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/append-queries"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Gleichartig aufgebaute Listen sollen untereinander stehen.

## Voraussetzungen

Synthetische Daten; Power Query in Power BI Desktop oder Excel. Die Menübezeichnung kann je Version leicht abweichen.

## Schritte

1. Öffne in Power BI **Start → Daten transformieren**. In Excel: Quelldaten als Tabelle formatieren und **Daten → Aus Tabelle/Bereich** wählen. Die folgenden Aktionen erfolgen im Power-Query-Editor.
2. Lege zwei Abfragen Januar und Februar mit jeweils Kontonummer und Betrag an; jede enthält ihre eine Beispielzeile.
3. Gleiche Spaltennamen und Datentypen ab. Ergänze vor dem Anhängen bei Bedarf einen Monat oder Dateinamen zur Herkunft.
4. Wähle Start → Abfragen anfügen → Abfragen als neu anfügen.
5. Wähle Zwei Tabellen, danach Januar und Februar. Bestätige.
6. Prüfe zwei Zeilen in der Vorschau. Eine versehentlich Betrag_EUR statt Betrag genannte Spalte würde eine zusätzliche Spalte mit null erzeugen.
7. Prüfe im rechten Bereich Angewendete Schritte die Vorschau vor und nach der Aktion. In Power BI abschließend Schließen & übernehmen, in Excel Schließen & laden wählen.

## Beispiel

| Liste | Kontonummer | Betrag |
| --- | --- | --- |
| Januar | K001 | 100 |
| Februar | K002 | 150 |

## Ergebnis

Zwei Zeilen mit zusammen 250. Es findet keine Schlüsselzuordnung statt.

## Warum funktioniert das?

Anfügen richtet Spalten nach ihrem Namen aus und hängt die Zeilen an. Wiederholte IDs bleiben bestehen; das ist keine Dublettenbereinigung.

## Typischer Fehler

**Symptom:** Betrag und Betrag_EUR nebeneinander. **Ursache:** unterschiedliche Namen. **Lösung:** Spalten vor dem Anfügen harmonisieren.

## Plausibilitätscheck

Zeilenanzahlen addieren: 1 + 1 = 2. Prüfe zusätzlich die Beträge nach Herkunft.
