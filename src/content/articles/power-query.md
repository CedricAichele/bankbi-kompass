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
    "gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/power-query-ui"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-power-query.webp",
      "alt": "Power Query mit sechs synthetischen Kontenzeilen.",
      "caption": "Power Query mit sechs synthetischen Kontenzeilen.",
      "schritt": 2,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine wiederkehrende Bereinigung soll beim Aktualisieren erneut ausgeführt werden.

## Voraussetzungen

Synthetische Daten; Power Query in Power BI Desktop oder Excel. Die Menübezeichnung kann je Version leicht abweichen.

## Schritte

1. Öffne in Power BI **Start → Daten transformieren**. In Excel: Quelldaten als Tabelle formatieren und **Daten → Aus Tabelle/Bereich** wählen. Die folgenden Aktionen erfolgen im Power-Query-Editor.
2. Prüfe links die Abfragenamen und wähle Konten. Die Vorschau in der Mitte gehört immer zum ausgewählten Schritt.
3. Markiere Kontonummer und setze den Typ Text; setze Bestand_EUR auf Dezimalzahl.
4. Klicke die Überschrift Produktgruppe mit rechts an und benenne sie testweise in Produkt um.
5. Klicke rechts nacheinander Quelle und Umbenannte Spalten. Beobachte, dass der alte Name beim frühen Schritt noch existiert.
6. Entferne nur den Testschritt über dessen X, wenn er nicht benötigt wird. Spätere Schritte können von einem vorherigen Namen abhängen.
7. Erstelle für alternative Auswertungen per Rechtsklick auf Konten eine Referenz, damit die Basisabfrage erhalten bleibt.
8. Prüfe im rechten Bereich Angewendete Schritte die Vorschau vor und nach der Aktion. In Power BI abschließend Schließen & übernehmen, in Excel Schließen & laden wählen.

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

Die Quelldaten bleiben unverändert; die Abfrage beschreibt reproduzierbare Ladeschritte.

## Warum funktioniert das?

Jeder Schritt baut auf dem vorherigen Ergebnis auf. Laden und Aktualisieren führen diese Transformationen wieder aus; die Vorschau ist kein frei editierbares Excel-Blatt.

## Typischer Fehler

**Symptom:** Spalte nicht gefunden. **Ursache:** früheren Namen geändert, späterer Schritt erwartet alten Namen. **Lösung:** den ersten fehlerhaften Schritt suchen und dessen Bezug korrigieren.

## Plausibilitätscheck

Prüfe nach dem Laden weiterhin 6 Zeilen und 9.000. Excel lädt standardmäßig in ein Blatt, Power BI ins Modell.
