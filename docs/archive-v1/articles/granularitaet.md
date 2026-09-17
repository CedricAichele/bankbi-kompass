---
{
  "id": "granularitaet",
  "slug": "granularitaet",
  "titel": "Granularität: Was bedeutet eine Zeile?",
  "bereich": "Datenanalyse",
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Granularität beschreibt die fachliche Ebene einer Zeile. Ohne diese Definition sind Summen, Anzahlen und Verbindungen leicht missverständlich.",
  "tags":
    [
      "mehrere Zeilen",
      "einzigartige Kunden",
      "Dubletten",
      "Join",
      "Aggregation",
    ],
  "synonyme":
    [
      "mehrere Zeilen",
      "einzigartige Kunden",
      "Dubletten",
      "Join",
      "Aggregation",
    ],
  "verwandteThemen": ["beziehungen", "distinctcount", "stichtag"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

„Eine Zeile pro Person“ ist etwas anderes als „eine Zeile pro Konto und Stichtag“. Schreibe diesen Satz auf, bevor du eine Kennzahl baust.

## Synthetisches Beispiel

P001 besitzt K-A und K-B, P002 besitzt K-C. Am 31.03.2026 liegen drei Kontobestandszeilen vor. Am 30.04.2026 kommen dieselben drei Konten erneut vor. Das sind sechs Zeilen, drei Konten und zwei Personen.

## Schlüssel festlegen

Ein Primärschlüssel identifiziert eine Zeile eindeutig. Ein Fremdschlüssel verweist auf eine andere Tabelle. In der Bestandsübung kann KONTO_ID zusammen mit STICHTAG die Zeile identifizieren; PERSON_ID allein reicht nicht.

## Warum steigt die Summe nach einem Join?

Wenn eine linke Zeile zwei passende rechte Zeilen findet, wird sie beim Expandieren zweimal dargestellt. Ein Betrag kann dadurch mehrfach in einer Summe auftauchen. Prüfe die Anzahl rechter Treffer je Schlüssel vor dem Zusammenführen.

## Typischer Fehler

Wiederholte Personenkennungen pauschal als Dubletten zu löschen. Bei mehreren Konten sind Wiederholungen fachlich korrekt. Eine echte Dublette wird anhand der beabsichtigten Ebene erkannt.

## Wenn du aus Excel kommst

Eine Hilfsspalte, die „doppelt“ anzeigt, ist erst sinnvoll, wenn klar ist, welche Kombination aus Spalten eindeutig sein muss.
