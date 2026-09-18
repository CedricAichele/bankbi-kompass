---
{
  "id": "beziehung-fehler",
  "slug": "beziehung-fehler",
  "titel": "Beziehung lässt sich nicht erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
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
    "datenbereinigung"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "problem",
  "quellen": [],
  "screenshots": []
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

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Gruppiere die Dimension nach Schlüssel und zähle die Zeilen je Schlüssel.
3. Bereinige ungewollte Dubletten fachlich. Wenn mehrere Zuordnungen echt sind, entwirf bewusst eine Brücke; ändere nicht nur die Kardinalität, um den Dialog zu schließen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Dimension P001 zweimal; Konten P001 zweimal. Das ist keine eindeutige Personendimension.

## Ergebnis

Dimension: Zeilenzahl = Anzahl verschiedener nichtleerer Schlüssel.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Dimension: Zeilenzahl = Anzahl verschiedener nichtleerer Schlüssel.
