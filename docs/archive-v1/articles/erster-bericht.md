---
{
  "id": "erster-bericht",
  "slug": "erster-bericht",
  "titel": "Dein erster sauber aufgebauter Bericht",
  "bereich": "Power BI",
  "kategorie": "Erste Schritte",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein guter erster Bericht beantwortet eine klar begrenzte Frage und lässt sich mit wenigen synthetischen Zeilen vollständig kontrollieren.",
  "tags": ["Bericht erstellen", "Power BI Einstieg"],
  "synonyme": ["Bericht erstellen", "Power BI Einstieg"],
  "verwandteThemen":
    ["power-query", "star-schema", "measure", "visualisierung"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Beginne mit einer Frage und einer prüfbaren Datenbasis. Ein übersichtlicher Bericht mit nachvollziehbaren Zahlen ist wertvoller als eine große Seite mit ungeklärten Summen.

## Übung: Bestand je Produktgruppe

Lege in einer Übungstabelle drei synthetische Zeilen an: Konto K-A / Produkt PR-A / 120 Euro, K-B / PR-A / 80 Euro, K-C / PR-B / 50 Euro. Alle drei gehören zum 31.03.2026. Lege eine zweite Tabelle mit PR-A / Gruppe A und PR-B / Gruppe B an.

## Aufbau

1. Lade beide Tabellen über Power Query.
2. Setze IDs auf Text, Stichtag auf Datum und Beträge auf einen geeigneten Zahltyp.
3. Prüfe eine eindeutige Produktdimension und erstelle eine aktive 1:n-Beziehung.
4. Definiere ein SUM-Measure über die Bestandsbeträge.
5. Baue eine Matrix mit Produktgruppe und Measure.
6. Ergänze einen Slicer aus der Produktdimension.

## Erwartetes Ergebnis

Gruppe A ergibt 200 Euro, Gruppe B 50 Euro, die Gesamtmenge 250 Euro. Ein Slicer auf Gruppe A muss Matrix und Karte auf 200 Euro einschränken.

## Prüfen statt vermuten

Kontrolliere die drei Einzelzeilen, die Produktzuordnung, den Stichtag und die Gesamtsumme. Falls eine Zahl nicht stimmt, korrigiere das Modell vor dem Layout.

## Nächster Schritt

Ergänze einen zweiten Stichtag und eine Datumstabelle. Definiere dann ausdrücklich, ob die Karte einen einzelnen gewählten oder den letzten verfügbaren Stichtag zeigen soll.
