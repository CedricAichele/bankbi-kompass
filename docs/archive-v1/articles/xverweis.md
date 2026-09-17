---
{
  "id": "xverweis",
  "slug": "xverweis",
  "titel": "XVERWEIS: Werte gezielt nachschlagen",
  "bereich": "Excel",
  "kategorie": "Nachschlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "XVERWEIS sucht einen Schlüssel in einem Bereich und liefert den zugehörigen Wert aus einem anderen Bereich. Mehrfachtreffer müssen bewusst behandelt werden.",
  "tags": ["XVERWEIS", "SVERWEIS", "INDEX", "VERGLEICH"],
  "synonyme": ["XVERWEIS", "SVERWEIS", "INDEX", "VERGLEICH"],
  "verwandteThemen": ["beziehungen", "excel-fehler"],
  "prozessBezug": [],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Mit XVERWEIS ergänzt du beispielsweise zu einer synthetischen Produkt-ID den Produktbereich. Die genaue Übereinstimmung ist der Standard.

## Einfaches Beispiel

A2 enthält PR-A. F2:F4 enthält eindeutige Produkt-IDs; G2:G4 die erfundenen Bezeichnungen.

```excel
=XVERWEIS(A2;$F$2:$F$4;$G$2:$G$4;"Nicht gefunden")
```

Der vierte Parameter macht fehlende Treffer sichtbar. Er behandelt nicht jeden möglichen Formelfehler.

## Typischer Fehler

Die Suchspalte enthält PR-A mehrfach mit verschiedenen Bezeichnungen. Standardmäßig wird der erste Treffer verwendet. Die Formel löst damit keinen fachlichen Konflikt. Prüfe Eindeutigkeit, Leerzeichen und Datentypen.

## Wann brauche ich etwas anderes?

Für mehrere passende Ergebniszeilen eignet sich FILTER. In Excel-Versionen ohne XVERWEIS ist eine Kombination aus INDEX und VERGLEICH möglich:

```excel
=INDEX($G$2:$G$4;VERGLEICH(A2;$F$2:$F$4;0))
```

## Brücke zu Power BI

Wiederkehrende Merkmale gehören häufig in eine Dimension mit Beziehung. Das überträgt Filter und ist keine identische Nachschlageformel. RELATED kann in passendem Zeilenkontext einen Wert von der 1-Seite einer geeigneten Beziehung holen.

## Öffentliche Quelle

[Microsoft Support: XVERWEIS](https://support.microsoft.com/de-de/excel/functions/xlookup-function)
