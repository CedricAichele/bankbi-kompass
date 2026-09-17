---
{
  "id": "excel-fehler",
  "slug": "excel-fehler",
  "titel": "WENN und Fehler bewusst behandeln",
  "bereich": "Excel",
  "kategorie": "Fehlerbehandlung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bedingungen und Fehlerbehandlung machen Formeln lesbar. Ein fehlender Wert darf aber nicht pauschal in eine vermeintlich korrekte Null verwandelt werden.",
  "tags": ["WENN", "UND", "ODER", "WENNFEHLER", "WENNNV", "Fehler"],
  "synonyme": ["WENN", "UND", "ODER", "WENNFEHLER", "WENNNV", "Fehler"],
  "verwandteThemen": ["xverweis", "datenbereinigung"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

WENN entscheidet zwischen zwei Ergebnissen. UND verlangt alle Bedingungen, ODER mindestens eine. WENNNV fängt gezielt #NV ab, WENNFEHLER deutlich mehr Fehlerarten.

## Synthetische Beispiele

```excel
=WENN(UND(B2>0;C2="Prüfen");"Prüfung nötig";"Keine Markierung")
=WENN(ODER(C2="Offen";C2="In Bearbeitung");"Laufend";"Anderer Status")
=WENNNV(INDEX($G$2:$G$4;VERGLEICH(A2;$F$2:$F$4;0));"Zuordnung fehlt")
```

Die Begriffe sind ausschließlich erfundene Übungsstatus. Sie stellen keinen realen Bankprozess dar.

## Typischer Fehler

WENNFEHLER um jede Formel zu legen und als Ersatz 0 auszugeben. So werden auch kaputte Bezüge oder ungeeignete Datentypen unsichtbar. Eine Summe kann korrekt aussehen, obwohl Daten fehlen.

## Besser vorgehen

Prüfe zuerst die Ursache. Nutze dann einen fachlich eindeutigen Ersatztext oder einen bewusst definierten Leerwert. Zähle fehlende Zuordnungen separat, damit sie vor einer Veröffentlichung auffallen.

## Brücke zu Power BI

BLANK ist nicht generell ein Fehler. DIVIDE kann bei einem nicht berechenbaren Verhältnis bewusst BLANK liefern. Eine leere Anzeige soll deshalb untersucht und nicht automatisch mit null überschrieben werden.
