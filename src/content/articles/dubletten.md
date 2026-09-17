---
{
  "id": "dubletten",
  "slug": "dubletten",
  "titel": "Dubletten prüfen und entfernen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Erst die fachliche Schlüsselkombination bestimmt, ob zwei Zeilen wirklich doppelt sind.",
  "ort": "Power Query → Schlüsselspalten markieren → Zeilen entfernen → Duplikate entfernen",
  "tags": ["Dubletten prüfen und entfernen", "Kundenanalyse", "Datenqualität"],
  "synonyme":
    [
      "mehrere konten pro kunde",
      "falsche summe",
      "eine Liste ohne doppelte Werte",
      "mehrere Zeilen",
      "Dubletten",
      "doppelte kunden",
      "duplikate",
      "doppelte personen",
    ],
  "verwandteThemen":
    ["granularitaet", "eins-zu-viele", "excel-dubletten-finden"],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du siehst wiederholte Personen oder zu hohe Summen.

## Schritte

1. Zeilenebene definieren, z. B. Konto plus Stichtag.
2. Mehrfachkombinationen prüfen; unterschiedliche Werte nicht blind löschen.
3. Nur bestätigte Dubletten entfernen und Anzahl vorher/nachher vergleichen.

## Beispiel

P001 mit K-A und K-B sind zwei gültige Konten. K-A am gleichen Stichtag zweimal kann eine Dublette sein.

## Typischer Fehler

Nicht darauf vertrauen, dass bei widersprüchlichen Zeilen ohne weitere Regel gerade die gewünschte Zeile erhalten bleibt.
