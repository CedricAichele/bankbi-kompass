---
{
  "id": "power-query",
  "slug": "power-query",
  "titel": "Was ist Power Query?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Power Query bereitet Daten wiederholbar auf. Das Datenmodell verbindet Tabellen, DAX berechnet Kennzahlen und Visuals stellen Ergebnisse dar.",
  "ort": "Power BI: Daten transformieren · Excel: Daten → Abfragen & Verbindungen",
  "tags": [
    "Power Query",
    "Reporting"
  ],
  "synonyme": [
    "mehrere Dateien zusammenführen",
    "Power Query"
  ],
  "verwandteThemen": [
    "pq-workflow",
    "pq-duplizieren",
    "excel-power-query",
    "beziehungen",
    "measure"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/power-query-ui",
    "https://learn.microsoft.com/en-us/power-query/applied-steps"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-power-query.webp",
      "alt": "Power Query mit sechs synthetischen Kontenzeilen.",
      "caption": "Tabellenvorschau im Power Query-Editor.",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Die Abbildung zeigt sechs synthetische Kontenzeilen. Menübezeichnungen können je Version abweichen.",
      "todo": "Sehr breiter Ausschnitt mit kleiner Schrift; Angewendete Schritte rechts fehlen. Die Orientierung braucht Abfragen, Vorschau und Schrittbereich gemeinsam.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Was ist Power Query?",
        "klickfolge": [
          "In Power BI **Start → Daten transformieren**, in Excel **Daten → Daten abrufen** bzw. **Aus Tabelle/Bereich** öffnen. Der Editor enthält Abfragen links, Vorschau in der Mitte und Abfrageeinstellungen rechts.",
          "Wähle eine Abfrage. Sie ist eine Transformationsanweisung an eine Quelle, keine von Hand gepflegte Ergebnistabelle. Beginne bei neuen Daten mit dem [Aufbereitungsworkflow](#/wissen/pq-workflow).",
          "Unter **Ansicht → Abfrageeinstellungen** den Bereich **Angewendete Schritte** einblenden. Quelle, Navigation und Geänderter Typ können schon automatisch vorhanden sein.",
          "Klicke nacheinander auf Schritte, um Zwischenstände zu sehen. Jede über die Oberfläche hinzugefügte Transformation wird normalerweise als weiterer Schritt festgehalten. Namen wie „Schlüssel als Text“ machen die Absicht verständlich.",
          "Rechtsklick auf einen Schritt → **Umbenennen**. Über das Zahnrad lassen sich Einstellungen ändern, sofern der Schritt einen entsprechenden Dialog besitzt. Über X bzw. **Löschen** einen Schritt entfernen. Danach alle folgenden Schritte auf Fehler prüfen.",
          "Kontrolliere die Reihenfolge: Eine entfernte Spalte kann später nicht mehr verwendet werden; ein Filter vor einer Gruppierung verändert die Summe. Prüfe den letzten Schritt vor dem Laden.",
          "Power BI: **Schließen & übernehmen** lädt ins Modell. Excel: **Schließen & laden** bzw. **Schließen & laden in…** wählt Tabelle, Verbindung oder Datenmodell. [Excel-spezifischer Einstieg](#/wissen/excel-power-query)."
        ],
        "daten": "| Ebene | Aufgabe | Beispiel |\n| --- | --- | --- |\n| Power Query | Daten vorbereiten | Kennungen als Text und Beträge als Zahl lesen |\n| Datenmodell | Tabellen verbinden | Kunden filtern ihre Konten über eine Beziehung |\n| DAX | Kennzahl berechnen | Bestand im aktuellen Filterkontext summieren |\n| Visual | Ergebnis darstellen | Summe je Segment als Balken |\n\n**Schrittkette:** Quelle → Navigation → Schlüssel als Text → Text bereinigt → Ergebnis geprüft.\n\nWird „Schlüssel als Text“ geändert, werden die nachfolgenden Schritte auf diesem neuen Zwischenstand ausgewertet.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "excel-power-query.webp",
        "zweck": "Power Query bereitet Daten wiederholbar auf. Das Datenmodell verbindet Tabellen, DAX berechnet Kennzahlen und Visuals stellen Ergebnisse dar.",
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

Power Query bereitet Daten wiederholbar auf. Das Datenmodell verbindet Tabellen, DAX berechnet Kennzahlen und Visuals stellen Ergebnisse dar.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. In Power BI **Start → Daten transformieren**, in Excel **Daten → Daten abrufen** bzw. **Aus Tabelle/Bereich** öffnen. Der Editor enthält Abfragen links, Vorschau in der Mitte und Abfrageeinstellungen rechts.
2. Wähle eine Abfrage. Sie ist eine Transformationsanweisung an eine Quelle, keine von Hand gepflegte Ergebnistabelle. Beginne bei neuen Daten mit dem [Aufbereitungsworkflow](#/wissen/pq-workflow).
3. Unter **Ansicht → Abfrageeinstellungen** den Bereich **Angewendete Schritte** einblenden. Quelle, Navigation und Geänderter Typ können schon automatisch vorhanden sein.
4. Klicke nacheinander auf Schritte, um Zwischenstände zu sehen. Jede über die Oberfläche hinzugefügte Transformation wird normalerweise als weiterer Schritt festgehalten. Namen wie „Schlüssel als Text“ machen die Absicht verständlich.
5. Rechtsklick auf einen Schritt → **Umbenennen**. Über das Zahnrad lassen sich Einstellungen ändern, sofern der Schritt einen entsprechenden Dialog besitzt. Über X bzw. **Löschen** einen Schritt entfernen. Danach alle folgenden Schritte auf Fehler prüfen.
6. Kontrolliere die Reihenfolge: Eine entfernte Spalte kann später nicht mehr verwendet werden; ein Filter vor einer Gruppierung verändert die Summe. Prüfe den letzten Schritt vor dem Laden.
7. Power BI: **Schließen & übernehmen** lädt ins Modell. Excel: **Schließen & laden** bzw. **Schließen & laden in…** wählt Tabelle, Verbindung oder Datenmodell. [Excel-spezifischer Einstieg](#/wissen/excel-power-query).

## Beispiel

| Ebene | Aufgabe | Beispiel |
| --- | --- | --- |
| Power Query | Daten vorbereiten | Kennungen als Text und Beträge als Zahl lesen |
| Datenmodell | Tabellen verbinden | Kunden filtern ihre Konten über eine Beziehung |
| DAX | Kennzahl berechnen | Bestand im aktuellen Filterkontext summieren |
| Visual | Ergebnis darstellen | Summe je Segment als Balken |

**Schrittkette:** Quelle → Navigation → Schlüssel als Text → Text bereinigt → Ergebnis geprüft.

Wird „Schlüssel als Text“ geändert, werden die nachfolgenden Schritte auf diesem neuen Zwischenstand ausgewertet.

## Ergebnis

Eine nachvollziehbare Schrittkette bereitet die Quelle auf und liefert eine Tabelle an das gewählte Ladeziel.

## Warum funktioniert das?

Die Abfrage speichert Verarbeitungsschritte. Eine Aktualisierung führt diese Logik mit den dann verfügbaren Quelldaten erneut aus; Änderungen in der Vorschau ändern die Quelldatei nicht.

## Typischer Fehler

Power Query mit dem Modell verwechseln oder erwarten, dass eine Referenz eine dauerhaft zwischengespeicherte Kopie ist.

## Plausibilitätscheck

Die Endtabelle hat die geplanten Spalten, Typen und Zeilen. Kontrolliere bei einer späteren Quellenänderung erneut das Ergebnis.

## Angewendete Schritte

**Quelle** stellt die Verbindung her, **Navigation** wählt eine Tabelle. **Geänderter Typ** interpretiert Werte; kontrolliere automatisch eingefügte Typen. **Entfernte Spalten** begrenzt den Umfang; **Zusammengeführte Abfragen** ergänzt eine Zuordnung. Für Fehler beim Aktualisieren gehe vom ersten fehlerhaften Schritt aus zurück. Das Löschen eines früheren Schritts kann alle späteren Spaltenbezüge ungültig machen.
