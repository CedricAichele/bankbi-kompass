---
{
  "id": "ida-bedingungen",
  "slug": "ida-bedingungen",
  "titel": "Mehrere Bedingungen: UND / ODER",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "UND verlangt alle Bedingungen. ODER lässt Alternativen zu. Klammern machen gemischte Logik eindeutig.",
  "ort": "IDA / Reporting: allgemeine Boolesche Logik, keine IDA-Syntax",
  "tags": [
    "Mehrere Bedingungen: UND / ODER",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-filter-pruefen",
    "ida-mehrfachauswahl"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Mehrere Segmente sollen gemeinsam mit einer Datumsgrenze gelten.

## Voraussetzungen

Allgemeines Reportingprinzip. Konkrete IDA-Bedienung nicht öffentlich belegt; Menüpfade und ausführbare Syntax bleiben TODO.

## Schritte

1. Formuliere die gewünschte Ergebniszeile: Welche fachliche Einheit soll genau einmal erscheinen?
2. Übertrage das synthetische Mini-Beispiel in eine eigene Prüfliste. Notiere Zeilenzahl und Betrag vor der Änderung.
3. Formuliere die Regel zunächst unabhängig vom Werkzeug: Pseudologik: (Segment = A ODER Segment = B) UND ImZeitraum.
4. Lege die Regel in der öffentlich dokumentierten Reportingumgebung an. Für IDA gibt diese Seite bewusst keinen erfundenen Klickpfad vor.
5. Führe den Bericht zuerst für die kleine Prüfliste aus und vergleiche das konkrete erwartete Ergebnis.
6. Teste auch den beschriebenen Fehlerfall. Erst bei passender Kontrollsumme die Regel auf weitere synthetische Daten übertragen.

## Beispiel

| Person | Segment | Im Zeitraum |
| --- | --- | --- |
| P001 | A | ja |
| P002 | B | nein |
| P003 | C | ja |

```text
Pseudologik: (Segment = A ODER Segment = B) UND ImZeitraum
```

## Ergebnis

Nur P001.

## Warum funktioniert das?

Klammern machen die beabsichtigte Kombination explizit. Ohne die zeitliche Einschränkung für beide Segmente könnten veraltete Zeilen einfließen.

## Typischer Fehler

**Symptom/Ursache:** A ODER (B UND Zeitraum) erlaubt auch A außerhalb des Zeitraums. **Lösung:** Regel auf die gewünschte Zeilenebene zurückführen und den Schnelltest wiederholen.

## Plausibilitätscheck

Teste A außerhalb des Zeitraums zusätzlich: Diese Zeile darf nicht erscheinen.
