---
{
  "id": "related",
  "slug": "related",
  "titel": "RELATED: Wert aus einer Beziehung holen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "RELATED holt in einem Zeilenkontext einen passenden Wert von der eindeutigen Seite einer geeigneten Beziehung.",
  "ort": "Power BI → Neue Spalte; aktive n:1-Beziehung erforderlich",
  "tags": [
    "RELATED: Wert aus einer Beziehung holen",
    "Reporting"
  ],
  "synonyme": [
    "wert aus anderer tabelle"
  ],
  "verwandteThemen": [
    "beziehungen",
    "berechnete-spalte",
    "xverweis"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/related-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nSegment = RELATED ( Personen[Segment] )\n```"
}
---

## Wann brauche ich das?

Du möchtest RELATED an einem überschaubaren Beispiel verstehen.

## Voraussetzungen

Tabelle Konten mit den sechs Beispielzeilen. Für RELATED zusätzlich Personen mit P001/A, P002/B, P003/A, P004/B und aktive 1:n-Beziehung zu Konten.

## Schritte

1. Lege die synthetischen Tabellen an und prüfe Textschlüssel sowie numerische Beträge.
2. Wähle in Konten Modellierung → Neue Spalte.
3. Gib die Formel aus dem Beispiel ein und bestätige mit Enter.
4. Füge ein Tabellenvisual mit Personennummer und dem berechneten Ergebnis hinzu.
5. Teste ungefiltert, dann mit Person P003 und Produktgruppe Einlagen.
6. Vergleiche den Wert mit dem erwarteten Ergebnis und untersuche den beschriebenen Fehlerfall.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

```dax
Segment = RELATED ( Personen[Segment] )
```

## Ergebnis

P001-Konten erhalten A, P002-Konto B.

## Warum funktioniert das?

RELATED benötigt Zeilenkontext und eine geeignete Beziehung zur eindeutigen Seite. Diese Formel gehört als neue Spalte in Konten.

## Typischer Fehler

Ein Measure ohne passenden Zeilenkontext kann nicht einfach jeden Kontenwert zuordnen.

## Plausibilitätscheck

Prüfe Filter einzeln und gemeinsam. Die Ausgangssumme beträgt 9.000 und Einlagen allein 4.050.
