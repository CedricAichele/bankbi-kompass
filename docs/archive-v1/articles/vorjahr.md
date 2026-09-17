---
{
  "id": "vorjahr",
  "slug": "vorjahr",
  "titel": "Vorjahresvergleich mit SAMEPERIODLASTYEAR",
  "bereich": "Power BI",
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "Ein Vorjahres-Measure wertet eine Kennzahl für den entsprechenden Zeitraum des vorherigen Jahres aus. Vergleichbare Zeiträume sind entscheidend.",
  "tags": ["Vorjahr", "SAMEPERIODLASTYEAR", "Zeitvergleich"],
  "synonyme": ["Vorjahr", "SAMEPERIODLASTYEAR", "Zeitvergleich"],
  "verwandteThemen": ["datumstabelle", "ytd", "stichtag"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Ein Vergleich Januar bis März mit dem gesamten Vorjahr beantwortet eine andere Frage als ein Vergleich mit Januar bis März des Vorjahres. Definiere zuerst den Zeitraum.

## Voraussetzungen und Code

Demo_Datum ist eine vollständige, markierte Datumstabelle. Date ist aktiv mit dem Geschäftsdatum von Demo_Neugeschaeft verbunden.

```dax
Neugeschaeft = SUM ( Demo_Neugeschaeft[BETRAG_EUR] )

Neugeschaeft Vorjahr =
CALCULATE (
    [Neugeschaeft],
    SAMEPERIODLASTYEAR ( Demo_Datum[Date] )
)
```

## Synthetisches Beispiel

Für März 2026 ergibt das Measure 120 Euro Neugeschäft; im entsprechenden März 2025 waren es 100 Euro. Die absolute Änderung beträgt 20 Euro, die relative Änderung 20 %. Nutze DIVIDE für eine relative Änderung bei eventuell leerem oder nullwertigem Vorjahr.

## Typische Fehler

Fehlende Vorjahresdaten sind kein Beweis für null Geschäft. Prüfe Datenabdeckung und aktive Datumsbeziehung. Bei angebrochenen Monaten muss der fachliche Vergleichszeitraum bewusst gewählt werden.

## Wann brauche ich etwas anderes?

Bei Beständen vergleichst du definierte Stichtage. Ein beliebiger Zeitraum mit einer SUM über mehrere Snapshots ergibt keinen sauberen Bestandsvergleich. Schaltjahre und Monatsenden sollten mit konkreten Prüfdaten getestet werden.

## Wenn du aus Excel kommst

Du brauchst nicht pro Jahr ein getrenntes Blatt. Eine gemeinsame Faktentabelle und Datumstabelle liefern den Filterkontext.
