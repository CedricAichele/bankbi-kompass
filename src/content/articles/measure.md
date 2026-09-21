---
{
  "id": "measure",
  "slug": "measure",
  "titel": "Measure erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Measure berechnet eine Kennzahl für die aktuelle Auswahl im Bericht.",
  "ort": "Power BI → Modellierung → Neues Measure",
  "tags": [
    "Measure erstellen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "filterkontext",
    "calculate",
    "measure-spalte",
    "divide"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-measures",
    "https://learn.microsoft.com/en-us/dax/sum-function-dax",
    "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
    "https://learn.microsoft.com/en-us/dax/distinctcount-function-dax",
    "https://learn.microsoft.com/en-us/dax/divide-function-dax"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power BI – Measures organisieren",
      "caption": "Geplante Aufnahme: Power BI – Measures organisieren",
      "schritt": 7,
      "schema": false,
      "status": "todo",
      "todo": "Optionale Organisation ohne technische Pflicht zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Measures organisieren",
        "klickfolge": [
          "Start → Daten eingeben; Kennzahlen mit einer Hilfsspalte und einer Zeile anlegen.",
          "Measure Gesamtbestand auswählen.",
          "Measuretools → Basistabelle → Kennzahlen wählen.",
          "Hilfsspalte im Modell ausblenden."
        ],
        "daten": "| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Kennzahlen-Tabelle",
          "Measure-Symbol",
          "Basistabelle-Einstellung"
        ],
        "ausschnitt": "Power BI – Measures organisieren mit Kennzahlen-Tabelle, Measure-Symbol, Basistabelle-Einstellung. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-measure-tabelle.webp",
        "zweck": "Optionale Organisation ohne technische Pflicht zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    },
    {
      "src": "images/power-bi/pbi-measure.webp",
      "alt": "Neues Measure: Gesamtbestand = SUM(Konten[Bestand_EUR]).",
      "caption": "Ersatzaufnahme: Power BI – Neues Measure",
      "schritt": 2,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Formelleiste gut erkennbar, aber alte Tabelle Konten statt Fakt und kleine Schrift. An das neue Measure-Beispiel anpassen. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Formelleiste gut erkennbar, aber alte Tabelle Konten statt Fakt und kleine Schrift. An das neue Measure-Beispiel anpassen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Neues Measure",
        "klickfolge": [
          "Tabelle Fakt mit den Beispieldaten laden.",
          "Im Datenbereich Fakt auswählen.",
          "Modellierung → Neues Measure; Gesamtbestand = SUM ( Fakt[Bestand] ) eingeben."
        ],
        "daten": "| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Formelleiste mit Name und Formel",
          "Tabelle Fakt im Datenbereich"
        ],
        "ausschnitt": "Power BI – Neues Measure mit Formelleiste mit Name und Formel, Tabelle Fakt im Datenbereich. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-measure-formelleiste.webp",
        "zweck": "Bedienort und vollständigen Ausdruck sichtbar machen.",
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
  "praxis": true,
  "kurzformel": "```dax\nGesamtbestand = SUM ( Fakt[Bestand] )\n```",
  "schnellschritte": [
    "Im Datenbereich die gewünschte Basistabelle auswählen.",
    "Modellierung → Neues Measure; Name und Formel eingeben.",
    "Im Visual mit und ohne Filter kontrollieren."
  ]
}
---

## Wann brauche ich das?

Eine Kennzahl soll für die aktuelle Auswahl im Bericht berechnet werden.

## Voraussetzungen

Eine geladene Faktentabelle mit numerischen Beträgen und geeigneten Schlüsseln.

## Schritte

1. Wähle im **Datenbereich** die Tabelle, in der das Measure organisiert werden soll. Im Beispiel heißt sie **Fakt**.
2. Wähle **Modellierung → Neues Measure**. Ersetze in der Formelleiste den Vorgabetext durch **Gesamtbestand = SUM ( Fakt[Bestand] )**.
3. Bestätige mit Enter. Der Name vor dem Gleichheitszeichen ist der wiederverwendbare Anzeigename; die Formel dahinter berechnet das Ergebnis.
4. Ziehe **Gesamtbestand** in ein Karten- oder Tabellenvisual. Im Beispiel ergibt die ungefilterte Karte 3500.
5. Füge einen Datenschnitt aus **Fakt[Kunde]** hinzu und wähle P001. Das Measure wird im neuen Kontext erneut ausgewertet und liefert 3000.
6. Lege bei Bedarf weitere Measures jeweils einzeln mit **Neues Measure** an. Passe ihre Namen an die fachliche Bedeutung an.
7. Optional: Organisiere Measures in einer eigenen Tabelle. Erzeuge über **Start → Daten eingeben** eine kleine Tabelle **Kennzahlen** mit einer Hilfsspalte. Wähle für vorhandene Measures unter **Measuretools → Basistabelle** diese Tabelle und blende die Hilfsspalte aus. Die Tabelle ist nur eine Organisationshilfe.

## Beispiel

### Vorher · Beispieldaten

**Fakt**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

```dax
Gesamtbestand = SUM ( Fakt[Bestand] )
Anzahl Zeilen = COUNTROWS ( Fakt )
Kunden = DISTINCTCOUNT ( Fakt[Kunde] )

// Teil und Gesamt müssen bereits vorhandene Measures sein:
Quote = DIVIDE ( [Teil], [Gesamt] )
```

### Nachher · Beispielergebnis

| Kontext | Gesamtbestand | Anzahl Zeilen | Kunden |
| --- | --- | --- | --- |
| Keine Auswahl | 3500 | 3 | 2 |
| Kunde P001 | 3000 | 2 | 1 |

Für Teil = 30 und Gesamt = 100 ergibt Quote 0,3; als Prozent formatiert 30 %.

## Ergebnis

Ein benanntes Measure liefert bei jeder Abfrage eine Kennzahl für den jeweiligen Filterkontext.

## Warum funktioniert das?

Das Measure speichert keine feste Zahl je Datenzeile. Ein Slicer, eine Visualzeile und aktive Beziehungen bestimmen, welche Daten bei der Auswertung berücksichtigt werden. Darum ändert sich dieselbe Formel mit der Auswahl.

## Typischer Fehler

Ein Measure mit einer berechneten Spalte verwechseln oder aus der Basistabelle seine Berechnungslogik ableiten: Die Basistabelle organisiert das Measure, sie begrenzt nicht automatisch dessen Daten.

## Plausibilitätscheck

Ohne Filter 3500, bei P001 3000; drei Zeilen enthalten nur zwei unterschiedliche Kunden. Ein leerer oder nullwertiger Nenner liefert bei DIVIDE ohne Alternative BLANK.

## Measures organisieren

Eine eigene Kennzahlentabelle erleichtert das Finden, ist aber technisch nicht erforderlich. Alternativ bleiben Measures bei ihrer fachlich passenden Tabelle und werden über Anzeigeordner gruppiert. Ausgeblendete technische Spalten vereinfachen den Datenbereich; sie ändern keine Berechnung.
