---
{
  "id": "problem-visual-slicer",
  "slug": "problem-visual-slicer",
  "titel": "Visual reagiert nicht auf Slicer",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Andere Visuals reagieren, eines bleibt unverändert. Visualinteraktion deaktiviert oder abweichendes Measure.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Visual reagiert nicht auf Slicer"
  ],
  "synonyme": [
    "Visual reagiert nicht auf Slicer",
    "Andere Visuals reagieren, eines bleibt unverändert.",
    "Slicer ohne Wirkung",
    "keine Filterwirkung"
  ],
  "verwandteThemen": [
    "visualinteraktionen",
    "filter-fehler"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Andere Visuals reagieren, eines bleibt unverändert.

## Symptom

Andere Visuals reagieren, eines bleibt unverändert.

## Mögliche Ursachen

Visualinteraktion deaktiviert oder abweichendes Measure.

## Schnelltest

Lege eine Kopie des einfachen Testvisuals an und vergleiche seine Reaktion.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Lege eine Kopie des einfachen Testvisuals an und vergleiche seine Reaktion.
3. Markiere den Slicer → Format → Interaktionen bearbeiten. Wähle am Zielvisual das Filtersymbol statt Keine. Prüfe danach das Measure.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Visualinteraktionen einstellen](#/wissen/visualinteraktionen). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| P003 gewählt: Karte 4.000, Tabelle zeigt weiterhin alle Konten. |

### Aktion

Markiere den Slicer → Format → Interaktionen bearbeiten. Wähle am Zielvisual das Filtersymbol statt Keine. Prüfe danach das Measure.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Nach Korrektur zeigen beide dieselbe Personenmenge. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Nach Korrektur zeigen beide dieselbe Personenmenge.

## Warum funktioniert das?

Die Beziehung bestimmt den möglichen Datenfilterweg; die Interaktion bestimmt zusätzlich, ob das Zielvisual diese Auswahl erhält.
