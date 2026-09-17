---
{
  "id": "wennfehler",
  "slug": "wennfehler",
  "titel": "WENNFEHLER: Fehler bewusst abfangen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WENNFEHLER ersetzt Formelfehler durch ein definiertes Ergebnis. Erst die Ursache prüfen, dann den Ersatz festlegen.",
  "ort": "Excel → Formelzelle",
  "tags": ["WENNFEHLER: Fehler bewusst abfangen", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["wennnv", "divide"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine bekannte Ausnahmesituation braucht einen lesbaren Hinweis.

## Schritte

1. Formel zuerst ohne Fehlerbehandlung prüfen.
2. Fachlich passenden Ersatz angeben.
3. Fehlerfälle separat sichtbar halten.

## Beispiel

```excel
=WENNFEHLER(B2/C2;"Nicht berechenbar")
```

## Typischer Fehler

WENNFEHLER fängt auch kaputte Bezüge oder Typfehler ab. Der Ersatz 0 kann Datenprobleme verstecken.
