---
{
  "id": "ida-join-pruefen",
  "slug": "ida-join-pruefen",
  "titel": "Ergebnis vor / nach Join plausibilisieren",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche Zeilen, eindeutige Schlüssel, Kontrollsummen und fehlende Treffer vor und nach jeder Verknüpfung.",
  "ort": "IDA / Reporting: allgemeines Prüfverfahren",
  "tags": [
    "Ergebnis vor / nach Join plausibilisieren",
    "Datenqualität"
  ],
  "synonyme": [
    "mehr zeilen nach join"
  ],
  "verwandteThemen": [
    "eins-zu-viele",
    "ida-join-aggregation",
    "zusammenfuehren"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [
    {
      "src": "images/ida/eins-zu-viele.svg",
      "alt": "Vor dem Join: Person P001: 1 Personenzeile. Nach dem Join: P001 · Konto K001: P001 · Konto K002. Kontrolle: 2 Zeilen, 1 Person: Personen eindeutig zählen",
      "caption": "Eine Person, mehrere Konten",
      "hinweis": "Eine 1:n-Verknüpfung erzeugt mehrere Zeilen je Person.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Nach einer Zuordnung verändern sich Zeilenzahl und Summen.

## Voraussetzungen

Allgemeines Reportingprinzip. Konkrete IDA-Bedienung nicht öffentlich belegt; Menüpfade und ausführbare Syntax bleiben TODO.

## Schritte

1. Formuliere die gewünschte Ergebniszeile: Welche fachliche Einheit soll genau einmal erscheinen?
2. Übertrage das synthetische Mini-Beispiel in eine eigene Prüfliste. Notiere Zeilenzahl und Betrag vor der Änderung.
3. Formuliere die Regel zunächst unabhängig vom Werkzeug: Pseudologik: linker Join über Person, danach rechte Attribute erweitern.
4. Lege die Regel in der öffentlich dokumentierten Reportingumgebung an. Für IDA gibt diese Seite bewusst keinen erfundenen Klickpfad vor.
5. Führe den Bericht zuerst für die kleine Prüfliste aus und vergleiche das konkrete erwartete Ergebnis.
6. Teste auch den beschriebenen Fehlerfall. Erst bei passender Kontrollsumme die Regel auf weitere synthetische Daten übertragen.

## Beispiel

| Linke Zeile | Person | Betrag |
| --- | --- | --- |
| K001 | P001 | 120 |
| K002 | P002 | 80 |

Rechts steht P001 zweimal und P002 einmal.

```text
Pseudologik: linker Join über Person, danach rechte Attribute erweitern
```

## Ergebnis

Aus 2 Zeilen / 200 werden 3 Zeilen / 320.

## Warum funktioniert das?

Jede linke Zeile wird mit allen rechten Treffern kombiniert. P001 mit 120 wird deshalb zweimal ausgegeben.

## Typischer Fehler

**Symptom/Ursache:** Eine anschließende SUMME verdeckt den Fehler nicht, sondern zählt den vervielfachten Betrag. **Lösung:** Regel auf die gewünschte Zeilenebene zurückführen und den Schnelltest wiederholen.

## Plausibilitätscheck

Zähle rechte Treffer pro Person vor dem Join; für eine reine Anreicherung muss diese Zahl höchstens 1 sein.
