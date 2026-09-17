---
{
  "id": "beziehung-nm",
  "slug": "beziehung-nm",
  "titel": "n:m-Beziehung fachlich modellieren",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bei einer echten Mehrfachzuordnung kann eine Brückentabelle helfen. Eine direkte n:m-Beziehung löst keine unklare Kennzahlzuordnung.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": ["n:m-Beziehung fachlich modellieren"],
  "synonyme": ["viele zu viele", "n:m"],
  "verwandteThemen": ["eins-zu-viele", "fakt-zu-fakt", "granularitaet"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-many-to-many",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Mehrere Personen sind mehreren Konten zugeordnet.

## Schritte

1. Eine eindeutige Personen- und Kontendimension anlegen.
2. In einer Brücke je gültiger Person-Konto-Zuordnung eine Zeile führen.
3. Filterpfade und Zurechnungsregel für gemeinsames Volumen definieren und testen.

## Beispiel

Ein Gemeinschaftskonto mit 100 Euro darf nicht unbemerkt als 200 Euro Gesamtvolumen erscheinen.

## Typischer Fehler

Kontovolumen über Personen addieren, obwohl dieselben Konten mehreren Personen zugeordnet sind.
