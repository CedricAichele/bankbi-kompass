---
{
  "id": "excel-ersetzen",
  "slug": "excel-ersetzen",
  "titel": "Werte gezielt ersetzen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nutze Ersetzen für eine kontrollierte Änderung oder WECHSELN für ein nachvollziehbares Formelergebnis.",
  "ort": "Excel → Start → Suchen und Auswählen → Ersetzen; alternativ Formel",
  "tags": ["Werte gezielt ersetzen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["werte-ersetzen", "glaetten"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Bekannte Schreibvarianten sollen vereinheitlicht werden.

## Schritte

1. Zielbereich begrenzen.
2. Ganze Zellinhalte oder Teiltexte bewusst wählen.
3. Treffer und unbeabsichtigte Änderungen prüfen.

## Beispiel

```excel
=WECHSELN(A2;"Segment-A";"Segment A")
```

## Typischer Fehler

Eine Teilzeichenfolge in allen Arbeitsblättern ersetzen, obwohl nur eine Spalte gemeint ist.
