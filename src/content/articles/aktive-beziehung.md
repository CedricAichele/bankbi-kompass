---
{
  "id": "aktive-beziehung",
  "slug": "aktive-beziehung",
  "titel": "Aktive und inaktive Beziehung",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Aktive Beziehungen übertragen Filter standardmäßig. Eine inaktive Beziehung benötigt für ein Measure eine bewusste Aktivierung.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": [
    "Aktive und inaktive Beziehung"
  ],
  "synonyme": [
    "inaktive beziehung",
    "userelationship"
  ],
  "verwandteThemen": [
    "datumstabelle",
    "calculate",
    "mehrere-datumsbeziehungen",
    "filterrichtung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive",
    "https://learn.microsoft.com/en-us/dax/userelationship-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Dieselbe Datumstabelle könnte nach verschiedenen fachlichen Datumsrollen filtern.

## Voraussetzungen

Eine vollständige Datumstabelle und Fakten mit zwei sauber typisierten Datumsfeldern.

## Schritte

1. Öffne die **Modellansicht** und prüfe die Beziehung von DimDatum[Datum] zu Vorgang[Anlagedatum].
2. Lege diese Beziehung als aktiven Standardpfad fest: Die Linie ist durchgezogen.
3. Lege zusätzlich die Beziehung zu **Abschlussdatum** an, aber inaktiv: Die Linie ist gestrichelt. Zwischen denselben Tabellen kann nur eine Beziehung gleichzeitig aktiv sein.
4. Prüfe einen Datumsfilter mit der Standardkennzahl. Er bezieht sich auf Anlagedatum.
5. Für eine gezielte Kennzahl nach Abschlussdatum kann **CALCULATE mit USERELATIONSHIP** die vorhandene inaktive Beziehung während dieser Berechnung verwenden.
6. Wenn beide Datumsrollen unabhängig gleichzeitig gefiltert werden sollen, prüfe getrennte rollenspezifische Datumstabellen.

## Beispiel

### Vorher · Beispieldaten

| Vorgang | Anlagedatum | Abschlussdatum | Betrag |
| --- | --- | --- | --- |
| V001 | 01.01.2026 | 03.01.2026 | 100 |
| V002 | 02.01.2026 | 03.01.2026 | 200 |

### Aktion

```dax
Betrag nach Abschluss =
CALCULATE ( SUM ( Vorgang[Betrag] ),
    USERELATIONSHIP ( DimDatum[Datum], Vorgang[Abschlussdatum] )
)
```

### Nachher · Beispielergebnis

| Filter DimDatum | Nach Anlage (aktiv) | Nach Abschluss |
| --- | --- | --- |
| 03.01.2026 | Kein Vorgang | 300 |

## Ergebnis

Der Standardfilterpfad bleibt eindeutig; alternative Datumsrollen werden ausdrücklich angesprochen.

## Warum funktioniert das?

Das Datum 03.01. beschreibt je nach Rolle andere Ereignisse. Eine inaktive Beziehung ist vorhanden, überträgt aber standardmäßig keinen Filter. USERELATIONSHIP wählt sie nur für die jeweilige Berechnung.

## Typischer Fehler

Eine gestrichelte Linie für eine fehlerhafte Beziehung halten oder erwarten, dass ein Datumsslicer automatisch alle Rollen gleichzeitig filtert.

## Plausibilitätscheck

Am 03.01. wurden keine Vorgänge angelegt, aber zwei im Wert von 300 abgeschlossen.
