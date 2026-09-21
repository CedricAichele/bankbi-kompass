---
{
  "id": "power-query",
  "slug": "power-query",
  "titel": "Power Query",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Power Query bereitet Daten beim Aktualisieren vor. Wähle die Transformation nach deinem Ziel: Spalten ergänzen, Zeilen stapeln oder Daten verdichten.",
  "ort": "Power BI: Daten transformieren · Excel: Daten → Abfragen & Verbindungen",
  "tags": [
    "Power Query",
    "Reporting"
  ],
  "synonyme": [
    "mehrere Dateien zusammenführen"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "anhaengen",
    "gruppieren",
    "measure"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/power-query-ui"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-power-query.webp",
      "alt": "Power Query mit sechs synthetischen Kontenzeilen.",
      "caption": "Tabellenvorschau im Power Query-Editor.",
      "schritt": 1,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Die Abbildung zeigt sechs synthetische Kontenzeilen. Menübezeichnungen können je Version abweichen.",
      "todo": "Sehr breiter Ausschnitt mit kleiner Schrift; Angewendete Schritte rechts fehlen. Die Orientierung braucht Abfragen, Vorschau und Schrittbereich gemeinsam.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – Power Query öffnen",
        "klickfolge": [
          "Beispieltabelle mit den sechs Kontenzeilen in Excel eintragen.",
          "Eine Zelle wählen → Einfügen → Tabelle; Tabelle hat Überschriften aktivieren.",
          "Daten → Aus Tabelle/Bereich wählen."
        ],
        "daten": "| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |\n| --- | --- | --- | --- |\n| K001 | P001 | Einlagen | 1250 |\n| K002 | P001 | Anlagen | 750 |\n| K003 | P002 | Einlagen | 2000 |\n| K004 | P003 | Kredite | 3200 |\n| K005 | P003 | Einlagen | 800 |\n| K006 | P004 | Kredite | 1000 |",
        "sichtbar": [
          "Excel-Register Daten",
          "Aus Tabelle/Bereich",
          "Markierte Excel-Tabelle"
        ],
        "ausschnitt": "Excel – Power Query öffnen mit Excel-Register Daten, Aus Tabelle/Bereich, Markierte Excel-Tabelle. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "excel-power-query.webp",
        "zweck": "Den Excel-Einstieg in denselben Transformationseditor zeigen.",
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

Eine wiederkehrende Bereinigung soll beim Aktualisieren erneut ausgeführt werden.

## Voraussetzungen

Ein vorhandener Datenbestand mit den genannten Feldern. Die Tabelle im Beispiel dient ausschließlich zur Veranschaulichung.

## Schritte

1. Öffne in Power BI **Start → Daten transformieren**. In Excel wähle eine Zelle in einer vorhandenen Excel-Tabelle und **Daten → Aus Tabelle/Bereich**.
2. Prüfe links die Abfragenamen und wähle Konten. Die Vorschau in der Mitte gehört immer zum ausgewählten Schritt.
3. Markiere Kontonummer und setze den Typ Text; setze Bestand_EUR auf Dezimalzahl.
4. Klicke die Überschrift Produktgruppe mit rechts an und benenne sie testweise in Produkt um.
5. Klicke rechts nacheinander Quelle und Umbenannte Spalten. Beobachte, dass der alte Name beim frühen Schritt noch existiert.
6. Behalte die Umbenennung für das gezeigte Beispiel. Zum Rückgängigmachen kannst du den Schritt über dessen X entfernen; dann heißt die Spalte wieder Produktgruppe. Spätere Schritte können vom Namen abhängen.
7. Erstelle für alternative Auswertungen per Rechtsklick auf Konten eine Referenz, damit die Basisabfrage erhalten bleibt.
8. Prüfe im rechten Bereich Angewendete Schritte die Vorschau vor und nach der Aktion. In Power BI abschließend Schließen & übernehmen, in Excel Schließen & laden wählen.

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

Datentyp prüfen und Produktgruppe in Produkt umbenennen.

### Nachher · Beispielergebnis

Die sechs Zeilen und Summe 9000 bleiben erhalten; die Spalte heißt nun Produkt.

## Ergebnis

Power Query bereitet Daten beim Aktualisieren vor. Wähle die Transformation nach deinem Ziel: Spalten ergänzen, Zeilen stapeln oder Daten verdichten.

## Warum funktioniert das?

Jeder Schritt baut auf dem vorherigen Ergebnis auf. Laden und Aktualisieren führen diese Transformationen wieder aus; die Vorschau ist kein frei editierbares Excel-Blatt.

## Typischer Fehler

**Symptom:** Spalte nicht gefunden. **Ursache:** früheren Namen geändert, späterer Schritt erwartet alten Namen. **Lösung:** den ersten fehlerhaften Schritt suchen und dessen Bezug korrigieren.

## Plausibilitätscheck

Prüfe nach dem Laden weiterhin 6 Zeilen und 9.000. Excel lädt standardmäßig in ein Blatt, Power BI ins Modell.
