---
{
  "id": "beziehung-fehler",
  "slug": "beziehung-fehler",
  "titel": "Beziehung lässt sich nicht erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler & Plausibilitätsprüfung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe eindeutige Schlüssel auf der 1-Seite und kompatible Datentypen auf beiden Seiten.",
  "ort": "Power Query → Schlüsselprüfung; Power BI → Modellansicht",
  "tags": [
    "Beziehung lässt sich nicht erstellen",
    "Datenqualität"
  ],
  "synonyme": [
    "Beziehung lässt sich nicht erstellen",
    "Die gewünschte 1:n-Verbindung wird abgelehnt."
  ],
  "verwandteThemen": [
    "beziehungen",
    "dubletten",
    "datenbereinigung",
    "kardinalitaet"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Die gewünschte 1:n-Verbindung wird abgelehnt.

## Symptom

Die gewünschte 1:n-Verbindung wird abgelehnt.

## Mögliche Ursachen

Doppelte Schlüssel auf der 1-Seite oder unpassende Datentypen.

## Schnelltest

Gruppiere die Dimension nach Schlüssel und zähle die Zeilen je Schlüssel.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Gruppiere die Dimension nach Schlüssel und zähle die Zeilen je Schlüssel.
3. Bereinige ungewollte Dubletten fachlich. Wenn mehrere Zuordnungen echt sind, entwirf bewusst eine Brücke; ändere nicht nur die Kardinalität, um den Dialog zu schließen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Kardinalität prüfen: 1:1, 1:n oder n:m](#/wissen/kardinalitaet). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Dimension P001 zweimal; Konten P001 zweimal. Das ist keine eindeutige Personendimension. |

### Aktion

Bereinige ungewollte Dubletten fachlich. Wenn mehrere Zuordnungen echt sind, entwirf bewusst eine Brücke; ändere nicht nur die Kardinalität, um den Dialog zu schließen.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Dimension: Zeilenzahl = Anzahl verschiedener nichtleerer Schlüssel. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Dimension: Zeilenzahl = Anzahl verschiedener nichtleerer Schlüssel.

## Warum funktioniert das?

Kardinalität ist eine Aussage über mögliche Zuordnungen, keine gewünschte Darstellungsform. Auch heute zufällig eindeutige Fakten können morgen mehrere gültige Zeilen je Kunde enthalten.
