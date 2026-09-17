---
{
  "id": "aggregat",
  "slug": "aggregat",
  "titel": "AGGREGAT: Fehler gezielt auslassen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "AGGREGAT bietet Auswahlregeln für Fehler und ausgeblendete Zeilen. Dokumentiere, welche Werte ausgeschlossen werden.",
  "ort": "Excel → Formelzelle",
  "tags": ["AGGREGAT: Fehler gezielt auslassen"],
  "synonyme": ["aggregat"],
  "verwandteThemen": ["teilergebnis", "wennfehler"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/en-us/excel/functions/aggregate-function"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Kontrollsumme soll vorhandene Fehler separat lassen.

## Schritte

1. Gewünschte Funktion und Ausschlussoption wählen.
2. Für Summe ohne Fehler und ausgeblendete Zeilen die Referenzform 9;3 verwenden.
3. Ausgelassene Fehler zählen und weiterhin klären.

## Beispiel

```excel
=AGGREGAT(9;3;C2:C9)
```

## Typischer Fehler

Ignorierte Fehler für bereinigte Daten halten; berechnete Arrays können andere Ausschlusseffekte haben als direkte Referenzen.
