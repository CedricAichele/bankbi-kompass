---
{
  "id": "problem-werte-verschwinden",
  "slug": "problem-werte-verschwinden",
  "titel": "Werte verschwinden im Bericht",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nach einer Auswahl fehlen bekannte Zeilen. Inner Join, Detailfilter, fehlende Schlüsselzuordnung oder mehrere Filter wirken gemeinsam.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Werte verschwinden im Bericht"
  ],
  "synonyme": [
    "Werte verschwinden im Bericht",
    "Nach einer Auswahl fehlen bekannte Zeilen."
  ],
  "verwandteThemen": [
    "beziehungen",
    "zusammenfuehren",
    "filterkontext",
    "filterrichtung"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-bidirectional-filtering"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Nach einer Auswahl fehlen bekannte Zeilen.

## Symptom

Nach einer Auswahl fehlen bekannte Zeilen.

## Mögliche Ursachen

Inner Join, Detailfilter, fehlende Schlüsselzuordnung oder mehrere Filter wirken gemeinsam.

## Schnelltest

Entferne in einer Berichtskopie Filter nacheinander und prüfe die Zeilenzahl.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Entferne in einer Berichtskopie Filter nacheinander und prüfe die Zeilenzahl.
3. Prüfe Import-/Merge-Schritte und den Filterbereich auf Visual-, Seiten- und Berichtsebene. Fehlende Zuordnungen separat ausweisen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Filterrichtung verstehen](#/wissen/filterrichtung). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| K003 ohne passende Personendimension kann in einem selektierten Personensegment fehlen. |

### Aktion

Prüfe Import-/Merge-Schritte und den Filterbereich auf Visual-, Seiten- und Berichtsebene. Fehlende Zuordnungen separat ausweisen.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Zähle zugeordnete und nicht zugeordnete Konten; zusammen muss die Quelle erreicht werden. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Zähle zugeordnete und nicht zugeordnete Konten; zusammen muss die Quelle erreicht werden.

## Warum funktioniert das?

Ein gerichteter Filterpfad macht Ergebnisse vorhersehbar. Bidirektionale Beziehungen können weitere Tabellen unerwartet einschränken oder mehrere konkurrierende Wege schaffen; mehr Richtungen bedeuten deshalb nicht automatisch bessere Auswertungen.
