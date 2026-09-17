---
{
  "id": "teilergebnis",
  "slug": "teilergebnis",
  "titel": "TEILERGEBNIS: gefilterte Zeilen auswerten",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "TEILERGEBNIS berücksichtigt Filter. Funktionsnummer 109 summiert zusätzlich ohne manuell ausgeblendete Zeilen.",
  "ort": "Excel → Formelzelle",
  "tags": ["TEILERGEBNIS: gefilterte Zeilen auswerten"],
  "synonyme": ["nur sichtbare summe", "gefilterte summe"],
  "verwandteThemen": ["excel-sichtbare", "aggregat"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-DE/Excel/functions/subtotal-function"],
  "screenshots":
    [
      {
        "src": "images/excel/excel-teilergebnis.webp",
        "alt": "TEILERGEBNIS mit 109: zunächst ungefiltert ergibt die Summe 9.000.",
        "caption": "TEILERGEBNIS mit 109: zunächst ungefiltert ergibt die Summe 9.000.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du brauchst eine Kontrollsumme für die gerade sichtbare Liste.

## Schritte

1. Summe außerhalb des Datenbereichs platzieren.
2. TEILERGEBNIS mit 109 auf die numerische Spalte anwenden.
3. Filter ändern und mit einer kleinen sichtbaren Teilmenge gegenrechnen.

## Beispiel

```excel
=TEILERGEBNIS(109;Konten!D2:D7)
```

Ungefiltert: 9.000. Filter auf P001 im Quellblatt: 2.000. Die Abbildung zeigt den ungefilterten Zustand.

## Typischer Fehler

SUMME verwenden und erwarten, dass weggefilterte Zeilen nicht mitzählen.
