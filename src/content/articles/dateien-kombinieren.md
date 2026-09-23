---
{
  "id": "dateien-kombinieren",
  "slug": "dateien-kombinieren",
  "titel": "Mehrere Dateien kombinieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten importieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Ordnerimport kombiniert gleich aufgebaute Dateien mit derselben Transformationsregel.",
  "ort": "Power Query → Daten abrufen → Aus Ordner",
  "tags": [
    "Mehrere Dateien kombinieren",
    "Reporting"
  ],
  "synonyme": [
    "mehrere Dateien zusammenführen",
    "Mehrere Dateien kombinieren"
  ],
  "verwandteThemen": [
    "anhaengen",
    "pq-fehler",
    "pq-laden",
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/connectors/folder"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Importdialog – Mehrere Dateien kombinieren",
      "caption": "Geplante Aufnahme: Importdialog – Mehrere Dateien kombinieren",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Importdialog – Mehrere Dateien kombinieren",
        "klickfolge": [
          "Prüfe den Ordner: Dateien müssen denselben fachlichen Aufbau, passende Spaltennamen und ein kompatibles Format besitzen. Entferne keine Originaldateien; schließe unpassende Dateien in der Abfrage aus.",
          "Wähle **Start → Daten abrufen → Ordner** und den Ordner, der die zu kombinierenden Dateien enthält.",
          "Wähle **Daten transformieren**. Filtere die Dateiliste nach Erweiterung, Ordnerpfad und bei Bedarf Namen; schließe temporäre Dateien aus.",
          "Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich."
        ],
        "daten": "Januar.csv: Konto/Betrag mit K001/10 und K002/20. Februar.csv: dieselben Spalten mit K001/15.",
        "sichtbar": [
          "Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich.",
          "Spaltenüberschriften und zugehörige Ausgangswerte"
        ],
        "ausschnitt": "Importdialog – Mehrere Dateien kombinieren mit Alle passenden CSV-Dateien mit derselben Transformation lesen und anfügen., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-dateien-kombinieren.webp",
        "zweck": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Regelmäßig mehrere gleich aufgebaute Dateien aus einem Ordner zusammenführen.

## Voraussetzungen

Zugriff auf die gewünschte Quelle und Kenntnis ihres fachlichen Aufbaus.

## Schritte

1. Prüfe den Ordner: Dateien müssen denselben fachlichen Aufbau, passende Spaltennamen und ein kompatibles Format besitzen. Entferne keine Originaldateien; schließe unpassende Dateien in der Abfrage aus.
2. In Excel liegt der Einstieg unter **Daten → Daten abrufen → Aus Datei → Aus Ordner**. In Power BI wähle **Start → Daten abrufen → Ordner** und den Ordner, der die zu kombinierenden Dateien enthält.
3. Wähle **Daten transformieren**. Filtere die Dateiliste nach Erweiterung, Ordnerpfad und bei Bedarf Namen; schließe temporäre Dateien aus.
4. Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich.
5. Prüfe die erzeugte Hilfsabfrage **Beispieldatei transformieren**. Ihre Schritte werden über eine Funktion auf jede Datei angewandt.
6. Kontrolliere die kombinierte Ergebnisabfrage. Behalte den Quelldateinamen zur Prüfung bei. Abweichende Spalten, Tabellenblätter oder Typen können Fehler oder fehlende Werte verursachen.
7. Vergleiche Zeilenzahlen je Quelldatei und teste die Aktualisierung mit einer weiteren gleich aufgebauten Datei.

## Beispiel

### Vorher · Beispieldaten

Januar.csv: Konto/Betrag mit K001/10 und K002/20. Februar.csv: dieselben Spalten mit K001/15.

### Aktion

Alle passenden CSV-Dateien mit derselben Transformation lesen und anfügen.

### Nachher · Beispielergebnis

| Quelldatei | Konto | Betrag |
| --- | --- | --- |
| Januar.csv | K001 | 10 |
| Januar.csv | K002 | 20 |
| Februar.csv | K001 | 15 |

## Ergebnis

Eine gemeinsame Abfrage enthält die Zeilen aller ausgewählten, kompatiblen Dateien.

## Warum funktioniert das?

Die Transformation wird anhand einer Datei definiert und für jede gefilterte Datei wiederverwendet. Deshalb ist ein einheitlicher Aufbau entscheidend; Append sammelt anschließend die Ergebnisse.

## Typischer Fehler

Eine zufällige Beispieldatei wählen und Strukturabweichungen mit Fehler entfernen verbergen.

## Plausibilitätscheck

2 + 1 = 3 Zeilen und Summe 45. Jede Quelldatei ist im Ergebnis nachvollziehbar.
