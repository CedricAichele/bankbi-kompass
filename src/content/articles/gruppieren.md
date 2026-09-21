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
    "granularitaet",
    "ida-aggregation",
    "distinct-oder-gruppieren",
    "eine-zeile-je-person"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-gruppieren.webp",
      "alt": "Alternative Aggregation: Kontenzeilen je Person zählen. Für einen Bestand stattdessen Summe und die Betragsspalte wählen.",
      "caption": "Ersatzaufnahme: Power Query – Gruppieren: Werte je Schlüssel zusammenfassen",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Der vorhandene Dialog zeigt Zeilen zählen. Das neue Hauptbeispiel benötigt Summe von Bestand nach Kunde. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Der vorhandene Dialog zeigt Zeilen zählen. Das neue Hauptbeispiel benötigt Summe von Bestand nach Kunde.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Gruppieren: Werte je Schlüssel zusammenfassen",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Start → Gruppieren nach öffnen.",
          "Kunde wählen; neuer Spaltenname Gesamtbestand; Vorgang Summe; Spalte Bestand. Vor OK aufnehmen."
        ],
        "daten": "| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Kunde, Gesamtbestand, Summe, Bestand im Dialog"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-gruppieren.webp",
        "zweck": "Bedienort und Auswahl für Gruppieren: Werte je Schlüssel zusammenfassen zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": true
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Mehrere Detailzeilen zu einer Zeile pro Gruppe verdichten.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Wähle **Start → Gruppieren nach**.
3. Wähle als Gruppierung **Kunde**, als neuen Spaltennamen **Gesamtbestand**, als Vorgang **Summe** und als Wertespalte **Bestand**.
4. Für mehrere Gruppenschlüssel oder Kennzahlen schalte auf **Erweitert**. Ergänze beispielsweise **Anzahl Zeilen** als Kontenanzahl.
5. Bestätige und kontrolliere eine Gruppe gegen ihre Detailzeilen.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

Nach Kunde gruppieren; Bestand summieren.

### Nachher · Beispielergebnis

| Kunde | Gesamtbestand |
| --- | --- |
| P001 | 3000 |
| P002 | 500 |

## Ergebnis

Eine Zeile je Gruppenschlüsselkombination ersetzt die Detailzeilen.

## Warum funktioniert das?

Die Granularität wechselt hier von Konto zu Kunde. Die Aggregation bestimmt, wie die Bestände innerhalb jeder Gruppe zu einem Ergebnis werden. Summe erhält additive Gesamtbeträge; Durchschnitt teilt dagegen durch die Anzahl vorhandener Zahlen.

## Typischer Fehler

Nach zu vielen Spalten gruppieren oder Anzahl Zeilen mit Anzahl eindeutiger Kunden verwechseln.

## Plausibilitätscheck

Drei Kontozeilen ergeben zwei Kundenzeilen. 3000 + 500 = 3500 bleibt die Gesamtsumme.

## Aggregationen im Vergleich

| Vorgang | Für P001 im Beispiel | Bedeutung |
| --- | --- | --- |
| Anzahl Zeilen | 2 | Zählt Datensätze unabhängig vom Betrag |
| Summe | 3000 | Addiert vorhandene Beträge |
| Durchschnitt | 1500 | Arithmetisches Mittel vorhandener Zahlen |
| Minimum | 1000 | Kleinster vorhandener Betrag |
| Maximum | 2000 | Größter vorhandener Betrag |
| Alle Zeilen | Zwei Detailzeilen als Tabelle | Erhält Details in einer verschachtelten Tabelle |
