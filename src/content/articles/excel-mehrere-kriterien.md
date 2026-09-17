---
{
  "id": "excel-mehrere-kriterien",
  "slug": "excel-mehrere-kriterien",
  "titel": "Nachschlagen mit mehreren Kriterien",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kombiniere Kriterien zu einer eindeutigen fachlichen Zuordnung. Mehrere Treffer verlangen eine Aggregation oder eine Ergebnisliste.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "Nachschlagen mit mehreren Kriterien"
  ],
  "synonyme": [
    "mehrere kriterien"
  ],
  "verwandteThemen": [
    "xverweis",
    "zaehlenwenns",
    "excel-filtern"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/de-DE/Excel/excel-functions-alphabetical"
  ],
  "screenshots": []
}
---

## Wann brauche ich das?

Ein Bestand hängt von Konto und Stichtag ab.

## Schritte

1. Schlüssel und Datumswert als Suchkriterien festlegen.
2. In moderner Excel-Version die Wahrheitsbedingungen multiplizieren und nach 1 suchen.
3. Mehrfachtreffer vorab zählen und die Fachregel klären.

## Beispiel

```excel
=XVERWEIS(1;(A2:A9=F2)*(B2:B9=G2);C2:C9;"Nicht gefunden")
```

## Typischer Fehler

Eine zweite passende Zeile übersehen: XVERWEIS liefert standardmäßig nur den ersten Treffer.
