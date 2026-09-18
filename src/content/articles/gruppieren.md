---
{
  "id": "gruppieren",
  "slug": "gruppieren",
  "titel": "Gruppieren: Werte je Schlüssel zusammenfassen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Gruppieren erzeugt eine Zeile je Schlüsselkombination und berechnet dazu passende Aggregationen.",
  "ort": "Power Query → Start → Gruppieren nach",
  "tags": [
    "Gruppieren: Werte je Schlüssel zusammenfassen",
    "Reporting"
  ],
  "synonyme": [
    "eine Zeile je Person",
    "nur eindeutige kunden"
  ],
  "verwandteThemen": [
    "eine-zeile-je-person",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-gruppieren.webp",
      "alt": "Alternative Aggregation: Kontenzeilen je Person zählen. Für einen Bestand stattdessen Summe und die Betragsspalte wählen.",
      "caption": "Alternative Aggregation: Kontenzeilen je Person zählen. Für einen Bestand stattdessen Summe und die Betragsspalte wählen.",
      "schritt": 4,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Du brauchst eine Zeile je Person statt einer Zeile je Konto.

## Voraussetzungen

Synthetische Daten; Power Query in Power BI Desktop oder Excel. Die Menübezeichnung kann je Version leicht abweichen.

## Schritte

1. Öffne in Power BI **Start → Daten transformieren**. In Excel: Quelldaten als Tabelle formatieren und **Daten → Aus Tabelle/Bereich** wählen. Die folgenden Aktionen erfolgen im Power-Query-Editor.
2. Verwende die Tabelle Konten aus dem Beispiel. Prüfe Bestand_EUR auf Zahl und Personennummer auf Text.
3. Klicke Personennummer an und wähle Start → Gruppieren nach.
4. Trage als neuen Spaltennamen Personenbestand ein. Wähle Vorgang Summe und Spalte Bestand_EUR. Bestätige mit OK.
5. Prüfe vier Ergebniszeilen. Kontonummer und Produktgruppe fehlen nun bewusst, weil sie nicht zur Gruppenebene gehören.
6. Falls mehrere Stichtage vorkommen, wähle im Dialog Erweitert und ergänze den Stichtag als zweiten Gruppierungsschlüssel.
7. Prüfe im rechten Bereich Angewendete Schritte die Vorschau vor und nach der Aktion. In Power BI abschließend Schließen & übernehmen, in Excel Schließen & laden wählen.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

## Ergebnis

P001 = 2.000, P002 = 2.000, P003 = 4.000, P004 = 1.000.

## Warum funktioniert das?

Die Gruppierung sammelt Zeilen mit gleichem Schlüssel. Summe aggregiert deren Beträge; Zeilen zählen wäre eine andere Operation.

## Typischer Fehler

**Symptom:** 2 statt 2.000 für P001. **Ursache:** Zeilen zählen gewählt. **Lösung:** Summe auf Bestand_EUR; bei Textwerten zuerst den Typ berichtigen.

## Plausibilitätscheck

Vorher 6 Konten, nachher 4 Personen; Summe bleibt 9.000.
