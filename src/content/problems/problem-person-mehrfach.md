---
{
  "id": "problem-person-mehrfach",
  "slug": "problem-person-mehrfach",
  "titel": "Person mehrfach vorhanden",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Kennung erscheint auf mehreren Zeilen. Mehrere Konten, mehrere Stichtage oder echte Datendubletten.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Person mehrfach vorhanden"
  ],
  "synonyme": [
    "Person mehrfach vorhanden",
    "Eine Kennung erscheint auf mehreren Zeilen.",
    "kunde mehrfach"
  ],
  "verwandteThemen": [
    "eine-zeile-je-person",
    "dubletten",
    "distinctcount",
    "gruppieren",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Eine Kennung erscheint auf mehreren Zeilen.

## Symptom

Eine Kennung erscheint auf mehreren Zeilen.

## Mögliche Ursachen

Mehrere Konten, mehrere Stichtage oder echte Datendubletten.

## Schnelltest

Zeige Person, Konto und Stichtag gemeinsam. Bestimme die tatsächlich erwartete Zeilenebene.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Zeige Person, Konto und Stichtag gemeinsam. Bestimme die tatsächlich erwartete Zeilenebene.
3. Für eine Personenliste eindeutige Kennungen ausgeben; für Personenbestände nach Person und Stichtag summieren. Echte fehlerhafte Doppelzeilen an der Quelle bereinigen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Gruppieren: Werte je Schlüssel zusammenfassen](#/wissen/gruppieren). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| P001/K001 und P001/K002 sind zwei gültige Konten; beide Kontobeträge gehören zum Personenbestand. |

### Aktion

Für eine Personenliste eindeutige Kennungen ausgeben; für Personenbestände nach Person und Stichtag summieren. Echte fehlerhafte Doppelzeilen an der Quelle bereinigen.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Vier Personen, sechs Konten, unveränderte Betragssumme. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Vier Personen, sechs Konten, unveränderte Betragssumme.

## Warum funktioniert das?

Die Granularität wechselt hier von Konto zu Kunde. Die Aggregation bestimmt, wie die Bestände innerhalb jeder Gruppe zu einem Ergebnis werden. Summe erhält additive Gesamtbeträge; Durchschnitt teilt dagegen durch die Anzahl vorhandener Zahlen.
