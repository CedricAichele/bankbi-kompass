---
{
  "id": "beziehungen",
  "slug": "beziehungen",
  "titel": "Beziehungen und 1:n",
  "bereich": "Power BI",
  "kategorie": "Beziehungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine 1:n-Beziehung verbindet einen eindeutigen Schlüssel mit beliebig vielen passenden Detailzeilen. Die Filterrichtung bestimmt, wie Auswahl weitergegeben wird.",
  "tags":
    [
      "1:n",
      "1:n-Beziehung",
      "Filterrichtung",
      "Primärschlüssel",
      "Fremdschlüssel",
      "mehrere Zeilen",
    ],
  "synonyme":
    [
      "1:n",
      "1:n-Beziehung",
      "Filterrichtung",
      "Primärschlüssel",
      "Fremdschlüssel",
      "mehrere Zeilen",
    ],
  "verwandteThemen": ["star-schema", "granularitaet", "filter-fehler"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Auf der 1-Seite steht beispielsweise jede Produkt-ID einmal. Auf der n-Seite darf dieselbe ID in vielen Kontobeständen vorkommen.

## Synthetisches Beispiel

Demo_Produkt hat PR-A einmal. Demo_Bestand enthält PR-A dreimal, für drei Konten am selben Stichtag. Eine Auswahl von PR-A in der Produktdimension erreicht alle drei Bestandszeilen.

## Prüfschritte

1. Ist der Schlüssel auf der 1-Seite wirklich eindeutig?
2. Haben beide Schlüsselspalten kompatible Datentypen?
3. Gibt es Faktenschlüssel ohne passende Dimension?
4. Ist die Beziehung aktiv?
5. Führt die Filterrichtung von der Dimension zu den Fakten?

## 1:1 und n:m

1:1 bedeutet, dass beide Seiten eindeutige Schlüssel besitzen. n:m bedeutet Mehrfachwerte auf beiden Seiten. Das kann fachlich korrekt sein, verlangt aber eine bewusste Modellierung; häufig hilft eine Brückentabelle. Es ist keine schnelle Reparatur für fehlerhafte Stammdaten.

## Typischer Fehler

Eine bidirektionale Beziehung einzuschalten, damit irgendein Filter „endlich funktioniert“. Mehrere Filterwege können Mehrdeutigkeiten erzeugen. Beginne im einfachen Sternschema mit einer Richtung.

## Wenn du aus Excel kommst

XVERWEIS liefert einen Wert in eine Zelle. Beziehungen übertragen Filter zwischen Tabellen. Sie sind daher keine direkte Ersatzformel.
