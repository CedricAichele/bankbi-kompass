---
{
  "id": "measure-spalte",
  "slug": "measure-spalte",
  "titel": "Measure oder berechnete Spalte?",
  "bereich": "Power BI",
  "kategorie": "Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Measures reagieren auf den Filterkontext. Berechnete Spalten liefern Werte je Zeile; vorbereitende Transformationen passen häufig besser in Power Query.",
  "tags":
    [
      "Hilfsspalte",
      "Measure vs Spalte",
      "berechnete Spalte",
      "Power Query oder DAX",
    ],
  "synonyme":
    [
      "Hilfsspalte",
      "Measure vs Spalte",
      "berechnete Spalte",
      "Power Query oder DAX",
    ],
  "verwandteThemen": ["measure", "power-query", "filterkontext"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Frage zuerst, ob du eine Kennzahl für die aktuelle Auswahl oder ein Merkmal pro Datenzeile brauchst. Das entscheidet mehr als die Länge der Formel.

## Wann brauche ich was?

**Measure:** Bestand der ausgewählten Produktgruppe, Planerreichung oder eindeutige Personen im aktuellen Zeitraum.

**Berechnete Spalte:** Ein Merkmal je Zeile, das als Achse, Kategorie oder Filter genutzt werden soll und Logik im Datenmodell benötigt. Im Importmodell wird es bei der Verarbeitung berechnet und gespeichert.

**Power Query:** Bereinigung, Typumwandlung und vorbereitete Merkmale, die schon vor dem Laden bestimmt werden können.

## Einfaches Beispiel

In einer synthetischen Vorgangstabelle stehen Anfang und Ende je Vorgang. Eine feste Dauer je Zeile kann vorbereitet werden. Der Mittelwert der Dauer für die gerade ausgewählte Produktgruppe gehört in ein Measure.

## Typischer Fehler

Eine berechnete Spalte mit einer Gesamtsumme zu füllen und später zu summieren. Die gleiche Zahl kann dadurch in vielen Zeilen wiederholt werden. Außerdem reagiert eine gespeicherte Spalte nicht auf einen Slicer wie ein Measure.

## Wann brauche ich etwas anderes?

Eine Kategorie für einen Slicer muss als Spalte vorliegen. Eine dynamische Kennzahl lässt sich nicht einfach als gewöhnliche Slicer-Spalte einsetzen.

## Wenn du aus Excel kommst

Eine Hilfsspalte kann sinnvoll sein, ist aber nicht die Standardantwort auf jede Analysefrage. Prüfe zuerst, ob du überhaupt eine neue gespeicherte Spalte brauchst.
