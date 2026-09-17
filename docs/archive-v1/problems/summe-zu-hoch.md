---
{
  "id": "summe-zu-hoch",
  "slug": "summe-zu-hoch",
  "titel": "Meine Summe ist zu hoch",
  "bereich": "Power BI",
  "kategorie": "Fehlerbehebung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die angezeigte Gesamtsumme übersteigt den Wert, den du aus wenigen Kontrollzeilen erwartest.",
  "tags": ["Problemlösung"],
  "synonyme":
    [
      "Meine Zahlen ändern sich nach einem Join",
      "Bestand addieren",
      "doppelte Werte",
    ],
  "verwandteThemen": ["granularitaet", "power-query", "stichtag", "plan-ist"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
}
---

## Symptom

Die angezeigte Gesamtsumme übersteigt den Wert, den du aus wenigen Kontrollzeilen erwartest.

## Mögliche Ursachen

Bestände über mehrere Stichtage summiert; Beträge nach einem Join vervielfacht; Planwerte je Detailzeile wiederholt.

## Kurze Erklärung

Definiere zuerst die Granularität. Mehr Zeilen können korrekt sein, aber ein wiederholter Betrag wird dadurch nicht mehrfach zum Geschäft.

## Prüfschritte

1. Filtere auf einen einzigen Stichtag und eine kleine Produktgruppe.
2. Vergleiche Zeilenanzahl und Betragssumme vor und nach dem Join.
3. Zähle Treffer pro Schlüssel auf der rechten Seite.
4. Prüfe, ob unterschiedliche Datenebenen in getrennte Faktentabellen gehören.

## Ein kleiner Kontrollfall

Nutze ausschließlich selbst angelegte Übungsdaten. Reduziere den Test auf wenige bekannte Zeilen, notiere das erwartete Ergebnis und vergleiche nach jedem Schritt. So trennst du Datenfehler von Modell- und Darstellungsfehlern.

## Passende Wissensartikel

- [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet)
- [Power Query: laden, verbinden, formen](#/wissen/power-query)
- [Stichtag, Snapshot und Bestand](#/wissen/stichtag)
- [Neugeschäft und Plan-Ist](#/wissen/plan-ist)
