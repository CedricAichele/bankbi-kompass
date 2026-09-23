---
{
  "id": "dubletten",
  "slug": "dubletten",
  "titel": "Dubletten anhand der richtigen Zeilenebene prüfen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Erst festlegen, was eine Zeile beschreibt, dann Wiederholungen beurteilen. Mehrere Konten eines Kunden sind in einer Kontentabelle keine Dubletten.",
  "ort": "Power Query → Schlüsselspalten markieren → Zeilen entfernen → Duplikate entfernen",
  "tags": [
    "Dubletten prüfen und entfernen",
    "Kundenanalyse",
    "Datenqualität",
    "Grundbegriff"
  ],
  "synonyme": [
    "doppelte kunden",
    "dubletten",
    "duplikate",
    "doppelte Zeilen",
    "mehrere konten pro kunde",
    "falsche summe",
    "eine Liste ohne doppelte Werte",
    "mehrere Zeilen",
    "Dubletten",
    "doppelte personen",
    "summe stimmt nicht",
    "Dubletten prüfen und entfernen"
  ],
  "verwandteThemen": [
    "granularitaet",
    "gruppieren",
    "pq-profiling"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/working-with-duplicates"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Dubletten prüfen und entfernen",
      "caption": "Geplante Aufnahme: Power Query – Dubletten prüfen und entfernen",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Dubletten prüfen und entfernen zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Dubletten anhand der richtigen Zeilenebene prüfen",
        "klickfolge": [
          "Die [Granularität](#/wissen/granularitaet) notieren: eine Zeile je Konto, Kunde oder Konto und Stichtag? Daraus ergibt sich der zu prüfende Schlüssel.",
          "Die relevanten Schlüsselspalten gemeinsam markieren. Power Query prüft Duplikate über **die ausgewählten Spalten**, nicht automatisch über die ganze Zeile.",
          "Für die Prüfung eine Referenz der Abfrage erstellen und nach dem Schlüssel gruppieren, Aggregation **Anzahl Zeilen**. Gruppen größer 1 untersuchen, einschließlich fehlender Schlüssel.",
          "Sind vollständige Zeilen versehentlich identisch doppelt geliefert, alle fachlich relevanten Spalten auswählen und **Start → Zeilen entfernen → Duplikate entfernen** verwenden.",
          "Bei gleichem Schlüssel und unterschiedlichen Werten zuerst eine fachliche Auswahlregel klären. Nicht voraussetzen, dass ein vorheriges Sortieren zuverlässig die gewünschte Zeile beim Entfernen bewahrt.",
          "Zeilenzahl und Summenabgang gegen die identifizierten Wiederholungen prüfen. Für eine Kundensumme [gruppieren](#/wissen/gruppieren) statt ein Konto wegzulöschen."
        ],
        "daten": "### Vorher\n| Personennummer | Konto | Bestand |\n| --- | --- | --- |\n| 1001 | A | 100 |\n| 1001 | B | 200 |\n| 1002 | C | 500 |\n| 1002 | C | 500 |\n\n### Aktion\nPersonennummer allein würde A/B fälschlich zusammenfallen lassen. Personennummer + Konto zeigt nur die wiederholte Kombination 1002/C. Hier sind auch alle übrigen Werte identisch; die doppelte Lieferung kann entfernt werden.\n\n### Nachher\n| Personennummer | Konto | Bestand |\n| --- | --- | --- |\n| 1001 | A | 100 |\n| 1001 | B | 200 |\n| 1002 | C | 500 |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-dubletten.webp",
        "zweck": "Erst festlegen, was eine Zeile beschreibt, dann Wiederholungen beurteilen. Mehrere Konten eines Kunden sind in einer Kontentabelle keine Dubletten.",
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

Erst festlegen, was eine Zeile beschreibt, dann Wiederholungen beurteilen. Mehrere Konten eines Kunden sind in einer Kontentabelle keine Dubletten.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Die [Granularität](#/wissen/granularitaet) notieren: eine Zeile je Konto, Kunde oder Konto und Stichtag? Daraus ergibt sich der zu prüfende Schlüssel.
2. Die relevanten Schlüsselspalten gemeinsam markieren. Power Query prüft Duplikate über **die ausgewählten Spalten**, nicht automatisch über die ganze Zeile.
3. Für die Prüfung eine Referenz der Abfrage erstellen und nach dem Schlüssel gruppieren, Aggregation **Anzahl Zeilen**. Gruppen größer 1 untersuchen, einschließlich fehlender Schlüssel.
4. Sind vollständige Zeilen versehentlich identisch doppelt geliefert, alle fachlich relevanten Spalten auswählen und **Start → Zeilen entfernen → Duplikate entfernen** verwenden.
5. Bei gleichem Schlüssel und unterschiedlichen Werten zuerst eine fachliche Auswahlregel klären. Nicht voraussetzen, dass ein vorheriges Sortieren zuverlässig die gewünschte Zeile beim Entfernen bewahrt.
6. Zeilenzahl und Summenabgang gegen die identifizierten Wiederholungen prüfen. Für eine Kundensumme [gruppieren](#/wissen/gruppieren) statt ein Konto wegzulöschen.

## Beispiel

### Vorher
| Personennummer | Konto | Bestand |
| --- | --- | --- |
| 1001 | A | 100 |
| 1001 | B | 200 |
| 1002 | C | 500 |
| 1002 | C | 500 |

### Aktion
Personennummer allein würde A/B fälschlich zusammenfallen lassen. Personennummer + Konto zeigt nur die wiederholte Kombination 1002/C. Hier sind auch alle übrigen Werte identisch; die doppelte Lieferung kann entfernt werden.

### Nachher
| Personennummer | Konto | Bestand |
| --- | --- | --- |
| 1001 | A | 100 |
| 1001 | B | 200 |
| 1002 | C | 500 |

## Ergebnis

Die bereinigte Tabelle enthält drei gültige Konten. Kunde 1001 hat weiterhin zwei Konten; nur die zusätzliche identische C-Zeile entfällt.

## Warum funktioniert das?

Eindeutigkeit ist relativ zum gewählten Schlüssel. Deduplizieren zählt keine Konten zusammen und legt ohne weitere Regel nicht fachlich fest, welche widersprüchliche Zeile gültig ist. Power Query unterscheidet außerdem Groß-/Kleinschreibung; standardisiere Schlüssel nur nach vereinbarter Regel.

## Typischer Fehler

Blind Kunden deduplizieren, damit die Zeilenzahl kleiner wird. Dadurch verschwinden korrekte Konten und Beträge.

## Plausibilitätscheck

4 → 3 Zeilen; Summe 1300 → 800. Genau die bestätigte zusätzliche C-Zeile mit 500 wurde entfernt; beide Konten von 1001 bleiben bestehen.
