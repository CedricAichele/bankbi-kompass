---
{
  "id": "excel-leere-zellen",
  "slug": "excel-leere-zellen",
  "titel": "Leere Zellen und Fehlerwerte prüfen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Leer, 0 und ein Formelergebnis mit leerem Text sind verschiedene Zustände. Ersetze sie nicht pauschal.",
  "ort": "Excel → Datenbereich prüfen",
  "tags": ["Leere Zellen und Fehlerwerte prüfen"],
  "synonyme": ["leere zellen", "fehlerwerte"],
  "verwandteThemen": ["wennfehler", "wennnv", "nullwerte"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Liste enthält Lücken und fehlerhafte Berechnungen.

## Schritte

1. Mit ISTLEER echte leere Zellen, mit ="" auch leeren Text prüfen.
2. Fehlerursache prüfen; WENNNV nur für fehlende Treffer verwenden.
3. Ersatzwerte mit fachlicher Bedeutung dokumentieren.

## Beispiel

```excel
=ISTLEER(A2)
=A2=""
```

Eine Formel mit Ergebnis "" ist nicht ISTLEER.

## Typischer Fehler

Alle Lücken durch 0 ersetzen und unbekannte Werte in Summen und Durchschnitten verstecken.
