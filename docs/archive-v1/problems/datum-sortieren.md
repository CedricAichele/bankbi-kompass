---
{
  "id": "datum-sortieren",
  "slug": "datum-sortieren",
  "titel": "Mein Datum wird falsch sortiert",
  "bereich": "Power BI",
  "kategorie": "Fehlerbehebung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Monate erscheinen alphabetisch oder Daten landen im falschen Zeitraum.",
  "tags": ["Problemlösung"],
  "synonyme": ["Datum falsch sortiert", "Monat alphabetisch"],
  "verwandteThemen": ["datumstabelle", "datenbereinigung", "vorjahr"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
}
---

## Symptom

Monate erscheinen alphabetisch oder Daten landen im falschen Zeitraum.

## Mögliche Ursachen

Monatsname als Text; falsches Gebietsschema; fehlendes Jahr; Uhrzeiten verhindern eine Datumszuordnung.

## Kurze Erklärung

Die sichtbare Formatierung ist nicht der Datentyp. Monatsnamen brauchen eine passende Sortierspalte; mehrere Jahre zusätzlich eine eindeutige Zeitachse.

## Prüfschritte

1. Prüfe den Datentyp in Power Query.
2. Kontrolliere Tag und Monat mit einem eindeutigen Testdatum.
3. Sortiere Monatsname nach Monatsnummer.
4. Verwende Jahr plus Monat für mehrjährige Auswertungen.
5. Prüfe Uhrzeiten und die Beziehung zur Datumstabelle.

## Ein kleiner Kontrollfall

Nutze ausschließlich selbst angelegte Übungsdaten. Reduziere den Test auf wenige bekannte Zeilen, notiere das erwartete Ergebnis und vergleiche nach jedem Schritt. So trennst du Datenfehler von Modell- und Darstellungsfehlern.

## Passende Wissensartikel

- [Eine verlässliche Datumstabelle](#/wissen/datumstabelle)
- [Datentypen und Daten bereinigen](#/wissen/datenbereinigung)
- [Vorjahresvergleich mit SAMEPERIODLASTYEAR](#/wissen/vorjahr)
