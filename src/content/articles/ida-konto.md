---
{
  "id": "ida-konto",
  "slug": "ida-konto",
  "titel": "Eine Zeile je Konto und Stichtag",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kontolisten brauchen eine ausdrückliche Zeitregel. Eine Kontonummer allein ist bei historischen Beständen nicht eindeutig.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Eine Zeile je Konto und Stichtag"
  ],
  "synonyme": [
    "eine zeile je konto"
  ],
  "verwandteThemen": [
    "ida-dubletten",
    "bestand-bewegung",
    "stichtag"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-summarizing-data-relationally"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Liste zeigt scheinbar doppelte Konten.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Stichtag in die Eindeutigkeitsprüfung aufnehmen.
2. Formuliere die gewünschte Regel: **Konto und Stichtag gemeinsam als Zeilenschlüssel verwenden.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Mehrere Zeilen nur bei gleichem Konto und gleichem Stichtag auf ungeklärte Mehrfachlieferung untersuchen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| K001 am 31.01.2026: 100; K001 am 28.02.2026: 120. |

### Aktion

```text
Fachliche Regel: Konto und Stichtag gemeinsam als Zeilenschlüssel verwenden.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Zwei gültige Zeilen; für Filter 28.02.2026 genau K001/120. |

## Ergebnis

Kontolisten brauchen eine ausdrückliche Zeitregel. Eine Kontonummer allein ist bei historischen Beständen nicht eindeutig.

## Warum funktioniert das?

Dasselbe Konto kann an verschiedenen Tagen unterschiedliche Bestände haben. Die Zeitkomponente ist Teil der Identität der Beobachtung.

## Typischer Fehler

Eine Monatszeile als Dublette löschen, obwohl beide Datenstände benötigt werden.

## Plausibilitätscheck

Zwei gültige Zeilen; für Filter 28.02.2026 genau K001/120.
