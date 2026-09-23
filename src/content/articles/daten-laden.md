---
{
  "id": "daten-laden",
  "slug": "daten-laden",
  "titel": "Daten in Power BI laden",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Daten importieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wähle eine passende Quelle und entscheide vor dem Laden, ob Struktur, Typen oder Zeilen noch aufbereitet werden müssen.",
  "ort": "Power BI: Start → Daten abrufen · Excel: Daten → Daten abrufen",
  "tags": [
    "Daten laden / importieren",
    "Reporting"
  ],
  "synonyme": [
    "neue daten power bi",
    "daten importieren",
    "Excel-Datei importieren",
    "Daten laden / importieren"
  ],
  "verwandteThemen": [
    "csv-import",
    "dateien-kombinieren",
    "power-query",
    "import-oder-directquery",
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/connectors/excel",
    "https://learn.microsoft.com/en-us/power-query/connectors/text-csv",
    "https://learn.microsoft.com/en-us/power-query/connectors/folder"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power BI – Daten abrufen",
      "caption": "Geplante Aufnahme: Power BI – Daten abrufen",
      "schritt": 6,
      "schema": false,
      "status": "todo",
      "todo": "Zeigen, dass zahlreiche Quelltypen verfügbar sind.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Daten in Power BI laden",
        "klickfolge": [
          "**Power BI Desktop → Start → Daten abrufen** öffnen. Wähle die Quelle nach Herkunft der Daten, nicht nach dem gewünschten Diagramm.",
          "**Excel:** Datei wählen und im Navigator möglichst eine benannte Tabelle auswählen. Ein Arbeitsblatt kann zusätzliche Titel, Leerzeilen oder Summen enthalten. Kontrolliere den tatsächlich erkannten Bereich.",
          "**Text/CSV:** Trennzeichen, Dateiursprung/Encoding und Vorschau prüfen. Kennungen mit führenden Nullen vor einer automatischen Zahlumwandlung schützen. Vertiefung: [CSV korrekt importieren](#/wissen/csv-import).",
          "**Ordner:** Gleich aufgebaute Dateien gemeinsam einlesen. Dateiliste vor dem Kombinieren nach Endung und fachlichem Umfang filtern; temporäre Dateien und alte Versionen ausschließen. [Ordnerimport](#/wissen/dateien-kombinieren).",
          "**Datenbank:** Den passenden Connector verwenden, berechtigte Verbindung und benötigte Tabellen/Views wählen. Import liest Daten ein; DirectQuery fragt die Quelle zur Berichtszeit ab und hat andere Anforderungen. [Modus auswählen](#/wissen/import-oder-directquery).",
          "**Laden** wählen, wenn die Vorschau bereits eine saubere Tabelle zeigt. **Daten transformieren** wählen, wenn Typen, Kopfzeile, fehlende Werte oder Struktur geprüft und bearbeitet werden müssen.",
          "Nach dem Import mit dem [Power-Query-Workflow](#/wissen/pq-workflow) weiterarbeiten. Anschließend im Modell Beziehungen und Kennzahlen aufbauen."
        ],
        "daten": "| Quelle | Beobachtung | Entscheidung |\n| --- | --- | --- |\n| Excel-Tabelle Konten | Eine Kopfzeile, Kennung als Text, Betrag numerisch | Laden nach Kontrolle möglich |\n| CSV-Auszug | 00123 und 1.250,50 als Text | Transformieren und Typen bewusst festlegen |\n| Monatsordner | Mehrere gleich aufgebaute Dateien | Dateiliste prüfen, dann kombinieren |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-daten-abrufen.webp",
        "zweck": "Wähle eine passende Quelle und entscheide vor dem Laden, ob Struktur, Typen oder Zeilen noch aufbereitet werden müssen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Wähle eine passende Quelle und entscheide vor dem Laden, ob Struktur, Typen oder Zeilen noch aufbereitet werden müssen.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. **Power BI Desktop → Start → Daten abrufen** öffnen. Wähle die Quelle nach Herkunft der Daten, nicht nach dem gewünschten Diagramm.
2. **Excel:** Datei wählen und im Navigator möglichst eine benannte Tabelle auswählen. Ein Arbeitsblatt kann zusätzliche Titel, Leerzeilen oder Summen enthalten. Kontrolliere den tatsächlich erkannten Bereich.
3. **Text/CSV:** Trennzeichen, Dateiursprung/Encoding und Vorschau prüfen. Kennungen mit führenden Nullen vor einer automatischen Zahlumwandlung schützen. Vertiefung: [CSV korrekt importieren](#/wissen/csv-import).
4. **Ordner:** Gleich aufgebaute Dateien gemeinsam einlesen. Dateiliste vor dem Kombinieren nach Endung und fachlichem Umfang filtern; temporäre Dateien und alte Versionen ausschließen. [Ordnerimport](#/wissen/dateien-kombinieren).
5. **Datenbank:** Den passenden Connector verwenden, berechtigte Verbindung und benötigte Tabellen/Views wählen. Import liest Daten ein; DirectQuery fragt die Quelle zur Berichtszeit ab und hat andere Anforderungen. [Modus auswählen](#/wissen/import-oder-directquery).
6. **Laden** wählen, wenn die Vorschau bereits eine saubere Tabelle zeigt. **Daten transformieren** wählen, wenn Typen, Kopfzeile, fehlende Werte oder Struktur geprüft und bearbeitet werden müssen.
7. Nach dem Import mit dem [Power-Query-Workflow](#/wissen/pq-workflow) weiterarbeiten. Anschließend im Modell Beziehungen und Kennzahlen aufbauen.

## Beispiel

| Quelle | Beobachtung | Entscheidung |
| --- | --- | --- |
| Excel-Tabelle Konten | Eine Kopfzeile, Kennung als Text, Betrag numerisch | Laden nach Kontrolle möglich |
| CSV-Auszug | 00123 und 1.250,50 als Text | Transformieren und Typen bewusst festlegen |
| Monatsordner | Mehrere gleich aufgebaute Dateien | Dateiliste prüfen, dann kombinieren |

## Ergebnis

Die ausgewählte Quelle steht als Abfrage bereit. Du weißt, ob sie direkt geladen werden kann oder zuerst im Editor geprüft werden muss.

## Warum funktioniert das?

Ein Connector liefert die Quelldaten. Die gespeicherten Abfrageschritte legen fest, wie sie bei jeder Aktualisierung aufbereitet werden. Laden erzeugt noch kein fachlich korrektes Datenmodell.

## Typischer Fehler

Ein ganzes Arbeitsblatt einschließlich Titel- und Summenzeilen importieren oder mit einer automatisch erkannten Zahlkennung Nullen verlieren.

## Plausibilitätscheck

Prüfe Tabellenname, Zeilenzahl, Zeitraum und eine Kontrollsumme gegen die Quelle. Eine Vorschau allein beweist keine Vollständigkeit.
