---
{
  "id": "stichtag",
  "slug": "stichtag",
  "titel": "Stichtag, Snapshot und Bestand",
  "bereich": "Datenanalyse",
  "kategorie": "Zeitreihen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Bestand beschreibt einen Zeitpunkt. Eine Bewegung beschreibt eine Veränderung oder Aktivität in einem Zeitraum. Beide brauchen unterschiedliche Aggregationen.",
  "tags":
    [
      "Bestand addieren",
      "Snapshot",
      "Flow",
      "Bestandskennzahl",
      "Bewegungskennzahl",
      "Monatsultimo",
      "Bestand aktuell",
    ],
  "synonyme":
    [
      "Bestand addieren",
      "Snapshot",
      "Flow",
      "Bestandskennzahl",
      "Bewegungskennzahl",
      "Monatsultimo",
      "Bestand aktuell",
    ],
  "verwandteThemen": ["datumstabelle", "stichtagsreporting", "ytd"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Ein Snapshot ist ein Foto der Daten zu einem Zeitpunkt. Mehrere Fotos desselben Bestands sind keine zusätzlichen Bestände.

## Synthetisches Beispiel

| Stichtag   | Bestand in Mio. Euro |
| ---------- | -------------------: |
| 31.01.2026 |                  100 |
| 28.02.2026 |                  104 |
| 31.03.2026 |                  101 |

Der Märzbestand beträgt 101 Mio. Euro, nicht 305 Mio. Euro. Die Änderung zwischen Januar und März beträgt 1 Mio. Euro. Die Summe der drei Bestände beantwortet keine übliche Bestandsfrage.

## Bestand aktuell definieren

„Aktuell“ kann den ausgewählten Stichtag, den letzten verfügbaren Stichtag im Filter oder den letzten vollständig gelieferten Stichtag bedeuten. Diese Regeln sind verschieden. Für den MVP wählst du einen einzelnen Stichtag und prüfst dessen Vollständigkeit, bevor du SUM verwendest.

## Bewegung und Flow

Neugeschäft je Monat ist eine Bewegungsgröße und kann über disjunkte Monate summiert werden, sofern dieselbe Buchung nicht mehrfach vorkommt. Bestandsänderung und Neugeschäft müssen wegen Abgängen oder anderen Effekten nicht identisch sein.

## Typischer Fehler

Je Produkt den letzten vorhandenen Tag auszuwählen und dabei unbemerkt verschiedene Tage zu vergleichen. Ein gemeinsamer, vollständiger Stichtag ist oft die klarere Vergleichsbasis.

## Wenn du aus Excel kommst

Eine Summenzeile unter zwölf Monatsbeständen ist nicht automatisch ein Jahresbestand. Beschrifte Zeitraum und Aggregationsregel ausdrücklich.
