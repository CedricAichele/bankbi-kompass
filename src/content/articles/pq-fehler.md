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
  "kategorie": "Power Query & Datenaufbereitung",
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
    "nullwerte",
    "pq-duplizieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/dealing-with-errors",
    "https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Fehlerhafte Werte prüfen",
      "caption": "Geplante Aufnahme: Power Query – Fehlerhafte Werte prüfen",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Fehlerhafte Werte prüfen",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Betrag mit den Textwerten 100 und unbekannt laden; Datentyp auf Zahl ändern.",
          "Error-Zelle von K002 anklicken und die Fehlerdetails unterhalb der Vorschau sichtbar lassen."
        ],
        "daten": "| Konto | Betrag als Text |\n| --- | --- |\n| K001 | 100 |\n| K002 | unbekannt |",
        "sichtbar": [
          "Error-Zelle, Ursache der Typumwandlung und Angewendete Schritte"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-pq-fehler.webp",
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

Fehlerhafte Umwandlungen erkennen, Ursachen prüfen und begründet behandeln.

## Voraussetzungen

Eine vorhandene Abfrage mit den benötigten Spalten.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Suche im Schritt **Geänderter Typ** nach **Error**-Zellen. Klicke auf eine Fehlerzelle, um die Fehlermeldung zu lesen.
3. Prüfe den vorherigen Schritt: Hier lässt sich unbekannt nicht in eine Zahl umwandeln. Ein Fehler ist etwas anderes als ein fehlender Wert null.
4. Für eine getrennte Fehlerliste dupliziere die Abfrage **vor der Fehlerbehandlung** und wähle in der Kopie auf der Betragsspalte **Start → Zeilen beibehalten → Fehler beibehalten**.
5. Korrigiere bevorzugt die Ursache: falscher Datentyp, falsches Gebietsschema oder ungültiger Quelltext.
6. Wenn fachlich vereinbart, nutze **Transformieren → Werte ersetzen → Fehler ersetzen**, etwa durch null. **Start → Zeilen entfernen → Fehler entfernen** verwirft dagegen ganze Zeilen und braucht einen Ausschlussnachweis.
7. Vergleiche Fehleranzahl, Zeilenzahl und Summen vor/nach der Behandlung.

## Beispiel

### Vorher · Beispieldaten

| Konto | Betrag als Text |
| --- | --- |
| K001 | 100 |
| K002 | unbekannt |

### Aktion

Ungültigen Text prüfen; gemäß dokumentierter Regel als fehlenden Betrag erhalten.

### Nachher · Beispielergebnis

| Konto | Betrag |
| --- | --- |
| K001 | 100 |
| K002 | null |

## Ergebnis

Fehlerursachen sind nachvollziehbar; korrigierte oder ausgeschlossene Werte werden nicht stillschweigend übergangen.

## Warum funktioniert das?

Ein Umwandlungsfehler sagt, dass ein vorhandener Inhalt die verlangte Interpretation nicht erfüllt. Ein Ersatz ist daher eine fachliche Entscheidung und keine automatische Reparatur der Quelle.

## Typischer Fehler

Alle Fehlerzeilen löschen und dadurch vollständige Konten verlieren.

## Plausibilitätscheck

Zwei Konten bleiben; ein Betrag ist 100, einer unbekannt. Die getrennte Prüf-Abfrage auf dem Stand vor der Ersetzung enthält genau K002. Eine Referenz auf das bereits bereinigte Endergebnis würde diese Fehler nicht mehr zeigen.

## Passender M-Code

[Fehlerbehandlung: Beispiel, Ergebnis und Anpassung](#/wissen/power-query-m?funktion=try%20%E2%80%A6%20otherwise) in der praktischen M-Referenz.
