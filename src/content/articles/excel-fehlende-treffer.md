---
{
  "id": "excel-fehlende-treffer",
  "slug": "excel-fehlende-treffer",
  "titel": "Fehlende Treffer gezielt behandeln",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Nachschlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kennzeichne nicht gefundene Schlüssel ausdrücklich. Ein fehlender Treffer ist nicht automatisch ein Betrag von 0.",
  "ort": "Excel → Formelzelle",
  "tags": ["Fehlende Treffer gezielt behandeln"],
  "synonyme": ["nicht gefunden", "fehlender treffer"],
  "verwandteThemen": ["wennnv", "wennfehler", "glaetten"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-DE/Excel/excel-functions-alphabetical"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Zuordnungsliste enthält neue oder falsch formatierte Kennungen.

## Schritte

1. Schlüssel auf Typ, Leerzeichen und Eindeutigkeit prüfen.
2. XVERWEIS-Ersatzwert oder WENNNV für fehlende Treffer verwenden.
3. Nicht zugeordnete Fälle als separate Prüfliste ausgeben.

## Beispiel

```excel
=XVERWEIS(A2;F2:F9;G2:G9;"Zuordnung fehlt")
```

## Typischer Fehler

Mit WENNFEHLER auch echte Formel- oder Bereichsfehler verdecken.
