---
{
  "id": "aufgabe-sichtbare",
  "slug": "aufgabe-sichtbare",
  "titel": "Nur sichtbare Zeilen auswerten",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nutze TEILERGEBNIS(109;Bereich), wenn gefilterte und manuell ausgeblendete Beträge ausgeschlossen werden sollen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Nur sichtbare Zeilen auswerten"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "teilergebnis"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "aufgabe",
  "screenshots": [],
  "quellen": [],
  "zuletztGeprueft": "2026-09-18"
}
---

## Wann brauche ich das?

Nur sichtbare Zeilen auswerten.

## Schritte

1. Definiere Ergebnis und Bezugseinheit vor dem Öffnen des Werkzeugs.
2. Verwende die vollständig angegebenen Demodaten der [TEILERGEBNIS: gefilterte Zeilen auswerten-Anleitung](#/wissen/teilergebnis).
3. Führe die dortigen Schritte aus. Erwartetes Ergebnis: Konten-Beispiel: alle 9.000; AutoFilter P001 → 2.000.
4. Teste zusätzlich einen nicht passenden Datensatz und kontrolliere, dass er nicht in das Ergebnis einfließt.

## Beispiel

Konten-Beispiel: alle 9.000; AutoFilter P001 → 2.000.

## Ergebnis

Konten-Beispiel: alle 9.000; AutoFilter P001 → 2.000.

## Typischer Fehler

Die Formel gehört außerhalb der zu filternden Detailzeilen.

## Vergleich

Excel: TEILERGEBNIS. Power BI: Measure im Filterkontext. Reporting: Filter vor Aggregation.

## Warum funktioniert das?

Nutze TEILERGEBNIS(109;Bereich), wenn gefilterte und manuell ausgeblendete Beträge ausgeschlossen werden sollen.

## Plausibilitätscheck

Konten-Beispiel: alle 9.000; AutoFilter P001 → 2.000.
