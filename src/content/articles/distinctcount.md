---
{
  "id": "distinctcount",
  "slug": "distinctcount",
  "titel": "DISTINCTCOUNT: eindeutige Personen zählen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "DISTINCTCOUNT zählt unterschiedliche Schlüssel im aktuellen Filterkontext, statt jede Kontenzeile zu zählen.",
  "ort": "Power BI → Neues Measure",
  "tags": [
    "DISTINCTCOUNT: eindeutige Personen zählen",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "mehrere konten pro kunde",
    "eine Liste ohne doppelte Werte",
    "eine Zeile je Person",
    "einzigartige Kunden",
    "COUNT vs DISTINCTCOUNT",
    "einzigartige kunden",
    "eindeutige kunden",
    "nur eindeutige kunden"
  ],
  "verwandteThemen": [
    "countrows",
    "granularitaet",
    "eine-zeile-je-person"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/distinctcount-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nPersonen = DISTINCTCOUNT ( Konten[Personennummer] )\n```",
  "schnellschritte": [
    "Vorhandene Tabelle und benötigte Datentypen prüfen.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---

## Wann brauche ich das?

Du möchtest Personen zählen, obwohl eine Person mehrere Konten besitzt.

## Voraussetzungen

Ein vorhandenes Power-BI-Modell mit den im Ausdruck verwendeten Tabellen, Spalten und gegebenenfalls Basismeasures.

## Schritte

1. Verwende eine geladene Tabelle mit den im Ausdruck benötigten Feldern. Prüfe die Datentypen. Die Namen und frei erfundenen Werte im Beispiel illustrieren die Formel; passe Tabellen- und Spaltennamen an dein Modell an.
2. Wähle **Modellierung → Neues Measure**. Ersetze den gesamten Vorgabetext in der Formelleiste durch die Formel im Beispiel.
3. Bestätige mit Enter. Bei lokalisierter DAX-Trennzeicheneinstellung Kommas gegebenenfalls durch Semikolons ersetzen. Prüfe, ob das Measure ohne Fehlermeldung im Datenbereich erscheint.
4. Füge im Bericht ein Tabellenvisual hinzu. Ziehe `Personennummer` und das neue Measure in die Tabelle. Für die Gesamtprüfung verwende zusätzlich eine Karte mit nur dem Measure.
5. Füge einen Datenschnitt mit `Konten[Produktgruppe]` hinzu. Wähle zunächst Einlagen und vergleiche mit den erwarteten Zahlen.
6. Entferne die Auswahl über das Radierersymbol des Datenschnitts. Teste anschließend den beschriebenen Personenfilter und kontrolliere den Unterschied.

## Beispiel

### Vorher · Beispieldaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |


### Aktion

```dax
Personen = DISTINCTCOUNT ( Konten[Personennummer] )
```

### Nachher · Beispielergebnis

4 Personen bei 6 Kontenzeilen. Bei Person P001: 1 Person und 2 Zeilen.

## Ergebnis

Die unterschiedlichen Werte einer Spalte werden im aktuellen Filterkontext gezählt.

## Warum funktioniert das?

Das einzige Argument ist die Spalte mit der Personenkennung. Gleiche Werte werden im jeweiligen Filterkontext einmal gezählt. Ein BLANK kann als eigener Wert mitzählen; bei Bedarf DISTINCTCOUNTNOBLANK verwenden.

## Typischer Fehler

**Symptom:** Gesamtergebnis ist kleiner als die Summe der Produktgruppen. **Ursache:** Eine Person kommt in mehreren Gruppen vor. **Lösung:** Eindeutige Gesamtzahl akzeptieren, statt Gruppenwerte zu addieren.

## Plausibilitätscheck

Liste P001, P002, P003, P004 manuell auf. Einlagen haben 3 Personen, Anlagen 1, Kredite 2; insgesamt bleiben es 4.

## Argumente verstehen

| Argument | Bedeutung |
| --- | --- |
| Spalte | Spalte, deren unterschiedliche Werte gezählt werden. BLANK kann als eigener Wert mitzählen; für Ausschluss DISTINCTCOUNTNOBLANK prüfen. |
